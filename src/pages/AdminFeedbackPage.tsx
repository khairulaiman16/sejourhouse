import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { MoreVertical, Trash2 } from "lucide-react";

interface Feedback {
  id: string;
  name: string;
  enjoy_most: string;
  improvement: string;
  rating: number;
  created_at: string;
}

export default function AdminFeedbackPage() {
  const [feedbackList, setFeedbackList] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState<string | null>(null);

  // Fetch all feedback
  useEffect(() => {
    const fetchFeedback = async () => {
      const { data, error } = await supabase
        .from("feedback")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching feedback:", error.message);
      } else {
        setFeedbackList(data || []);
      }
      setLoading(false);
    };

    fetchFeedback();
  }, []);

  // Handle delete
  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this feedback?");
    if (!confirmDelete) return;

    const { error } = await supabase.from("feedback").delete().eq("id", id);
    if (error) {
      console.error("Error deleting feedback:", error.message);
      alert("Failed to delete feedback");
    } else {
      setFeedbackList((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-[#373643] mb-6">Admin Feedback Dashboard</h1>

      {loading ? (
        <p className="text-gray-500">Loading feedback...</p>
      ) : feedbackList.length === 0 ? (
        <p className="text-gray-500">No feedback yet.</p>
      ) : (
        <div className="w-full max-w-6xl overflow-hidden rounded-xl bg-white shadow-lg">
          <table className="w-full border-collapse">
            <thead className="bg-[#18cb96]/10">
              <tr>
                <th className="p-4 text-left text-[#373643] font-semibold">Name</th>
                <th className="p-4 text-left text-[#373643] font-semibold">Enjoy Most</th>
                <th className="p-4 text-left text-[#373643] font-semibold">Improvement</th>
                <th className="p-4 text-left text-[#373643] font-semibold">Rating</th>
                <th className="p-4 text-right text-[#373643] font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {feedbackList.map((fb) => (
                <tr
                  key={fb.id}
                  className="border-b last:border-none hover:bg-gray-50 transition-colors"
                >
                  <td className="p-4">{fb.name}</td>
                  <td className="p-4">{fb.enjoy_most}</td>
                  <td className="p-4">{fb.improvement}</td>
                  <td className="p-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-xl ${
                            i < fb.rating ? "text-[#18cb96]" : "text-gray-300"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-4 text-right relative">
                    <button
                      onClick={() => setMenuOpen(menuOpen === fb.id ? null : fb.id)}
                      className="p-2 hover:bg-gray-100 rounded-full transition"
                    >
                      <MoreVertical size={18} className="text-gray-500" />
                    </button>
                    {menuOpen === fb.id && (
                      <div className="absolute right-6 mt-2 bg-white border border-gray-200 rounded-lg shadow-md w-28 z-10">
                        <button
                          onClick={() => handleDelete(fb.id)}
                          className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition"
                        >
                          <Trash2 size={14} /> Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
