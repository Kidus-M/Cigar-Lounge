import React, { useState } from "react";
import { MailOpen, Phone, Youtube, Instagram } from "lucide-react";

const ContactPage = () => {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      // Using the endpoint from your provided code
      const response = await fetch("https://formsubmit.co/ajax/wolfdenaddis@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
      <div className="bg-[#121212] min-h-screen text-[#F3F4F6] font-sans selection:bg-[#A68A64] selection:text-black">

        {/* --- HEADER SECTION --- */}
        <div className="relative pt-32 pb-20 px-6 text-center">
        <span className="text-[#A68A64] uppercase tracking-[0.3em] text-xs font-bold animate-fade-up">
          Connect With Us
        </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mt-4 mb-6 animate-fade-up delay-100">
            Reserve Your <span className="italic text-[#A68A64]">Experience</span>
          </h1>
          <p className="text-gray-400 font-light max-w-xl mx-auto animate-fade-up delay-200 leading-relaxed">
            Whether for a private event, a table reservation, or general inquiries, our team is ready to welcome you to the Den.
          </p>
        </div>

        {/* --- MAP SECTION --- */}
        <div className="relative h-[450px] w-full overflow-hidden border-y border-white/5">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3940.735504050806!2d38.770424999999996!3d8.996468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNTknNDcuMyJOIDM4wrA0NicxMy41IkU!5e0!3m2!1sen!2set!4v1739611609218!5m2!1sen!2set"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="w-full h-full border-0 grayscale invert-[.9] contrast-[1.2] hover:grayscale-0 transition-all duration-700 ease-in-out"
          ></iframe>
          {/* Gradient Overlay to blend map edges into dark theme */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#121212] via-transparent to-[#121212] opacity-80" />
        </div>

        {/* --- CONTACT CONTENT --- */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-24 relative z-10 pb-24">
          <div className="bg-[#1A1A1A]/95 backdrop-blur-xl border border-white/5 shadow-2xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-16 rounded-sm">

            {/* LEFT: Contact Form */}
            <div className="w-full lg:w-7/12">
              <h3 className="text-3xl font-serif text-white mb-2">Send a Message</h3>
              <p className="text-gray-500 font-light text-sm mb-10">We usually respond within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-8">
                <input type="hidden" name="_subject" value="New Contact Form Submission!" />
                <input type="hidden" name="_captcha" value="false" />

                {/* Name Input */}
                <div className="group relative">
                  <input
                      type="text"
                      name="name"
                      required
                      className="peer w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-[#A68A64] transition-colors placeholder-transparent"
                      placeholder="Name"
                      id="name"
                  />
                  <label
                      htmlFor="name"
                      className="absolute left-0 -top-3.5 text-[#A68A64] text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[#A68A64] peer-focus:text-xs"
                  >
                    Full Name
                  </label>
                </div>

                {/* Email Input */}
                <div className="group relative">
                  <input
                      type="email"
                      name="email"
                      required
                      className="peer w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-[#A68A64] transition-colors placeholder-transparent"
                      placeholder="Email"
                      id="email"
                  />
                  <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-[#A68A64] text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[#A68A64] peer-focus:text-xs"
                  >
                    Email Address
                  </label>
                </div>

                {/* Message Input */}
                <div className="group relative">
                <textarea
                    name="message"
                    required
                    rows="4"
                    className="peer w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-[#A68A64] transition-colors placeholder-transparent resize-none"
                    placeholder="Message"
                    id="message"
                ></textarea>
                  <label
                      htmlFor="message"
                      className="absolute left-0 -top-3.5 text-[#A68A64] text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[#A68A64] peer-focus:text-xs"
                  >
                    Your Message
                  </label>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="mt-4 px-10 py-4 bg-[#A68A64] text-[#121212] text-xs uppercase tracking-[0.2em] font-bold hover:bg-white transition-all duration-300 min-w-[200px] cursor-pointer rounded-sm shadow-lg hover:shadow-[#A68A64]/20"
                >
                  Send Message
                </button>

                {/* Status Messages */}
                {status === "success" && (
                    <p className="text-[#A68A64] font-medium mt-4 animate-fade-up">Message sent successfully. We will be in touch.</p>
                )}
                {status === "error" && (
                    <p className="text-red-500 font-medium mt-4 animate-fade-up">Failed to send message. Please try again.</p>
                )}
              </form>
            </div>

            {/* RIGHT: Contact Info */}
            <div className="w-full lg:w-5/12 space-y-12 border-l border-white/5 lg:pl-16 pt-4">

              {/* Info Block */}
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <Phone className="text-[#A68A64] w-5 h-5" />
                  <h4 className="text-white font-serif text-xl">Phone</h4>
                </div>
                <a href="tel:0979398094" className="block text-gray-400 hover:text-[#A68A64] transition-colors font-light pl-9">
                  +251 979 398 094
                </a>
              </div>

              {/* Info Block */}
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <MailOpen className="text-[#A68A64] w-5 h-5" />
                  <h4 className="text-white font-serif text-xl">Email</h4>
                </div>
                <a href="mailto:wolfdenaddis@gmail.com" className="block text-gray-400 hover:text-[#A68A64] transition-colors font-light pl-9">
                  wolfdenaddis@gmail.com
                </a>
              </div>

              {/* Info Block */}
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#A68A64]"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  <h4 className="text-white font-serif text-xl">Location</h4>
                </div>
                <a
                    href="https://maps.app.goo.gl/Ph5JPnx6KVDjyqps8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-400 hover:text-[#A68A64] transition-colors font-light pl-9 leading-relaxed"
                >
                  From Gazebo to Wollo Sefer road,<br />Addis Ababa, Ethiopia
                </a>
              </div>

              {/* Socials */}
              <div className="pt-8 border-t border-white/10">
                <span className="text-[#A68A64] uppercase tracking-widest text-xs font-bold block mb-6">Follow The Pack</span>
                <div className="flex gap-6">
                  <a href="https://www.instagram.com/wolfdenaddis?igsh=ZzRmOGp4ZDdmaDRx&utm_source=qr" className="text-white hover:text-[#A68A64] transition-colors">
                    <Instagram size={24} strokeWidth={1.5} />
                  </a>
                  <a href="https://youtube.com/@wolf-f7r?si=YSW7A5NGQX-XrbNd" className="text-white hover:text-[#A68A64] transition-colors">
                    <Youtube size={24} strokeWidth={1.5} />
                  </a>
                  <a href="https://www.tiktok.com/@wolfdenaddis?_t=ZM-8xpQE4larlo&_r=1" className="text-white hover:text-[#A68A64] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
  );
};

export default ContactPage;