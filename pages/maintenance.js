import Head from "next/head";

// Served at "/" while MAINTENANCE_MODE is on in next.config.js.
// Ships without client-side JS and without images to keep the page as light as possible.
export const config = { unstable_runtimeJS: false };

export default function Maintenance() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050807] px-4 text-center text-white">
      <Head>
        <title>Wolf Den Lounge | Moving Locations</title>
        <meta name="description" content="Wolf Den Lounge is moving to a new location." />
      </Head>
      <h1 className="font-serif text-4xl font-bold leading-tight sm:text-6xl">
        Wolf Den is moving locations
      </h1>
    </main>
  );
}
