import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Send, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";
import Layout from "./Layout";

export default function Contact() {
  return (
    <Layout>
    <section className="container mx-auto px-6 py-20 mt-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Contact Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <img
            src="/img/contact-person.jpg" // ✅ Replace with real image
            alt="Contact Person"
            className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
          />
        </motion.div>

        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600">
            Reach out to Cidelah Realty — we’re here to answer your questions and help you with your real estate needs.
          </p>

          <div className="flex flex-col gap-4 text-gray-700">
            <div className="flex items-center gap-3">
              <Phone className="text-yellow-600" /> 
              <span>08063000001, 08142177183</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-yellow-600" /> 
              <span>cidelahrealty@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-yellow-600" /> 
              <span>20 Akinmade Street, Lekki 1, Lagos, Nigeria</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-yellow-600" /> 
              <span>Mon - Sat: 8:00am - 5:00pm</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <a href="https://instagram.com/Cidelahrealty" target="_blank" className="p-3 rounded-full bg-gray-100 hover:bg-yellow-500 hover:text-white transition">
              <Instagram size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" className="p-3 rounded-full bg-gray-100 hover:bg-yellow-500 hover:text-white transition">
              <Facebook size={20} />
            </a>
            <a href="https://t.me/yourtelegram" target="_blank" className="p-3 rounded-full bg-gray-100 hover:bg-yellow-500 hover:text-white transition">
              <Send size={20} />
            </a>
            <a
              href="https://wa.me/2348063000001"
              target="_blank"
              className="p-3 rounded-full bg-gray-100 hover:bg-green-500 hover:text-white transition"
            >
              <MessageCircle size={20} />
            </a>
          </div>

          {/* CTA */}
          <div className="mt-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-yellow-500 px-5 py-3 text-white font-medium shadow hover:bg-yellow-600 transition"
            >
              Explore Our Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
    </Layout>

  );
}
