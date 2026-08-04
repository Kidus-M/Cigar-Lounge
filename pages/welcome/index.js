import Head from "next/head";
import Link from "next/link";

const welcomeMessage =
  "Welcome to the Wolf Den. We hope you enjoy your stay. Present this card to the manager to receive your gift of 50% off.";

export default function Welcome() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#4a2d22] px-6 py-12 text-[#f7ead8]">
      <Head>
        <title>Welcome | Wolf Den Lounge</title>
        <meta
          name="description"
          content="Welcome to Wolf Den Lounge and enjoy your cardholder gift."
        />
      </Head>

      <div
        aria-hidden="true"
        className="absolute inset-5 border border-[#c79a6b]/55 sm:inset-8"
      />
      <div
        aria-hidden="true"
        className="absolute inset-8 border border-[#f7ead8]/15 sm:inset-12"
      />

      <main className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="font-serif text-3xl leading-relaxed tracking-wide sm:text-4xl sm:leading-relaxed md:text-5xl md:leading-relaxed">
          {welcomeMessage}
        </p>
        <Link
          href="/contact"
          className="mt-12 inline-flex border-b border-[#c79a6b] pb-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#f7ead8] transition-colors hover:text-[#e2b681] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e2b681] focus-visible:ring-offset-4 focus-visible:ring-offset-[#4a2d22] sm:text-base"
        >
          Contact us for directions
        </Link>
      </main>
    </div>
  );
}
