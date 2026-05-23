'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Zap, Layers, Globe } from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    title: 'Clean Architecture',
    desc: 'Reusable component-based architecture with React Hooks and modular patterns',
    color: 'text-primary',
    bg: 'bg-primary/10 border-primary/20',
  },
  {
    icon: Zap,
    title: 'Performance First',
    desc: 'Lazy loading, code splitting — consistently achieving Lighthouse 85–95+',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10 border-amber-400/20',
  },
  {
    icon: Layers,
    title: 'Design-to-Code',
    desc: 'Pixel-perfect conversion from Figma, XD & PSD to production-ready UI',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10 border-purple-400/20',
  },
  {
    icon: Globe,
    title: 'SEO & Accessibility',
    desc: 'WCAG compliant, semantic HTML, SEO-optimized across all deliverables',
    color: 'text-green-400',
    bg: 'bg-green-400/10 border-green-400/20',
  },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="py-28 relative" ref={ref}>
      <div className="section-separator" />
      <div className="max-w-7xl mx-auto px-6 pt-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-tag mb-3">Who I am</p>
          <h2 className="font-display text-4xl md:text-5xl font-700 text-white">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-5 text-white/65 text-lg leading-relaxed font-body">
              <p>
                I'm a <span className="text-white font-500">Senior Frontend Developer</span> based in{' '}
                <span className="text-primary">Delhi NCR</span> with over{' '}
                <span className="text-white font-500">7+ years</span> of experience building
                modern, scalable web applications.
              </p>
              <p>
                My journey started in web design, which gives me a strong eye for{' '}
                <span className="text-purple-400">pixel-perfect UI</span> and{' '}
                <span className="text-amber-400">user experience</span>. Over time, I transitioned
                into frontend development — combining design sensibility with engineering precision.
              </p>
              <p>
                I specialize in{' '}
                <span className="text-primary">React.js & Next.js</span>, with deep expertise in
                performance optimization, Core Web Vitals, and building accessible, SEO-friendly
                interfaces that real users love.
              </p>
              <p>
                Currently working at{' '}
                <span className="text-white font-500">Indai Technologies</span>, building high-traffic
                applications with Lighthouse scores of{' '}
                <span className="text-green-400 font-mono">85–95+</span>.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Core Web Vitals'].map((tag) => (
                <span key={tag} className="skill-pill">{tag}</span>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-6">
              <a href="mailto:jainulhk.dev@gmail.com" className="btn-primary py-3 px-6 text-sm">
                Get In Touch
              </a>
              <a
                href="https://linkedin.com/in/jainulkhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary/80 hover:text-primary text-sm font-mono flex items-center gap-1 transition-colors"
              >
                LinkedIn Profile →
              </a>
            </div>
          </motion.div>

          {/* Right — highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  className={`glass rounded-2xl p-5 border transition-all duration-300 hover:-translate-y-1 glow-box-hover ${item.bg}`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${item.bg}`}>
                    <Icon size={20} className={item.color} />
                  </div>
                  <h3 className="font-display font-600 text-white text-base mb-1">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
