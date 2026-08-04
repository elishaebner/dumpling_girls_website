import Image from "next/image";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Dumpling Girls",
  description:
    "Get in touch with Dumpling Girls to book the truck for your next event or find out where we're parked next.",
};

export default function ContactPage() {
  return (
    <div className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 max-w-2xl">
          <h1 className="text-4xl font-bold text-brand-gray sm:text-5xl">
            Contact Us
          </h1>
          <div className="mt-3 h-1 w-16 bg-brand-gold" aria-hidden="true" />
          <p className="mt-6 text-lg leading-relaxed text-brand-gray-muted">
            Want the truck at your next festival, market, or private event?
            Wondering where we&apos;re rolling next? Give us a shout — we&apos;d
            love to hear from you.
          </p>
        </header>

        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-14">
          <div className="border border-brand-gray/10 bg-brand-surface-alt p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-brand-gray">
              Talk to Rebecca
            </h2>
            <p className="mt-4 leading-relaxed text-brand-gray-muted">
              Every booking and question goes straight to our owner and head
              chef, Rebecca Huang. Whether it&apos;s a big event or just a
              craving, she&apos;ll take care of you.
            </p>
            <div className="mt-8 space-y-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-gold">
                  Call or text
                </p>
                <a
                  href="tel:704-421-4409"
                  className="mt-1 inline-block text-xl font-semibold text-brand-red transition-colors hover:text-brand-red-dark"
                >
                  704-421-4409
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-gold">
                  Email
                </p>
                <a
                  href="mailto:rebecca@dumplinggirls.com"
                  className="mt-1 inline-block text-xl font-semibold text-brand-red transition-colors hover:text-brand-red-dark"
                >
                  rebecca@dumplinggirls.com
                </a>
              </div>
            </div>
            <p className="mt-8 border-t border-brand-gray/10 pt-6 text-sm text-brand-gray-muted">
              Phone is the fastest way to reach us — we&apos;re usually behind
              the griddle, but we&apos;ll get back to you as soon as the
              dumplings allow.
            </p>
            <div className="mt-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-gold">
                Follow along
              </p>
              <div className="mt-3 flex items-center gap-4">
                <a
                  href="https://www.facebook.com/dumplingirlsclt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Dumpling Girls on Facebook"
                  className="text-brand-red transition-colors hover:text-brand-red-dark"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-7 w-7"
                    aria-hidden="true"
                  >
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.026 1.792-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.971H15.83c-1.491 0-1.956.931-1.956 1.886v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/dumplingirlsclt/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Dumpling Girls on Instagram"
                  className="text-brand-red transition-colors hover:text-brand-red-dark"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-7 w-7"
                    aria-hidden="true"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/dg_newcontactus.png"
              alt="Happy customers giving a thumbs up in front of the Dumpling Girls truck"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
