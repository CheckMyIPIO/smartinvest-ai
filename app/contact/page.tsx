export default function Contact() {
  return (
    <div className="space-y-4 max-w-xl">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="text-gray-600">Questions or partnership ideas? We'd love to hear from you.</p>
      <form className="card space-y-3">
        <label className="block">
          <div className="text-sm text-gray-600">Name</div>
          <input className="w-full border rounded-xl2 px-3 py-2" placeholder="Your name"/>
        </label>
        <label className="block">
          <div className="text-sm text-gray-600">Email</div>
          <input className="w-full border rounded-xl2 px-3 py-2" placeholder="you@example.com"/>
        </label>
        <label className="block">
          <div className="text-sm text-gray-600">Message</div>
          <textarea className="w-full border rounded-xl2 px-3 py-2" rows={5} placeholder="How can we help?" />
        </label>
        <button className="btn btn-primary">Send (demo)</button>
      </form>
    </div>
  );
}
