'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = ['about', 'skills', 'experience', 'projects', 'contact']
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive('#' + id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-dark py-3 shadow-2xl' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#"
          className="font-display font-800 text-xl"
          whileHover={{ scale: 1.05 }}
        >
          <span className="gradient-text">JHK</span>
          <span className="text-white/30 mx-1.5">·</span>
          <span className="text-white/60 text-sm font-body font-normal">dev</span>
        </motion.a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-body transition-colors duration-200 rounded-lg group ${
                active === link.href ? 'text-primary' : 'text-white/60 hover:text-white'
              }`}
            >
              {active === link.href && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-lg"
                />
              )}
              {link.label}
            </a>
          ))}
          <a
            href="/Jainul_H_Khan_Senior_Frontend_Developer.pdf"
            download
            className="ml-4 btn-primary text-sm py-2.5 px-5 rounded-lg"
          >
            Resume ↓
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white/70 hover:text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-dark border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-white/70 hover:text-primary border-b border-white/5 font-body transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a href="/Jainul_H_Khan_Senior_Frontend_Developer.pdf" download className="btn-primary mt-2 text-center">
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
