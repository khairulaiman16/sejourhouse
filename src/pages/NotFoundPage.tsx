import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-md mx-auto"
      >
        <h1 className="text-8xl font-bold text-[#18cb96] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[#373643] mb-2">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-500 mb-8">
          Looks like this page went on a staycation of its own 😅 <br />
          Don’t worry — let’s get you back home.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#18cb96] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:opacity-90 transition-all duration-300"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
