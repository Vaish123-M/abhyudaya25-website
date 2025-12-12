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
      title: "Pragyan Lecture Series - Lecture 1",
      description: "First lecture in the enlightening Pragyan Lecture Series",
      detailText: "An inspiring talk by eminent speaker—perspectives, insights, and Q&A.",
      route: "event-pragyan-lecture-1",
      icon: "🎤",
      category: "intellectual"
    },
    {
      id: 3,
      title: "Pragyan Lecture Series - Lecture 2",
      description: "Second lecture in the enlightening Pragyan Lecture Series",
      detailText: "Deep-dive session to broaden your understanding and curiosity.",
      route: "event-pragyan-lecture-2",
      icon: "🎤",
      category: "intellectual"
    },
    {
      id: 4,
      title: "Pragyan Panel Discussion",
      description: "Insightful panel discussion bringing diverse perspectives",
      detailText: "Experts debate contemporary topics—hear multiple sides and ask questions.",
      route: "event-pragyan-panel",
      icon: "💬",
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

  // Unified card color scheme - same gold/amber for all cards
  const unifiedCardStyle = {
    gradient: "from-amber-300 via-yellow-300 to-amber-400",
    darkGradient: "from-amber-500 via-yellow-500 to-orange-600",
    glow: "rgba(217, 119, 6, 0.8)",
    border: "#D97706"
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
    <div ref={parallaxRef} className="w-full min-h-screen relative pt-32 pb-16 px-6 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #4338CA, #7C3AED 45%, #DB2777)" }}
    >
      {/* Animated Background Gradient */}
      <motion.div className="absolute inset-0 -z-10" style={{ translateX: bgTranslateX, translateY: bgTranslateY }}>
        <div className="absolute top-20 left-1/3 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-amber-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-900/50" />
      </motion.div>

      {/* Floating Particle Field */}
      {[...Array(20)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute -z-10 w-1.5 h-1.5 rounded-full"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            background: i % 3 === 0 ? '#22d3ee' : i % 3 === 1 ? '#f59e0b' : '#a78bfa',
            opacity: 0.5,
            filter: 'blur(0.5px)'
          }}
          animate={{ y: [0, -12, 0], x: [0, 6, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3 + (i % 5), repeat: Infinity, delay: i * 0.1 }}
        />
      ))}

      {/* Page Header */}
      <motion.div 
        className="text-center mb-10 sm:mb-12 md:mb-16 relative z-10 px-2 sm:px-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="mb-4 uppercase tracking-wide sm:tracking-widest drop-shadow-2xl overflow-hidden"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 900,
            fontSize: 'clamp(24px, 5vw, 72px)',
            color: '#ffffff',
            letterSpacing: 'clamp(0.02em, 0.8vw, 0.15em)',
            textShadow: '0 0 30px rgba(255,255,255,0.85), 0 0 60px rgba(255,255,255,0.55)',
            wordSpacing: '0.2em'
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
          <p className="text-lg sm:text-xl md:text-2xl font-montserrat font-bold drop-shadow-lg uppercase tracking-wide">
            {"Discover 12 Amazing Competitions & Experiences".split(" ").map((word, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: [20, -3, 0],
                  color: ["#67e8f9", "#22d3ee", "#06b6d4", "#22d3ee"]
                }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.9 + idx * 0.08,
                  ease: "easeOut"
                }}
                style={{ 
                  display: "inline-block", 
                  marginRight: "0.3em",
                  textShadow: '0 0 15px rgba(34, 211, 238, 0.7)'
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
            background: 'linear-gradient(90deg, #FCD34D, #FBBF24, #FCD34D)',
            boxShadow: "0 0 30px rgba(252, 211, 77, 1), 0 0 60px rgba(217, 119, 6, 0.7)" 
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
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10 relative z-10 px-4 sm:px-6"
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
                  <h3 className="text-lg sm:text-xl md:text-2xl font-montserrat font-black text-white mb-2 sm:mb-3 text-center uppercase tracking-wide sm:tracking-widest drop-shadow-2xl leading-tight" style={{ textShadow: `0 0 25px ${gradients[event.category].glow.replace('0.8', '0.9')}, 2px 2px 4px rgba(0,0,0,0.8)`, letterSpacing: '0.05em' }}>
                    {event.title}
                  </h3>

                  {/* Description */}
                  <motion.p 
                    className="text-white/95 text-xs sm:text-sm leading-relaxed text-center font-semibold drop-shadow-lg font-montserrat mt-2"
                    initial={{ opacity: 0.85 }}
                    animate={hoveredCard === event.id ? { opacity: 1 } : { opacity: 0.85 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    {event.description}
                  </motion.p>
                </div>

                {/* Learn More Button */}
                <motion.button
                  className="mt-4 sm:mt-5 md:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-white/20 backdrop-blur-sm border-2 text-white font-montserrat font-bold rounded-lg uppercase text-xs sm:text-sm tracking-wider sm:tracking-widest shadow-lg"
                  style={{ borderColor: gradients[event.category].border }}
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
        className="text-center mt-20 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <p className="text-cyan-300 text-xl mb-8 font-montserrat font-bold drop-shadow-lg uppercase tracking-widest" style={{ textShadow: '0 0 20px rgba(34, 211, 238, 0.8)' }}>
          Ready to Participate?
        </p>
        <motion.button
          onClick={() => alert('Register clicked!')}
          className="px-12 sm:px-20 md:px-28 lg:px-32 py-4 sm:py-5 md:py-6 lg:py-7 text-white font-montserrat font-black text-xl sm:text-2xl md:text-3xl rounded-full shadow-2xl border-3 sm:border-4 uppercase tracking-wide sm:tracking-widest"
          style={{ 
            background: "linear-gradient(135deg, #d97706, #b45309, #92400e)",
            borderColor: "#ffdfd0",
            boxShadow: "0 0 40px rgba(255, 223, 208, 0.8), inset 0 0 20px rgba(255, 255, 255, 0.2)"
          }}
          whileHover={{ scale: 1.08, y: -4, boxShadow: "0 0 60px rgba(255, 223, 208, 1), inset 0 0 30px rgba(255, 255, 255, 0.3)" }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          Register Now
        </motion.button>
      </motion.div>

      {/* Navigation Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/70 to-transparent px-8 py-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between max-w-full">
          <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-10 items-center">
            {['HOME', 'EVENTS', 'THEME', 'ABOUT US', 'CONTACT'].map((item, index) => (
              <motion.button
                key={item}
                onClick={() => {
                  if (item === 'HOME') onNavigate('home');
                  if (item === 'EVENTS') onNavigate('events');
                  if (item === 'THEME') onNavigate('theme');
                  if (item === 'ABOUT US') onNavigate('about');
                  if (item === 'CONTACT') onNavigate('contact');
                }}
                className="text-white font-black transition-colors duration-300 text-base sm:text-xl md:text-2xl uppercase tracking-wider cursor-pointer"
                style={{ color: "#ffdfd0", filter: "brightness(1)" }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, color: "#fff" }}
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
