import { motion } from "framer-motion";

export default function MapSection() {
  return (
    <section id="map" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-[#373643] mb-3"
        >
          Where We Are
        </motion.h2>

        {/* Underline Accent */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="h-1 bg-[#18cb96] mx-auto rounded-full mb-6"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-xl mx-auto mb-12"
        >
          At the heart of Cyberjaya — minutes away from the city’s favorite cafes,
          shopping, and tranquil lakeside views.
        </motion.p>

        {/* Google Map Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg"
        >
          <iframe
  title="SejourHouse Location"
  src="https://www.google.com/maps/embed?pb=!3m2!1sen!2smy!4v1761384972728!5m2!1sen!2smy!6m8!1m7!1s6Xmp8S9s_1bQHfXPG1GJrQ!2m2!1d2.921817082886727!2d101.6500142742834!3f44.246988266103145!4f6.1656246113110456!5f0.7820865974627469"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

        </motion.div>
      </div>
    </section>
  );
}
