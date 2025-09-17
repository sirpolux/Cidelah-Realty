import { motion } from "framer-motion";
import Layout from "./Layout";
import md from "../../../public/img/MD_construction.jpg";

export default function About() {
    return (
        <Layout>
            <section className="bg-white text-gray-800">

                {/* Hero */}
                <div className="relative h-[35vh] w-full">
                    {/* <img
                        src="/img/about-hero.jpg"
                        alt="About Cidelah Realty"
                        className="absolute inset-0 w-full h-full object-cover"
                    /> */}
                    <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="text-4xl md:text-5xl font-bold text-white"
                        >
                            <span className="px-6 md:px-12 md:text-5xl">About Cidelah Realty</span>
                        </motion.h1>
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 text-yellow-600">Our Mission</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Delivering quality projects on time, affordably, with outstanding client service.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 text-yellow-600">Our Vision</h2>
                        <p className="text-gray-700 leading-relaxed">
                            To be the industry leader in on-time, quality, and affordable project delivery
                            that exceeds client expectations.
                        </p>
                    </div>
                </div>

                {/* History */}
                <div className="bg-gray-50 py-16">
                    <div className="container mx-auto px-6 max-w-4xl text-center">
                        <h2 className="text-2xl font-semibold mb-6 text-gray-900">Our Story</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Founded in 2025, Cidelah Realty is a construction company driven by passion,
                            innovation, and a commitment to quality. We are dedicated to building more
                            than just structures — we’re crafting spaces that inspire and connect communities.
                            With a team of experienced professionals and a focus on customer satisfaction,
                            we are your trusted partner for exceptional construction service.
                        </p>
                    </div>
                </div>

                {/* Team Members */}
                <div className="container mx-auto px-6 py-16">
                    <h2 className="text-2xl font-semibold mb-8 text-center text-gray-900">Meet Our Team</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {/* Example team member */}
                        <div className="bg-white shadow-lg rounded-xl overflow-hidden text-center p-6 hover:shadow-xl transition">
                            <img
                                src={md}
                                alt="Abdulrazak Ibrahim"
                                className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
                            />
                            <h3 className="text-lg font-semibold">ABDULRAZAK IBRAHIM</h3>
                            <p className="text-sm text-gray-500">MD / CEO</p>
                        </div>

                        {/* Add more team members here when available */}
                    </div>
                </div>
            </section>
        </Layout>

    );
}
