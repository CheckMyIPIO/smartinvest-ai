"use client";
import { useState } from "react";

export default function Assistant() {
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([
    { role: 'assistant', content: 'Hi! I can help with budgeting, deal analysis, and ROI questions. What are we working on today?' }
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    setMessages([...messages, {role:'user', content: input}, {role:'assistant', content: "Demo response. Connect your API to enable real AI."}]);
    setInput("");
  };

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2 card">
        <div className="h-[520px] overflow-auto space-y-4">
          {messages.map((m, i) => (
            <div key={i} className={m.role === 'user' ? 'text-right' : ''}>
              <div className={`inline-block px-4 py-2 rounded-2xl ${m.role === 'user' ? 'bg-gray-100' : 'bg-brand.green text-white'}`}>
                {m.content}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Ask about ROI, budget, or a deal..." className="flex-1 border rounded-xl2 px-3 py-2"/>
          <button onClick={send} className="btn btn-primary">Send</button>
        </div>
      </div>
      <div className="card space-y-3">
        <div className="font-semibold">Connect AI</div>
        <ol className="text-sm text-gray-600 list-decimal list-inside space-y-1">
          <li>Add your OpenAI API key as NEXT_PUBLIC_OPENAI_KEY</li>
          <li>Replace the demo response with an API call</li>
          <li>Deploy to Vercel</li>
        </ol>
        <div className="text-xs text-gray-500">Note: Educational only. Not financial advice.</div>
      </div>
    </div>
  );
}
