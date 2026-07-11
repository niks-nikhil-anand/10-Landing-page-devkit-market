"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Code, 
  Share2, 
  Key, 
  Waypoints, 
  Webhook, 
  Cpu, 
  HardDrive, 
  Database, 
  Zap, 
  Layers, 
  Activity, 
  LineChart,
  ArrowRight
} from "lucide-react";

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "REST APIs",
      description: "Performant, fully documentated HTTP endpoints with type-safe payloads, auto generation, and secure schemas."
    },
    {
      icon: <Share2 className="w-6 h-6 text-accent" />,
      title: "GraphQL APIs",
      description: "Query exactly the fields you need with federated GraphQL, unified schemas, and structured subscriptions."
    },
    {
      icon: <Key className="w-6 h-6 text-success" />,
      title: "Authentication",
      description: "Deploy robust security with passwordless credentials, MFA tokens, JWT keys, and SSO enterprise providers."
    },
    {
      icon: <Waypoints className="w-6 h-6 text-primary" />,
      title: "API Gateway",
      description: "Coordinate requests, apply load balancing, filter IPs, and implement rate limits across API boundaries."
    },
    {
      icon: <Webhook className="w-6 h-6 text-accent" />,
      title: "Webhooks Engine",
      description: "Send and receive real-time HTTP callback events securely with built-in retries and signature verification."
    },
    {
      icon: <Cpu className="w-6 h-6 text-success" />,
      title: "Edge Functions",
      description: "Execute lightweight serverless scripts closer to your users in 180+ global CDN edge regions."
    },
    {
      icon: <HardDrive className="w-6 h-6 text-primary" />,
      title: "Object Storage",
      description: "Store, retrieve, and serve user files, media assets, or backup dumps with global CDN delivery."
    },
    {
      icon: <Database className="w-6 h-6 text-accent" />,
      title: "PostgreSQL Database",
      description: "Provision fully managed, auto-scaling SQL clusters with real-time replication and connection pooling."
    },
    {
      icon: <Zap className="w-6 h-6 text-success" />,
      title: "Redis Cache",
      description: "Speed up response cycles with low-latency in-memory cache clusters and unified data synchronization."
    },
    {
      icon: <Layers className="w-6 h-6 text-primary" />,
      title: "Message Queues",
      description: "Coordinate background worker pipelines with high-throughput, fault-tolerant message queuing."
    },
    {
      icon: <Activity className="w-6 h-6 text-accent" />,
      title: "Monitoring Hub",
      description: "Track system health with microservice tracer logs, alert pings, and infrastructure telemetry."
    },
    {
      icon: <LineChart className="w-6 h-6 text-success" />,
      title: "Observability Analytics",
      description: "Analyze latency grids, payload distributions, and compute loads with structured metric charts."
    }
  ];

  return (
    <section 
      ref={ref}
      id="features" 
      className="py-24 px-4 md:px-8 bg-slate-950 relative overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-success/4 blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 api-grid opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-18 flex flex-col items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary tracking-wide uppercase"
          >
            OUR PRODUCT ENGINE
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans"
          >
            Full-Stack Developer Platform
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-base md:text-lg leading-relaxed"
          >
            Everything you need to build, secure, and deploy high-performance applications globally without operational overhead.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.04 }}
              className="glass-card glass-card-hover p-8 border-white/6 flex flex-col gap-5 justify-between relative group cursor-pointer rounded-2xl"
            >
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/3 border border-white/6 flex items-center justify-center transition-colors group-hover:bg-primary/10 group-hover:border-primary/20 duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-primary pt-2 group-hover:translate-x-1 transition-transform duration-300">
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
