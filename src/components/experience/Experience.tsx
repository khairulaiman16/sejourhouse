import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <div className="relative w-full aspect-[4/3] md:aspect-[5/4] overflow-hidden">
            <img
              src="/images/livingroom.jpg" // 🔹 Replace this with your image
              alt="SejourHouse interior"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#373643] mb-3">
            The SejourHouse Experience
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-1 bg-[#18cb96] rounded-full mb-8 mx-auto md:mx-0"
          />

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            Wake up to calm mornings, modern comfort, and the gentle charm of
            Cyberjaya right at your doorstep. SejourHouse is designed for
            travelers who love cozy stays with a touch of style — where comfort
            meets simplicity.
          </p>

          <motion.a
            href="#amenities"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-[#18cb96] text-white font-medium px-8 py-3 rounded-full hover:opacity-90 transition"
          >
            Discover More
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
