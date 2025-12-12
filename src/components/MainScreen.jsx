import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import coloredImg from "../assets/colored.png";

export default function MainScreen({ onNavigate }) {
  const [reveal, setReveal] = useState(false);
  const [showUi, setShowUi] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const revealTimer = setTimeout(() => setReveal(true), 120);
    const uiTimer = setTimeout(() => setShowUi(true), 900);
    return () => {
      clearTimeout(revealTimer);
      clearTimeout(uiTimer);
    };
  }, []);

  useEffect(() => {
    // Set event date to February 8, 2026
    const eventDate = new Date('2026-02-08T23:59:59').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const CountdownBox = ({ value, label }) => (
    <motion.div 
      className="flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white/20 backdrop-blur-md rounded-lg px-6 py-4 sm:px-7 sm:py-5 md:px-8 md:py-5 min-w-[88px] sm:min-w-[100px] md:min-w-[110px] border-2 border-white">
        <div className="text-4xl sm:text-5xl md:text-7xl font-black text-white font-mono">
          {String(value).padStart(2, '0')}
        </div>
      </div>
      <div className="text-white text-sm sm:text-base md:text-lg font-semibold mt-3 uppercase tracking-widest">
        {label}
      </div>
    </motion.div>
  );

  return (
    <div className="w-full h-screen relative overflow-hidden" style={{ background: "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.25), transparent 35%), radial-gradient(circle at 80% 50%, rgba(219,39,119,0.25), transparent 32%), #0b0d1a" }}>
      {/* Colored hero image fades in after intro */}
      <motion.div
        className="absolute inset-0"
        style={{ backgroundImage: `url(${coloredImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: reveal ? 1 : 0, scale: reveal ? 1 : 1.03 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Top Bar - Navigation and Countdown on Same Line */}
      {showUi && (
        <motion.div 
          className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/60 to-transparent px-8 py-6"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 max-w-full">
          {/* Navigation Links - Left Side */}
          <div className="flex flex-wrap gap-5 sm:gap-7 md:gap-10 items-center">
            {['HOME', 'EVENTS', 'THEME', 'ABOUT US', 'CONTACT'].map((item, index) => (
              <motion.button
                key={item}
                onClick={() => {
                  if (item === 'EVENTS') onNavigate('events');
                  if (item === 'HOME') onNavigate('home');
                  if (item === 'THEME') onNavigate('theme');
                  if (item === 'ABOUT US') onNavigate('about');
                  if (item === 'CONTACT') onNavigate('contact');
                }}
                className="text-white font-black hover:text-[#FFB6C1] transition-colors duration-300 text-base sm:text-lg md:text-2xl uppercase tracking-wider cursor-pointer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Countdown Timer - Right Side */}
          <motion.div 
            className="flex gap-3 sm:gap-4 md:gap-6 items-center flex-wrap"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <CountdownBox value={timeLeft.days} label="Days" />
            <div className="text-white text-3xl sm:text-4xl md:text-6xl font-black">:</div>
            <CountdownBox value={timeLeft.hours} label="Hours" />
            <div className="text-white text-3xl sm:text-4xl md:text-6xl font-black">:</div>
            <CountdownBox value={timeLeft.minutes} label="Minutes" />
          </motion.div>
        </div>
        </motion.div>
      )}

      {/* Register Button - Bottom Right */}
      {showUi && (
        <motion.div 
          className="absolute bottom-10 right-8 sm:bottom-12 sm:right-12 z-40"
          initial={{ opacity: 0, scale: 0.8, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
        >
        <motion.button
          onClick={() => alert('Register clicked!')}
          className="relative px-16 sm:px-18 md:px-20 py-6 sm:py-7 md:py-8 font-black text-2xl sm:text-3xl uppercase tracking-wider overflow-hidden group"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Wooden Background with texture */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-amber-700 via-amber-900 to-amber-800 shadow-2xl border-4 border-amber-600" 
            style={{
              backgroundImage: `
                repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,.1) 2px, rgba(0,0,0,.1) 4px),
                repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,.1) 2px, rgba(255,255,255,.1) 4px),
                linear-gradient(135deg, rgba(139, 90, 43, 0.8), rgba(160, 82, 45, 0.8))
              `,
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 8px 16px rgba(0,0,0,0.6)'
            }}
          />
          
          {/* Glow effect on hover */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500/0 via-red-400/0 to-red-500/0 group-hover:from-red-500/30 group-hover:via-red-400/40 group-hover:to-red-500/30 transition-all duration-300 blur-md" />
          
          {/* Text with shadow */}
          <span className="relative text-white drop-shadow-lg font-black text-2xl sm:text-3xl" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.5)' }}>
            REGISTER
          </span>

          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </motion.button>
        </motion.div>
      )}

      {/* Abhyudaya '25 text bottom-left */}
      {showUi && (
        <motion.div
          className="absolute left-6 bottom-6 z-40"
          initial={{ opacity: 0, x: -18, y: 18 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
        >
          <motion.span
            className="text-white font-black cursor-pointer"
            style={{
              fontFamily: "Poppins, system-ui, sans-serif",
              letterSpacing: "0.12em",
              fontSize: "clamp(32px, 5vw, 60px)",
              textShadow: "0 4px 18px rgba(0,0,0,0.35), 0 0 24px rgba(219,39,119,0.55)",
              background: "linear-gradient(90deg, #a78bfa, #ec4899)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              display: "inline-block"
            }}
            initial={{ opacity: 0, scale: 0.8, y: 18, rotate: -2 }}
            animate={{
              opacity: 1,
              scale: [0.98, 1.18, 1.02, 1],
              y: [10, -12, 4, 0],
              rotate: [-2, 1, -0.5, 0]
            }}
            transition={{
              duration: 2.6,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: 1.4
            }}
            whileHover={{
              scale: 1.1,
              y: -6,
              rotate: 1,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            ABHYUDAYA ’25
          </motion.span>
        </motion.div>
      )}
    </div>
  );
}
