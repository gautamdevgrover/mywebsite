"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Inbox,
  CheckCircle2,
  Clock,
  Archive,
  Search,
  RefreshCw,
  LogOut,
  ExternalLink,
  Mail,
  Trash2,
  Building,
  Calendar,
  X,
  ShieldCheck,
  Loader2,
} from "lucide-react";

interface Submission {
  id: string;
  name: string;
  email: string;
  company: string | null;
  service: string;
  message: string;
  status: "new" | "read" | "replied" | "archived";
  created_at: string;
  updated_at: string;
}

interface Stats {
  total: number;
  new: number;
  read: number;
  replied: number;
  archived: number;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [adminEmail, setAdminEmail] = useState<string>("");
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [stats, setStats] = useState<Stats>({
    total: 0,
    new: 0,
    read: 0,
    replied: 0,
    archived: 0,
  });
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [actionLoadingId, setActionLoadingId] = useState<string | null>(null);

  // Load inquiries
  const loadData = useCallback(async () => {
    try {
      const params = new URLSearchParams();
      if (selectedStatus !== "all") params.append("status", selectedStatus);
      if (searchQuery.trim()) params.append("search", searchQuery.trim());

      const res = await fetch(`/api/admin/enquiries?${params.toString()}`);
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      const data = await res.json();
      setSubmissions(data.submissions || []);
      setStats(
        data.stats || { total: 0, new: 0, read: 0, replied: 0, archived: 0 }
      );
    } catch (err) {
      console.error("Failed to load inquiries:", err);
    } finally {
      setIsLoading(false);
    }
  }, [selectedStatus, searchQuery, router]);

  // Auth check & data load
  useEffect(() => {
    let isMounted = true;

    const init = async () => {
      try {
        const authRes = await fetch("/api/admin/auth");
        if (!authRes.ok) {
          if (isMounted) setIsAuthenticated(false);
          router.push("/admin/login");
          return;
        }

        const authData = await authRes.json();
        if (!isMounted) return;

        setIsAuthenticated(true);
        setAdminEmail(authData.email || "Admin");

        // Fetch submissions
        const params = new URLSearchParams();
        if (selectedStatus !== "all") params.append("status", selectedStatus);
        if (searchQuery.trim()) params.append("search", searchQuery.trim());

        const enquiriesRes = await fetch(`/api/admin/enquiries?${params.toString()}`);
        if (enquiriesRes.ok && isMounted) {
          const enquiriesData = await enquiriesRes.json();
          setSubmissions(enquiriesData.submissions || []);
          setStats(
            enquiriesData.stats || { total: 0, new: 0, read: 0, replied: 0, archived: 0 }
          );
          setIsLoading(false);
        }
      } catch (err) {
        console.error("Session initialization error:", err);
        if (isMounted) {
          setIsAuthenticated(false);
          setIsLoading(false);
          router.push("/admin/login");
        }
      }
    };

    init();

    return () => {
      isMounted = false;
    };
  }, [selectedStatus, searchQuery, router]);

  // Update Submission Status
  const handleStatusChange = async (
    id: string,
    newStatus: "new" | "read" | "replied" | "archived"
  ) => {
    setActionLoadingId(id);
    try {
      const res = await fetch("/api/admin/enquiries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });

      if (res.ok) {
        setSubmissions((prev) =>
          prev.map((sub) => (sub.id === id ? { ...sub, status: newStatus } : sub))
        );
        if (selectedSubmission?.id === id) {
          setSelectedSubmission((prev) => (prev ? { ...prev, status: newStatus } : null));
        }
        // Refresh stats
        const statsRes = await fetch("/api/admin/enquiries");
        const statsData = await statsRes.json();
        if (statsData.stats) setStats(statsData.stats);
      }
    } catch (err) {
      console.error("Error updating status:", err);
    } finally {
      setActionLoadingId(null);
    }
  };

  // Delete Submission
  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to permanently delete this inquiry?")) {
      return;
    }
    setActionLoadingId(id);
    try {
      const res = await fetch(`/api/admin/enquiries?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setSubmissions((prev) => prev.filter((sub) => sub.id !== id));
        if (selectedSubmission?.id === id) {
          setSelectedSubmission(null);
        }
        // Refresh stats
        const statsRes = await fetch("/api/admin/enquiries");
        const statsData = await statsRes.json();
        if (statsData.stats) setStats(statsData.stats);
      }
    } catch (err) {
      console.error("Error deleting inquiry:", err);
    } finally {
      setActionLoadingId(null);
    }
  };

  // Logout
  const handleLogout = async () => {
    try {
      await fetch("/api/admin/auth", { method: "DELETE" });
      router.push("/admin/login");
    } catch {
      router.push("/admin/login");
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "new":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            NEW
          </span>
        );
      case "read":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/30">
            <Clock className="w-3 h-3" />
            READ
          </span>
        );
      case "replied":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/30">
            <CheckCircle2 className="w-3 h-3" />
            REPLIED
          </span>
        );
      case "archived":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-slate-400 bg-white/5 border border-white/10">
            <Archive className="w-3 h-3" />
            ARCHIVED
          </span>
        );
      default:
        return null;
    }
  };

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-[#08090C] text-[#E2E8F0] flex items-center justify-center">
        <div className="flex items-center gap-3 text-cyan-400 font-mono text-sm">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Verifying Admin Session...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#08090C] text-[#E2E8F0] flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Navbar */}
      <header className="sticky top-0 z-30 bg-[#0A0D15]/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-xs font-mono font-bold text-cyan-400">
              GD
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white tracking-wide">
                  Gautam Dev
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-medium text-cyan-400 bg-cyan-950/60 border border-cyan-800/40">
                  ADMIN
                </span>
              </div>
              <div className="text-[10px] font-mono text-slate-400">
                Inquiry Management Portal
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs font-mono text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              {adminEmail}
            </span>

            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5 transition-colors"
            >
              <span>View Site</span>
              <ExternalLink className="w-3 h-3" />
            </Link>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-rose-400 hover:text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 transition-colors cursor-pointer"
            >
              <LogOut className="w-3 h-3" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* KPI Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-[#0C111C] border border-white/10 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-2">
              <span>TOTAL INQUIRIES</span>
              <Inbox className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-3xl font-black font-mono text-white">
              {stats.total}
            </div>
            <div className="text-[11px] font-mono text-slate-500 mt-2">
              All time client submissions
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0C111C] border border-emerald-500/30 bg-emerald-500/[0.02] flex flex-col justify-between">
            <div className="flex items-center justify-between text-emerald-400 text-xs font-mono mb-2">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                NEW / UNREAD
              </span>
              <Clock className="w-4 h-4" />
            </div>
            <div className="text-3xl font-black font-mono text-emerald-400">
              {stats.new}
            </div>
            <div className="text-[11px] font-mono text-emerald-500/80 mt-2">
              Requires review / reply
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0C111C] border border-white/10 flex flex-col justify-between">
            <div className="flex items-center justify-between text-indigo-400 text-xs font-mono mb-2">
              <span>REPLIED</span>
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div className="text-3xl font-black font-mono text-white">
              {stats.replied}
            </div>
            <div className="text-[11px] font-mono text-slate-500 mt-2">
              Client proposal sent
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0C111C] border border-white/10 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-2">
              <span>ARCHIVED</span>
              <Archive className="w-4 h-4" />
            </div>
            <div className="text-3xl font-black font-mono text-white">
              {stats.archived}
            </div>
            <div className="text-[11px] font-mono text-slate-500 mt-2">
              Completed or closed
            </div>
          </div>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-[#0C111C] border border-white/10">
          {/* Status Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {[
              { id: "all", label: "All", count: stats.total },
              { id: "new", label: "New", count: stats.new },
              { id: "read", label: "Read", count: stats.read },
              { id: "replied", label: "Replied", count: stats.replied },
              { id: "archived", label: "Archived", count: stats.archived },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedStatus(tab.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-all whitespace-nowrap cursor-pointer ${
                  selectedStatus === tab.id
                    ? "bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/40"
                    : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
              >
                <span>{tab.label}</span>
                <span className="px-1.5 py-0.2 rounded bg-black/40 text-[10px] text-slate-400">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search Bar & Refresh */}
          <div className="flex items-center gap-2">
            <div className="relative flex-grow sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search name, company, email..."
                className="w-full pl-9 pr-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            <button
              onClick={() => {
                setIsLoading(true);
                loadData();
              }}
              disabled={isLoading}
              title="Refresh Inquiries"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
            </button>
          </div>
        </div>

        {/* Submissions List / Table */}
        <div className="rounded-2xl border border-white/10 bg-[#0C111C] overflow-hidden">
          {isLoading && submissions.length === 0 ? (
            <div className="py-20 text-center text-slate-500 font-mono text-xs flex items-center justify-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Loading inquiries from database...</span>
            </div>
          ) : submissions.length === 0 ? (
            <div className="py-20 text-center space-y-2">
              <Inbox className="w-10 h-10 mx-auto text-slate-600" />
              <div className="text-sm font-semibold text-slate-300">
                No inquiries found
              </div>
              <p className="text-xs text-slate-500 font-mono">
                {searchQuery
                  ? "Try broadening your search query or switching status filters."
                  : "New project inquiries submitted from the website will appear here."}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-sans">
                <thead className="bg-[#090D15] border-b border-white/10 text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                  <tr>
                    <th className="py-3.5 px-4 font-semibold">Client & Company</th>
                    <th className="py-3.5 px-4 font-semibold">Service Needed</th>
                    <th className="py-3.5 px-4 font-semibold">Date Received</th>
                    <th className="py-3.5 px-4 font-semibold">Status</th>
                    <th className="py-3.5 px-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {submissions.map((sub) => (
                    <tr
                      key={sub.id}
                      className={`hover:bg-white/[0.02] transition-colors ${
                        selectedSubmission?.id === sub.id ? "bg-white/[0.04]" : ""
                      }`}
                    >
                      {/* Client */}
                      <td className="py-4 px-4">
                        <div className="font-semibold text-white text-sm">
                          {sub.name}
                        </div>
                        <div className="flex items-center gap-2 text-slate-400 text-xs mt-0.5 font-mono">
                          <a
                            href={`mailto:${sub.email}`}
                            className="hover:text-cyan-400 transition-colors truncate max-w-[200px]"
                          >
                            {sub.email}
                          </a>
                          {sub.company && (
                            <>
                              <span>&middot;</span>
                              <span className="text-slate-500 truncate max-w-[150px]">
                                {sub.company}
                              </span>
                            </>
                          )}
                        </div>
                      </td>

                      {/* Service */}
                      <td className="py-4 px-4">
                        <span className="inline-block px-2.5 py-1 rounded-md bg-white/5 border border-white/5 font-mono text-[11px] text-slate-300 max-w-[220px] truncate">
                          {sub.service}
                        </span>
                      </td>

                      {/* Date */}
                      <td className="py-4 px-4 font-mono text-slate-400 text-[11px] whitespace-nowrap">
                        {new Date(sub.created_at).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>

                      {/* Status */}
                      <td className="py-4 px-4">
                        {getStatusBadge(sub.status)}
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => {
                              setSelectedSubmission(sub);
                              if (sub.status === "new") {
                                handleStatusChange(sub.id, "read");
                              }
                            }}
                            className="px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 text-xs font-mono font-medium border border-cyan-500/20 transition-colors cursor-pointer"
                          >
                            View
                          </button>

                          <a
                            href={`mailto:${sub.email}?subject=Re: Infrastructure Inquiry - Gautam Dev&body=Hi ${encodeURIComponent(
                              sub.name
                            )},%0D%0A%0D%0AThank you for reaching out regarding ${encodeURIComponent(
                              sub.service
                            )}.%0D%0A%0D%0A`}
                            onClick={() => {
                              if (sub.status !== "replied") {
                                handleStatusChange(sub.id, "replied");
                              }
                            }}
                            title="Reply via Email"
                            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                          >
                            <Mail className="w-3.5 h-3.5" />
                          </a>

                          <button
                            onClick={() => handleDelete(sub.id)}
                            title="Delete Inquiry"
                            disabled={actionLoadingId === sub.id}
                            className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Detail Modal / Drawer */}
      {selectedSubmission && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0D121F] border border-white/10 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {selectedSubmission.name}
                  </h3>
                  {getStatusBadge(selectedSubmission.status)}
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                  <span className="text-cyan-400">{selectedSubmission.email}</span>
                  {selectedSubmission.company && (
                    <>
                      <span>&middot;</span>
                      <span className="flex items-center gap-1">
                        <Building className="w-3 h-3" />
                        {selectedSubmission.company}
                      </span>
                    </>
                  )}
                </div>
              </div>

              <button
                onClick={() => setSelectedSubmission(null)}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Service & Date Bar */}
            <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 font-mono text-xs">
              <div>
                <span className="text-slate-500 uppercase tracking-wider block text-[10px]">
                  Service Requested
                </span>
                <span className="text-white font-semibold mt-0.5 block">
                  {selectedSubmission.service}
                </span>
              </div>
              <div>
                <span className="text-slate-500 uppercase tracking-wider block text-[10px]">
                  Submitted On
                </span>
                <span className="text-white font-semibold mt-0.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {new Date(selectedSubmission.created_at).toLocaleString()}
                </span>
              </div>
            </div>

            {/* Message Body */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Requirements & Project Scope
              </span>
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-sm text-slate-200 leading-relaxed whitespace-pre-wrap font-sans">
                {selectedSubmission.message}
              </div>
            </div>

            {/* Status Change Selector & Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-slate-400">Change Status:</span>
                <select
                  value={selectedSubmission.status}
                  onChange={(e) =>
                    handleStatusChange(
                      selectedSubmission.id,
                      e.target.value as "new" | "read" | "replied" | "archived"
                    )
                  }
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-cyan-500/50"
                >
                  <option value="new">New</option>
                  <option value="read">Read</option>
                  <option value="replied">Replied</option>
                  <option value="archived">Archived</option>
                </select>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${selectedSubmission.email}?subject=Re: Infrastructure Inquiry - Gautam Dev&body=Hi ${encodeURIComponent(
                    selectedSubmission.name
                  )},%0D%0A%0D%0AThank you for reaching out regarding your infrastructure requirements for ${encodeURIComponent(
                    selectedSubmission.service
                  )}.%0D%0A%0D%0A`}
                  onClick={() => {
                    handleStatusChange(selectedSubmission.id, "replied");
                  }}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md transition-all cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Reply to Client</span>
                </a>

                <button
                  onClick={() => handleDelete(selectedSubmission.id)}
                  className="p-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 transition-colors cursor-pointer"
                  title="Delete Inquiry"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
