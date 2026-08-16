import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dumpling Girls",
  description:
    "Authentic Chinese street food from Dumpling Girls — a North Carolina food truck serving traditional-inspired Sichuan cuisine.",
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const navLinks = [
  { href: "/", label: "About Us" },
  { href: "/menu", label: "Our Menu" },
  { href: "/contact", label: "Contact Us" },
] as const;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const year = new Date().getFullYear();

  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="flex min-h-screen flex-col bg-brand-surface font-sans text-brand-gray antialiased">
        <header className="sticky top-0 z-50 border-b border-brand-gray/10 bg-brand-surface/95 backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold tracking-tight text-brand-red sm:text-2xl"
            >
              Dumpling Girls
              <Image
                src="/dg_logo.png"
                alt="Dumpling Girls logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
            </Link>
            <nav
              aria-label="Main"
              className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium sm:text-base"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-brand-gray-muted transition-colors hover:text-brand-red"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-brand-gray/10 bg-brand-gray text-brand-surface">
          <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm sm:px-6">
            <p>&copy; {year} Dumpling Girls. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
