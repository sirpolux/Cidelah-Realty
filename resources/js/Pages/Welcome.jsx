//import React from "react";
import { motion } from "framer-motion";

// Cidelah Realty - Homepage (single-file React component)
// Tailwind CSS required in project. Framer Motion is used for animations.
// Replace placeholder images with real images supplied (Datcha Homes etc.)

//import heroImage from "../../../public/img/hero_2.png";
import heroImage from "../../../public/img/view-4.jpg";


import featuredImage1 from "../../../public/img/featured1.png";
import featuredImage2 from "../../../public/img/featured2.png";
import featuredImage3 from "../../../public/img/featured3.png";


import Navbar from "@/Layouts/NavBar";
import Footer from "@/Layouts/Footer";
import Layout from "./Layout";
import { Link, useForm } from "@inertiajs/react";



export default function Welcome(
    {
    featuredImages = [
        featuredImage1,
        featuredImage2,
        featuredImage3,
    ],}) {

        const {data,setData, post, processing, errors, reset} = useForm({   
            "name":"",
            "title":"",
            "sender_email":"",
            "message":""
        });

    return (

        <Layout>
            <main className="min-h-screen bg-gray-50 text-gray-900 antialiased">
                {/* HERO */}
                <section className="relative">
                    <img
                        src={heroImage}
                        alt="Cidelah Realty - hero"
                        className="object-cover h-[85vh] md:h-[100vh] w-full"
                    />

                    {/* Overlay with content */}
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-left px-6 md:px-20 text-left">
                        <div className="max-w-3xl">
                            <motion.h1
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.7 }}
                                className="text-4xl md:text-5xl font-semibold leading-tight text-white"
                            >
                                Cidelah Realty
                            </motion.h1>

                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.15, duration: 0.6 }}
                                className="mt-6 text-base md:text-lg text-gray-100 max-w-2xl mx-auto leading-8"
                            >
                                Cidelah realty is a real estate construction company dedicated to transforming
                                visions into reality through innovative construction solutions. With a focus on
                                quality, reliability, and customer satisfaction, we build spaces that stand the
                                test of time.
                            </motion.p>

                            <motion.blockquote
                                initial={{ scale: 0.98, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.35, duration: 0.5 }}
                                className="mt-8 inline-block rounded-lg border-l-4 border-yellow-400 bg-black/40 p-4 text-yellow-50"
                            >
                                <p className="text-sm md:text-base">“Reliable construction, Delivered on time”</p>
                            </motion.blockquote>

                            <div className="mt-8 flex gap-4 flex-wrap justify-left">
                                <motion.a
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    href="#projects"
                                    className="inline-flex items-center gap-3 rounded-xl bg-primary px-5 py-3 text-white text-sm font-medium shadow-lg"
                                >
                                    <Link href={route('projects')}>
                                        View Featured Project
                                    </Link>

                                </motion.a>

                                <motion.a
                                    whileHover={{ scale: 1.02 }}
                                    className="inline-flex items-center gap-3 rounded-xl border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-secondary"
                                    href="#contact"
                                >
                                    <Link href={route('contact')}>
                                        Contact Us
                                    </Link>

                                </motion.a>
                            </div>
                        </div>
                    </div>
                </section>


                {/* FEATURED PROJECT */}
                <section id="projects" className="container mx-auto px-6 py-20">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-2xl md:text-3xl font-semibold"
                            >
                                Featured Project — Datcha Homes
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.12 }}
                                className="mt-4 text-gray-700"
                            >
                                7 Units Of 3-Floors 5 Bedroom, Maid-room, 2-Lounges, Spacious Kitchen And Dining,
                                Security Room. A premium development focused on durability and high-end finishes.
                            </motion.p>

                            <div className="mt-6 flex gap-4">
                                {/* <a
                                    href="/projects/datcha-homes"
                                    className="rounded-lg border px-4 py-2 text-sm"
                                >
                                    Learn more
                                </a> */}

                                <a
                                    href="/projects"
                                    className="rounded-lg bg-gray-900 px-4 py-2 text-sm text-white hover:bg-primary"
                                >
                                    All Projects
                                </a>
                            </div>

                            <ul className="mt-6 space-y-2 text-sm text-gray-600">
                                <li>
                                    <strong>Location:</strong> Lekki / Orange Island (proposed)
                                </li>
                                <li>
                                    <strong>Delivery:</strong> On-time project management and handover
                                </li>
                            </ul>
                        </div>

                        <div>
                            {/* Responsive image carousel grid */}
                            <div className="md:aspect-[3/2] w-full overflow-hidden rounded-2xl shadow-lg">
                                <motion.div
                                    className="
        h-full w-full 
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
        gap-3 p-3 bg-white
      "
                                    initial=""
                                    animate={{ x: 0 }}
                                >
                                    {featuredImages.map((src, i) => (
                                        <motion.img
                                            key={i}
                                            src={src}
                                            alt={`Datcha Homes ${i + 1}`}
                                            whileHover={{ scale: 1.03 }}
                                            className="object-cover w-full h-full rounded-lg"
                                        />
                                    ))}
                                </motion.div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* ABOUT SNIPPET */}
                <section className="container mx-auto px-6 py-16 bg-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h3
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-xl font-semibold"
                        >
                            About Cidelah Realty
                        </motion.h3>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.08 }}
                            className="mt-4 text-gray-700"
                        >
                            Founded in 2025, Cidelah realty is a construction company driven by passion,
                            innovation and a commitment to quality. We build more than structures — we craft
                            spaces that inspire and connect communities.
                        </motion.p>

                        <div className="mt-6 grid md:grid-cols-3 gap-6">
                            <div className="rounded-xl p-4 border">
                                <h4 className="font-semibold">Mission</h4>
                                <p className="mt-2 text-sm text-gray-600">Delivering quality projects on time,
                                    affordably, with outstanding client service.</p>
                            </div>

                            <div className="rounded-xl p-4 border">
                                <h4 className="font-semibold">Vision</h4>
                                <p className="mt-2 text-sm text-gray-600">To be the industry leader in on-time,
                                    quality, and affordable project delivery that exceeds client expectations.</p>
                            </div>

                            <div className="rounded-xl p-4 border">
                                <h4 className="font-semibold">Founded</h4>
                                <p className="mt-2 text-sm text-gray-600">2025 — Crafting spaces that stand the test of time.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONTACT TEASER (detailed contact page separate) */}
                <section id="contact" className="container mx-auto px-6 py-16">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <motion.h4
                                initial={{ x: -8, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="text-lg font-semibold"
                            >
                                Ready to build with us?
                            </motion.h4>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.08 }}
                                className="mt-3 text-gray-700"
                            >
                                Get in touch to discuss your project. We deliver reliable construction, on time.
                            </motion.p>

                            <div className="mt-4 space-y-2 text-sm text-gray-600">
                                <div>
                                    <strong>Phone:</strong> 08063000001, 08142177183
                                </div>
                                <div>
                                    <strong>Email:</strong> cidelahrealty@gmail.com
                                </div>
                                <div>
                                    <strong>Address:</strong> 20 Akinmade street, Lekki 1, Lagos
                                </div>
                            </div>
                        </div>

                        <div>
                            <motion.div
                                initial={{ scale: 0.98, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.12 }}
                                className="rounded-xl border p-6"
                            >
                                <form className="grid gap-3">
                                    <input
                                        className="w-full rounded-md border px-3 py-2"
                                        placeholder="Your name"
                                    />
                                    <input
                                        className="w-full rounded-md border px-3 py-2"
                                        placeholder="Email or phone"
                                    />
                                    <textarea
                                        className="w-full rounded-md border px-3 py-2"
                                        placeholder="Brief project description"
                                        rows={4}
                                    />
                                    <button className="rounded-md bg-gray-900 px-4 py-2 text-white">
                                        Send enquiry
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* NOTE: Menu and Footer intentionally omitted as requested. */}
            </main>
        </Layout>



    );
}
