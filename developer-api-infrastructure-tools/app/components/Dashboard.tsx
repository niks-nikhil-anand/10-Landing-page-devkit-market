"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Activity, 
  Cpu, 
  HardDrive, 
  Network, 
  Zap, 
  Clock, 
  Users, 
  Database, 
  CheckCircle,
  AlertTriangle
} from "lucide-react";

export default function Dashboard() {
  // Telemetry States
  const [cpu, setCpu] = useState(34);
  const [memory, setMemory] = useState(6.4);
  const [requests, setRequests] = useState(4820);
  const [latency, setLatency] = useState(42);
  const [users, setUsers] = useState(14820);

  // Recent Deployments
  const deployments = [
    { hash: "d7f8e9a", branch: "main", message: "Merge PR #142 auth improvements", status: "success", time: "2m ago" },
    { hash: "8b9a0c1", branch: "staging", message: "Upgrade database driver to v4", status: "success", time: "15m ago" },
    { hash: "5e4d3c2", branch: "feature/redis", message: "Initialize redis connection pooling", status: "success", time: "1h ago" }
  ];

  // Dynamic simulation jitter
  useEffect(() => {
    const timer = setInterval(() => {
      setCpu((prev) => Math.max(12, Math.min(88, prev + Math.floor(Math.random() * 9) - 4)));
      setMemory((prev) => Math.max(4.0, Math.min(12.0, parseFloat((prev + (Math.random() * 0.4) - 0.2).toFixed(1)))));
      setRequests((prev) => Math.max(3000, Math.min(8000, prev + Math.floor(Math.random() * 160) - 80)));
      setLatency((prev) => Math.max(28, Math.min(68, prev + Math.floor(Math.random() * 5) - 2)));
      setUsers((prev) => Math.max(14000, Math.min(16000, prev + Math.floor(Math.random() * 30) - 15)));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="dashboard" 
      className="py-24 px-4 md:px-8 bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 api-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <div className="px-3.5 py-1.5 rounded-full bg-success/10 border border-success/20 text-xs font-bold text-success tracking-wide uppercase">
            LIVE METRICS
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans">
            Real-Time Infrastructure Dashboard
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Monitor the status of your running servers, database read/writes, and edge function latencies in real time.
          </p>
        </div>

        {/* Telemetry Widgets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* CPU Usage */}
          <div className="glass-card rounded-2xl border-white/6 p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between text-gray-400">
              <span className="text-xs font-bold uppercase tracking-wider">CPU Compute Load</span>
              <Cpu className="w-5 h-5 text-primary" />
            </div>
            <div className="py-4">
              <span className="text-4xl font-extrabold text-white tracking-tight">{cpu}%</span>
              <div className="w-full h-1.5 bg-white/5 rounded-full mt-3 overflow-hidden">
                <motion.div 
                  className="h-full bg-primary" 
                  animate={{ width: `${cpu}%` }} 
                  transition={{ duration: 1 }}
                />
              </div>
            </div>
            <span className="text-[10px] text-gray-500 font-semibold">16 Core Node Cluster Active</span>
          </div>

          {/* Memory */}
          <div className="glass-card rounded-2xl border-white/6 p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between text-gray-400">
              <span className="text-xs font-bold uppercase tracking-wider">Memory Allocation</span>
              <HardDrive className="w-5 h-5 text-accent" />
            </div>
            <div className="py-4">
              <span className="text-4xl font-extrabold text-white tracking-tight">{memory} GB</span>
              <div className="w-full h-1.5 bg-white/5 rounded-full mt-3 overflow-hidden">
                <motion.div 
                  className="h-full bg-accent" 
                  animate={{ width: `${(memory / 16) * 100}%` }} 
                  transition={{ duration: 1 }}
                />
              </div>
            </div>
            <span className="text-[10px] text-gray-500 font-semibold">Limit: 16.0 GB RAM</span>
          </div>

          {/* Requests/Sec */}
          <div className="glass-card rounded-2xl border-white/6 p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between text-gray-400">
              <span className="text-xs font-bold uppercase tracking-wider">Requests per Second</span>
              <Network className="w-5 h-5 text-success" />
            </div>
            <div className="py-4">
              <span className="text-4xl font-extrabold text-white tracking-tight">
                {requests.toLocaleString()}
              </span>
              <div className="flex items-center gap-1.5 text-[10px] text-success font-bold mt-3">
                <Zap className="w-3.5 h-3.5 fill-success/10 animate-bounce" />
                <span>Payload: 4.8MB/s average</span>
              </div>
            </div>
            <span className="text-[10px] text-gray-500 font-semibold">Auto-scale pool: 12 nodes</span>
          </div>

          {/* Latency */}
          <div className="glass-card rounded-2xl border-white/6 p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between text-gray-400">
              <span className="text-xs font-bold uppercase tracking-wider">Global API Latency</span>
              <Clock className="w-5 h-5 text-warning" />
            </div>
            <div className="py-4">
              <span className="text-4xl font-extrabold text-white tracking-tight">{latency}ms</span>
              <div className="flex items-center gap-1.5 text-[10px] text-success font-bold mt-3">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>CDN Handshake Verified</span>
              </div>
            </div>
            <span className="text-[10px] text-gray-500 font-semibold">Threshold Limit: 100ms</span>
          </div>

        </div>

        {/* Large Row: Deployment statuses & database health metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-stretch">
          
          {/* Active Deployments */}
          <div className="lg:col-span-7 glass-card rounded-2xl border-white/6 p-6 flex flex-col justify-between">
            <div className="flex flex-col gap-1 mb-4">
              <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest">
                Deployment pipeline
              </span>
              <h3 className="text-base font-bold text-white">Recent Git Deployments</h3>
            </div>

            <div className="flex flex-col gap-3">
              {deployments.map((dep) => (
                <div 
                  key={dep.hash} 
                  className="p-3.5 bg-white/2 hover:bg-white/4 border border-white/5 rounded-xl flex items-center justify-between gap-4 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-success/10 text-success flex items-center justify-center font-bold text-xs font-code border border-success/20">
                      DEP
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-extrabold text-white leading-normal">{dep.message}</span>
                      <div className="flex items-center gap-2 mt-0.5 text-[10px] text-gray-500 font-semibold font-code">
                        <span className="text-primary">{dep.branch}</span>
                        <span>•</span>
                        <span>{dep.hash}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-[9px] text-gray-500 font-bold">{dep.time}</span>
                    <span className="flex items-center gap-1 text-[9px] font-bold text-success bg-success/10 border border-success/20 px-2 py-0.5 rounded-full">
                      <span className="w-1 h-1 rounded-full bg-success" />
                      VERIFIED
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Database Health and Active Regions */}
          <div className="lg:col-span-5 glass-card rounded-2xl border-white/6 p-6 flex flex-col justify-between min-h-[220px]">
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-bold text-accent uppercase tracking-wider">Database Posture</span>
                <h3 className="text-sm font-bold text-white">PostgreSQL Health Index</h3>
              </div>
              <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <Database className="w-4 h-4" />
              </div>
            </div>

            <div className="py-4 grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-gray-500 uppercase">Active Queries</span>
                <span className="text-xl font-extrabold text-white mt-1">1,248/s</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-gray-500 uppercase">Replica Lag</span>
                <span className="text-xl font-extrabold text-success mt-1">&lt;2ms</span>
              </div>
            </div>

            <div className="pt-3.5 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500 font-bold">
              <div className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-primary" />
                <span>{users.toLocaleString()} Active Sessions</span>
              </div>
              <span>Status: 100% Operational</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
