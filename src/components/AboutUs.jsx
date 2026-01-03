import { motion } from "framer-motion";

export default function AboutUs({ onNavigate }) {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 }
  };

  const coreValues = [
    {
      id: "01",
      title: "Community First",
      copy: "Every decision we make prioritizes the well-being and growth of our local communities, fostering collaboration and mutual support.",
      accent: "#f97316"
    },
    {
      id: "02",
      title: "Sustainable Impact",
      copy: "We focus on creating lasting change that benefits both present and future generations through innovative solutions.",
      accent: "#22c55e"
    },
    {
      id: "03",
      title: "Collaborative Growth",
      copy: "We believe in the power of partnerships and collective action to achieve greater goals and drive meaningful change.",
      accent: "#2563eb"
    }
  ];

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
                  if (item === 'HOME') onNavigate?.('home');
                  if (item === 'EVENTS') onNavigate?.('events');
                  if (item === 'THEME') onNavigate?.('theme');
                  if (item === 'ABOUT US') onNavigate?.('about');
                  if (item === 'CONTACT') onNavigate?.('contact');
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

      {/* Main Content Wrapper - Positioned below nav */}
      <div className="relative w-full flex flex-col items-center justify-start pt-32 sm:pt-36 md:pt-40 pb-24 px-4 sm:px-6 md:px-8 lg:px-12 z-10">
        {/* Title */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center uppercase tracking-widest drop-shadow-2xl overflow-hidden"
        style={{
          fontFamily: 'Poppins, system-ui, sans-serif',
          fontSize: 'clamp(18px, 4.5vw, 64px)',
          fontWeight: 900,
          letterSpacing: 'clamp(0.02em, 0.3vw, 0.12em)',
          textShadow: '0 4px 18px rgba(0,0,0,0.25), 0 0 30px rgba(249,115,22,0.35), 0 0 50px rgba(37,99,235,0.25)',
          background: 'linear-gradient(90deg, #f97316, #22c55e, #2563eb)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          display: 'block',
          wordBreak: 'break-word',
          lineHeight: '1.1',
          maxWidth: '90vw',
          margin: '0 auto'
        }}
      >
        {"ABOUT ABHYUDAYA ’25".split("").map((letter, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0, y: -20, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.05, ease: "easeOut" }}
            style={{ display: "inline-block", marginRight: letter === " " ? "0.08em" : "0" }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.h1>

      {/* Decorative divider */}
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: 160 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative mx-auto mt-6 h-1 rounded-full z-10 shadow-lg"
        style={{ background: 'linear-gradient(90deg, #f97316, #22c55e, #2563eb)', boxShadow: '0 0 30px rgba(249,115,22,0.6), 0 0 50px rgba(34,197,94,0.35)' }}
      >
        <span className="absolute -top-1 -left-2 w-3 h-3 rounded-full"
          style={{ backgroundColor: "#ec4899", boxShadow: "0 0 12px #ec4899" }}
        />
        <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
          style={{ backgroundColor: "#a78bfa", boxShadow: "0 0 12px #a78bfa" }}
        />
        <span className="absolute -top-1 -right-2 w-3 h-3 rounded-full"
          style={{ backgroundColor: "#6366f1", boxShadow: "0 0 12px #6366f1" }}
        />
      </motion.div>

        {/* Body content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-10 w-full max-w-4xl px-2 sm:px-4"
        >
          <p
            style={{
              fontFamily: "Poppins, system-ui, sans-serif",
              fontSize: "clamp(15px, 2.3vw, 18px)",
              lineHeight: 1.9,
              color: "#1f2937",
              textAlign: "center"
            }}
        >
          Abhyudaya’25 is a student-led initiative under
          <span style={{ color: "#2563eb", fontWeight: 700 }}> Engineering India </span>
          celebrating transformation through
          <span style={{ color: "#f97316", fontWeight: 700 }}> PanchParivartan</span> —
          a vision to nurture family values, social harmony, environment consciousness, swadeshi ethos, and civic responsibility.
        </p>

        <p
          className="mt-6"
          style={{
            fontFamily: "Poppins, system-ui, sans-serif",
            fontSize: "clamp(15px, 2.3vw, 18px)",
            lineHeight: 1.9,
            color: "#334155",
            textAlign: "center"
          }}
        >
          Join us as we explore ideas, build projects, and host events that inspire students to act locally while thinking nationally.
          Together, we aim to foster innovation with empathy and purpose.
        </p>

        {/* Additional descriptive copy per request */}
        <p
          className="mt-6"
          style={{
            fontFamily: "Poppins, system-ui, sans-serif",
            fontSize: "clamp(15px, 2.3vw, 18px)",
            lineHeight: 1.9,
            color: "#1f2937",
            textAlign: "center"
          }}
        >
          Abhyudaya is the annual event hosted by the Engineering Club whose motto is
          <span style={{ color: "#f97316", fontWeight: 700 }}> Think Nationally, Act Locally</span>.
          This club provides an opportunity for engineering students to come together on one platform and contribute to the
          betterment of society.
        </p>

        <p
          className="mt-6"
          style={{
            fontFamily: "Poppins, system-ui, sans-serif",
            fontSize: "clamp(15px, 2.3vw, 18px)",
            lineHeight: 1.9,
            color: "#334155",
            textAlign: "center"
          }}
        >
          Abhyudaya is where we encourage participants to take part in various activities, showcase their skills, and contribute to
          society and the nation. Through
          <span style={{ color: "#2563eb", fontWeight: 700 }}> Engineering India</span> and
          <span style={{ color: "#f97316", fontWeight: 700 }}> PanchParivartan</span>,
          we invite you to be part of a vibrant, purpose-driven community.
        </p>

        {/* Vision & Mission */}
        <motion.div
          className="mt-10 grid gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0, y: 28 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.08 } }
          }}
        >
          {[{
            label: "Our Vision",
            text: "To create a world where global thinking meets local action, fostering sustainable communities that drive innovation and positive change across the nation.",
            glow: "linear-gradient(135deg, rgba(99,102,241,0.5), rgba(219,39,119,0.4))"
          }, {
            label: "Our Mission",
            text: "We are committed to empowering local communities through strategic initiatives aligned with national goals, building bridges between academia and real-world impact.",
            glow: "linear-gradient(135deg, rgba(124,58,237,0.5), rgba(16,185,129,0.4))"
          }].map((item, idx) => (
            <motion.div
              key={item.label}
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 50px rgba(249,115,22,0.25)" }}
              className="relative overflow-hidden rounded-3xl border-2 p-6 shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #fffef9, #fdf6e9)",
                borderColor: "#f97316"
              }}
            >
              <div className="absolute inset-0 opacity-20" style={{ background: item.glow }} />
              <div className="relative z-10 flex items-start gap-4">
                <div className="mt-1 h-11 w-11 rounded-2xl flex items-center justify-center text-xl font-black text-white" style={{
                  background: idx === 0 ? "linear-gradient(135deg, #2563eb, #22c55e)" : "linear-gradient(135deg, #f97316, #22c55e)",
                  boxShadow: idx === 0 ? "0 0 18px rgba(37,99,235,0.45)" : "0 0 18px rgba(249,115,22,0.45)"
                }}>
                  {idx === 0 ? "👁️" : "🚀"}
                </div>
                <div>
                  <h3 className="text-slate-900 text-2xl font-extrabold" style={{ fontFamily: "Poppins, system-ui, sans-serif" }}>{item.label}</h3>
                  <p className="mt-2 text-slate-700" style={{ lineHeight: 1.7 }}>{item.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Values */}
        <motion.div
          className="mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: { opacity: 0, y: 28 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } }
          }}
        >
          <div className="flex items-center gap-3 justify-center">
            <div className="h-0.5 w-10 rounded-full" style={{ background: "linear-gradient(90deg, transparent, #f97316)" }} />
            <p className="text-sm uppercase tracking-[0.35em] text-slate-900 font-bold">Our Core Values</p>
            <div className="h-0.5 w-10 rounded-full" style={{ background: "linear-gradient(90deg, #2563eb, transparent)" }} />
          </div>
          <p className="mt-3 text-center text-xl font-semibold text-slate-900" style={{ fontFamily: "Poppins, system-ui, sans-serif" }}>
            The principles that guide everything we do
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {coreValues.map((value, idx) => (
              <motion.div
                key={value.id}
                variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1 } } }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative overflow-hidden rounded-3xl border-2 p-6 shadow-xl"
                style={{ boxShadow: "0 18px 60px rgba(249,115,22,0.15)", background: "linear-gradient(135deg, #fffef9, #fdf6e9)", borderColor: "#f97316" }}
              >
                <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(circle at 20% 20%, ${value.accent}55, transparent 45%)` }} />
                <div className="relative z-10 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold tracking-[0.35em] text-slate-600">{value.id}</span>
                    <span className="h-1.5 w-16 rounded-full" style={{ background: value.accent }} />
                  </div>
                  <h4 className="text-xl font-extrabold text-slate-900" style={{ fontFamily: "Poppins, system-ui, sans-serif" }}>
                    {value.title}
                  </h4>
                  <p className="text-slate-700" style={{ lineHeight: 1.7 }}>
                    {value.copy}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Explore Events button */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="relative z-10 text-center py-16"
      >
          <motion.button
            onClick={() => onNavigate?.("events")}
            whileHover={{ scale: 1.08, y: -4 }}
            whileTap={{ scale: 0.96 }}
            className="relative px-12 sm:px-16 md:px-20 lg:px-24 py-5 sm:py-6 md:py-7 lg:py-8 font-black text-xl sm:text-2xl md:text-3xl uppercase tracking-wider overflow-hidden group"
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-amber-700 via-amber-900 to-amber-800 shadow-2xl border-4 border-amber-600"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,.1) 2px, rgba(0,0,0,.1) 4px),\n                repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,.1) 2px, rgba(255,255,255,.1) 4px),\n                linear-gradient(135deg, rgba(139, 90, 43, 0.8), rgba(160, 82, 45, 0.8))",
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 8px 16px rgba(0,0,0,0.6)'
              }}
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500/0 via-red-400/0 to-red-500/0 group-hover:from-red-500/30 group-hover:via-red-400/40 group-hover:to-red-500/30 transition-all duration-300 blur-md" />
            <span className="relative text-white drop-shadow-lg font-black" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.5)' }}>
              Explore Events
            </span>
            <motion.div
              className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Footer with Social Links */}
      <footer className="relative z-10 bg-slate-900 text-slate-100 py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            <h3 className="text-2xl font-extrabold" style={{ background: 'linear-gradient(90deg, #f97316, #22c55e, #2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Abhyudaya'25</h3>
            <div className="flex gap-6">
              <motion.a
                href="https://www.instagram.com/engineering_india2047?igsh=MTNpaWthOWRvajI4eA=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg text-2xl"
                style={{ background: 'linear-gradient(135deg, #f97316/40, #22c55e/40)' }}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/engineeringindia-2047/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg text-2xl"
                style={{ background: 'linear-gradient(135deg, #2563eb/40, #22c55e/40)' }}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
            </div>
            <div className="w-full h-[1px] my-4" style={{ background: 'linear-gradient(90deg, #f97316, #22c55e, #2563eb)' }} />
            <p className="text-sm text-slate-400 text-center">© 2025 Abhyudaya. All rights reserved. Made with care by Club Engineering India.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
