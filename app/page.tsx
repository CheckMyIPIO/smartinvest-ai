import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-brand.navy">Smarter money decisions with AI.</h1>
          <p className="text-lg text-gray-600">
            SmartInvest AI helps you analyze deals, plan budgets, and discover income opportunities—fast.
          </p>
          <div className="flex gap-3">
            <Link href="/assistant" className="btn btn-primary">Try the AI Assistant</Link>
            <Link href="/pricing" className="btn btn-outline">See Pricing</Link>
          </div>
          <ul className="grid grid-cols-2 gap-3 text-sm text-gray-600 pt-4">
            <li className="card">⚡ Deal analysis in seconds</li>
            <li className="card">🔒 Your data, your control</li>
            <li className="card">📈 ROI calculators & reports</li>
            <li className="card">🎯 Actionable playbooks</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold mb-3">Live Snapshot (demo)</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="card">
              <div className="font-semibold">Users</div>
              <div className="text-3xl">1,248</div>
              <div className="text-green-600">+12% week</div>
            </div>
            <div className="card">
              <div className="font-semibold">Pro MRR</div>
              <div className="text-3xl">$2,960</div>
              <div className="text-green-600">+8% week</div>
            </div>
            <div className="col-span-2 card">
              <div className="font-semibold">Top feature</div>
              <div>Real estate cash-on-cash analyzer</div>
            </div>
          </div>
        </div>
      </section>
      <section className="grid md:grid-cols-3 gap-6">
        {[
          {title: "AI Assistant", desc: "Ask questions and get tailored money insights.", href: "/assistant"},
          {title: "Deal Analyzer", desc: "Evaluate flips, rentals, or side hustles.", href: "/analyzer"},
          {title: "Playbooks", desc: "Step-by-step guides to grow your income.", href: "/blog"},
        ].map((c) => (
          <a key={c.title} href={c.href} className="card hover:shadow-lg transition">
            <div className="text-brand.green text-sm font-semibold">{c.title}</div>
            <div className="text-gray-600 mt-2">{c.desc}</div>
          </a>
        ))}
      </section>
    </div>
  );
}
