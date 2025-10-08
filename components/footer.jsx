import React from "react";
import Link from "next/link";
import { Mail, Twitter, Linkedin, Github, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerFeatures = [
  {
    title: "Advanced Analytics",
    href: "/features/analytics",
    desc: "AI-powered spending insights and visual reports.",
  },
  {
    title: "Smart Receipt Scanner",
    href: "/features/receipts",
  },
  {
    title: "Budget Planning",
    href: "/features/budgeting",
  },
  {
    title: "Multi-Account Support",
    href: "/features/accounts",
  },
  {
    title: "Multi-Currency Support",
    href: "/features/multi-currency",
  },
  {
    title: "Automated Insights",
    href: "/features/insights",
  },
];

const footerResources = [
  { title: "Docs", href: "/docs" },
  { title: "Blog", href: "/blog" },
  { title: "Pricing", href: "/pricing" },
  { title: "Support", href: "/support" },
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-gray-50 mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">CashCare</h3>
            <p className="text-gray-300 max-w-sm">
              Your all-in-one finance companion — budgeting, receipts, and
              insights to keep your money on track.
            </p>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 stroke-current" />
              <a
                className="text-gray-300 hover:text-gray-50"
                href="mailto:hello@cashcare.app"
              >
                hello@cashcare.app
              </a>
            </div>
          </div>

          <div>
            {/* Mobile: collapsible */}
            <div className="md:hidden">
              <details>
                <summary className="font-semibold mb-3">Features</summary>
                <ul className="mt-2 space-y-3 text-gray-300">
                  {footerFeatures.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 stroke-current mt-1" />
                      <div>
                        <a href={f.href} className="hover:text-gray-50">
                          {f.title}
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </details>
            </div>

            {/* Desktop: always visible */}
            <div className="hidden md:block">
              <h4 className="font-semibold mb-3">Features</h4>
              <ul className="mt-2 space-y-3 text-gray-300">
                {footerFeatures.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 stroke-current mt-1" />
                    <div>
                      <a href={f.href} className="hover:text-gray-50">
                        {f.title}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            {/* Mobile: collapsible */}
            <div className="md:hidden">
              <details>
                <summary className="font-semibold mb-3">Resources</summary>
                <ul className="mt-2 space-y-2 text-gray-300">
                  {footerResources.map((r, idx) => (
                    <li key={idx}>
                      <Link href={r.href} className="hover:text-gray-50">
                        {r.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </div>

            {/* Desktop: always visible */}
            <div className="hidden md:block">
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="mt-2 space-y-2 text-gray-300">
                {footerResources.map((r, idx) => (
                  <li key={idx}>
                    <Link href={r.href} className="hover:text-gray-50">
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Get updates</h4>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter</p>
            <form className="flex gap-2">
              <input
                aria-label="Email address"
                type="email"
                placeholder="you@company.com"
                className="flex-1 rounded-md bg-zinc-800 px-3 py-2 text-gray-50 placeholder:text-gray-400"
              />
              <Button type="submit">Subscribe</Button>
            </form>

            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-300 hover:text-gray-50"
              >
                <Twitter className="h-5 w-5 stroke-current" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-300 hover:text-gray-50"
              >
                <Linkedin className="h-5 w-5 stroke-current" />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="text-gray-300 hover:text-gray-50"
              >
                <Github className="h-5 w-5 stroke-current" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-800 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} CashCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
