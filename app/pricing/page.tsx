export default function Pricing() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="card">
        <div className="text-brand.green font-semibold">Free</div>
        <div className="text-4xl font-bold mt-2">$0</div>
        <ul className="mt-4 space-y-2 text-sm text-gray-600">
          <li>AI assistant (limited)</li>
          <li>Deal analyzer (basic)</li>
          <li>Blog & playbooks</li>
        </ul>
      </div>
      <div className="card border-2 border-brand.green">
        <div className="text-brand.green font-semibold">Pro</div>
        <div className="text-4xl font-bold mt-2">$9.99<span className="text-base font-normal">/mo</span></div>
        <ul className="mt-4 space-y-2 text-sm text-gray-600">
          <li>Unlimited AI chat</li>
          <li>Advanced ROI reports</li>
          <li>Priority support</li>
        </ul>
        <button className="btn btn-primary mt-4 w-full">Start Free Trial</button>
      </div>
      <div className="card">
        <div className="text-brand.green font-semibold">Team</div>
        <div className="text-4xl font-bold mt-2">Custom</div>
        <ul className="mt-4 space-y-2 text-sm text-gray-600">
          <li>Seats & SSO</li>
          <li>API access</li>
          <li>Dedicated success</li>
        </ul>
        <button className="btn btn-outline mt-4 w-full">Contact Sales</button>
      </div>
    </div>
  );
}
