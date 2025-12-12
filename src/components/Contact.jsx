import { useState } from 'react'
import { motion } from 'framer-motion'
const socialLinks = [
  { icon: '📸', href: '#', label: 'Instagram' },
  { icon: '📘', href: '#', label: 'Facebook' },
  { icon: '💼', href: '#', label: 'LinkedIn' },
  { icon: '▶️', href: '#', label: 'YouTube' },
]

export default function Contact({ onNavigate = () => {} }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <>
      <section id="contact" className="w-full min-h-screen py-24 px-4 text-white relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #4338CA, #7C3AED 45%, #DB2777)" }}
      >
        {/* Animated corner badge */}
        <motion.div
          className="absolute left-4 bottom-4 z-20"
          initial={{ opacity: 0, x: -20, y: 20, rotate: -4 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="px-4 py-3 rounded-2xl border border-white/30 shadow-2xl backdrop-blur"
            style={{
              background: "linear-gradient(135deg, rgba(67,56,202,0.8), rgba(219,39,119,0.85))",
              boxShadow: "0 12px 30px rgba(0,0,0,0.35), 0 0 28px rgba(219,39,119,0.55)"
            }}
            animate={{
              y: [0, -6, 0],
              scale: [1, 1.02, 1]
            }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="text-xs uppercase tracking-[0.35em] text-white/80">Abhyudaya</div>
            <div className="text-2xl font-black text-white" style={{ letterSpacing: "0.08em" }}>’25</div>
          </motion.div>
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
                  style={{ color: "#d7f3ff", filter: "brightness(1)" }}
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
        {/* Floating glow orbs for depth */}
        <div className="absolute inset-0 opacity-30" aria-hidden>
          <div className="absolute -left-16 top-10 w-72 h-72 bg-indigo-400/40 blur-3xl rounded-full"></div>
          <div className="absolute right-10 bottom-10 w-80 h-80 bg-fuchsia-400/40 blur-3xl rounded-full"></div>
          <div className="absolute left-1/2 -translate-x-1/2 top-1/3 w-96 h-96 bg-purple-400/35 blur-3xl rounded-full"></div>
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-sm font-semibold">
              📞 Get in Touch
            </div>
            <h2 className="mt-5" style={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: 900,
              fontSize: 'clamp(32px, 6vw, 72px)',
              color: '#ffffff',
              textShadow: '0 0 28px rgba(255,255,255,0.85), 0 0 56px rgba(255,255,255,0.6)'
            }}>
              Contact Us
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mt-4" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>
              Have questions? We&apos;d love to hear from you.
            </p>
          </div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="grid md:grid-cols-3 gap-4 mb-8"
          >
            {[
              { icon: '📧', label: 'Email', value: 'info@cei.com' },
              { icon: '📞', label: 'Phone', value: '+91 98765 43210' },
              { icon: '📍', label: 'Location', value: 'BITS Pilani, RJ' }
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white/10 border border-white/20 rounded-2xl p-4 backdrop-blur-sm text-center"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-xs uppercase tracking-wider text-white/70 mb-1">{item.label}</div>
                <div className="text-sm font-semibold text-white">{item.value}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 border border-white/15 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-md"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-white/80 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/15 text-white placeholder-white/50 focus:outline-none focus:border-fuchsia-400 shadow-[0_0_20px_rgba(192,38,211,0.25)] focus:shadow-[0_0_30px_rgba(192,38,211,0.5)]"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white/80 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/15 text-white placeholder-white/50 focus:outline-none focus:border-fuchsia-400 shadow-[0_0_20px_rgba(192,38,211,0.25)] focus:shadow-[0_0_30px_rgba(192,38,211,0.5)]"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-white/80 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/15 text-white placeholder-white/50 focus:outline-none focus:border-fuchsia-400 resize-none shadow-[0_0_20px_rgba(192,38,211,0.25)] focus:shadow-[0_0_30px_rgba(192,38,211,0.5)]"
                  placeholder="Tell us what's on your mind"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="w-full px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl flex items-center justify-center gap-3"
                style={{
                  fontFamily: 'Poppins, system-ui, sans-serif',
                  background: 'linear-gradient(135deg, #4338CA, #7C3AED, #DB2777)',
                  color: '#ffffff',
                  boxShadow: '0 0 30px rgba(124,58,237,0.7), 0 0 60px rgba(219,39,119,0.6)',
                  border: '3px solid #DB2777'
                }}
              >
                Send Message
                <span role="img" aria-label="send">📨</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Map Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 bg-white/10 border border-white/20 rounded-3xl overflow-hidden backdrop-blur-sm shadow-xl"
          >
            <div className="p-4 bg-white/5 border-b border-white/10 flex items-center gap-3">
              <span className="text-2xl">🗺️</span>
              <div>
                <h3 className="text-lg font-bold text-white">Find Us Here</h3>
                <p className="text-xs text-white/70">BITS Pilani, Rajasthan - Venue location will be updated soon</p>
              </div>
            </div>
            <div className="relative w-full h-64 bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20">
              <div className="absolute inset-0 flex items-center justify-center text-white/50">
                <div className="text-center">
                  <div className="text-5xl mb-2">📍</div>
                  <p className="text-sm font-semibold">Map will be added here</p>
                  <p className="text-xs mt-1">Venue details coming soon</p>
                </div>
              </div>
              {/* Placeholder for future iframe or map component */}
              {/* <iframe 
                src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe> */}
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-white text-slate-800 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 items-center">
            <div>
              <h3 className="text-3xl font-extrabold gradient-text mb-3">Abhyudaya'25</h3>
              <p className="text-sm text-slate-600 max-w-sm">
                An annual celebration of innovation, sustainability, and social responsibility driven by Panch Parivartan.
              </p>
            </div>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-3">📧 info@clubengineeringindia.com</div>
              <div className="flex items-center gap-3">📞 +91 98765 43210</div>
              <div className="flex items-center gap-3">📍 BITS Pilani, Rajasthan</div>
            </div>
            <div className="flex md:justify-end gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 rounded-full flex items-center justify-center shadow-md text-xl"
                  style={{
                    background: 'radial-gradient(circle, rgba(124,58,237,0.35), rgba(219,39,119,0.25))',
                    boxShadow: '0 0 20px rgba(124,58,237,0.5), 0 0 35px rgba(219,39,119,0.5)'
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + idx * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.15, y: -3, boxShadow: '0 0 30px rgba(124,58,237,0.7), 0 0 50px rgba(219,39,119,0.7)' }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <span>{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-slate-700 gap-3">
            <div className="w-full h-[2px] mb-4" style={{ background: 'linear-gradient(90deg, #4338CA, #7C3AED, #DB2777)' }} />
            <p className="font-medium">© 2025 Abhyudaya. All rights reserved. Made with care by Club Engineering India.</p>
            <div className="flex gap-5 font-medium">
              <a href="#home" className="hover:text-indigo-600 transition-colors">Home</a>
              <a href="#theme" className="hover:text-purple-600 transition-colors">Theme</a>
              <a href="#events" className="hover:text-fuchsia-600 transition-colors">Events</a>
              <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
