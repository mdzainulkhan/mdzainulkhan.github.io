'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Zap, Layers, Globe } from 'lucide-react'
import Image from 'next/image'

const cards = [
  { icon: Code2, title: 'React Architecture', desc: 'Reusable hooks, Context API, component patterns — clean & scalable.', c: 'c-text', bg: 'rgba(0,198,255,0.07)', border: 'rgba(0,198,255,0.18)' },
  { icon: Zap, title: 'Performance First', desc: 'Lazy loading, code splitting — Lighthouse 85–95+ consistently.', c: 'a-text', bg: 'rgba(245,158,11,0.07)', border: 'rgba(245,158,11,0.2)' },
  { icon: Layers, title: 'Design to Code', desc: 'Pixel-perfect Figma, XD & PSD to production-ready UI — 50+ projects.', c: 'v-text', bg: 'rgba(139,92,246,0.07)', border: 'rgba(139,92,246,0.2)' },
  { icon: Globe, title: 'SEO & A11y', desc: 'WCAG, ARIA, semantic HTML, SSR with Next.js for max visibility.', c: '', bg: 'rgba(16,185,129,0.07)', border: 'rgba(16,185,129,0.2)', extra: 'text-emerald-400' },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })
  return (
    <section id="about" className="py-28 relative" ref={ref}>
      <div className="sep mb-1" />
      <div className="max-w-6xl mx-auto px-6 pt-10">

        <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="mb-14">
          <p className="stag mb-3">Who I am</p>
          <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(32px,5vw,48px)', fontWeight: 700, color: '#fff' }}>
            About <span className="g-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>

            {/* Small photo + intro side by side */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '24px' }}>
              <div style={{
                flexShrink: 0, width: 72, height: 72, borderRadius: '50%', overflow: 'hidden',
                border: '2px solid rgba(0,198,255,0.3)',
                boxShadow: '0 0 20px rgba(0,198,255,0.15)'
              }}>
                <Image src="/profile.jpg" alt="Jainul" width={72} height={72} style={{ objectFit: 'cover', objectPosition: 'center top' }} />
              </div>
              <div>
                <p style={{ fontFamily: 'Space Grotesk', color: '#fff', fontWeight: 600, fontSize: '17px', marginBottom: '3px' }}>
                  Md Jainul Haq Khan
                </p>
                <p style={{ fontFamily: 'JetBrains Mono', color: 'rgba(0,198,255,0.7)', fontSize: '12px', marginBottom: '4px' }}>
                  Frontend Developer · Delhi NCR
                </p>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  <span className="spill" style={{ fontSize: '11px', padding: '3px 10px' }}>React.js</span>
                  <span className="spill spill-v" style={{ fontSize: '11px', padding: '3px 10px' }}>Next.js</span>
                  <span className="spill spill-g" style={{ fontSize: '11px', padding: '3px 10px' }}>Tailwind CSS</span>
                </div>
              </div>
            </div>

            <div style={{
              display: 'flex', flexDirection: 'column', gap: '16px',
              color: 'rgba(203,213,225,0.65)', fontSize: '15px', lineHeight: '1.8', fontFamily: 'Inter'
            }}>
              <p>
                <span style={{ color: '#fff', fontWeight: 500 }}>Frontend Developer</span> with{' '}
                <span style={{ color: '#00C6FF' }}>7+ years</span> of overall experience and{' '}
                <span style={{ color: '#00C6FF' }}>3+ years</span> of hands-on expertise in{' '}
                <span style={{ color: '#A78BFA' }}>React.js & Next.js</span>.
              </p>
              <p>
                Skilled in building responsive, SEO-friendly, and performance-optimized web
                applications using React.js, JavaScript, Next.js, Redux Toolkit, Tailwind CSS, Bootstrap, and REST APIs. Experienced in
                developing reusable UI components, API integration, dynamic routing, dashboards, and pixel-perfect responsive interfaces.
                Developed IndiaResultLive.com, a Next.js-based government job portal, achieving 70K+ Google Search impressions and
                1.4K+ organic clicks within 28 days.
              </p>
            </div>

            <div style={{ marginTop: '24px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['React.js', 'Next.js', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'Lighthouse'].map(t => (
                <span key={t} className="spill">{t}</span>
              ))}
            </div>

            <div style={{ marginTop: '28px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a href="mailto:jainulhk.dev@gmail.com" className="btn-p">
                <span>Hire Me</span>
              </a>
              <a href="https://linkedin.com/in/jainulkhan" target="_blank" rel="noopener noreferrer"
                style={{
                  color: 'rgba(0,198,255,0.7)', fontSize: '13px', fontFamily: 'JetBrains Mono',
                  display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#00C6FF')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(0,198,255,0.7)')}>
                LinkedIn Profile →
              </a>
            </div>
          </motion.div>

          {/* Right cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            {cards.map(({ icon: Icon, title, desc, c, bg, border, extra }, i) => (
              <motion.div key={title}
                initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="gcard" style={{ padding: '20px' }}
              >
                <div style={{
                  width: 38, height: 38, borderRadius: '10px', background: bg,
                  border: `1px solid ${border}`, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', marginBottom: '12px'
                }}>
                  <Icon size={19} className={c || extra || ''} style={!c ? { color: '#6EE7B7' } : {}} />
                </div>
                <h3 style={{
                  fontFamily: 'Space Grotesk', fontWeight: 600, color: '#fff',
                  fontSize: '15px', marginBottom: '6px'
                }}>{title}</h3>
                <p style={{ color: 'rgba(203,213,225,0.5)', fontSize: '13px', lineHeight: '1.6' }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
