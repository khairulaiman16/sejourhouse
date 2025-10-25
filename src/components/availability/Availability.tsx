import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Calendar, CheckCircle, XCircle, X } from "lucide-react";
import { bookedDates } from "../../data/availabilityData";

// Generate next 7 days for weekly preview
const getNextSevenDays = () => {
  const days = [];
  const today = new Date();

  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(today.getDate() + i);

    const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
    const formattedDate = `${date.getFullYear()}-${String(
      date.getMonth() + 1
    ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    const dayNumber = date.getDate();

    const isBooked = bookedDates.includes(formattedDate);
    const status = isBooked ? "booked" : "available";

    days.push({ day: dayName, date: dayNumber, status });
  }

  return days;
};

// Generate full year calendar
const getFullYearCalendar = (year: number) => {
  const months = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let m = 0; m < 12; m++) {
    const firstDay = new Date(year, m, 1);
    const monthName = firstDay.toLocaleString("default", { month: "long" });
    const daysInMonth = new Date(year, m + 1, 0).getDate();

    const days = [];
    for (let d = 1; d <= daysInMonth; d++) {
      const current = new Date(year, m, d);
      current.setHours(0, 0, 0, 0);

      const dateString = `${current.getFullYear()}-${String(
        current.getMonth() + 1
      ).padStart(2, "0")}-${String(current.getDate()).padStart(2, "0")}`;

      const isBooked = bookedDates.includes(dateString);
      const isPast = current < today;
      const isToday = current.toDateString() === today.toDateString();

      days.push({ day: d, booked: isBooked, past: isPast, today: isToday });
    }

    months.push({ name: monthName, days });
  }

  return months;
};

export default function Availability() {
  const [showFullCalendar, setShowFullCalendar] = useState(false);
  const year = new Date().getFullYear();
  const days = getNextSevenDays();
  const months = getFullYearCalendar(year);

  return (
    <section id="availability" className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-[#373643] mb-3"
        >
          Check Availability
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="h-1 bg-[#18cb96] mx-auto rounded-full mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-xl mx-auto mb-12"
        >
          Plan your next stay with us — here’s a quick look at this week’s
          availability.
        </motion.p>

        {/* Weekly Preview */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 mb-6">
          {days.map((day, index) => (
            <div
              key={index}
              className={`p-5 rounded-2xl shadow-md flex flex-col items-center justify-center transition ${
                day.status === "available"
                  ? "bg-white hover:bg-[#e9fdf6]"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <p className="text-sm text-gray-500">{day.day}</p>
              <h4 className="text-2xl font-semibold text-[#373643]">
                {day.date}
              </h4>
              {day.status === "available" ? (
                <CheckCircle className="text-[#18cb96] mt-2" size={22} />
              ) : (
                <XCircle className="text-gray-400 mt-2" size={22} />
              )}
            </div>
          ))}
        </div>

        {/* Show Full Calendar Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setShowFullCalendar(true)}
          className="text-[#18cb96] underline font-medium mb-12"
        >
          Show Full Calendar
        </motion.button>

        {/* Legend */}
        <div className="flex justify-center items-center gap-6 text-sm text-gray-500 mb-10">
          <div className="flex items-center gap-2">
            <CheckCircle size={16} className="text-[#18cb96]" />
            <span>Available</span>
          </div>
          <div className="flex items-center gap-2">
            <XCircle size={16} className="text-gray-400" />
            <span>Booked / Past</span>
          </div>
        </div>

        {/* Book Button */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
          className="inline-flex items-center gap-2 bg-[#18cb96] text-white font-medium px-8 py-3 rounded-full hover:opacity-90 transition"
        >
          <Calendar size={18} /> Book Your Stay
        </motion.a>
      </div>

      {/* Full Calendar Modal */}
      <AnimatePresence>
        {showFullCalendar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            onClick={() => setShowFullCalendar(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl max-h-[90vh] overflow-y-auto w-full max-w-5xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sticky Frosted Header - full top */}
              <div
                className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b shadow-md 
                  bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 rounded-t-2xl"
              >
                <h3 className="text-2xl font-semibold text-[#373643]">
                  Full Availability for {year}
                </h3>
                <button
                  className="text-gray-500 hover:text-[#18cb96] transition"
                  onClick={() => setShowFullCalendar(false)}
                >
                  <X size={28} />
                </button>
              </div>

              {/* Calendar Content */}
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {months.map((month, mIndex) => (
                    <div
                      key={mIndex}
                      className="border rounded-xl p-4 shadow-sm bg-white"
                    >
                      <h4 className="text-lg font-semibold text-[#373643] mb-2">
                        {month.name}
                      </h4>
                      <div className="grid grid-cols-7 gap-1 text-sm text-gray-600">
                        {month.days.map((d, i) => (
                          <div
                            key={i}
                            className={`h-8 w-8 flex items-center justify-center rounded-md border text-xs transition-all duration-200 ${
                              d.today
                                ? "border-[#18cb96] font-bold text-[#18cb96]"
                                : d.past
                                ? "line-through bg-gray-100 text-gray-400"
                                : d.booked
                                ? "line-through bg-gray-100 text-gray-400"
                                : "bg-white hover:bg-[#e9fdf6]"
                            }`}
                          >
                            {d.day}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
