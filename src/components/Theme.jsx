import { motion } from "framer-motion";
import { useMemo, useState } from "react";

export default function Theme({ onNavigate }) {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport
  useState(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const pillars = [
    {
      id: 1,
      nameHindi: "परिवार",
      nameEnglish: "Family",
      description: "Strengthening family bonds and values as the foundation of a harmonious society.",
      icon: "👨‍👩‍👧‍👦",
      borderColor: "border-pink-400",
      bgColor: "from-pink-600 to-pink-700",
      glowColor: "rgba(244, 114, 182, 0.6)",
      position: { angle: -90 } // Top
    },
    {
      id: 2,
      nameHindi: "सामाजिक सद्भावना",
      nameEnglish: "Social Harmony",
      description: "Promoting unity, respect, and peaceful coexistence among all communities.",
      icon: "🤝",
      borderColor: "border-purple-400",
      bgColor: "from-purple-600 to-purple-700",
      glowColor: "rgba(192, 132, 252, 0.6)",
      position: { angle: -18 } // Upper-right
    },
    {
      id: 3,
      nameHindi: "पर्यावरण",
      nameEnglish: "Environment",
      description: "Protecting and nurturing our natural resources for sustainable future generations.",
      icon: "🌿",
      borderColor: "border-green-400",
      bgColor: "from-green-600 to-green-700",
      glowColor: "rgba(74, 222, 128, 0.6)",
      position: { angle: 54 } // Lower-right
    },
    {
      id: 4,
      nameHindi: "स्वदेशी",
      nameEnglish: "Swadeshi",
      description: "Embracing local products, culture, and self-reliance for national growth.",
      icon: "🇮🇳",
      borderColor: "border-orange-400",
      bgColor: "from-orange-600 to-orange-700",
      glowColor: "rgba(251, 146, 60, 0.6)",
      position: { angle: 126 } // Lower-left
    },
    {
      id: 5,
      nameHindi: "नागरिक कर्तव्य",
      nameEnglish: "Civic Duty",
      description: "Fulfilling responsibilities as active citizens to build a stronger nation.",
      icon: "✊",
      borderColor: "border-blue-400",
      bgColor: "from-blue-600 to-blue-700",
      glowColor: "rgba(96, 165, 250, 0.6)",
      position: { angle: 198 } // Upper-left
    }
  ];

  const getCardPosition = (index) => {
    const angle = pillars[index].position.angle;
    const radius = 33; // Slightly reduced to keep all cards inside while centered
    const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
    const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
    return { x: `${x}%`, y: `${y}%` };
  };

  // Responsive orbit radius based on viewport using CSS clamp via inline calc
  const baseRadiusPx = useMemo(() => {
    // Fallback radius used by percentage positioning; main rotation uses transform
    return 220; // desktop-ish radius in px
  }, []);

  return (
    <div className="w-full min-h-screen relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #F59E0B, #FFFFFF 30%, #10B981 60%, #3B82F6)",
      }}
    >
      {/* Simplified background elements */}
      
      {/* Subtle Ashoka Chakra circle - top left */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 rounded-full border-2 border-blue-500/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Subtle Ashoka Chakra circle - bottom right */}
      <motion.div
        className="absolute bottom-32 right-20 w-32 h-32 rounded-full border-2 border-orange-500/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* Navigation Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/70 to-transparent px-8 py-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
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
              className="text-white font-black transition-colors duration-300 text-base sm:text-xl md:text-2xl uppercase tracking-wider cursor-pointer hover:text-yellow-300"
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
      </motion.div>

      {/* Main container */}
      <div className="relative w-full min-h-screen flex items-center justify-center py-20 px-4 pt-24">
        {/* Mobile Grid Layout */}
        {isMobile && (
          <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-sm sm:max-w-md mx-auto px-2">
            {pillars.map((pillar, index) => {
              const isHovered = hoveredCard === pillar.id;
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, scale: 0.7, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.15 + index * 0.12,
                    ease: [0.34, 1.26, 0.64, 1]
                  }}
                  onMouseEnter={() => setHoveredCard(pillar.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={index === 4 ? "col-span-2 mx-auto" : ""}
                >
                  <motion.div
                    className={`relative rounded-xl flex flex-col items-center justify-center p-4 cursor-pointer border-4 ${pillar.borderColor} bg-gradient-to-br ${pillar.bgColor} backdrop-blur-sm overflow-hidden`}
                    style={{
                      width: index === 4 ? "170px" : "150px",
                      height: index === 4 ? "170px" : "150px",
                    }}
                    whileTap={{ scale: 0.92 }}
                    animate={isHovered ? { 
                      boxShadow: `0 0 45px ${pillar.glowColor}`,
                      scale: 1.08
                    } : {
                      boxShadow: "0 12px 35px rgba(0,0,0,0.45)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="text-4xl mb-2"
                      animate={isHovered ? { scale: 1.15, rotate: [0, 6, -6, 0] } : { scale: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      {pillar.icon}
                    </motion.div>
                    <h3 className="font-montserrat font-bold text-white text-center leading-tight text-sm mb-1 drop-shadow-lg">
                      {pillar.nameHindi}
                    </h3>
                    <p className="text-white font-montserrat font-semibold text-center text-xs">
                      {pillar.nameEnglish}
                    </p>
                    <p className="text-white/95 text-center text-[10px] mt-2 leading-snug px-1 font-medium">
                      {pillar.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Desktop Orbit Layout */}
        {!isMobile && (
        <div className="relative flex items-center justify-center" style={{ width: "100vw", height: "80vh", maxWidth: "1100px", maxHeight: "800px" }}>
          
          {/* Visible circular guide border - REMOVED */}
          
          {/* Central glowing circle with "PanchParivartan" */}
          <motion.div
            className="absolute z-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ left: "48%", top: "50%", transform: "translate(-50%, -50%)" }}
          >
            <motion.div
              className="relative rounded-full flex items-center justify-center"
              style={{
                width: "clamp(160px, 22vw, 280px)",
                height: "clamp(160px, 22vw, 280px)",
                background: "radial-gradient(circle, rgba(251,191,36,1) 0%, rgba(245,158,11,1) 60%, rgba(245,158,11,0.8) 100%)",
                boxShadow: "0 0 120px rgba(251, 191, 36, 0.95), 0 0 200px rgba(245, 158, 11, 0.8), inset 0 0 60px rgba(255, 255, 255, 0.35)"
              }}
              animate={{
                boxShadow: [
                  "0 0 120px rgba(251, 191, 36, 0.95), inset 0 0 60px rgba(255, 255, 255, 0.4)",
                  "0 0 150px rgba(251, 191, 36, 1), inset 0 0 70px rgba(255, 255, 255, 0.5)",
                  "0 0 120px rgba(251, 191, 36, 0.95), inset 0 0 60px rgba(255, 255, 255, 0.4)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-center px-6 py-4">
                <motion.p 
                  className="text-sm sm:text-base font-bold mb-1 opacity-90"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 0.9, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  style={{
                    fontFamily: 'Noto Sans Devanagari, sans-serif',
                    fontSize: 'clamp(14px, 2vw, 18px)',
                    color: '#FFFFFF',
                    textShadow: '0 0 20px rgba(255,255,255,0.8)'
                  }}
                >
                  पञ्च परिवर्तन
                </motion.p>
                <h1 className="font-black drop-shadow-2xl leading-tight mb-2"
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 'clamp(28px, 5vw, 54px)',
                    letterSpacing: '0.04em',
                    color: '#FFFFFF',
                    textShadow: '0 0 35px rgba(255,255,255,0.9), 0 0 70px rgba(255,255,255,0.7)'
                  }}
                >
                  PanchParivartan
                </h1>
                <motion.p 
                  className="text-xs sm:text-sm font-semibold opacity-85"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.85, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: 'clamp(10px, 1.8vw, 14px)',
                    color: '#FFFFFF',
                    textShadow: '0 0 15px rgba(255,255,255,0.7)'
                  }}
                >
                  Five Pillars of Change
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          {/* 5 Square cards positioned around center (orbit) */}
          <motion.div
            className="absolute inset-0"
            style={{ pointerEvents: 'none' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
          {pillars.map((pillar, index) => {
            const pos = getCardPosition(index);
            const isHovered = hoveredCard === pillar.id;

            return (
              <motion.div
                key={pillar.id}
                className="absolute"
                style={{
                  left: pos.x,
                  top: pos.y,
                  transform: "translate(-50%, -50%)",
                  width: "fit-content",
                  height: "fit-content"
                }}
                initial={{ opacity: 0, scale: 0.3, y: 60 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.3 + index * 0.15,
                  ease: [0.34, 1.56, 0.64, 1],
                  type: "spring",
                  stiffness: 100
                }}
                onMouseEnter={() => setHoveredCard(pillar.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Square card box */}
                <motion.div
                  className={`relative rounded-lg flex flex-col items-center justify-center p-4 cursor-pointer border-4 ${pillar.borderColor} bg-gradient-to-br ${pillar.bgColor} backdrop-blur-sm overflow-hidden`}
                  style={{
                    width: "clamp(130px, 15vw, 180px)",
                    height: "clamp(130px, 15vw, 180px)",
                  }}
                  whileHover={{ scale: 1.18, y: -18 }}
                  animate={isHovered ? { 
                    boxShadow: `0 0 60px ${pillar.glowColor}, 0 0 40px ${pillar.glowColor}` 
                  } : {
                    boxShadow: "0 12px 35px rgba(0,0,0,0.5)"
                  }}
                  transition={{ type: "spring", stiffness: 280, damping: 18 }}
                >
                  {/* Icon */}
                  <motion.div 
                    className="mb-2"
                    style={{ fontSize: 'clamp(32px, 5.5vw, 50px)' }}
                    animate={isHovered ? { scale: 1.25, rotate: [0, 8, -8, 0] } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  >
                    {pillar.icon}
                  </motion.div>

                  {/* Hindi text */}
                  <h3 className="font-montserrat font-bold text-white text-center leading-tight drop-shadow-lg mb-1"
                    style={{ fontSize: 'clamp(13px, 2.4vw, 16px)' }}
                  >
                    {pillar.nameHindi}
                  </h3>
                  
                  {/* English text */}
                  <p className="text-white font-montserrat font-semibold text-center"
                    style={{ fontSize: 'clamp(12px, 2.2vw, 15px)' }}
                  >
                    {pillar.nameEnglish}
                  </p>

                  {/* Description tooltip on hover */}
                  <motion.div
                    className="absolute inset-0 bg-black/90 backdrop-blur-sm rounded-lg flex items-center justify-center p-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ pointerEvents: isHovered ? 'auto' : 'none' }}
                  >
                    <p className="text-white text-center text-xs sm:text-sm font-medium leading-relaxed">
                      {pillar.description}
                    </p>
                  </motion.div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 via-transparent to-transparent" />
                </motion.div>
              </motion.div>
            );
          })}
          </motion.div>
        </div>
        )}
      </div>
    </div>
  );
}
