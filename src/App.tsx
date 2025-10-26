import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/Hero";
import Amenities from "./components/amenities/Amenities";
import Gallery from "./components/gallery/Gallery";
import Reviews from "./components/reviews/Reviews";
import Footer from "./components/layout/Footer";
import MapSection from "./components/map/MapSection";
import Experience from "./components/experience/Experience";
import Availability from "./components/availability/Availability";
import FeedbackPage from "./pages/FeedbackPage";
import AdminFeedbackPage from "./pages/AdminFeedbackPage";
import NotFoundPage from "./pages/NotFoundPage";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/layout/PageTransition";

function HomePage() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <Experience />
      <Availability />
      <Amenities />
      <Gallery />
      <Reviews />
      <MapSection />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AnimatePresence mode="wait">
      <PageTransition key={location.pathname}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/admin-feedback" element={<AdminFeedbackPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </PageTransition>
    </AnimatePresence>
  );
}
