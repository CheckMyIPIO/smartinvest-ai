import Link from "next/link";

export default function Blog() {
  const posts = [
    { slug: "real-estate-beginners", title: "Real Estate Investing for Beginners", excerpt: "Start with simple frameworks and cash flow math."},
    { slug: "budget-50-30-20", title: "The 50/30/20 Budget in 10 Minutes", excerpt: "How to set an efficient monthly plan you can stick to."},
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">SmartInvest Playbooks</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map(p => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="card block">
            <div className="font-semibold">{p.title}</div>
            <div className="text-sm text-gray-600 mt-1">{p.excerpt}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
