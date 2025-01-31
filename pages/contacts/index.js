import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { MailOpen, Phone, Smartphone, MessageSquareText } from 'lucide-react';
const Contacts = () => {
  return (
    <div className="bg-black ">
      <Navbar />
      <section class="bg-black mt-20">
        <div
          id="map"
          class="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-black"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
            width="100%"
            height="480"
            allowfullscreen=""
            loading="lazy"
            className="opacity-70 hover:opacity-100"
          ></iframe>
        </div>
        <div class="container px-6 md:px-12">
          <div class="block rounded-lg bg-black px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-2 border-orange-600">
            <div class="flex flex-wrap">
              <div class="flex justify-center">
                <div class="text-center md:max-w-xl lg:max-w-3xl">
                  <h2 class="mb-12 px-6 text-3xl text-orange-600 font-bold">Contact us</h2>
                </div>
              </div>

              <div class="flex flex-wrap">
                <form class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                  <div class="mb-3 w-full ">
                    <label
                      class="block font-medium mb-[2px] text-orange-600"
                      htmlFor="exampleInput90"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      class="px-2 py-2 border w-full bg-white outline-none rounded-md"
                      id="exampleInput90"
                      placeholder="Name"
                    />
                  </div>

                  <div class="mb-3 w-full">
                    <label
                      class="block font-medium mb-[2px] text-orange-600"
                      htmlFor="exampleInput90"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      class="px-2 bg-white py-2 border w-full outline-none rounded-md"
                      id="exampleInput90"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div class="mb-3 w-full">
                    <label
                      class="block font-medium mb-[2px] text-orange-600"
                      htmlFor="exampleInput90"
                    >
                      Message
                    </label>
                    <textarea
                      class="px-2  bg-white py-2 border rounded-[5px] w-full outline-none"
                      name=""
                      id=""
                    ></textarea>
                  </div>

                  <button
                    type="button"
                    class="mb-6 inline-block w-full rounded bg-orange-600 px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-orange-700"
                  >
                    Send
                  </button>
                </form>

                <div class="w-full mt-10 shrink-0 grow-0 basis-auto lg:w-7/12">
                  <div class="flex flex-wrap text-orange-600">
                    <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                      <div class="flex items-start">
                        <div class="shrink-0">
                          <div class="inline-block rounded-md bg-orange-600-100 p-4 text-orange-600">
                            <Phone size={40} />
                          </div>
                        </div>
                        <div class="ml-6 grow">
                          <p class="mb-2 font-bold">Phone Number</p>
                          <p class="text-white ">+1 234-567-89</p>
                        </div>
                      </div>
                    </div>
                    <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                      <div class="flex items-start">
                        <div class="shrink-0">
                          <div class="inline-block rounded-md bg-orange-600-100 p-4 text-orange-600">
                            <MailOpen size={40} />
                          </div>
                        </div>
                        <div class="ml-6 grow">
                          <p class="mb-2 font-bold ">Email</p>
                          <p class="text-white ">sales@example.com</p>
                        </div>
                      </div>
                    </div>
                    <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                      <div class="align-start flex">
                        <div class="shrink-0">
                          <div class="inline-block rounded-md bg-orange-600-100 p-4 text-orange-600">
                            <MessageSquareText size={40} />
                          </div>
                        </div>
                        <div class="ml-6 grow">
                          <p class="mb-2 font-bold ">Text</p>
                          <p class="text-white ">+1 234-567-89</p>
                        </div>
                      </div>
                    </div>
                    <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                      <div class="align-start flex">
                        <div class="shrink-0">
                          <div class="inline-block rounded-md bg-orange-600-100 p-4 text-orange-600">
                            <Smartphone size={40} />
                          </div>
                        </div>
                        <div class="ml-6 grow">
                          <p class="mb-2 font-bold">Mobile</p>
                          <p class="text-white">+1 234-567-89</p>
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
