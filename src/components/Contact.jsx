import { useState } from 'react'
import { motion } from 'framer-motion'

const AnimatedLetters = ({ text }) => {
  return (
    <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.4 }}
          className="inline-block"
        >
          {letter}
        </motion.span>
      ))}
    </div>
  )
}

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
      <section id="contact" className="w-full min-h-screen py-24 px-4 relative overflow-hidden" style={{ background: '#f7f1e8' }}>
        {/* Animated radial background orbs */}
        <div className="absolute inset-0 opacity-40" aria-hidden>
          <motion.div
            className="absolute -top-40 -left-40 w-80 h-80 rounded-full"
            style={{ background: 'radial-gradient(circle, #f97316/40, transparent)' }}
            animate={{ x: [0, 30, -30, 0], y: [0, -40, 40, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-1/3 right-0 w-96 h-96 rounded-full"
            style={{ background: 'radial-gradient(circle, #22c55e/35, transparent)' }}
            animate={{ x: [0, -40, 40, 0], y: [0, 30, -30, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
          <motion.div
            className="absolute bottom-10 left-1/2 w-72 h-72 rounded-full"
            style={{ background: 'radial-gradient(circle, #2563eb/30, transparent)' }}
            animate={{ x: [0, 25, -25, 0], y: [0, -25, 25, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 opacity-30" aria-hidden>
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: [
                  'rgba(249, 115, 22, 0.6)',
                  'rgba(34, 197, 94, 0.6)',
                  'rgba(37, 99, 235, 0.6)',
                ][i % 3],
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Navigation Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/70 to-transparent px-4 sm:px-6 md:px-8 py-4 sm:py-6"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="flex items-center justify-between max-w-full">
            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 lg:gap-10 items-center justify-center w-full md:w-auto">
              {['HOME', 'EVENTS', 'THEME', 'ABOUT US', 'CONTACT'].map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => {
                    if (item === 'HOME') onNavigate('home')
                    if (item === 'EVENTS') onNavigate('events')
                    if (item === 'THEME') onNavigate('theme')
                    if (item === 'ABOUT US') onNavigate('about')
                    if (item === 'CONTACT') onNavigate('contact')
                  }}
                  className="text-white font-black transition-colors duration-300 text-base sm:text-xl md:text-2xl uppercase tracking-wider cursor-pointer hover:text-amber-200"
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

        <div className="max-w-5xl mx-auto relative z-10 sm:pt-2 md:pt-6 px-3 sm:px-6 md:px-8">
          {/* Header with animated letters */}
          <div className="text-center mb-12 md:mb-16">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-6xl font-black mb-6"
              style={{
                fontFamily: 'Poppins, system-ui, sans-serif',
                letterSpacing: 'clamp(0.02em, 0.3vw, 0.12em)',
                background: 'linear-gradient(90deg, #f97316, #22c55e, #2563eb)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'block',
                lineHeight: '1.1',
                maxWidth: '95vw',
                margin: '0 auto'
              }}
            >
              <AnimatedLetters text="CONTACT US" />
            </motion.h2>

            <p className="text-lg sm:text-xl text-slate-700 max-w-2xl mx-auto mt-4" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>
              Have questions? We&apos;d love to hear from you.
            </p>
          </div>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-1 flex-1" style={{ background: 'linear-gradient(90deg, #f97316, transparent)' }} />
            <div className="w-3 h-3 rounded-full" style={{ background: '#f97316' }} />
            <div className="h-1 flex-1" style={{ background: 'linear-gradient(90deg, transparent, #2563eb)' }} />
          </div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {[
              { icon: '📧', label: 'Email', value: 'engineeringindia2047@gmail.com' },
              { icon: '📞', label: 'Phone', value: '+91 98765 43210' },
              { icon: '📍', label: 'Location', value: 'Smruti Mandir' }
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="rounded-2xl p-4 sm:p-6 md:p-8 text-center backdrop-blur-sm shadow-lg"
                style={{
                  background: idx % 3 === 0 ? 'linear-gradient(135deg, #fed7aa/60, #fef3c7/60)' : idx % 3 === 1 ? 'linear-gradient(135deg, #dcfce7/60, #f0fdf4/60)' : 'linear-gradient(135deg, #dbeafe/60, #eff6ff/60)',
                }}
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-xs uppercase tracking-wider text-slate-700 mb-1 font-semibold">{item.label}</div>
                <div className="text-sm font-semibold text-slate-900">{item.value}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 md:p-12 shadow-lg mb-12"
            style={{
              background: 'linear-gradient(135deg, #fef3c7/70, #f0fdf4/70)',
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl bg-white/80 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-md"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl bg-white/80 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-md"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 rounded-2xl bg-white/80 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none shadow-md"
                  placeholder="Tell us what's on your mind"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="w-full px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg flex items-center justify-center gap-3 text-white relative overflow-hidden group"
                style={{
                  fontFamily: 'Poppins, system-ui, sans-serif',
                  background: 'linear-gradient(135deg, #b8860b, #cd853f)',
                }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity" style={{ background: 'linear-gradient(135deg, #f97316, #22c55e)' }} />
                <span className="relative">Send Message</span>
                <span role="img" aria-label="send" className="relative">📨</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Map Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #fed7aa/60, #fef3c7/60)',
            }}
          >
            <div className="p-6 border-b border-slate-200 flex items-center gap-4">
              <span className="text-2xl">🗺️</span>
              <div>
                <h3 className="lg font-bold text-slate-900">Find Us Here</h3>
                <p className="text-xs text-slate-600">Smruti Mandir, Nagpur</p>
              </div>
            </div>
            <div className="relative w-full h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.2!2d79.0882!3d21.1466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31ffc13%3A0x9c5f3e2e2e2e2e2e!2sSmruti%20Mandir!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Smruti Mandir Location"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-100 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 items-center">
            <div>
              <h3 className="text-3xl font-extrabold mb-3" style={{ background: 'linear-gradient(90deg, #f97316, #22c55e, #2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Abhyudaya'25</h3>
              <p className="text-sm text-slate-400 max-w-sm">
                An annual celebration of innovation, sustainability, and social responsibility driven by Panch Parivartan.
              </p>
            </div>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-3">📧 info@clubengineeringindia.com</div>
              <div className="flex items-center gap-3">📞 +91 98765 43210</div>
              <div className="flex items-center gap-3">📍 BITS Pilani, Rajasthan</div>
            </div>
            <div className="flex md:justify-end gap-4">
              <motion.a
                href="https://www.instagram.com/engineering_india2047?igsh=MTNpaWthOWRvajI4eA=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center shadow-md text-xl"
                style={{ background: 'linear-gradient(135deg, #f97316/30, #22c55e/30)' }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
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
                className="w-12 h-12 rounded-full flex items-center justify-center shadow-md text-xl"
                style={{ background: 'linear-gradient(135deg, #2563eb/30, #22c55e/30)' }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
            </div>
          </div>
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500 gap-3">
            <div className="w-full h-[1px] mb-4" style={{ background: 'linear-gradient(90deg, #f97316, #22c55e, #2563eb)' }} />
            <p className="font-medium">© 2025 Abhyudaya. All rights reserved. Made with care by Club Engineering India.</p>
            <div className="flex gap-5 font-medium">
              <a href="#home" className="hover:text-orange-400 transition-colors">Home</a>
              <a href="#theme" className="hover:text-green-400 transition-colors">Theme</a>
              <a href="#events" className="hover:text-blue-400 transition-colors">Events</a>
              <a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
