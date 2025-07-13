import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Head from "next/head";
import About from "../../components/About";

const AboutPage = () => {
  return (
      <div className="bg-black mt-20">
        <Head>
          <title>Wolf Den Lounge</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <div className="bg-black min-h-screen text-gray-300 py-12 px-6 md:px-12 lg:px-24">
          <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold text-green-600 text-center mb-8"
          >
            The Wolf
          </motion.h1>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* First Paragraph (Unpaired) */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
              <p className="text-lg md:text-xl mb-16">
                Wolves are fascinating creatures. A wolf does not talk about strength, loyalty, or leadership. It lives it...
              </p>
            </motion.div>

            {/* Paragraph 2 and Image */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row items-center gap-6"
            >
              <div className="md:w-1/2 relative h-64 w-full rounded-lg overflow-hidden">
                <Image
                    src="/w1.png"
                    alt="Wolf Pack"
                    layout="fill"
                    objectFit="contain"
                    className="opacity-90 hover:opacity-100 transition duration-500"
                />
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <p className="text-lg md:text-xl">
                  Wolves live in packs (family).
                  <span className={"text-green-600"}> At the Wolf Den we consider, and treat, all who enter as family. </span>
                </p>
              </div>
            </motion.div>

            {/* Paragraph 3 and Image */}
            {/*<motion.div*/}
            {/*    initial={{ opacity: 0, x: -50 }}*/}
            {/*    whileInView={{ opacity: 1, x: 0 }}*/}
            {/*    transition={{ duration: 0.8 }}*/}
            {/*    className="flex flex-col md:flex-row items-center gap-6"*/}
            {/*>*/}
            {/*  <div className="md:w-1/2 relative h-64 w-full rounded-lg overflow-hidden">*/}
            {/*    <Image*/}
            {/*        src="/w2.png"*/}
            {/*        alt="Wolf Leaders"*/}
            {/*        layout="fill"*/}
            {/*        objectFit="contain"*/}
            {/*        className="opacity-90 hover:opacity-100 transition duration-500"*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*  <div className="md:w-1/2 text-center md:text-left">*/}
            {/*    <p className="text-lg md:text-xl">*/}
            {/*      Wolf packs are led by a dominant pair (a male and female).*/}
            {/*    </p>*/}
            {/*  </div>*/}
            {/*</motion.div>*/}

            {/* Paragraph 4 and Image */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row items-center gap-6"
            >
              <div className="md:w-1/2 relative h-64 w-full rounded-lg overflow-hidden">
                <Image
                    src="/w3.png"
                    alt="Wolf Loyalty"
                    layout="fill"
                    objectFit="contain"
                    className="opacity-90 hover:opacity-100 transition duration-500"
                />
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <p className="text-lg md:text-xl">
                  Wolves are extremely loyal to their family.
                  <span className={"text-green-600"}> Our staff at the Wolf Den is committed to excellent customer service. We understand that our surival is not only based on the loyalty we receive, but its embedded in the loyalty we give.  </span>
                </p>
              </div>
            </motion.div>

            {/* Paragraph 5 and Image */}
            {/*<motion.div*/}
            {/*    initial={{ opacity: 0, x: -50 }}*/}
            {/*    whileInView={{ opacity: 1, x: 0 }}*/}
            {/*    transition={{ duration: 0.8 }}*/}
            {/*    className="flex flex-col md:flex-row items-center gap-6"*/}
            {/*>*/}
            {/*  <div className="md:w-1/2 relative h-64 w-full rounded-lg overflow-hidden">*/}
            {/*    <Image*/}
            {/*        src="/w4.png"*/}
            {/*        alt="Wolf Hunt"*/}
            {/*        layout="fill"*/}
            {/*        objectFit="contain"*/}
            {/*        className="opacity-90 hover:opacity-100 transition duration-500"*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*  <div className="md:w-1/2 text-center md:text-left">*/}
            {/*    <p className="text-lg md:text-xl">*/}
            {/*      Wolves always hunt together in a coordinated effort.*/}
            {/*      <span className={"text-green-600"}> At the Wolf Den, we follow the same code. All who enter are treated as kin, because here, the pack eats, drinks, and thrives together. </span>*/}
            {/*    </p>*/}
            {/*  </div>*/}
            {/*</motion.div>*/}

            {/* Paragraph 6 and Image */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row items-center gap-6"
            >
              <div className="md:w-1/2 relative h-64 w-full rounded-lg overflow-hidden">
                <Image
                    src="/w5.png"
                    alt="Alpha Wolf"
                    layout="fill"
                    objectFit="contain"
                    className="opacity-90 hover:opacity-100 transition duration-500"
                />
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <p className="text-lg md:text-xl">
                  Nothing hunts the wolf.
                  <span className={"text-green-600"}> The Wolf Den has no competition nor competitors. We strive everyday to be the best because we offer the best in class, elegance, service, and product.  </span>
                </p>
              </div>
            </motion.div>

            {/* Paragraph 7 and Image */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row items-center gap-6"
            >
              <div className="md:w-1/2 relative h-64 w-full rounded-lg overflow-hidden">
                <Image
                    src="/w6.png"
                    alt="Wolf Den"
                    layout="fill"
                    objectFit="contain"
                    className="opacity-90 hover:opacity-100 transition duration-500"
                />
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <p className="text-lg md:text-xl">
                  A den is not where a wolf lives but where they protect their own.
                  <span className={"text-green-600"}> There are many different types of wolves, but there is only one wolf. There are many different types of Ethiopians, but there is only one Ethiopian. At the Wolf Den we advocate for a safe environment for our customers and for our staff.  </span>
                </p>

              </div>
            </motion.div>



              {/* First Paragraph (Unpaired) */}
              <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center"
              >
                <p className="text-lg md:text-xl mt-16">
                  When you add strength + loyalty + leadership, it equals what is at the core of every wolf - family! Here at our lounge we embrace the wolf. We can welcome you in, but we can also welcome you out. Choose your path.....<span className={"text-green-600"}>  Welcome to the Wolf Den!</span>
                </p>

                <div className=" relative h-100 w-full rounded-lg overflow-hidden mt-7">
                  <Image
                      src="/w7.png"
                      alt="Wolf Den"
                      layout="fill"
                      objectFit="contain"
                      className="opacity-90 hover:opacity-100 transition duration-500"
                  />
                </div>
              </motion.div>
          </div>

          {/* About Component */}
          <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="mt-16"
          >
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="mt-16"
            >
              <motion.div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-12 bg-black bg-opacity-50">
                {/* Heading */}
                <motion.h2
                    className="text-6xl font-bold text-white text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                  <span className="text-green-600">Wolf Den</span>
                </motion.h2>

                {/* Image Grid */}
                <motion.div
                    className="mt-10 grid md:grid-cols-3 gap-6 max-w-6xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                  {/* First Image */}
                  <div className="relative">
                    <Image
                        src="/about1.jpeg"
                        width={500}
                        height={350}
                        objectFit="cover"
                        className="rounded-lg shadow-lg"
                        alt="Elegant lounge interior"
                    />
                  </div>

                  {/* Second Image */}
                  <div className="relative">
                    <Image
                        src="/about2.jpeg"
                        width={500}
                        height={350}
                        objectFit="cover"
                        className="rounded-lg shadow-lg"
                        alt="Premium cocktails served"
                    />
                  </div>

                  {/* Third Image */}
                  <div className="relative">
                    <Image
                        src="/about3.jpg"
                        width={500}
                        height={350}
                        objectFit="cover"
                        className="rounded-lg shadow-lg"
                        alt="Luxurious seating area"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <Footer />
      </div>
  );
};

export default AboutPage;