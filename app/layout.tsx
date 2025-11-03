import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "SmartInvest AI",
  description: "Smarter money decisions with AI.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b">
          <div className="container flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-2 font-semibold text-brand.navy">
              <span className="inline-block h-3 w-3 rounded-full bg-brand.green" />
              SmartInvest AI
            </Link>
            <nav className="flex items-center gap-5 text-sm">
              <Link href="/assistant">AI Assistant</Link>
              <Link href="/analyzer">Deal Analyzer</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/about">About</Link>
              <Link href="/contact" className="btn btn-primary text-sm">Get Started</Link>
            </nav>
          </div>
        </header>
        <main className="container py-10">{children}</main>
        <footer className="border-t py-10 mt-10">
          <div className="container text-sm text-gray-500">
            © {new Date().getFullYear()} SmartInvest AI. Educational purposes only. Not financial advice.
          </div>
        </footer>
      </body>
    </html>
  );
}
