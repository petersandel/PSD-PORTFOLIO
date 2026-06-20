import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-charcoal px-6 text-center">
      {/* Decorative Line */}
      <div className="mb-8 h-16 w-px origin-top bg-gold" />

      <span className="text-xs uppercase tracking-[0.5em] text-gold/60">
        404
      </span>

      <h1 className="mt-4 font-display-xl text-5xl text-cream-100 md:text-6xl lg:text-7xl">
        Page Not Found
      </h1>

      <p className="mx-auto mt-6 max-w-md font-accent text-lg italic text-cream-200/70">
        It appears this page doesn&apos;t exist. Perhaps we can help you find
        what you&apos;re looking for.
      </p>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <Link
          href="/"
          className="btn-luxury inline-flex items-center gap-3"
        >
          Return Home
        </Link>
        <Link
          href="/work"
          className="text-xs uppercase tracking-widest text-cream-200 transition-colors hover:text-gold"
        >
          View Our Work →
        </Link>
      </div>

      {/* Decorative Line */}
      <div className="mt-12 h-16 w-px origin-bottom bg-gold" />
    </section>
  );
}