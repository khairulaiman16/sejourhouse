import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className={`text-2xl font-bold transition-colors duration-300 ${
            scrolled ? "text-[#373643]" : "text-white"
          }`}
        >
          SejourHouse
        </div>

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex space-x-8 font-medium transition-colors duration-300 ${
            scrolled ? "text-[#373643]" : "text-white"
          }`}
        >
          {["Home", "Amenities", "Gallery", "Reviews", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`hover:text-[#18cb96] transition-colors duration-200`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Book Now Button */}
       <a
  href="https://wa.link/oaa7c6"
  className="hidden md:inline-block bg-[#18cb96] text-white font-semibold px-5 py-2 rounded-full hover:opacity-90 transition"
>
  Book Now
</a>

{/* Mobile Menu Button */}
<button
  onClick={() => setIsOpen(!isOpen)}
  className="md:hidden text-[#373643] focus:outline-none"
>
  {isOpen ? <X size={28} /> : <Menu size={28} />}
</button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#f9f9f9] shadow-inner px-6 py-4 space-y-4"
        >
          {["Home", "Amenities", "Gallery", "Reviews", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-[#373643] hover:text-[#18cb96] transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="https://wa.link/oaa7c6"
            className="block text-center bg-[#18cb96] text-white font-semibold px-5 py-2 rounded-full hover:opacity-90 transition"
          >
            Book Now
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
