import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden sm:min-h-[80vh]">
        <Image
          src="/dg_truck_picture.jpeg"
          alt="Dumpling Girls food truck"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-brand-gray/90 via-brand-gray/50 to-brand-gray/30"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-32 sm:px-6 sm:pb-24">
          <p className="mb-3 text-lg font-semibold tracking-wide text-brand-gold sm:text-xl">
            Dumpling Girls
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Authentic Dumplings. On Wheels.
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/90 sm:text-lg">
            Traditional-inspired Sichuan flavors from our North Carolina food
            truck.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-brand-surface px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-brand-gray sm:text-4xl">
            Our Story
          </h2>
          <div className="mt-3 h-1 w-16 bg-brand-gold" aria-hidden="true" />
          <p className="mt-8 text-lg leading-relaxed text-brand-gray-muted">
            At Dumpling Girls, we believe that great food starts with family,
            tradition, and a genuine passion for authentic flavors. We proudly
            serve traditional-inspired Chinese cuisine, meticulously crafted
            with authenticity and originality at its heart. By adhering to the
            time-honored fundamentals of Chinese cooking, we let the natural
            flavors of the freshest ingredients take center stage. Just like a
            home-cooked meal, hospitality is central to everything we do. We
            pride ourselves on providing a unique, exciting, and welcoming
            dining experience for every customer who visits our truck.
          </p>
        </div>
      </section>

      {/* Meet the Owner */}
      <section className="bg-brand-surface-alt px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden md:mx-0">
            <Image
              src="/dg_owner_photo.jpeg"
              alt="Rebecca, owner of Dumpling Girls"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-brand-gray sm:text-4xl">
              Meet the Owner: Rebecca
            </h2>
            <div className="mt-3 h-1 w-16 bg-brand-red" aria-hidden="true" />
            <p className="mt-8 text-lg leading-relaxed text-brand-gray-muted">
              Our culinary journey is deeply rooted in the heritage of our
              owner, Rebecca. Born and raised in Sichuan, China, Rebecca&apos;s
              passion for food was inspired by her father&apos;s traditional
              Sichuan style of cooking. Today, she brings the vibrant, bold, and
              comforting tastes of her childhood directly to your plate. Her
              commitment to quality extends far beyond the kitchen. As an avid
              gardener who grows a wide variety of organic vegetables, Rebecca
              ensures that a deep respect for fresh, natural ingredients remains
              the absolute foundation of our menu. The meticulous care she pours
              into cultivating her garden translates directly into her cooking,
              ensuring that every dish is crafted with precision, warmth, and
              love.
            </p>
          </div>
        </div>
      </section>

      {/* Book Us */}
      <section className="bg-brand-gray px-4 py-16 text-brand-surface sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Book Us for Your Next Event
          </h2>
          <div
            className="mx-auto mt-3 h-1 w-16 bg-brand-gold"
            aria-hidden="true"
          />
          <p className="mt-8 text-lg leading-relaxed text-brand-surface/90">
            Whether you&apos;re craving a quick bite at a local day market or
            looking to elevate a special occasion, Dumpling Girls is here to
            serve you. You can find our truck at a variety of locations,
            including night markets, local festivals, and special events. Ready
            to bring the authentic taste of Sichuan to your next gathering? Call
            us to book your event at{" "}
            <a
              href="tel:704-421-4409"
              className="font-semibold text-brand-gold transition-colors hover:text-brand-gold-light"
            >
              704-421-4409
            </a>
            .
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-block bg-brand-red px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-red-dark"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
