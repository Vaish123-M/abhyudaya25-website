import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function EventsPage({ onNavigate }) {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [flippedCard, setFlippedCard] = useState(null);
  const parallaxRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const bgTranslateX = useTransform(mouseX, [0, 1], [-10, 10]);
  const bgTranslateY = useTransform(mouseY, [0, 1], [-8, 8]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!parallaxRef.current) return;
      const rect = parallaxRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const events = [
    {
      id: 1,
      title: "Ultimate Socio Technocrat",
      description: "A unique blend of social awareness and technical expertise competition",
      detailText: "Compete as a socially conscious technocrat—solve civic-tech problems with impact-first thinking.",
      route: "event-ultimate-socio-technocrat",
      icon: "⚙️",
      category: "tech"
    },
    {
      id: 2,
      title: "Pragyan Lecture Series",
      description: "Two enlightening lectures by eminent speakers with insights and Q&A",
      detailText: "An inspiring two-part lecture series—perspectives, insights, and interactive sessions.",
      route: "event-pragyan-lecture-series",
      icon: "🎤",
      category: "intellectual"
    },
    {
      id: 3,
      title: "Pragyan Panel Discussion",
      description: "Insightful panel discussion bringing diverse perspectives",
      detailText: "Experts debate contemporary topics—hear multiple sides and ask questions.",
      route: "event-pragyan-panel",
      icon: "💬",
      category: "intellectual"
    },
    {
      id: 4,
      title: "Group Discussion",
      description: "Showcase your communication and critical thinking in a group setting",
      detailText: "Participate in structured discussions on contemporary topics.",
      route: "event-group-discussion",
      icon: "🗣",
      category: "intellectual"
    },
    {
      id: 5,
      title: "Speech Competition",
      description: "Express yourself and showcase your oratory skills",
      detailText: "Craft compelling arguments and deliver memorable speeches.",
      route: "event-speech",
      icon: "🎙️",
      category: "energetic"
    },
    {
      id: 6,
      title: "Reel Making Competition",
      description: "Create stunning short videos and viral content",
      detailText: "Make creative reels—story, edit, and wow the audience.",
      route: "event-reel-making",
      icon: "🎬",
      category: "creative"
    },
    {
      id: 7,
      title: "Drawing Competition",
      description: "Express your creativity through art and illustrations",
      detailText: "Showcase your art skills—theme-based drawing challenge.",
      route: "event-drawing",
      icon: "🎨",
      category: "creative"
    },
    {
      id: 8,
      title: "Treasure Hunt",
      description: "An adventurous quest full of surprises and challenges",
      detailText: "Solve clues, race through campus, and find the treasure!",
      route: "event-treasure-hunt",
      icon: "🗺️",
      category: "energetic"
    },
    {
      id: 9,
      title: "Hackathon",
      description: "Build innovative solutions in a time-bound challenge",
      detailText: "A 24-hour sprint to prototype and pitch your idea.",
      route: "event-hackathon",
      icon: "💻",
      category: "tech"
    },
    {
      id: 10,
      title: "Project Competition",
      description: "Showcase your projects and compete with the best",
      detailText: "Demo your project to judges and the crowd.",
      route: "event-project",
      icon: "🚀",
      category: "tech"
    },
    {
      id: 11,
      title: "Youth Parliament",
      description: "Debate and discuss contemporary issues",
      detailText: "Simulate the parliament—debate policies and propose reforms.",
      route: "event-yuva-sansad",
      icon: "🏛️",
      category: "intellectual"
    },
    {
      id: 12,
      title: "Open Stage",
      description: "Platform for all forms of talent and performances",
      detailText: "Perform anything—music, dance, poetry, stand-up, and more.",
      route: "event-open-stage",
      icon: "🎭",
      category: "filler"
    }
  ];

  // Unified card color scheme - saffron/green with soft cream base
  const unifiedCardStyle = {
    gradient: "from-orange-100 via-amber-100 to-emerald-50",
    darkGradient: "from-orange-400 via-emerald-400 to-sky-400",
    glow: "rgba(249, 115, 22, 0.7)",
    border: "#f97316"
  };

  const gradients = {
    tech: unifiedCardStyle,
    creative: unifiedCardStyle,
    intellectual: unifiedCardStyle,
    energetic: unifiedCardStyle,
    filler: unifiedCardStyle
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div ref={parallaxRef} className="w-full min-h-screen relative overflow-hidden"
      style={{ background: "radial-gradient(circle at 28% 32%, rgba(249,115,22,0.12), transparent 42%), radial-gradient(circle at 78% 50%, rgba(34,197,94,0.12), transparent 38%), linear-gradient(135deg, #f7f1e8, #f4ecdf, #efe2cf)" }}
    >
      {/* Animated Background Gradient */}
      <motion.div className="absolute inset-0 -z-10" style={{ translateX: bgTranslateX, translateY: bgTranslateY }}>
        <div className="absolute top-20 left-1/3 w-80 h-80 bg-orange-400/14 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-emerald-400/14 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-sky-500/14 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/15 via-transparent to-sky-900/10" />
      </motion.div>

      {/* Floating Particle Field */}
      {[...Array(30)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute -z-10 w-2 h-2 rounded-full"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            background: i % 3 === 0 ? '#f97316' : i % 3 === 1 ? '#22c55e' : '#2563eb',
            opacity: 0.6,
            filter: 'blur(1px)',
            boxShadow: '0 0 10px currentColor'
          }}
          animate={{ y: [0, -20, 0], x: [0, 10, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4 + (i % 6), repeat: Infinity, delay: i * 0.1 }}
        />
      ))}

      {/* Page Header */}
      <motion.div 
        className="text-center pt-32 sm:pt-36 md:pt-40 pb-12 sm:pb-16 md:pb-20 relative z-10 px-4 sm:px-6 md:px-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="mb-6 uppercase tracking-widest drop-shadow-2xl overflow-hidden"
          style={{
            fontFamily: 'Poppins, system-ui, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(32px, 7vw, 90px)',
            letterSpacing: '0.15em',
            textShadow: '0 4px 18px rgba(0,0,0,0.25), 0 0 30px rgba(249,115,22,0.45), 0 0 50px rgba(37,99,235,0.3)',
            background: 'linear-gradient(90deg, #f97316, #22c55e, #2563eb)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            display: 'inline-block'
          }}
        >
          {"ABHYUDAYA EVENTS".split("").map((letter, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: -20, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: idx * 0.05,
                ease: "easeOut"
              }}
              style={{ display: "inline-block", marginRight: letter === " " ? "0.3em" : "0" }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-lg sm:text-xl md:text-2xl font-poppins font-bold drop-shadow-lg uppercase tracking-widest">
            {"Discover 12 Amazing Competitions & Experiences".split(" ").map((word, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: [20, -3, 0],
                  color: ["#f97316", "#22c55e", "#2563eb", "#22c55e"]
                }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.9 + idx * 0.08,
                  ease: "easeOut"
                }}
                style={{ 
                  display: "inline-block", 
                  marginRight: "0.35em",
                  textShadow: '0 0 25px rgba(37, 99, 235, 0.35)'
                }}
              >
                {word}
              </motion.span>
            ))}
          </p>
        </motion.div>
        <motion.div 
          className="w-32 h-1.5 mx-auto mt-6 rounded-full shadow-lg relative overflow-hidden"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 128, opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
          style={{ 
            background: 'linear-gradient(90deg, #f97316, #22c55e, #2563eb)',
            boxShadow: "0 0 30px rgba(249, 115, 22, 0.8), 0 0 50px rgba(34, 197, 94, 0.45)" 
          }}
        >
          <motion.div
            className="absolute inset-0 w-full h-full"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)'
            }}
            animate={{
              x: ['-100%', '200%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>

      {/* Events Grid */}
      <motion.div 
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10 relative z-10 px-4 sm:px-6 md:px-8 pb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            variants={cardVariants}
            onMouseEnter={() => setHoveredCard(event.id)}
            onMouseLeave={() => setHoveredCard(null)}
            className="h-full"
          >
            <motion.div
              className="relative h-full rounded-2xl overflow-hidden cursor-pointer group shadow-2xl"
              whileHover={{ y: -12, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              style={{ minHeight: "320px" }}
              onClick={() => setFlippedCard(flippedCard === event.id ? null : event.id)}
            >
              {/* Glowing Background Light */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={hoveredCard === event.id ? { 
                  boxShadow: `0 0 40px ${gradients[event.category].glow}, inset 0 0 30px ${gradients[event.category].glow}` 
                } : { 
                  boxShadow: `0 0 20px ${gradients[event.category].glow.replace('0.7', '0.4')}, inset 0 0 15px ${gradients[event.category].glow.replace('0.7', '0.1')}` 
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Card Background Gradient - Light base with animated overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradients[event.category].gradient} opacity-90`} />
              
              {/* Animated gradient overlay on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${gradients[event.category].darkGradient} opacity-0`}
                animate={hoveredCard === event.id ? { opacity: 0.3 } : { opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Inner Glow Circle - positioned behind */}
              <motion.div
                className="absolute -top-20 -right-20 w-56 h-56 rounded-full blur-3xl"
                style={{ backgroundColor: gradients[event.category].glow.replace('0.7', '0.4') }}
                animate={hoveredCard === event.id ? { scale: 1.2, opacity: 0.6 } : { scale: 1, opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />

              {/* Wooden Texture Overlay */}
              <div 
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,.1) 2px, rgba(0,0,0,.1) 4px),
                    repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,.05) 2px, rgba(255,255,255,.05) 4px)
                  `
                }}
              />

              {/* Radial gradient accent */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: `radial-gradient(circle at ${hoveredCard === event.id ? '30% 30%' : '50% 50%'}, ${gradients[event.category].glow.replace('0.7', '0.2')}, transparent 70%)`
                }}
                animate={hoveredCard === event.id ? { 
                  background: `radial-gradient(circle at 30% 30%, ${gradients[event.category].glow.replace('0.7', '0.3')}, transparent 70%)`
                } : {
                  background: `radial-gradient(circle at 50% 50%, ${gradients[event.category].glow.replace('0.7', '0.1')}, transparent 70%)`
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Content */}
              <div className="relative p-5 sm:p-6 md:p-8 h-full flex flex-col justify-between z-20">
                {/* Icon */}
                <motion.div 
                  className="text-5xl sm:text-6xl mb-3 sm:mb-4 flex justify-center"
                  animate={hoveredCard === event.id ? { scale: 1.25, rotate: [0, 8, -8, 0], filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.7))" } : { scale: 1, rotate: 0, filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.4))" }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  {event.icon}
                </motion.div>

                {/* Title */}
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mb-2 sm:mb-3 text-center uppercase tracking-widest leading-tight" style={{ fontFamily: 'Poppins, system-ui, sans-serif', textShadow: '0 1px 0 rgba(255,255,255,0.6), 0 2px 6px rgba(0,0,0,0.35)', letterSpacing: '0.08em' }}>
                    {event.title}
                  </h3>

                  {/* Description */}
                  <motion.p 
                    className="text-slate-800 text-xs sm:text-sm leading-relaxed text-center font-semibold mt-2"
                    style={{ fontFamily: 'Poppins, system-ui, sans-serif', textShadow: '0 1px 0 rgba(255,255,255,0.5)' }}
                    initial={{ opacity: 0.85 }}
                    animate={hoveredCard === event.id ? { opacity: 1 } : { opacity: 0.85 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    {event.description}
                  </motion.p>
                </div>

                {/* Learn More Button */}
                <motion.button
                  className="mt-4 sm:mt-5 md:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-white/20 backdrop-blur-sm border-2 text-slate-900 font-bold rounded-lg uppercase text-xs sm:text-sm tracking-widest shadow-lg"
                  style={{ borderColor: gradients[event.category].border, fontFamily: 'Poppins, system-ui, sans-serif' }}
                  whileHover={{ 
                    backgroundColor: "rgba(255,255,255,0.35)",
                    boxShadow: `0 0 18px ${gradients[event.category].glow.replace('0.8', '0.75')}`,
                    scale: 1.05,
                    y: -2
                  }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  Learn More
                  {/* Ripple */}
                  <span className="absolute inset-0 overflow-hidden rounded-lg">
                    <motion.span
                      className="absolute left-1/2 top-1/2 w-0 h-0 rounded-full"
                      style={{ background: gradients[event.category].glow.replace('0.7', '0.3') }}
                      whileHover={{ width: 300, height: 300, x: '-50%', y: '-50%', opacity: 0.3 }}
                    />
                  </span>
                </motion.button>
              </div>

              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2"
                animate={hoveredCard === event.id ? { 
                  borderColor: `rgba(${gradients[event.category].border.substring(1).match(/.{1,2}/g).slice(0, 3).map(x => parseInt(x, 16)).join(', ')}, 0.8)`,
                  boxShadow: `0 0 30px ${gradients[event.category].glow.replace('0.7', '0.6')}`
                } : { 
                  borderColor: `rgba(${gradients[event.category].border.substring(1).match(/.{1,2}/g).slice(0, 3).map(x => parseInt(x, 16)).join(', ')}, 0.2)`,
                  boxShadow: `0 0 15px ${gradients[event.category].glow.replace('0.7', '0.2')}`
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Backside overlay (flip effect) */}
              {flippedCard === event.id && (
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-black/80 backdrop-blur-sm flex flex-col items-center justify-between p-6 z-30"
                  initial={{ rotateY: 90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: -90, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  style={{ transformOrigin: 'center' }}
                  onClick={() => setFlippedCard(null)}
                >
                  <div className="text-center">
                    <h4 className="text-white font-black text-lg sm:text-xl md:text-2xl mb-3 uppercase tracking-wide">
                      {event.title}
                    </h4>
                    <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-md">
                      {event.detailText || event.description}
                    </p>
                  </div>
                  <motion.button
                    className="mt-4 px-5 py-3 bg-white text-black font-bold rounded-lg uppercase text-xs sm:text-sm tracking-wider shadow-xl"
                    whileHover={{ scale: 1.06, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => { e.stopPropagation(); onNavigate(event.route || 'events'); }}
                  >
                    Explore
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        className="text-center pt-16 pb-20 relative z-10 px-4 sm:px-6 md:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <p className="text-orange-600 text-xl sm:text-2xl mb-10 font-poppins font-black drop-shadow-lg uppercase tracking-widest" style={{ textShadow: '0 0 25px rgba(249, 115, 22, 0.7)' }}>
          Ready to Participate?
        </p>
        <motion.button
          onClick={() => alert('Register clicked!')}
          className="relative px-12 sm:px-16 md:px-20 lg:px-24 py-5 sm:py-6 md:py-7 lg:py-8 font-black text-xl sm:text-2xl md:text-3xl uppercase tracking-wider overflow-hidden group"
          whileHover={{ scale: 1.08, y: -4 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
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
          <span className="relative text-white drop-shadow-lg font-black" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.5)' }}>
            REGISTER NOW
          </span>

          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </motion.button>
      </motion.div>

      {/* Top Navigation Bar - Match Home Page Exactly */}
      <motion.div 
        className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 via-black/70 to-transparent px-4 sm:px-6 md:px-8 pt-4 pb-3 sm:pt-5 sm:pb-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 max-w-full mt-12 sm:mt-14 md:mt-16">
          {/* Navigation Links - Left Side */}
          <div className="flex flex-wrap gap-3 sm:gap-5 md:gap-7 lg:gap-10 items-center justify-center lg:justify-start">
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
                className="text-white font-black hover:text-[#f97316] transition-colors duration-300 text-base sm:text-lg md:text-2xl uppercase tracking-wider cursor-pointer"
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
        </div>
      </motion.div>
    </div>
  );
}
