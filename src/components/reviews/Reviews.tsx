// src/components/reviews/Reviews.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { reviews } from "../../data/reviewsData";


export default function Reviews() {
const [index, setIndex] = useState(0);


const nextReview = () => setIndex((prev) => (prev + 1) % reviews.length);
const prevReview = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);


return (
<section id="reviews" className="bg-gray-50 py-20 px-6">
<div className="max-w-5xl mx-auto text-center relative">
{/* Section Title */}
<motion.h2
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, ease: "easeOut" }}
viewport={{ once: true }}
className="text-3xl md:text-4xl font-semibold text-[#373643] mb-3"
>
What Our Guests Say
</motion.h2>


<motion.div
initial={{ width: 0 }}
whileInView={{ width: 80 }}
transition={{ duration: 0.6, delay: 0.2 }}
viewport={{ once: true }}
className="h-1 bg-[#18cb96] mx-auto rounded-full mb-12"
/>


{/* Carousel Wrapper */}
<div className="relative flex items-center justify-center">
{/* Left Arrow */}
<button
onClick={prevReview}
className="absolute left-0 md:-left-10 text-[#373643] hover:text-[#18cb96] transition"
>
<ChevronLeft size={32} />
</button>


{/* Review Card */}
<motion.div
key={index}
initial={{ opacity: 0, x: 50 }}
animate={{ opacity: 1, x: 0 }}
exit={{ opacity: 0, x: -50 }}
transition={{ duration: 0.5 }}
className="bg-white rounded-2xl shadow-md p-8 max-w-lg mx-auto"
>
<div className="flex flex-col items-center">
<img
src={reviews[index].photo}
alt={reviews[index].name}
className="w-20 h-20 object-cover rounded-full shadow mb-4"
/>
<h3 className="font-semibold text-lg text-[#373643] mb-2">
{reviews[index].name}
</h3>
<div className="flex justify-center mb-4">
{Array.from({ length: reviews[index].rating }).map((_, i) => (
<Star key={i} size={18} className="text-[#18cb96] fill-[#18cb96]" />
))}
</div>
<p className="text-gray-600 text-sm md:text-base italic">
“{reviews[index].text}”
</p>
</div>
</motion.div>


{/* Right Arrow */}
<button
onClick={nextReview}
className="absolute right-0 md:-right-10 text-[#373643] hover:text-[#18cb96] transition"
>
<ChevronRight size={32} />
</button>
</div>
</div>
</section>
);
}