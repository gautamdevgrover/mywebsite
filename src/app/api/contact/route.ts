import { NextRequest, NextResponse } from "next/server";
import { createSubmission } from "@/lib/db";

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(identifier: string, maxRequests = 5, windowMs = 60 * 1000 * 10): boolean {
  const now = Date.now();
  const userRate = rateLimitMap.get(identifier);

  if (!userRate || now > userRate.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (userRate.count >= maxRequests) {
    return false;
  }

  userRate.count += 1;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    // Get client IP or fallback
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown-client";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          error: "Rate limit exceeded. Please wait a few minutes before submitting another inquiry.",
        },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, company, service, message } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Please enter a valid name." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (!service || typeof service !== "string" || service.trim().length === 0) {
      return NextResponse.json({ error: "Please select an engineering service." }, { status: 400 });
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please provide brief details about your infrastructure requirements (minimum 10 characters)." },
        { status: 400 }
      );
    }

    // Persist to relational database
    const submission = await createSubmission({
      name: name.trim(),
      email: email.trim(),
      company: company && typeof company === "string" ? company.trim() : undefined,
      service: service.trim(),
      message: message.trim(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been received. I will review your requirements and respond within 24 hours.",
        id: submission.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing contact submission:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while saving your inquiry. Please try again or reach out directly." },
      { status: 500 }
    );
  }
}
