import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import sketchImg from "../assets/sketch.png";
import coloredImg from "../assets/colored.png";

export default function IntroScreen({ onEnter }) {
  const [loaded, setLoaded] = useState(false);
  const [startColoring, setStartColoring] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 300);
  }, []);

  const handleEnterClick = () => {
    setStartColoring(true);

    // Navigate to main screen after animation completes
    setTimeout(() => {
      onEnter();
    }, 1800);
  };

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background: "radial-gradient(circle at 30% 30%, rgba(251,191,36,0.15), transparent 40%), radial-gradient(circle at 80% 50%, rgba(251,146,60,0.15), transparent 35%), linear-gradient(135deg, #f5ebe0, #f4e8db, #eddcc8)",
        backgroundImage: `url(${sketchImg})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "background 900ms ease"
      }}
    >
      {/* Sketch Base Layer Fade-in */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: loaded ? 1 : 0, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />

      {/* Colored overlay that blooms over the sketch */}
      <motion.div
        className="absolute inset-0"
        style={{ 
          backgroundImage: `linear-gradient(135deg, rgba(217,119,6,0.4), rgba(245,158,11,0.4)), url(${coloredImg})`, 
          backgroundSize: "100% 100%", 
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: startColoring ? 1 : 0, scale: startColoring ? 1 : 1.03 }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />

      {/* Subtle color-wash pulse during transition */}
      {startColoring && (
        <motion.div
          className="absolute inset-0"
          style={{ background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.25), transparent 45%)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      )}

      {/* Enter Button */}
      <motion.button
        onClick={handleEnterClick}
        className="px-8 sm:px-12 py-4 sm:py-5 text-white rounded-full text-lg sm:text-2xl font-black shadow-2xl border-2 border-amber-400/50 relative z-20 uppercase tracking-wider"
        style={{
          background: "linear-gradient(135deg, #d97706, #f59e0b, #ea580c)",
          boxShadow: "0 0 40px rgba(245, 158, 11, 0.8), inset 0 0 20px rgba(255, 255, 255, 0.2)"
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: startColoring ? 0 : 1, y: startColoring ? -10 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ 
          scale: startColoring ? 1 : 1.08,
          boxShadow: startColoring ? undefined : "0 0 60px rgba(245, 158, 11, 1), inset 0 0 30px rgba(255, 255, 255, 0.3)"
        }}
        whileTap={{ scale: startColoring ? 1 : 0.96 }}
      >
        Enter Event
      </motion.button>
    </div>
  );
}
