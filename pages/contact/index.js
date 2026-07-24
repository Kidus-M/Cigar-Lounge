import React, { useState } from "react";
import Head from "next/head";
import { Clock3, Instagram, MailOpen, MapPin, Phone, Youtube } from "lucide-react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import WolfDenMap from "../../components/WolfDenMap";

const locationLabel = "Bole Matemiya, Addis Ababa";
const directionsUrl = "https://www.google.com/maps/search/?api=1&query=8.997187%2C38.769612";

const Contacts = () => {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    try {
      const response = await fetch("https://formsubmit.co/ajax/Wolf Denaddis@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Head>
        <title>Contact | Wolf Den Lounge</title>
        <meta name="description" content="Contact Wolf Den Lounge, view our opening hours, and find us in the S&F Building in Bole Matemiya, Addis Ababa." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className="bg-black pb-8 pt-28 text-white">
        <section className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="rounded-2xl border border-green-600/80 bg-zinc-950 px-6 py-12 shadow-2xl shadow-green-950/20 md:px-10 lg:px-12">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-green-500">Get in touch</p>
              <h1 className="text-3xl font-bold text-white md:text-4xl">Contact us</h1>
            </div>

            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <form onSubmit={handleSubmit}>
                  <input type="hidden" name="_subject" value="New Contact Form Submission!" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />

                  <FormField label="Name" id="contact-name">
                    <input id="contact-name" type="text" name="name" required autoComplete="name" className="w-full rounded-md border border-white/20 bg-white px-3 py-3 text-black outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/30" placeholder="Name" />
                  </FormField>
                  <FormField label="Email" id="contact-email">
                    <input id="contact-email" type="email" name="email" required autoComplete="email" className="w-full rounded-md border border-white/20 bg-white px-3 py-3 text-black outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/30" placeholder="Enter your email" />
                  </FormField>
                  <FormField label="Message" id="contact-message">
                    <textarea id="contact-message" name="message" required rows={5} className="w-full resize-y rounded-md border border-white/20 bg-white px-3 py-3 text-black outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/30" placeholder="Write your message here..." />
                  </FormField>

                  <button type="submit" className="w-full rounded-md bg-green-600 px-6 py-3 font-medium uppercase tracking-wide text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black">Send</button>
                  <div aria-live="polite">
                    {status === "success" && <p className="mt-3 font-medium text-green-500">Message sent successfully!</p>}
                    {status === "error" && <p className="mt-3 font-medium text-red-500">Failed to send message. Please try again.</p>}
                  </div>
                </form>

                <div className="mt-10 border-l-2 border-green-600 pl-5 text-green-500">
                  <div className="mb-4 flex items-center gap-3">
                    <Clock3 aria-hidden="true" size={28} />
                    <h2 className="text-xl font-bold text-green-500">Hours</h2>
                  </div>
                  <p className="font-medium">Tuesday - Sunday: 12:00pm - 4:00am</p>
                  <p className="mt-2 font-medium">Monday: Closed</p>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
                  <ContactItem icon={<MapPin size={38} />} title="Address">
                    <a href={directionsUrl} target="_blank" rel="noreferrer" className="leading-relaxed text-white transition hover:text-green-400">{locationLabel}</a>
                  </ContactItem>
                  <ContactItem icon={<Youtube size={42} />} title="Youtube">
                    <a href="https://www.youtube.com/@Wolf-f7r" target="_blank" rel="noreferrer" className="text-white transition hover:text-green-400">Wolf Den</a>
                  </ContactItem>
                  <ContactItem icon={<Phone size={38} />} title="Phone">
                    <a href="tel:+251979398094" className="text-white transition hover:text-green-400">+251-979-398-094</a>
                  </ContactItem>
                  <ContactItem icon={<Instagram size={38} />} title="Instagram">
                    <a href="https://www.instagram.com/wolfdenaddis?igsh=ZzRmOGp4ZDdmaDRx&utm_source=qr" target="_blank" rel="noreferrer" className="break-words text-white transition hover:text-green-400">Instagram.WolfDenaddis</a>
                  </ContactItem>
                  <ContactItem icon={<MailOpen size={38} />} title="Email">
                    <a href="mailto:Wolfdenaddis@gmail.com" className="break-words text-white transition hover:text-green-400">Wolfdenaddis@gmail.com</a>
                  </ContactItem>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-7xl px-6 md:px-12" aria-labelledby="find-the-den">
          <div className="mb-7 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-green-500">Bole Matemiya</p>
              <h2 id="find-the-den" className="text-3xl font-bold text-white">Find the Den</h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-zinc-300">We are in the S&amp;F Building, directly in front of Andinet Butchery.</p>
            </div>
            <a href={directionsUrl} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 rounded-md border border-green-600 px-5 py-3 font-medium text-green-500 transition hover:bg-green-600 hover:text-white">
              <MapPin aria-hidden="true" size={20} /> Open directions
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl border border-green-600/80 shadow-2xl shadow-green-950/30">
            <WolfDenMap />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

function FormField({ label, id, children }) {
  return (
    <div className="mb-4">
      <label className="mb-2 block font-medium text-green-500" htmlFor={id}>{label}</label>
      {children}
    </div>
  );
}

function ContactItem({ icon, title, children }) {
  return (
    <div className="flex items-start gap-4">
      <div className="shrink-0 text-green-500" aria-hidden="true">{icon}</div>
      <div className="min-w-0">
        <h2 className="mb-2 font-bold text-white">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default Contacts;
