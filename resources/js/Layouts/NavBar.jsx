import { useState } from "react";
import { Menu, X, Home, Info, Phone, Building2, Link } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white/90 backdrop-blur-md shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo + Motto */}
        <div className="flex items-center gap-3">
          <img src="/img/logo.png" alt="Cidelah Realty Logo" className="h-10 w-auto" />
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-gray-800">Cidelah Realty</span>
            <span className="text-xs text-gray-500">Reliable construction, Delivered on time</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#home" className="flex items-center gap-2 text-gray-700 hover:text-yellow-600 transition">
            <Home size={18} /> Home
          </Link>
          <Link href={route('about')} className="flex items-center gap-2 text-gray-700 hover:text-yellow-600 transition">
            <Info size={18} /> About
          </Link>
          <a href="#contact" className="flex items-center gap-2 text-gray-700 hover:text-yellow-600 transition">
            <Phone size={18} /> Contact
          </a>
          <a 
            href="#projects" 
            className="flex items-center gap-2 rounded-lg bg-yellow-500 px-4 py-2 text-white font-medium shadow hover:bg-yellow-600 transition"
          >
            <Building2 size={18} /> Projects
          </a>
        </nav>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden text-gray-700 hover:text-gray-900"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md shadow-lg"
          >
            <ul className="flex flex-col p-6 gap-4 text-gray-700">
              <li>
                <a href="#home" className="flex items-center gap-2 hover:text-yellow-600">
                  <Home size={18} /> Home
                </a>
              </li>
              <li>
                <a href="#about" className="flex items-center gap-2 hover:text-yellow-600">
                  <Info size={18} /> About
                </a>
              </li>
              <li>
                <a href="#contact" className="flex items-center gap-2 hover:text-yellow-600">
                  <Phone size={18} /> Contact
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="flex items-center gap-2 rounded-lg bg-yellow-500 px-4 py-2 text-white font-medium shadow hover:bg-yellow-600 transition"
                >
                  <Building2 size={18} /> Projects
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
