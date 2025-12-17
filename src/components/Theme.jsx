import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Theme({ onNavigate }) {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollYProgress } = useScroll();

  // Track scroll progress for color transition
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(v => setScrollProgress(v));
    return () => unsubscribe();
  }, [scrollYProgress]);

  const themeCards = [
    {
      id: 1,
      nameHindi: "नागरिक कर्तव्य का पालन",
      nameEnglish: "Nagarik Kartavya Ka Palan",
      subtitle: "Civic Duty",
      description: "Being a responsible citizen means fulfilling our duties with dedication. From voting to following traffic rules, every action builds a stronger nation.",
      bgColor: "from-blue-50 to-blue-100",
      accentColor: "blue",
      glowColor: "rgba(59, 130, 246, 0.4)",
      icons: ["🧹", "🚦", "🏛️"],
      illustration: "civic"
    },
    {
      id: 2,
      nameHindi: "पर्यावरण संरक्षण",
      nameEnglish: "Paryavaran Saurakshan",
      subtitle: "Environment Protection",
      description: "Our planet is our home. Through tree planting, waste management, and sustainable living, we protect nature for future generations.",
      bgColor: "from-green-50 to-green-100",
      accentColor: "green",
      glowColor: "rgba(34, 197, 94, 0.4)",
      icons: ["🌳", "💧", "🌍"],
      illustration: "environment"
    },
    {
      id: 3,
      nameHindi: "सामाजिक समरसता",
      nameEnglish: "Samajik Samrasta",
      subtitle: "Social Harmony",
      description: "Unity in diversity is our strength. Embracing all communities with respect and love creates a harmonious society for everyone.",
      bgColor: "from-amber-50 to-amber-100",
      accentColor: "amber",
      glowColor: "rgba(251, 191, 36, 0.4)",
      icons: ["🤝", "❤️", "🕊️"],
      illustration: "harmony"
    },
    {
      id: 4,
      nameHindi: "कुटुम्भ प्रबोधन",
      nameEnglish: "Kutumbh Prabodhan",
      subtitle: "Family Empowerment",
      description: "Strong families build strong nations. Through education, communication, and shared values, we empower every family member.",
      bgColor: "from-rose-50 to-rose-100",
      accentColor: "rose",
      glowColor: "rgba(244, 63, 94, 0.4)",
      icons: ["👨‍👩‍👧‍👦", "📚", "💡"],
      illustration: "family"
    },
    {
      id: 5,
      nameHindi: "स्वदेशी",
      nameEnglish: "Swadeshi",
      subtitle: "Indigenous Pride",
      description: "Supporting local crafts, products, and culture strengthens our economy and preserves our rich heritage for generations.",
      bgColor: "from-orange-50 to-orange-100",
      accentColor: "orange",
      glowColor: "rgba(249, 115, 22, 0.4)",
      icons: ["🇮🇳", "🏺", "🧵"],
      illustration: "swadeshi"
    }
  ];

  // Color transition based on scroll
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const colorProgress = Math.min(scrollProgress * 3, 1);

  const getIllustrationSVG = (type) => {
    switch(type) {
      case 'civic':
        return (
          <svg viewBox="0 0 300 200" className="w-full h-full">
            {/* City street illustration */}
            <path d="M20 180 L280 180" stroke={`rgba(59, 130, 246, ${0.3 + colorProgress * 0.7})`} strokeWidth="3" fill="none"/>
            <rect x="50" y="100" width="60" height="80" fill={`rgba(59, 130, 246, ${0.2 + colorProgress * 0.5})`} stroke={`rgba(59, 130, 246, ${0.4 + colorProgress * 0.6})`} strokeWidth="2"/>
            <rect x="130" y="80" width="50" height="100" fill={`rgba(96, 165, 250, ${0.2 + colorProgress * 0.5})`} stroke={`rgba(59, 130, 246, ${0.4 + colorProgress * 0.6})`} strokeWidth="2"/>
            <rect x="200" y="110" width="55" height="70" fill={`rgba(59, 130, 246, ${0.2 + colorProgress * 0.5})`} stroke={`rgba(59, 130, 246, ${0.4 + colorProgress * 0.6})`} strokeWidth="2"/>
            {/* Traffic light */}
            <circle cx="150" cy="140" r="15" fill={`rgba(239, 68, 68, ${hoveredCard === 1 ? 0.8 : 0.3})`}/>
            <circle cx="150" cy="165" r="15" fill={`rgba(34, 197, 94, ${hoveredCard === 1 ? 0.8 : 0.3})`}/>
          </svg>
        );
      case 'environment':
        return (
          <svg viewBox="0 0 300 200" className="w-full h-full">
            {/* Forest illustration */}
            <ellipse cx="150" cy="180" rx="120" ry="15" fill={`rgba(34, 197, 94, ${0.1 + colorProgress * 0.3})`}/>
            <path d="M150 120 L170 160 L130 160 Z" fill={`rgba(34, 197, 94, ${0.3 + colorProgress * 0.7})`}/>
            <path d="M150 100 L175 150 L125 150 Z" fill={`rgba(74, 222, 128, ${0.3 + colorProgress * 0.7})`}/>
            <path d="M150 80 L180 140 L120 140 Z" fill={`rgba(134, 239, 172, ${0.3 + colorProgress * 0.7})`}/>
            <rect x="145" y="160" width="10" height="20" fill={`rgba(120, 53, 15, ${0.5 + colorProgress * 0.5})`}/>
            {/* Additional trees */}
            <path d="M80 140 L95 170 L65 170 Z" fill={`rgba(34, 197, 94, ${0.4 + colorProgress * 0.6})`}/>
            <path d="M220 145 L235 175 L205 175 Z" fill={`rgba(34, 197, 94, ${0.4 + colorProgress * 0.6})`}/>
            {/* River */}
            <path d="M20 185 Q70 180, 120 185 T 220 185 T 280 185" stroke={`rgba(59, 130, 246, ${0.3 + colorProgress * 0.5})`} strokeWidth="4" fill="none"/>
          </svg>
        );
      case 'harmony':
        return (
          <svg viewBox="0 0 300 200" className="w-full h-full">
            {/* Hands joining in circle */}
            <circle cx="150" cy="100" r="50" fill={`rgba(251, 191, 36, ${hoveredCard === 3 ? 0.3 : 0.1})`} className="transition-all duration-500"/>
            <circle cx="150" cy="100" r="30" fill={`rgba(251, 191, 36, ${hoveredCard === 3 ? 0.5 : 0.2})`} className="transition-all duration-500"/>
            {/* Hands around circle */}
            {[0, 72, 144, 216, 288].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const x = 150 + Math.cos(rad) * 70;
              const y = 100 + Math.sin(rad) * 70;
              return (
                <g key={i}>
                  <circle cx={x} cy={y} r="12" fill={`rgba(${[251, 146, 60][i % 3]}, ${[191, 165, 250][i % 3]}, ${[36, 250, 96][i % 3]}, ${0.4 + colorProgress * 0.6})`}/>
                  <line x1={x} y1={y} x2="150" y2="100" stroke={`rgba(251, 191, 36, ${0.3 + colorProgress * 0.5})`} strokeWidth="2"/>
                </g>
              );
            })}
          </svg>
        );
      case 'family':
        return (
          <svg viewBox="0 0 300 200" className="w-full h-full">
            {/* House silhouette */}
            <path d="M150 50 L250 120 L250 180 L50 180 L50 120 Z" fill={`rgba(244, 63, 94, ${0.1 + colorProgress * 0.3})`} stroke={`rgba(244, 63, 94, ${0.4 + colorProgress * 0.6})`} strokeWidth="2"/>
            <polygon points="150,50 250,120 50,120" fill={`rgba(244, 63, 94, ${0.2 + colorProgress * 0.5})`}/>
            {/* Window with warm glow */}
            <rect x="110" y="130" width="80" height="45" fill={`rgba(251, 191, 36, ${hoveredCard === 4 ? 0.6 : 0.2})`} stroke={`rgba(244, 63, 94, ${0.5 + colorProgress * 0.5})`} strokeWidth="2" rx="3"/>
            <line x1="150" y1="130" x2="150" y2="175" stroke={`rgba(244, 63, 94, ${0.4 + colorProgress * 0.6})`} strokeWidth="2"/>
            <line x1="110" y1="152" x2="190" y2="152" stroke={`rgba(244, 63, 94, ${0.4 + colorProgress * 0.6})`} strokeWidth="2"/>
            {/* Door */}
            <rect x="210" y="145" width="25" height="35" fill={`rgba(244, 63, 94, ${0.3 + colorProgress * 0.5})`} stroke={`rgba(244, 63, 94, ${0.5 + colorProgress * 0.5})`} strokeWidth="2"/>
          </svg>
        );
      case 'swadeshi':
        return (
          <svg viewBox="0 0 300 200" className="w-full h-full">
            {/* Clay pot */}
            <ellipse cx="150" cy="120" rx="40" ry="15" fill={`rgba(249, 115, 22, ${0.3 + colorProgress * 0.5})`}/>
            <path d="M110 120 Q110 80, 130 70 L170 70 Q190 80, 190 120" fill={`rgba(249, 115, 22, ${0.4 + colorProgress * 0.6})`} stroke={`rgba(249, 115, 22, ${0.6 + colorProgress * 0.4})`} strokeWidth="2"/>
            <ellipse cx="150" cy="70" rx="20" ry="8" fill={`rgba(249, 115, 22, ${0.5 + colorProgress * 0.5})`}/>
            {/* Handloom thread pattern */}
            {hoveredCard === 5 && [0, 1, 2, 3, 4].map((i) => (
              <motion.line
                key={i}
                x1="50" y1={150 + i * 8}
                x2="250" y2={150 + i * 8}
                stroke={`rgba(249, 115, 22, ${0.5})`}
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: i * 0.1 }}
              />
            ))}
            {/* Made in India stamp */}
            <circle cx="220" cy="50" r="25" fill="none" stroke={`rgba(249, 115, 22, ${0.5 + colorProgress * 0.5})`} strokeWidth="2"/>
            <text x="220" y="55" textAnchor="middle" fontSize="10" fill={`rgba(249, 115, 22, ${0.7 + colorProgress * 0.3})`} fontWeight="bold">MADE IN</text>
            <text x="220" y="65" textAnchor="middle" fontSize="10" fill={`rgba(249, 115, 22, ${0.7 + colorProgress * 0.3})`} fontWeight="bold">INDIA</text>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="w-full min-h-screen relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 28% 32%, rgba(249,115,22,0.12), transparent 42%), radial-gradient(circle at 78% 50%, rgba(34,197,94,0.12), transparent 38%), linear-gradient(135deg, #f7f1e8, #f4ecdf, #efe2cf)",
      }}
    >
      {/* Animated Background Gradient and Orbs */}
      <motion.div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/3 w-80 h-80 bg-orange-400/14 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute top-1/2 right-1/4 w-96 h-96 bg-emerald-400/14 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-72 h-72 bg-sky-500/14 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/15 via-transparent to-sky-900/10" />
      </motion.div>

      {/* Top Navigation Bar - Match site */}
      <motion.div
        className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 via-black/70 to-transparent px-4 sm:px-6 md:px-8 pt-4 pb-3 sm:pt-5 sm:pb-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 max-w-full mt-12 sm:mt-14 md:mt-16">
          <div className="flex flex-wrap gap-3 sm:gap-5 md:gap-7 lg:gap-10 items-center justify-center lg:justify-start">
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

      {/* Floating Particle Field */}
      {[...Array(24)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute -z-10 w-2 h-2 rounded-full"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            background: i % 3 === 0 ? '#f97316' : i % 3 === 1 ? '#22c55e' : '#2563eb',
            opacity: 0.6,
            filter: 'blur(1px)',
            boxShadow: '0 0 10px currentColor',
          }}
          animate={{ y: [0, -20, 0], x: [0, 10, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4 + (i % 6), repeat: Infinity, delay: i * 0.1 }}
        />
      ))}

      {/* HERO SECTION - Nature Line Art with Color Transition */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36 sm:pt-40 md:pt-44 px-4 sm:px-6"
        style={{ opacity: heroOpacity }}
      >
        {/* Animated Background Illustration */}
        <div className="absolute inset-0 overflow-hidden">
          <svg viewBox="0 0 1200 800" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            {/* Sky */}
            <rect x="0" y="0" width="1200" height="800" fill={`rgba(239, 246, 255, ${colorProgress})`}/>
            
            {/* Mountains */}
            <motion.path 
              d="M0 400 Q300 200, 600 300 T1200 350 L1200 800 L0 800 Z" 
              fill={`rgba(148, 163, 184, ${0.3 + colorProgress * 0.5})`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.path 
              d="M0 450 Q400 250, 800 400 T1200 450 L1200 800 L0 800 Z" 
              fill={`rgba(100, 116, 139, ${0.2 + colorProgress * 0.6})`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
            
            {/* Trees */}
            {[150, 300, 900, 1050].map((x, i) => (
              <g key={i}>
                <motion.path
                  d={`M${x} 500 L${x + 20} 550 L${x - 20} 550 Z`}
                  fill={`rgba(34, 197, 94, ${0.2 + colorProgress * 0.8})`}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                  style={{ transformOrigin: `${x}px 550px` }}
                />
                <motion.path
                  d={`M${x} 480 L${x + 25} 540 L${x - 25} 540 Z`}
                  fill={`rgba(74, 222, 128, ${0.2 + colorProgress * 0.8})`}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 + i * 0.1 }}
                  style={{ transformOrigin: `${x}px 540px` }}
                />
                <rect x={x - 5} y="550" width="10" height="30" fill={`rgba(120, 53, 15, ${0.4 + colorProgress * 0.6})`}/>
              </g>
            ))}
            
            {/* River with flowing animation */}
            <motion.path
              d="M0 600 Q200 580, 400 600 T800 600 T1200 600 L1200 800 L0 800 Z"
              fill={`rgba(59, 130, 246, ${0.2 + colorProgress * 0.6})`}
              animate={{
                d: [
                  "M0 600 Q200 580, 400 600 T800 600 T1200 600 L1200 800 L0 800 Z",
                  "M0 600 Q200 590, 400 580 T800 590 T1200 600 L1200 800 L0 800 Z",
                  "M0 600 Q200 580, 400 600 T800 600 T1200 600 L1200 800 L0 800 Z",
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Ground/Grass */}
            <rect x="0" y="630" width="1200" height="170" fill={`rgba(134, 239, 172, ${0.2 + colorProgress * 0.6})`}/>
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.h1
              className="mb-6 uppercase tracking-widest drop-shadow-2xl overflow-hidden whitespace-nowrap mx-auto -ml-6 sm:-ml-12 md:-ml-16 lg:-ml-20"
              style={{
                fontFamily: 'Poppins, system-ui, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(20px, 5.8vw, 84px)',
                letterSpacing: '0.08em',
                textShadow:
                  '0 4px 18px rgba(0,0,0,0.25), 0 0 30px rgba(249,115,22,0.45), 0 0 50px rgba(37,99,235,0.3)',
                background: 'linear-gradient(90deg, #f97316, #22c55e, #2563eb)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block',
                whiteSpace: 'nowrap',
              }}
            >
              {"PANCH PARIVARTAN".split("").map((letter, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: -20, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05, ease: 'easeOut' }}
                  style={{ display: 'inline-block', marginRight: letter === ' ' ? '0.3em' : '0' }}
                >
                  {letter === ' ' ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h1>
            
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4"
              style={{
                fontFamily: 'Noto Sans Devanagari, sans-serif',
                color: `rgba(107, 114, 128, ${0.6 + colorProgress * 0.4})`
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              पञ्च परिवर्तन
            </motion.p>

            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-poppins font-bold drop-shadow-lg uppercase tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              style={{ textShadow: '0 0 25px rgba(37, 99, 235, 0.35)' }}
            >
              {"Themes that Inspire a Better Tomorrow".split(" ").map((word, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: [20, -3, 0], color: ['#f97316', '#22c55e', '#2563eb', '#22c55e'] }}
                  transition={{ duration: 0.6, delay: 0.9 + idx * 0.08, ease: 'easeOut' }}
                  style={{ display: 'inline-block', marginRight: '0.35em' }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>

            {/* Scroll indicator */}
            <motion.div
              className="mt-12 sm:mt-16 hidden sm:block"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="text-gray-400 text-sm uppercase tracking-widest mb-2">Scroll to explore</div>
              <div className="w-6 h-10 border-2 border-gray-300 rounded-full mx-auto flex items-start justify-center p-2">
                <motion.div
                  className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* THEME CARDS SECTION */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {themeCards.map((card, index) => (
            <motion.div
              key={card.id}
              className="mb-16 sm:mb-20 md:mb-24 last:mb-0"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <motion.div
                className={`relative rounded-2xl sm:rounded-3xl bg-gradient-to-br ${card.bgColor} p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl overflow-hidden border-2 border-${card.accentColor}-200`}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: `0 20px 60px ${card.glowColor}`,
                  y: -8
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 20% 80%, ${card.glowColor} 0%, transparent 50%)`,
                  }}/>
                </div>

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                  {/* Illustration Side */}
                  <motion.div 
                    className="order-2 md:order-1 h-48 sm:h-56 md:h-64 lg:h-80 flex items-center justify-center"
                    animate={hoveredCard === card.id ? { scale: 1.05 } : { scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="w-full h-full">
                      {getIllustrationSVG(card.illustration)}
                    </div>
                  </motion.div>

                  {/* Content Side */}
                  <div className="order-1 md:order-2 space-y-4">
                    {/* Icons Row */}
                    <motion.div 
                      className="flex gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 justify-center md:justify-start"
                      animate={hoveredCard === card.id ? { scale: 1.1 } : { scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {card.icons.map((icon, i) => (
                        <motion.div
                          key={i}
                          className={`text-2xl sm:text-3xl md:text-4xl bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-lg border border-${card.accentColor}-200`}
                          animate={hoveredCard === card.id ? {
                            y: [0, -10, 0],
                            rotate: [0, 10, -10, 0]
                          } : {}}
                          transition={{ duration: 0.6, delay: i * 0.1 }}
                        >
                          {icon}
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Hindi Title */}
                    <motion.h2 
                      className={`text-2xl sm:text-3xl md:text-4xl font-bold text-${card.accentColor}-900 mb-2 text-center md:text-left`}
                      style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}
                      animate={hoveredCard === card.id ? { x: [0, 5, 0] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {card.nameHindi}
                    </motion.h2>

                    {/* English Title */}
                    <h3 className={`text-lg sm:text-xl md:text-2xl font-semibold text-${card.accentColor}-700 italic mb-1 text-center md:text-left`}>
                      {card.nameEnglish}
                    </h3>

                    {/* Subtitle */}
                    <p className={`text-base sm:text-lg font-bold text-${card.accentColor}-600 uppercase tracking-wide mb-3 sm:mb-4 text-center md:text-left`}>
                      {card.subtitle}
                    </p>

                    {/* Description */}
                    <motion.p 
                      className={`text-sm sm:text-base md:text-lg text-${card.accentColor}-800 leading-relaxed text-center md:text-left`}
                      animate={hoveredCard === card.id ? { opacity: 1 } : { opacity: 0.9 }}
                    >
                      {card.description}
                    </motion.p>

                    {/* Decorative Line */}
                    <motion.div 
                      className={`h-1 bg-gradient-to-r from-${card.accentColor}-400 to-${card.accentColor}-600 rounded-full mt-4 sm:mt-6 mx-auto md:mx-0`}
                      initial={{ width: "0%" }}
                      whileInView={{ width: hoveredCard === card.id ? "100%" : "60%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    />
                  </div>
                </div>

                {/* Decorative Corner Elements */}
                <div className={`absolute top-2 sm:top-4 left-2 sm:left-4 w-6 sm:w-8 h-6 sm:h-8 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4 border-${card.accentColor}-400 rounded-tl-lg opacity-50`}/>
                <div className={`absolute top-2 sm:top-4 right-2 sm:right-4 w-6 sm:w-8 h-6 sm:h-8 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4 border-${card.accentColor}-400 rounded-tr-lg opacity-50`}/>
                <div className={`absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-6 sm:w-8 h-6 sm:h-8 border-b-2 sm:border-b-4 border-l-2 sm:border-l-4 border-${card.accentColor}-400 rounded-bl-lg opacity-50`}/>
                <div className={`absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-6 sm:w-8 h-6 sm:h-8 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4 border-${card.accentColor}-400 rounded-br-lg opacity-50`}/>

                {/* Shine Effect on Hover */}
                {hoveredCard === card.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 0.8 }}
                  />
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <motion.section 
        className="relative py-12 sm:py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <motion.h3 
            className="text-2xl sm:text-3xl md:text-4xl font-black text-orange-600 mb-3 sm:mb-4 font-poppins drop-shadow-lg uppercase tracking-widest"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Together, We Transform
          </motion.h3>
          <motion.p 
            className="text-base sm:text-lg text-slate-800 mb-6 sm:mb-8 px-4 font-poppins"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join us in embracing these five pillars of change for a brighter tomorrow
          </motion.p>
          
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => onNavigate('events')}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg"
            >
              Explore Our Events
            </button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
