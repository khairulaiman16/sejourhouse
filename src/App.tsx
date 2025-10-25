import Navbar from "./components/layout/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Amenities from "./components/amenities/Amenities.tsx";
import Gallery from "./components/gallery/Gallery.tsx";
import Reviews from "./components/reviews/Reviews.tsx";
import Footer from "./components/layout/Footer.tsx";
import MapSection from "./components/map/MapSection.tsx";
import Experience from "./components/experience/Experience.tsx";
import Availability from "./components/availability/Availability.tsx";

export default function App() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />
      <Experience/>
      <Availability />
      <Amenities />
      <Gallery />
      <Reviews />
      <MapSection />
      <Footer />
    </div>
  );
}

