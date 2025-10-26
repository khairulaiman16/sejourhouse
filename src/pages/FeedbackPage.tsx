import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "../lib/supabaseClient";
import { Star } from "lucide-react";

export default function FeedbackPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [enjoyMost, setEnjoyMost] = useState("");
  const [improvement, setImprovement] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !enjoyMost || !improvement || !rating) {
      alert("Please fill in all fields.");
      return;
    }

    setSubmitting(true);

    const { error } = await supabase.from("feedback").insert([
      {
        name,
        enjoy_most: enjoyMost,
        improvement,
        rating,
      },
    ]);

    setSubmitting(false);

    if (error) {
      console.error("Error submitting feedback:", error.message);
      alert("Failed to send feedback. Please try again.");
      return;
    }

    // Show thank you popup and redirect
    setSubmitted(true);
    setTimeout(() => navigate("/"), 2000);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center bg-[#f9f9f9]"
      >
        <div className="bg-white shadow-lg rounded-2xl p-10 text-center max-w-sm">
          <h2 className="text-2xl font-semibold text-[#373643] mb-3">
            Thank you!
          </h2>
          <p className="text-gray-500 mb-4">
            We really appreciate your feedback 💚
          </p>
          <div className="animate-bounce text-[#18cb96] text-3xl">🌿</div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f9f9] p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-lg"
      >
        <h1 className="text-3xl font-bold text-center text-[#373643] mb-6">
          Share Your Experience
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-[#373643] mb-2">
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#18cb96] outline-none"
              placeholder="Enter your name"
            />
          </div>

          {/* Enjoy Most */}
          <div>
            <label className="block text-sm font-medium text-[#373643] mb-2">
              What did you enjoy most?
            </label>
            <textarea
              value={enjoyMost}
              onChange={(e) => setEnjoyMost(e.target.value)}
              rows={2}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#18cb96] outline-none resize-none"
              placeholder="Tell us what you loved"
            />
          </div>

          {/* Improvement */}
          <div>
            <label className="block text-sm font-medium text-[#373643] mb-2">
              What can we do better?
            </label>
            <textarea
              value={improvement}
              onChange={(e) => setImprovement(e.target.value)}
              rows={2}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#18cb96] outline-none resize-none"
              placeholder="We’d love your suggestions"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-[#373643] mb-2">
              Your Rating
            </label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setRating(num)}
                  onMouseEnter={() => setHoverRating(num)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="focus:outline-none"
                >
                  <Star
                    size={32}
                    className={`transition-all duration-200 ${
                      num <= (hoverRating || rating)
                        ? "text-[#18cb96] fill-[#18cb96]"
                        : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitting}
            className={`w-full py-3 rounded-full text-white font-semibold transition-all ${
              submitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#18cb96] hover:bg-[#15b987]"
            }`}
          >
            {submitting ? "Submitting..." : "Submit Feedback"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
