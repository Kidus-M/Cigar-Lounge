import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

const staffMembers = [
    {
        name: "Wongel",
        role: "Operational Manager",
        bio: "Hello. My name is Wongel. I am the operational manager here at Wolf Den. My education is in marketing management. \n" +
            "My work  experience is in 2 customer service , sales, and personal assistant.",
        imageUrl: "/staff2.jpg",
    },
    {
        name: "Blen",
        role: "Social Media and Event Coordinator",
        bio: "Hi. I’m Blen. I am currently studing Marketing Management and will be graduating in 2026. Right now, I oversee the social media platforms for Wolf Den. I enjoy working on creative content, engaging with customers, and learning more about the digital space as I go.",
        imageUrl: "/staff3.jpg",
    },
    {
        name: "Bitanya",
        role: "Social Media and Event Coordinator",
        bio: "Hello. I’m Bitanya. I am a Marketing Management graduate from Unity University. I have work experience in sales, employee training, and team leadership. I oversee the digital marketing at the Wolf Den.",
        imageUrl: "/staff4.jpg",
    },
    {
        name: "Tsegereda",
        role: "Accountant",
        bio: "Hello. I'm Tsegereda. I am an accountant at the Wolf Den Lounge. I hold a Bachelor of Arts in Accounting and have accumulated seven years of experience in accounting and auditing. I am thrilled to be a member of the Wolf Den family. Cheers!.",
        imageUrl: "/staff1.jpg",
    },
];

const StaffPage = () => {
    return (
        <div className="bg-black mt-20">
            <Head>
                <title>Wolf Den Lounge - Meet Our Team</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className="bg-black min-h-screen text-gray-300 py-12 px-6 md:px-12 lg:px-24">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl font-bold text-green-600 text-center mb-24"
                >
                    Meet Our Team
                </motion.h1>

                <div className="max-w-4xl mx-auto space-y-12">
                    {staffMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-center text-center my-24"
                        >
                            <div className="relative h-64 w-64 rounded-lg overflow-hidden mb-6">
                                <Image
                                    src={member.imageUrl}
                                    alt={member.name}
                                    layout="fill"
                                    objectFit="contain"
                                    className="opacity-90 hover:opacity-100 transition duration-500 filter grayscale"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold text-green-600">
                                {member.role}
                            </h3>
                            {/*<p className="text-lg text-gray-400 mt-2">{member.role}</p>*/}
                            <p className="text-lg text-gray-300 mt-4 max-w-md">
                                {member.bio}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default StaffPage;