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
        backgroundColor: "#0b1021",
        backgroundImage: `url(${sketchImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
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
        style={{ backgroundImage: `linear-gradient(135deg, rgba(67,56,202,0.6), rgba(219,39,119,0.6)), url(${coloredImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
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
        className="px-10 py-4 bg-black/80 text-white rounded-full text-xl font-semibold shadow-2xl border border-white/20 relative z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: startColoring ? 0 : 1, y: startColoring ? -10 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: startColoring ? 1 : 1.06 }}
        whileTap={{ scale: startColoring ? 1 : 0.96 }}
      >
        Enter Event
      </motion.button>
    </div>
  );
}
