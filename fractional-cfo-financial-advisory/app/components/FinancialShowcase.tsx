"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, ArrowUpRight, ArrowDownRight, Sparkles, HelpCircle, Landmark } from "lucide-react";

interface MetricData {
  title: string;
  value: string;
  trend: string;
  trendType: "up" | "down";
  description: string;
  advisoryText: string;
  chartPath: string;
  chartFill: string;
  yMin: string;
  yMax: string;
}

export default function FinancialShowcase() {
  const [activeTab, setActiveTab] = useState<string>("Revenue Growth");

  const metrics: Record<string, MetricData> = {
    "Revenue Growth": {
      title: "Revenue Growth Projections",
      value: "$14.8M",
      trend: "+28.4% YoY",
      trendType: "up",
      description: "Driver-based revenue models aligned to market expansion and target customer acquisition velocity.",
      advisoryText: "Our advisory models align pricing strategy with client acquisition pipelines to project sustainable margins as you scale.",
      chartPath: "M0,50 Q25,48 50,42 T100,28 T150,15 T200,5",
      chartFill: "rgba(37, 99, 235, 0.08)",
      yMin: "$8.2M",
      yMax: "$15.0M"
    },
    "EBITDA": {
      title: "EBITDA Margin Modelling",
      value: "24.6%",
      trend: "+4.2% QoQ",
      trendType: "up",
      description: "Operational profitability forecasting that identifies core cost drivers and scales resource usage efficiently.",
      advisoryText: "We conduct detailed reviews of corporate spending to help you identify operational inefficiencies and scale profits.",
      chartPath: "M0,55 Q25,52 50,48 T100,38 T150,22 T200,12",
      chartFill: "rgba(22, 163, 74, 0.08)",
      yMin: "18.2%",
      yMax: "26.0%"
    },
    "Profit Margin": {
      title: "Gross Profit Margin Optimization",
      value: "72.4%",
      trend: "+1.8% MoM",
      trendType: "up",
      description: "Direct cost structuring and pricing reviews to maximize unit economics across all product segments.",
      advisoryText: "By renegotiating vendor costs and restructuring COGS pipelines, we systematically expand your margins.",
      chartPath: "M0,45 Q25,44 50,40 T100,38 T150,30 T200,22",
      chartFill: "rgba(20, 184, 166, 0.08)",
      yMin: "68.5%",
      yMax: "75.0%"
    },
    "Burn Rate": {
      title: "Monthly Corporate Burn Rate",
      value: "$185,000",
      trend: "-12.5% MoM",
      trendType: "down", // Burn rate going down is good!
      description: "Structured capital deployment analytics that prevent waste and optimize monthly operation expenditures.",
      advisoryText: "We help founders budget cash flow pipelines, align headcounts, and stabilize monthly expenditures.",
      chartPath: "M0,15 Q25,20 50,28 T100,38 T150,48 T200,52", // descending line
      chartFill: "rgba(22, 163, 74, 0.08)",
      yMin: "$250k",
      yMax: "$180k"
    },
    "Cash Runway": {
      title: "Estimated Cash Runway",
      value: "22 Months",
      trend: "+6 Months",
      trendType: "up",
      description: "Simulated scenario modelling to identify working capital thresholds and plan capital raise timings.",
      advisoryText: "Through runway analysis, we help startups secure series funding well before they hit capital thresholds.",
      chartPath: "M0,52 Q25,48 50,45 T100,35 T150,25 T200,15",
      chartFill: "rgba(37, 99, 235, 0.08)",
      yMin: "12 Mos",
      yMax: "24 Mos"
    },
    "MRR": {
      title: "Monthly Recurring Revenue (SaaS)",
      value: "$420,000",
      trend: "+15.8% MoM",
      trendType: "up",
      description: "Cohort retention analysis, upgrade paths, and contract value monitoring to drive MRR compound growth.",
      advisoryText: "We break down customer cohorts to reveal product monetization paths and decrease contract churn.",
      chartPath: "M0,55 Q25,50 50,44 T100,32 T150,18 T200,4",
      chartFill: "rgba(20, 184, 166, 0.08)",
      yMin: "$280k",
      yMax: "$450k"
    },
    "CAC": {
      title: "Customer Acquisition Cost Optimization",
      value: "$120.00",
      trend: "-8.4% QoQ",
      trendType: "down", // CAC going down is good!
      description: "Cross-channel acquisition analytics aligning marketing spend to customer lifetime value cohorts.",
      advisoryText: "Our financial audits map acquisition overhead to ensure marketing payback schedules remain under 12 months.",
      chartPath: "M0,10 Q25,18 50,25 T100,38 T150,48 T200,52",
      chartFill: "rgba(22, 163, 74, 0.08)",
      yMin: "$145",
      yMax: "$115"
    },
    "LTV": {
      title: "Customer Lifetime Value Projection",
      value: "$4,850",
      trend: "+24.2% YoY",
      trendType: "up",
      description: "Net revenue retention forecasting and product integration modeling to estimate true customer value.",
      advisoryText: "We model subscription extensions and contract expansions to calculate precise pricing plans.",
      chartPath: "M0,50 Q25,45 50,42 T100,30 T150,18 T200,10",
      chartFill: "rgba(37, 99, 235, 0.08)",
      yMin: "$3,200",
      yMax: "$5,000"
    }
  };

  const activeData = metrics[activeTab];

  return (
    <section 
      id="financial-showcase" 
      className="py-24 px-4 md:px-8 bg-white relative overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 cfo-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-secondary/8 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <div className="px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary tracking-wide uppercase">
            INTERACTIVE MODELLING
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-heading font-sans">
            Financial Dashboard Showcase
          </h2>
          <p className="text-body text-base md:text-lg leading-relaxed">
            Click through our key performance metric tabs below to see how our Fractional CFOs analyze and model corporate health.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Tab Selectors */}
          <div className="lg:col-span-4 flex flex-col gap-2.5">
            {Object.keys(metrics).map((tabName) => {
              const isActive = activeTab === tabName;
              return (
                <button
                  key={tabName}
                  onClick={() => setActiveTab(tabName)}
                  className={`w-full text-left px-5 py-4 rounded-2xl border transition-all duration-300 font-sans flex items-center justify-between cursor-pointer ${
                    isActive 
                      ? "bg-primary border-primary text-white shadow-[0_8px_25px_rgba(37,99,235,0.22)]" 
                      : "bg-slate-50 hover:bg-slate-100/80 border-slate-200/60 text-heading font-semibold"
                  }`}
                >
                  <span className="text-sm font-bold">{tabName}</span>
                  <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? "text-white translate-x-0.5 -translate-y-0.5" : "text-muted"}`} />
                </button>
              );
            })}
          </div>

          {/* Right: Simulated Interactive Widget Dashboard */}
          <div className="lg:col-span-8">
            <div className="glass-card p-8 border-primary/5 shadow-xl relative min-h-[460px] flex flex-col justify-between overflow-hidden bg-white/90">
              
              {/* Scanline flow */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-accent opacity-30 animate-pulse-glow" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-6"
                >
                  {/* Widget top bar */}
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest block mb-1">
                        Active advisory metrics
                      </span>
                      <h3 className="text-xl font-extrabold text-heading">
                        {activeData.title}
                      </h3>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <span className="text-2xl font-extrabold text-heading leading-none">
                        {activeData.value}
                      </span>
                      
                      <span className={`text-[11px] font-extrabold flex items-center gap-0.5 px-2.5 py-0.5 rounded-full ${
                        activeData.trendType === "up" 
                          ? "bg-success/10 border border-success/20 text-success" 
                          : "bg-success/10 border border-success/20 text-success" // Both down/up trends indicate optimization in this context
                      }`}>
                        {activeData.trendType === "up" ? (
                          <ArrowUpRight className="w-3 h-3" />
                        ) : (
                          <ArrowDownRight className="w-3 h-3" />
                        )}
                        {activeData.trend}
                      </span>
                    </div>
                  </div>

                  {/* Descriptions */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4.5 bg-slate-50/60 border border-slate-100 rounded-2xl">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase font-bold text-muted">Analysis Focus</span>
                      <p className="text-xs text-body leading-relaxed">{activeData.description}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase font-bold text-muted">CFO Strategy</span>
                      <p className="text-xs text-body leading-relaxed">{activeData.advisoryText}</p>
                    </div>
                  </div>

                  {/* SVG Chart display */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between text-[9px] font-bold text-muted uppercase tracking-wider">
                      <span>Chart Baseline: {activeData.yMin}</span>
                      <span>Target Goal: {activeData.yMax}</span>
                    </div>

                    {/* Interactive SVG Chart wrapper */}
                    <div className="w-full h-36 bg-slate-50/30 rounded-2xl border border-slate-100/50 p-4 relative flex items-end">
                      <svg className="w-full h-full text-primary" viewBox="0 0 200 60" fill="none">
                        {/* Static Grid Lines */}
                        <line x1="0" y1="15" x2="200" y2="15" stroke="rgba(0,0,0,0.03)" strokeWidth="0.5" />
                        <line x1="0" y1="30" x2="200" y2="30" stroke="rgba(0,0,0,0.03)" strokeWidth="0.5" />
                        <line x1="0" y1="45" x2="200" y2="45" stroke="rgba(0,0,0,0.03)" strokeWidth="0.5" />

                        {/* Line Path */}
                        <motion.path
                          d={activeData.chartPath}
                          stroke={activeTab === "EBITDA" || activeTab === "Burn Rate" || activeTab === "CAC" ? "#16a34a" : "#2563eb"}
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />

                        {/* Fill Path */}
                        <motion.path
                          d={`${activeData.chartPath} L200,60 L0,60 Z`}
                          fill={activeData.chartFill}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1.2 }}
                        />
                      </svg>
                      
                      {/* Floating glowing dot at the end coordinates */}
                      <span className={`absolute right-4 bottom-[46px] w-2.5 h-2.5 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.8)] border border-white ${
                        activeTab === "EBITDA" || activeTab === "Burn Rate" || activeTab === "CAC" ? "bg-success" : "bg-primary"
                      }`} />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Status note */}
              <div className="flex items-center gap-1.5 pt-4 border-t border-slate-100 text-[10px] text-muted">
                <Landmark className="w-3.5 h-3.5 text-primary" />
                <span>Strategic advice backed by actual performance indicators and SEC compliance guidelines.</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
