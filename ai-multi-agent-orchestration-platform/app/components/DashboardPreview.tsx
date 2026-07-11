"use client";

import React, { useState, useEffect } from "react";
import { 
  Activity, 
  Cpu, 
  Layers, 
  Zap, 
  Users, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  Database,
  Terminal
} from "lucide-react";
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip 
} from "recharts";

export default function DashboardPreview() {
  // Telemetry state counters
  const [activeAgents, setActiveAgents] = useState(142);
  const [runningTasks, setRunningTasks] = useState(842);
  const [successRate, setSuccessRate] = useState(99.98);
  const [gpuUsage, setGpuUsage] = useState(48.2);

  // Dynamic values
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveAgents((prev) => Math.max(120, Math.min(180, prev + Math.floor(Math.random() * 5) - 2)));
      setRunningTasks((prev) => Math.max(700, Math.min(990, prev + Math.floor(Math.random() * 20) - 10)));
      setSuccessRate((prev) => Math.max(99.90, Math.min(100, parseFloat((prev + (Math.random() * 0.04) - 0.02).toFixed(2)))));
      setGpuUsage((prev) => Math.max(30, Math.min(85, parseFloat((prev + (Math.random() * 4) - 2).toFixed(1)))));
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const tokenData = [
    { time: "10:00", tokens: 1200 },
    { time: "10:05", tokens: 1800 },
    { time: "10:10", tokens: 1400 },
    { time: "10:15", tokens: 2200 },
    { time: "10:20", tokens: 3400 },
    { time: "10:25", tokens: 2800 },
    { time: "10:30", tokens: 3100 },
  ];

  const costData = [
    { day: "Mon", cost: 124 },
    { day: "Tue", cost: 184 },
    { day: "Wed", cost: 142 },
    { day: "Thu", cost: 232 },
    { day: "Fri", cost: 312 },
    { day: "Sat", cost: 198 },
    { day: "Sun", cost: 145 },
  ];

  return (
    <section 
      id="dashboard" 
      className="py-24 px-4 md:px-8 bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 ai-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <div className="px-3.5 py-1.5 rounded-full bg-success/10 border border-success/20 text-xs font-bold text-success tracking-wide uppercase">
            Platform Observability
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans">
            Live Telemetry & Analytics
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Monitor GPU distribution loads, active prompt pipelines, token burn logs, and multi-agent network status in real time.
          </p>
        </div>

        {/* Telemetry Widgets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Active Agents */}
          <div className="glass-card rounded-2xl border-white/6 p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between text-gray-400">
              <span className="text-xs font-bold uppercase tracking-wider">Active Agent Instances</span>
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div className="py-4">
              <span className="text-4xl font-extrabold text-white tracking-tight">{activeAgents}</span>
              <div className="flex items-center gap-1.5 text-[10px] text-primary font-bold mt-3">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Synchronized in 180+ regions</span>
              </div>
            </div>
            <span className="text-[10px] text-gray-500 font-semibold">Maximum capacity: Unlimited</span>
          </div>

          {/* Running Tasks */}
          <div className="glass-card rounded-2xl border-white/6 p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between text-gray-400">
              <span className="text-xs font-bold uppercase tracking-wider">Active Task Queue</span>
              <Layers className="w-5 h-5 text-secondary" />
            </div>
            <div className="py-4">
              <span className="text-4xl font-extrabold text-white tracking-tight">{runningTasks}</span>
              <div className="flex items-center gap-1.5 text-[10px] text-success font-bold mt-3">
                <Zap className="w-3.5 h-3.5 animate-bounce" />
                <span>Throughput: 84.8 runs/s</span>
              </div>
            </div>
            <span className="text-[10px] text-gray-500 font-semibold">Average wait: &lt;12ms</span>
          </div>

          {/* Success Rate */}
          <div className="glass-card rounded-2xl border-white/6 p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between text-gray-400">
              <span className="text-xs font-bold uppercase tracking-wider">Workflow Success</span>
              <CheckCircle className="w-5 h-5 text-success" />
            </div>
            <div className="py-4">
              <span className="text-4xl font-extrabold text-white tracking-tight">{successRate}%</span>
              <div className="w-full h-1.5 bg-white/5 rounded-full mt-3 overflow-hidden">
                <div 
                  className="h-full bg-success transition-all duration-1000" 
                  style={{ width: `${successRate}%` }}
                />
              </div>
            </div>
            <span className="text-[10px] text-gray-500 font-semibold">SLA Target: 99.9%</span>
          </div>

          {/* GPU Allocation */}
          <div className="glass-card rounded-2xl border-white/6 p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between text-gray-400">
              <span className="text-xs font-bold uppercase tracking-wider">GPU Cluster Load</span>
              <Cpu className="w-5 h-5 text-accent" />
            </div>
            <div className="py-4">
              <span className="text-4xl font-extrabold text-white tracking-tight">{gpuUsage}%</span>
              <div className="w-full h-1.5 bg-white/5 rounded-full mt-3 overflow-hidden">
                <div 
                  className="h-full bg-accent transition-all duration-1000" 
                  style={{ width: `${gpuUsage}%` }}
                />
              </div>
            </div>
            <span className="text-[10px] text-gray-500 font-semibold">Scale Pool: 18x H100</span>
          </div>

        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          
          {/* Token Usage Chart */}
          <div className="glass-card rounded-2xl border-white/6 p-6 flex flex-col justify-between bg-slate-900/60 min-h-[300px]">
            <div className="flex flex-col gap-1 mb-4 border-b border-white/5 pb-3">
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Compute Metrics</span>
              <h3 className="text-sm font-bold text-white">Token Burn Rate (T/s)</h3>
            </div>
            <div className="flex-1 w-full h-[180px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={tokenData}>
                  <defs>
                    <linearGradient id="tokenGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="time" stroke="#475569" fontSize={10} tickLine={false} />
                  <YAxis stroke="#475569" fontSize={10} tickLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: "#0f172a", borderColor: "rgba(255,255,255,0.08)" }} />
                  <Area type="monotone" dataKey="tokens" stroke="#6366f1" strokeWidth={2} fillOpacity={1} fill="url(#tokenGlow)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Cost Analytics Chart */}
          <div className="glass-card rounded-2xl border-white/6 p-6 flex flex-col justify-between bg-slate-900/60 min-h-[300px]">
            <div className="flex flex-col gap-1 mb-4 border-b border-white/5 pb-3">
              <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Financial Ops</span>
              <h3 className="text-sm font-bold text-white">Runway Cost Analytics ($)</h3>
            </div>
            <div className="flex-1 w-full h-[180px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={costData}>
                  <XAxis dataKey="day" stroke="#475569" fontSize={10} tickLine={false} />
                  <YAxis stroke="#475569" fontSize={10} tickLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: "#0f172a", borderColor: "rgba(255,255,255,0.08)" }} />
                  <Bar dataKey="cost" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
