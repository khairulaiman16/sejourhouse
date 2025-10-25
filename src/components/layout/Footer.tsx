import { motion } from "framer-motion";
import { MessageCircle, Home } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-100 py-16 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        {/* Logo / Name */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#373643] mb-3">
          SejourHouse
        </h2>
        <p className="text-gray-600 mb-8">Pin your perfect staycation</p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="#"
            className="flex items-center gap-2 border-2 border-[#18cb96] text-[#18cb96] font-medium px-6 py-3 rounded-full hover:bg-[#18cb96] hover:text-white transition"
          >
            <Home size={18} /> Book on Airbnb
          </a>
          <a
            href="https://wa.link/oaa7c6"
            className="flex items-center gap-2 bg-[#18cb96] text-white font-medium px-6 py-3 rounded-full hover:opacity-90 transition"
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-300 w-2/3 mx-auto mb-6" />

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {currentYear} SejourHouse. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}