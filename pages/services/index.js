import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const services = [
  {
    name: "Cabinet Service",
    label: "Bottle care",
    description:
      "Don’t worry if you can’t spend the night—your bottle can. Ask our management team for details about our cabinet service.",
    imageUrl: "/service-cabinet.png",
  },
  {
    name: "The Captain Program",
    label: "Crew membership",
    description:
      "Captains, first officers, and flight attendants are eligible to receive a membership package. See our management team for details.",
    imageUrl: "/service-captain-program.png",
  },
  {
    name: "Promoter Spinoffs",
    label: "Promoter development",
    description:
      "Introducing a service program for aspiring promoters. Follow us for more details.",
    imageUrl: "/service-promoter-spinoffs.png",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Services | Wolf Den Lounge</title>
        <meta name="description" content="Explore bottle care, crew membership, and promoter services at Wolf Den Lounge." />
      </Head>
      <Navbar />
      <main className="overflow-hidden pb-20 pt-32">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Wolf Den Lounge</p>
            <h1 className="text-5xl font-bold tracking-tight text-green-500 sm:text-6xl">Services at the Den</h1>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Thoughtful programs for bottle storage, aviation professionals,
              and the next generation of nightlife promoters.
            </p>
          </motion.div>
          <div className="mt-16 space-y-10">
            {services.map((service, index) => (
              <motion.article
                key={service.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className="grid overflow-hidden rounded-2xl border border-green-700/70 bg-zinc-950 shadow-2xl shadow-green-950/20 lg:grid-cols-2"
              >
                <div className={`relative min-h-[320px] sm:min-h-[390px] lg:min-h-[470px] ${index % 2 ? "lg:order-2" : ""}`}>
                  <Image
                    src={service.imageUrl}
                    alt={`${service.name} at Wolf Den Lounge`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/45 to-transparent lg:hidden" />
                </div>
                <div className={`flex flex-col justify-center p-8 sm:p-10 lg:p-14 ${index % 2 ? "lg:order-1" : ""}`}>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-400">{service.label}</p>
                  <h2 className="mt-4 text-3xl font-bold text-green-500 sm:text-4xl">{service.name}</h2>
                  <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">{service.description}</p>
                  <div className="mt-9 h-px w-24 bg-green-500" />
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
