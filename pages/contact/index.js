import React, { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { MailOpen, Phone, Youtube, Instagram } from "lucide-react";

const Contacts = () => {
  const [status, setStatus] = useState(null); // 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
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
      <div className="bg-black">
        <Navbar />
        <section className="bg-black mt-20">
          <div id="map" className="relative h-[300px] bg-black">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3940.735504050806!2d38.770424999999996!3d8.996468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNTknNDcuMyJOIDM4wrA0NicxMy41IkU!5e0!3m2!1sen!2set!4v1739611609218!5m2!1sen!2set"
                width="100%"
                height="480"
                allowFullScreen=""
                loading="lazy"
                className="opacity-70 hover:opacity-100"
            ></iframe>
          </div>

          <div className="container px-6 md:px-12">
            <div className="block rounded-lg bg-black px-6 py-12 border border-orange-600 -mt-[100px] shadow-md backdrop-blur-[30px]">
              <div className="flex flex-wrap">
                <div className="flex justify-center w-full">
                  <div className="text-center md:max-w-xl lg:max-w-3xl">
                    <h2 className="mb-12 px-6 text-3xl text-orange-600 font-bold">
                      Contact us
                    </h2>
                  </div>
                </div>

                <div className="flex flex-wrap">
                  <form
                      className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6"
                      onSubmit={handleSubmit}
                  >
                    <input type="hidden" name="_subject" value="New Contact Form Submission!" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />

                    <div className="mb-3 w-full">
                      <label className="block font-medium mb-[2px] text-orange-600">Name</label>
                      <input
                          type="text"
                          name="name"
                          required
                          className="px-2 py-2 border w-full bg-white outline-none rounded-md"
                          placeholder="Name"
                      />
                    </div>

                    <div className="mb-3 w-full">
                      <label className="block font-medium mb-[2px] text-orange-600">Email</label>
                      <input
                          type="email"
                          name="email"
                          required
                          className="px-2 py-2 border w-full bg-white outline-none rounded-md"
                          placeholder="Enter your email"
                      />
                    </div>

                    <div className="mb-3 w-full">
                      <label className="block font-medium mb-[2px] text-orange-600">Message</label>
                      <textarea
                          name="message"
                          required
                          className="px-2 py-2 border rounded-md w-full bg-white outline-none"
                          placeholder="Write your message here..."
                      ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="mb-3 inline-block w-full rounded bg-orange-600 px-6 py-2.5 font-medium uppercase text-white hover:bg-orange-700"
                    >
                      Send
                    </button>

                    {status === "success" && (
                        <p className="text-green-500 font-medium mt-2">Message sent successfully!</p>
                    )}
                    {status === "error" && (
                        <p className="text-red-500 font-medium mt-2">Failed to send message. Please try again.</p>
                    )}
                  </form>

                  <div className="w-full mt-10 shrink-0 grow-0 basis-auto lg:w-7/12">
                    <div className="flex flex-wrap text-orange-600">
                      <div className="mb-12 w-full md:w-6/12 md:px-3 lg:px-6">
                        <div className="flex items-start">
                          <div className="shrink-0">
                            <div className="inline-block p-4 text-orange-600">
                              <Phone size={40} />
                            </div>
                          </div>
                          <div className="ml-6 grow">
                            <p className="mb-2 font-bold text-white">Phone Number</p>
                            <a href="tel:0979398094" className="text-white">
                              +251-979-398-094
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="mb-12 w-full md:w-6/12 md:px-3 lg:px-6">
                        <div className="flex items-start">
                          <div className="shrink-0">
                            <div className="inline-block p-4 text-orange-600">
                              <MailOpen size={40} />
                            </div>
                          </div>
                          <div className="ml-6 grow">
                            <p className="mb-2 font-bold text-white">Email</p>
                            <p className="text-white">wolfdenaddis@gmail.com</p>
                          </div>
                        </div>
                      </div>

                      <div className="mb-12 w-full md:w-6/12 md:px-3 lg:px-6">
                        <div className="flex items-start">
                          <div className="shrink-0">
                            <div className="inline-block p-4 text-orange-600">
                              <Instagram size={40} />
                            </div>
                          </div>
                          <div className="ml-6 grow">
                            <p className="mb-2 font-bold text-white">Instagram</p>
                            <a
                                href="https://instagram.com/Instagram.wolfdenaddis"
                                target="_blank"
                                rel="noreferrer"
                                className="text-white"
                            >
                              Instagram.wolfdenaddis
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="mb-12 w-full md:w-6/12 md:px-3 lg:px-6">
                        <div className="flex items-start">
                          <div className="shrink-0">
                            <div className="inline-block p-4 text-orange-600">
                              <Youtube size={50} />
                            </div>
                          </div>
                          <div className="ml-6 grow">
                            <p className="mb-2 font-bold text-white">Youtube</p>
                            <a
                                href="https://www.youtube.com/@Wolf-f7r"
                                target="_blank"
                                rel="noreferrer"
                                className="text-white"
                            >
                              wolfden
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
  );
};

export default Contacts;
