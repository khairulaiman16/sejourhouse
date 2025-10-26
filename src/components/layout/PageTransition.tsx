import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size once on mount
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // ✅ TypeScript-safe transition object
  const transition = {
    duration: isMobile ? 0.6 : 0.4,
    ease: [0.25, 0.1, 0.25, 1], // equivalent to "easeOut"
  } as const;

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: isMobile ? 20 : 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: isMobile ? -20 : -10 }}
      transition={transition}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}
