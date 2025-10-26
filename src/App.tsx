import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

// HomePage Component (your existing landing layout)
function HomePage() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
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

// Main App with Routing
export default function App() {
  return (
    <Router>
      <Routes>
        {/* Main Landing Page */}
        <Route path="/" element={<HomePage />} />

        {/* Feedback Page */}
        <Route path="/feedback" element={<FeedbackPage />} />

        {/* AdminFeedback Page */}
        <Route path="/admin-feedback" element={<AdminFeedbackPage />} />

      </Routes>
    </Router>
  );
}
