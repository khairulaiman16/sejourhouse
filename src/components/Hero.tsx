import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Background parallax effect (moves slower than scroll)
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Overlay fade effect (lighter as you scroll down)
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 0.15]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{
          backgroundImage:
            "url('/images/livingroom.jpg')",
          y,
        }}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
      />

      {/* Overlay with Dynamic Opacity */}
      <motion.div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center text-white px-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="tracking-widest text-sm md:text-base mb-3"
        >
          SEJOURHOUSE WELCOMES YOU
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold mb-8"
        >
          Pin your perfect staycation
        </motion.h1>

        <motion.a
          href="https://wa.link/oaa7c6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="inline-block border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-[#373643] transition-colors duration-300"
        >
          Book Now
        </motion.a>
      </motion.div>
    </section>
  );
}
