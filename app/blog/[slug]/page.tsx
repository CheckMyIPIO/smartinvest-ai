import { notFound } from "next/navigation";

const posts: Record<string, {title: string, body: string}> = {
  "real-estate-beginners": {
    title: "Real Estate Investing for Beginners",
    body: "Start by understanding NOI, cap rate, and cash-on-cash return. Focus on simple deals first."
  },
  "budget-50-30-20": {
    title: "The 50/30/20 Budget in 10 Minutes",
    body: "A simple split of needs, wants, and savings that helps you stay on track each month."
  }
};

export default function BlogPost({ params }: { params: { slug: string }}) {
  const post = posts[params.slug];
  if (!post) return notFound();
  return (
    <article className="prose max-w-none">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}
