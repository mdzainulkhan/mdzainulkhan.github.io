'use client'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Github, Linkedin, Mail, Phone, ArrowDown, ExternalLink } from 'lucide-react'

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  delay: Math.random() * 4,
  duration: Math.random() * 4 + 3,
}))

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">

      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/5 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-3xl" />

      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: 0.3,
          }}
        />
      ))}

      {/* Grid lines decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent w-full"
            style={{ top: `${20 * (i + 1)}%` }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: i * 0.15, duration: 1.5 }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:max-w-4xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 mb-8"
          >
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs font-mono text-primary/80">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for new opportunities
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
          >
            <p className="section-tag mb-3">Hello, I'm</p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-800 leading-[0.95] tracking-tight mb-4">
              <span className="text-white">Md Jainul</span>
              <br />
              <span className="gradient-text glow-text">Haq Khan</span>
            </h1>
          </motion.div>

          {/* Typing animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-4 mb-6 h-10 flex items-center"
          >
            <span className="text-white/40 font-mono mr-2 text-lg">&gt;</span>
            <TypeAnimation
              sequence={[
                'Senior Frontend Developer',
                2000,
                'React.js & Next.js Expert',
                2000,
                'UI Performance Optimizer',
                2000,
                'Core Web Vitals Specialist',
                2000,
                '7+ Years Experience',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-display text-xl md:text-2xl font-600 text-primary"
            />
            <span className="ml-1 w-0.5 h-6 bg-primary animate-pulse" />
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8"
          >
            {[
              { num: '7+', label: 'Years Experience' },
              { num: '40%', label: 'Performance Boost' },
              { num: '95+', label: 'Lighthouse Score' },
              { num: '50+', label: 'Projects Delivered' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl font-700 text-primary">{stat.num}</div>
                <div className="text-xs text-white/40 font-mono">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="text-white/60 text-lg max-w-2xl mb-10 leading-relaxed font-body"
          >
            Crafting scalable, high-performance web applications with React.js & Next.js.
            Specialized in{' '}
            <span className="text-primary">Core Web Vitals optimization</span>,{' '}
            <span className="text-secondary/90">responsive UI design</span>, and{' '}
            <span className="text-amber-400/90">pixel-perfect implementation</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a href="#projects" className="btn-primary flex items-center gap-2">
              View My Work <ExternalLink size={16} />
            </a>
            <a href="#contact" className="btn-outline flex items-center gap-2">
              Let's Connect <Mail size={16} />
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex items-center gap-6"
          >
            {[
              { icon: Github, href: 'https://github.com/mdzainulkhan', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/jainulkhan', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:jainulhk.dev@gmail.com', label: 'Email' },
              { icon: Phone, href: 'tel:+917631975588', label: 'Phone' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:glow-box"
              >
                <Icon size={18} />
              </a>
            ))}
            <div className="h-px w-16 bg-gradient-to-r from-primary/40 to-transparent" />
            <span className="text-xs text-white/30 font-mono">Delhi NCR, India</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
