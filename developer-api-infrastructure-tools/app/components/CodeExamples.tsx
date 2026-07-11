"use client";

import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { Check, Copy, Code, Terminal, TerminalSquare } from "lucide-react";

interface CodeSnippet {
  code: string;
  language: string;
  response: string;
}

export default function CodeExamples() {
  const [activeTab, setActiveTab] = useState<string>("JavaScript");
  const [isCopied, setIsCopied] = useState(false);

  const snippets: Record<string, CodeSnippet> = {
    JavaScript: {
      code: `const DevInfra = require('@devinfra/sdk');
const client = new DevInfra.Client({ apiKey: 'sk_live_...' });

async function publishWebhook() {
  const event = await client.webhooks.send({
    event: 'payment.succeeded',
    payload: { amount: 2900, currency: 'usd' }
  });
  console.log(\`Event sent: \${event.id}\`);
}

publishWebhook();`,
      language: "javascript",
      response: `{
  "id": "evt_js_8828b10f22c1",
  "object": "event",
  "event": "payment.succeeded",
  "status": "delivered",
  "endpoint": "https://api.merchant.com/webhooks",
  "attempts": 1,
  "created_at": 1783492820
}`
    },
    TypeScript: {
      code: `import { DevInfraClient } from '@devinfra/sdk';

const client = new DevInfraClient({ apiKey: 'sk_live_...' });

interface EventPayload {
  amount: number;
  currency: string;
}

async function triggerAlert(payload: EventPayload): Promise<void> {
  const res = await client.monitoring.alert({
    channel: '#ops-alerts',
    message: 'System scale trigger',
    data: payload
  });
  console.log(\`Alert status: \${res.status}\`);
}

triggerAlert({ amount: 2900, currency: 'usd' });`,
      language: "typescript",
      response: `{
  "id": "alt_ts_9901f11a00ba",
  "object": "alert",
  "channel": "#ops-alerts",
  "status": "triggered",
  "severity": "info",
  "dispatched_at": 1783492822
}`
    },
    Python: {
      code: `import devinfra

client = devinfra.Client(api_key="sk_live_...")

response = client.db.query(
    collection="users",
    filter={"status": "active"},
    limit=5
)

for user in response.data:
    print(f"User: {user['email']} Status: {user['status']}")`,
      language: "python",
      response: `{
  "object": "list",
  "data": [
    { "id": "usr_1", "email": "dev1@infra.org", "status": "active" },
    { "id": "usr_2", "email": "ops2@infra.org", "status": "active" }
  ],
  "limit": 5,
  "has_more": false,
  "elapsed_ms": 14
}`
    },
    Go: {
      code: `package main

import (
\t"context"
\t"fmt"
\t"github.com/devinfra/sdk-go"
)

func main() {
\tclient := devinfra.NewClient("sk_live_...")
\tres, err := client.Cache.Set(context.Background(), "user_12", "session_active", 3600)
\tif err != nil {
\t\tpanic(err)
\t}
\tfmt.Println("Cache status:", res.Status)
}`,
      language: "go",
      response: `{
  "object": "cache_response",
  "key": "user_12",
  "value": "session_active",
  "ttl_seconds": 3600,
  "status": "OK",
  "latency_ms": 3
}`
    },
    Java: {
      code: `import com.devinfra.sdk.DevInfraClient;
import com.devinfra.models.ObjectResponse;

public class Main {
    public static void main(String[] args) {
        DevInfraClient client = new DevInfraClient("sk_live_...");
        ObjectResponse obj = client.storage()
            .upload("backup.tar.gz", "backups/daily");
        System.out.println("Uploaded URI: " + obj.getUri());
    }
}`,
      language: "java",
      response: `{
  "object": "storage_upload",
  "filename": "backup.tar.gz",
  "bucket": "backups/daily",
  "uri": "https://storage.devinfra.com/backups/daily/backup.tar.gz",
  "size_bytes": 14502819,
  "status": "uploaded"
}`
    },
    cURL: {
      code: `curl -X POST https://api.devinfra.com/v1/webhooks \\
  -H "Authorization: Bearer sk_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "event": "deployment.succeeded",
    "payload": {
      "repo": "devinfra/core",
      "commit": "8f8e7d2"
    }
  }'`,
      language: "shell",
      response: `{
  "id": "evt_curl_777b21e89b",
  "object": "event",
  "event": "deployment.succeeded",
  "status": "queued",
  "created_at": 1783492828
}`
    }
  };

  const active = snippets[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(active.code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section 
      id="code-playground" 
      className="py-24 px-4 md:px-8 bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 api-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <div className="px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs font-bold text-accent tracking-wide uppercase">
            DEVELOPER PLAYGROUND
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans">
            Build with Your Favorite Languages
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Integrate our SDKs in minutes. Switch languages below to see live requests and mock response parameters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Monaco Code Editor */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="glass-card rounded-2xl border-white/6 shadow-xl flex-1 flex flex-col overflow-hidden bg-slate-950/90 min-h-[400px]">
              
              {/* Editor Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-slate-950">
                {/* Language Tabs */}
                <div className="flex flex-wrap gap-1">
                  {Object.keys(snippets).map((name) => (
                    <button
                      key={name}
                      onClick={() => setActiveTab(name)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold font-code cursor-pointer transition-colors duration-200 ${
                        activeTab === name 
                          ? "bg-white/10 text-white" 
                          : "text-gray-500 hover:text-gray-300"
                      }`}
                    >
                      {name}
                    </button>
                  ))}
                </div>

                {/* Actions */}
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[11px] font-bold text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-success" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy SDK Code</span>
                    </>
                  )}
                </button>
              </div>

              {/* Monaco Editor Container */}
              <div className="flex-1 min-h-[300px] py-4 bg-slate-950">
                <Editor
                  height="300px"
                  theme="vs-dark"
                  language={active.language}
                  value={active.code}
                  options={{
                    readOnly: true,
                    minimap: { enabled: false },
                    fontSize: 13,
                    lineNumbers: "on",
                    fontFamily: "JetBrains Mono, Fira Code, monospace",
                    scrollbar: { vertical: "hidden", horizontal: "hidden" },
                    padding: { top: 12, bottom: 12 },
                    lineDecorationsWidth: 6,
                    lineNumbersMinChars: 3
                  }}
                />
              </div>

            </div>
          </div>

          {/* Right Column: Simulated API Response */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="glass-card rounded-2xl border-white/6 shadow-xl flex-1 flex flex-col justify-between overflow-hidden bg-slate-950/80 p-5 font-code relative">
              <div className="scanline-overlay" />
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
                    <TerminalSquare className="w-3.5 h-3.5 text-accent" />
                    Response Telemetry
                  </span>
                  <span className="text-[10px] font-bold text-success flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-success animate-ping" />
                    200 OK
                  </span>
                </div>

                <div className="text-[11px] leading-relaxed text-accent/95 overflow-x-auto">
                  <pre>{active.response}</pre>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 text-[9px] text-gray-500 font-bold flex items-center justify-between">
                <span>Protocol: HTTP/2 JSON</span>
                <span>Type: REST callback</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
