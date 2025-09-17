import { Phone, Mail, MapPin, Instagram, Facebook, Send, Twitter } from "lucide-react"; 
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
// Note: Send icon will represent Telegram

import logo from "../../../public/img/logo_512x512.png";
import { Link } from "@inertiajs/react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo + Motto */}
        <div>
          <img src={logo}  alt="Cidelah Realty Logo" className="h-12 mb-4" />
          <p className="text-sm text-gray-400">
            Reliable construction, Delivered on time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-yellow-400 cursor-pointer">Home</Link></li>
            <li><Link href={route('about')} className="hover:text-primary">About</Link></li>
            <li><Link href={route('projects')} className="hover:text-primary">Projects</Link></li>
            <li><Link href={route('contact')}   className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Phone size={16} /> 
              <span>08063000001, 08142177183</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> 
              <span>cidelahrealty@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> 
              <span>20 Akinmade Street, Lekki 1, Lagos, Nigeria</span>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            {/* Instagram */}
            <a 
              href="https://www.instagram.com/cidelahreality?igsh=MWttb3JwYmJ4OGVxbw==" 
              target="_blank" 
              className="p-2 rounded-full bg-gray-800 hover:bg-primary transition"
            >
              <Instagram size={18} />
            </a>
            {/* Facebook */}
            <a 
              href="https://www.fb.com/l/6lp1kJRRR" 
              target="_blank" 
              className="p-2 rounded-full bg-gray-800 hover:bg-primary transition"
            >
              <Facebook size={18} />
            </a>
            {/* Telegram */}
            <a 
              href="https://x.com/Cidelah_Realty" 
              target="_blank" 
              className="p-2 rounded-full bg-gray-800 hover:bg-primary transition"
            >
              <FaXTwitter />
            </a>  
            
            <a 
              href="https://wa.me/2348142177183" 
              target="_blank" 
              className="p-2 rounded-full bg-gray-800 hover:bg-primary transition"
            >
              <FaWhatsapp />
            </a>  
            {/* <Smartphone className="mx-auto" size={32} />
          <h2 className="font-bold uppercase">WhatsApp</h2>
          <p>Mon–Fri 9AM–5PM</p>
          <a href="https://wa.me/2349014705204" target="_blank" className="underline">Message Us</a> */}

            
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Cidelah Realty. All rights reserved.
      </div>
    </footer>
  );
}
