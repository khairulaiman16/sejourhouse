import { motion } from "framer-motion";
import {
  Wifi,
  Tv,
  Car,
  MapPin,
  Wind,
  MonitorSmartphone,
  Waves,
  ShoppingBag,
  Dumbbell,
  Key,
} from "lucide-react";

const amenities = [
  { icon: Wifi, label: "Free WiFi" },
  { icon: Tv, label: "Free Netflix" },
  { icon: Car, label: "Free Private Parking" },
  { icon: MapPin, label: "At the heart of Cyberjaya" },
  { icon: Wind, label: "Air Conditioning" },
  { icon: MonitorSmartphone, label: "51” Smart TV" },
  { icon: Waves, label: "Pool" },
  { icon: ShoppingBag, label: "Direct Private Access to Mall" },
  { icon: Dumbbell, label: "Gym" },
  { icon: Key, label: "Self Check-In" },
];

export default function Amenities() {
  return (
    <section id="amenities" className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-[#373643] mb-3"
        >
          Amenities
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="h-1 bg-[#18cb96] mx-auto rounded-full mb-12"
        />

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
          {amenities.map(({ icon: Icon, label }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-md mb-3">
                <Icon className="text-[#18cb96] w-6 h-6" />
              </div>
              <p className="text-[#373643] font-medium text-sm md:text-base">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
