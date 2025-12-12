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
      accent: "#7c3aed"
    },
    {
      id: "02",
      title: "Sustainable Impact",
      copy: "We focus on creating lasting change that benefits both present and future generations through innovative solutions.",
      accent: "#db2777"
    },
    {
      id: "03",
      title: "Collaborative Growth",
      copy: "We believe in the power of partnerships and collective action to achieve greater goals and drive meaningful change.",
      accent: "#6366f1"
    }
  ];

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-start pt-28 pb-24 px-6 relative"
      style={{
        background: "linear-gradient(135deg, #4338CA, #7C3AED 45%, #DB2777)"
      }}
    >
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
                  if (item === 'HOME') onNavigate?.('home');
                  if (item === 'EVENTS') onNavigate?.('events');
                  if (item === 'THEME') onNavigate?.('theme');
                  if (item === 'ABOUT US') onNavigate?.('about');
                  if (item === 'CONTACT') onNavigate?.('contact');
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
      {/* subtle dark overlay to improve text contrast */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.35))" }} />
      {/* Title */}
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center"
        style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "clamp(28px, 6vw, 64px)",
          fontWeight: 900,
          color: "#fff",
          textShadow: "0 0 28px rgba(255,255,255,0.85), 0 0 60px rgba(255,255,255,0.55)"
        }}
      >
        About Abhyudaya’25
      </motion.h1>

      {/* Decorative divider */}
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: 160 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative mx-auto mt-6 h-1 rounded-full z-10"
        style={{ background: "linear-gradient(90deg, #ec4899, #a78bfa, #6366f1)" }}
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
        className="mt-10 z-10"
        style={{ maxWidth: "900px" }}
      >
        <p
          style={{
            fontFamily: "Poppins, system-ui, sans-serif",
            fontSize: "clamp(15px, 2.3vw, 18px)",
            lineHeight: 1.9,
            color: "#ffffff",
            textAlign: "center"
          }}
        >
          Abhyudaya’25 is a student-led initiative under
          <span style={{ color: "#22d3ee", fontWeight: 700 }}> Engineering India </span>
          celebrating transformation through
          <span style={{ color: "#f59e0b", fontWeight: 700 }}> PanchParivartan</span> —
          a vision to nurture family values, social harmony, environment consciousness, swadeshi ethos, and civic responsibility.
        </p>

        <p
          className="mt-6"
          style={{
            fontFamily: "Poppins, system-ui, sans-serif",
            fontSize: "clamp(15px, 2.3vw, 18px)",
            lineHeight: 1.9,
            color: "#f5f7ff",
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
            color: "#ffffff",
            textAlign: "center"
          }}
        >
          Abhyudaya is the annual event hosted by the Engineering Club whose motto is
          <span style={{ color: "#f59e0b", fontWeight: 700 }}> Think Nationally, Act Locally</span>.
          This club provides an opportunity for engineering students to come together on one platform and contribute to the
          betterment of society.
        </p>

        <p
          className="mt-6"
          style={{
            fontFamily: "Poppins, system-ui, sans-serif",
            fontSize: "clamp(15px, 2.3vw, 18px)",
            lineHeight: 1.9,
            color: "#f5f7ff",
            textAlign: "center"
          }}
        >
          Abhyudaya is where we encourage participants to take part in various activities, showcase their skills, and contribute to
          society and the nation. Through
          <span style={{ color: "#22d3ee", fontWeight: 700 }}> Engineering India</span> and
          <span style={{ color: "#f59e0b", fontWeight: 700 }}> PanchParivartan</span>,
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
              whileHover={{ scale: 1.02, boxShadow: "0 25px 80px rgba(0,0,0,0.25)" }}
              className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-6 shadow-2xl backdrop-blur-md"
            >
              <div className="absolute inset-0 opacity-40" style={{ background: item.glow }} />
              <div className="relative z-10 flex items-start gap-4">
                <div className="mt-1 h-11 w-11 rounded-2xl flex items-center justify-center text-xl font-black text-white" style={{
                  background: idx === 0 ? "linear-gradient(135deg, #6366f1, #a78bfa)" : "linear-gradient(135deg, #7c3aed, #22c55e)",
                  boxShadow: idx === 0 ? "0 0 28px rgba(99,102,241,0.65)" : "0 0 28px rgba(34,197,94,0.55)"
                }}>
                  {idx === 0 ? "👁️" : "🚀"}
                </div>
                <div>
                  <h3 className="text-white text-2xl font-extrabold" style={{ fontFamily: "Poppins, system-ui, sans-serif" }}>{item.label}</h3>
                  <p className="mt-2 text-slate-100" style={{ lineHeight: 1.7 }}>{item.text}</p>
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
            <div className="h-0.5 w-10 rounded-full" style={{ background: "linear-gradient(90deg, transparent, #a78bfa)" }} />
            <p className="text-sm uppercase tracking-[0.35em] text-white/80">Our Core Values</p>
            <div className="h-0.5 w-10 rounded-full" style={{ background: "linear-gradient(90deg, #ec4899, transparent)" }} />
          </div>
          <p className="mt-3 text-center text-xl font-semibold text-white" style={{ fontFamily: "Poppins, system-ui, sans-serif" }}>
            The principles that guide everything we do
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {coreValues.map((value, idx) => (
              <motion.div
                key={value.id}
                variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1 } } }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md"
                style={{ boxShadow: "0 18px 60px rgba(0,0,0,0.25)" }}
              >
                <div className="absolute inset-0 opacity-40" style={{ background: `radial-gradient(circle at 20% 20%, ${value.accent}55, transparent 45%)` }} />
                <div className="relative z-10 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold tracking-[0.35em] text-white/70">{value.id}</span>
                    <span className="h-1.5 w-16 rounded-full" style={{ background: value.accent }} />
                  </div>
                  <h4 className="text-xl font-extrabold text-white" style={{ fontFamily: "Poppins, system-ui, sans-serif" }}>
                    {value.title}
                  </h4>
                  <p className="text-slate-100" style={{ lineHeight: 1.7 }}>
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
        className="mt-12 z-10"
      >
        <motion.button
          onClick={() => onNavigate?.("events")}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          className="px-8 py-4 rounded-full text-white font-bold shadow-2xl"
          style={{
            fontFamily: "Poppins, system-ui, sans-serif",
            fontSize: "clamp(16px, 2.8vw, 20px)",
            background: "linear-gradient(135deg, #6366f1, #a78bfa)",
            boxShadow: "0 0 26px rgba(99,102,241,0.95), 0 0 52px rgba(167,139,250,0.75)",
            border: "3px solid #f59e0b"
          }}
        >
          Explore Events
        </motion.button>
      </motion.div>
    </div>
  );
}
