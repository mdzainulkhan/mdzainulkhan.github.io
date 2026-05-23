'use client'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { TrendingUp, Target, Star, Code, Palette, Zap } from 'lucide-react'

const stats = [
  { value: 40, suffix: '%', label: 'Performance Improvement', icon: TrendingUp, color: 'primary' },
  { value: 95, suffix: '+', label: 'Lighthouse Score', icon: Zap, color: 'green' },
  { value: 25, suffix: '+', label: 'Projects at Infoicon', icon: Target, color: 'purple' },
  { value: 50, suffix: '+', label: 'Designs Converted', icon: Palette, color: 'amber' },
  { value: 18, suffix: '%', label: 'Bounce Rate Reduced', icon: Star, color: 'pink' },
  { value: 7, suffix: '+', label: 'Years of Experience', icon: Code, color: 'primary' },
]

const colorMap: Record<string, { text: string; bg: string; border: string }> = {
  primary: { text: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/20' },
  green: { text: 'text-green-400', bg: 'bg-green-400/10', border: 'border-green-400/20' },
  purple: { text: 'text-purple-400', bg: 'bg-purple-400/10', border: 'border-purple-400/20' },
  amber: { text: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/20' },
  pink: { text: 'text-pink-400', bg: 'bg-pink-400/10', border: 'border-pink-400/20' },
}

function AnimatedNumber({ value, inView }: { value: number; inView: boolean }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 2, ease: 'easeOut' })
      return controls.stop
    }
  }, [inView, value, count])

  return <motion.span>{rounded}</motion.span>
}

const achievements = [
  'Improved web performance by up to 40% using lazy loading, code splitting & Core Web Vitals optimizations',
  'Delivered 25+ responsive, pixel-accurate UI projects at Infoicon Technologies across diverse domains',
  'Reduced client bounce rate by 18% at B. Jain Publishers through targeted UI & SEO improvements',
  'Achieved Lighthouse scores of 85–95+ on production applications at Indai Technologies',
  'Built and deployed 2 live public products (IndiaResultLive, AllConvertHub) from scratch',
  'Converted 50+ PSD/Figma/XD designs into responsive, production-ready interfaces across 7+ years',
]

export default function Achievements() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section className="py-28 relative" ref={ref}>
      <div className="section-separator" />
      <div className="max-w-7xl mx-auto px-6 pt-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-tag mb-3">By the numbers</p>
          <h2 className="font-display text-4xl md:text-5xl font-700 text-white">
            Key <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            const c = colorMap[stat.color]
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`glass rounded-2xl p-5 text-center border ${c.border} hover:-translate-y-1 transition-transform duration-300`}
              >
                <div className={`w-9 h-9 ${c.bg} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  <Icon size={18} className={c.text} />
                </div>
                <div className={`font-display text-2xl font-800 ${c.text}`}>
                  <AnimatedNumber value={stat.value} inView={inView} />
                  {stat.suffix}
                </div>
                <div className="text-white/40 text-xs font-mono mt-1 leading-tight">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>

        {/* Achievement list */}
        <div className="grid md:grid-cols-2 gap-4">
          {achievements.map((ach, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.08 }}
              className="glass rounded-xl p-4 border border-white/5 flex gap-3 items-start hover:border-primary/20 transition-colors"
            >
              <span className="text-primary mt-0.5 shrink-0 text-lg font-display font-700">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-white/60 text-sm leading-relaxed">{ach}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
