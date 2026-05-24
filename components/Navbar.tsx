'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      for (const id of ['contact','projects','experience','skills','about']) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive('#' + id); break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}
        style={{ zIndex: 9000, position: 'fixed', top: 0, left: 0, right: 0 }}
        className={`transition-all duration-500 ${scrolled ? 'glass shadow-2xl py-3' : 'py-5'}`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <a href="#" style={{ textDecoration: 'none' }}>
            <span style={{ fontFamily:'Space Grotesk', fontWeight:700, fontSize:'20px' }}>
              <span className="g-text">JHK</span>
              <span style={{ color:'rgba(255,255,255,0.2)', margin:'0 6px' }}>·</span>
              <span style={{ color:'rgba(255,255,255,0.4)', fontSize:'13px', fontWeight:400, fontFamily:'JetBrains Mono' }}>dev</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <a key={l.href} href={l.href} style={{
                padding:'8px 16px', borderRadius:'8px', fontSize:'14px',
                fontFamily:'Inter, sans-serif', textDecoration:'none',
                color: active === l.href ? '#00C6FF' : 'rgba(255,255,255,0.55)',
                background: active === l.href ? 'rgba(0,198,255,0.08)' : 'transparent',
                border: active === l.href ? '1px solid rgba(0,198,255,0.2)' : '1px solid transparent',
                transition:'all 0.2s',
              }}>
                {l.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download="Jainul_Haq_Khan_Frontend_Developer_Resume.pdf"
              style={{ marginLeft:'12px' }}
              className="btn-p"
            >
              Resume ↓
            </a>
          </div>

          {/* Hamburger — fully clickable on mobile */}
          <button
            type="button"
            onClick={() => setOpen(p => !p)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            style={{
              background:'transparent', border:'none',
              cursor:'pointer', pointerEvents:'auto',
              touchAction:'manipulation',
              WebkitTapHighlightColor:'transparent',
              padding:'10px', zIndex:9001, position:'relative',
              color:'rgba(255,255,255,0.75)',
              display:'flex', alignItems:'center', justifyContent:'center',
            }}
            className="md:hidden"
          >
            <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
              <rect x="0" y="0"  width="24" height="2" rx="1" fill="currentColor"
                style={{ transformOrigin:'12px 1px', transition:'transform 0.3s',
                  transform: open ? 'rotate(45deg) translateY(9px)' : 'none' }} />
              <rect x="0" y="9"  width="24" height="2" rx="1" fill="currentColor"
                style={{ transition:'opacity 0.3s', opacity: open ? 0 : 1 }} />
              <rect x="0" y="18" width="24" height="2" rx="1" fill="currentColor"
                style={{ transformOrigin:'12px 19px', transition:'transform 0.3s',
                  transform: open ? 'rotate(-45deg) translateY(-9px)' : 'none' }} />
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="bd"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              style={{
                position:'fixed', inset:0, zIndex:8988,
                background:'rgba(5,11,24,0.8)',
                backdropFilter:'blur(8px)', WebkitBackdropFilter:'blur(8px)',
                cursor:'pointer', pointerEvents:'auto',
              }}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              initial={{ opacity:0, y:-12, scale:0.97 }}
              animate={{ opacity:1, y:0, scale:1 }}
              exit={{ opacity:0, y:-12, scale:0.97 }}
              transition={{ duration:0.22, ease:'easeOut' }}
              style={{
                position:'fixed', top:'68px', left:'12px', right:'12px',
                zIndex:8995,
                background:'rgba(8,16,32,0.98)',
                border:'1px solid rgba(0,198,255,0.18)',
                borderRadius:'18px',
                boxShadow:'0 24px 80px rgba(0,0,0,0.75), 0 0 0 1px rgba(0,198,255,0.05)',
                overflow:'hidden',
                pointerEvents:'auto',
              }}
            >
              {/* Nav links */}
              <div style={{ padding:'12px 10px 6px' }}>
                {links.map((l, i) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    style={{
                      display:'flex', alignItems:'center', gap:'14px',
                      padding:'14px 16px', marginBottom:'3px',
                      borderRadius:'12px',
                      color: active === l.href ? '#00C6FF' : 'rgba(255,255,255,0.72)',
                      background: active === l.href ? 'rgba(0,198,255,0.09)' : 'transparent',
                      fontFamily:'Space Grotesk, sans-serif', fontSize:'15px',
                      fontWeight: active === l.href ? 600 : 400,
                      textDecoration:'none',
                      cursor:'pointer', pointerEvents:'auto',
                      touchAction:'manipulation',
                      WebkitTapHighlightColor:'transparent',
                      transition:'background 0.2s, color 0.2s',
                    }}
                  >
                    <span style={{
                      fontFamily:'JetBrains Mono, monospace',
                      fontSize:'11px', color:'rgba(0,198,255,0.4)',
                      minWidth:'22px',
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {l.label}
                    {active === l.href && (
                      <span style={{ marginLeft:'auto', color:'#00C6FF', fontSize:'14px' }}>●</span>
                    )}
                  </a>
                ))}
              </div>

              {/* Divider */}
              <div style={{ height:'1px', background:'rgba(255,255,255,0.06)', margin:'0 16px' }}/>

              {/* Resume download button */}
              <div style={{ padding:'12px 10px 14px' }}>
                <a
                  href="/resume.pdf"
                  download="Jainul_Haq_Khan_Frontend_Developer_Resume.pdf"
                  onClick={() => setOpen(false)}
                  style={{
                    display:'flex', alignItems:'center', justifyContent:'center',
                    gap:'8px', padding:'14px',
                    background:'linear-gradient(135deg, #00C6FF, #8B5CF6)',
                    color:'#fff', borderRadius:'12px',
                    fontFamily:'Space Grotesk, sans-serif',
                    fontSize:'15px', fontWeight:600,
                    textDecoration:'none',
                    cursor:'pointer', pointerEvents:'auto',
                    touchAction:'manipulation',
                    WebkitTapHighlightColor:'transparent',
                    boxShadow:'0 8px 30px rgba(0,198,255,0.25)',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Download Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
