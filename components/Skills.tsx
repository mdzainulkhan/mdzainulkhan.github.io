'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillGroups = [
  {
    category: 'Frontend Core',
    color: 'primary',
    pillClass: 'skill-pill',
    skills: ['React.js', 'Next.js', 'JavaScript ES6+', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'React Ecosystem',
    color: 'purple',
    pillClass: 'skill-pill skill-pill-purple',
    skills: ['React Hooks', 'Context API', 'React Router', 'SSR / SSG', 'Component Architecture', 'Code Splitting'],
  },
  {
    category: 'Styling & Design',
    color: 'amber',
    pillClass: 'skill-pill skill-pill-amber',
    skills: ['Tailwind CSS', 'Bootstrap 5', 'Sass / SCSS', 'Responsive Design', 'Mobile-First', 'Figma', 'Adobe XD'],
  },
  {
    category: 'APIs & Data',
    color: 'green',
    pillClass: 'skill-pill skill-pill-green',
    skills: ['REST APIs', 'Axios', 'Fetch API', 'Dynamic Data Rendering', 'Web Speech API', 'Canvas API', 'FileReader API'],
  },
  {
    category: 'Performance & SEO',
    color: 'primary',
    pillClass: 'skill-pill',
    skills: ['Core Web Vitals', 'Lighthouse', 'Lazy Loading', 'SEO Optimization', 'Google Search Console', 'Image Optimization'],
  },
  {
    category: 'Tools & DevOps',
    color: 'purple',
    pillClass: 'skill-pill skill-pill-purple',
    skills: ['Git', 'GitHub', 'Vercel', 'Netlify', 'NPM', 'CI/CD', 'VS Code'],
  },
  {
    category: 'Accessibility',
    color: 'green',
    pillClass: 'skill-pill skill-pill-green',
    skills: ['WCAG', 'ARIA', 'Semantic HTML', 'Cross-Browser Compatibility', 'Screen Reader Support'],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="skills" className="py-28 relative" ref={ref}>
      <div className="section-separator" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-2/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-tag mb-3">What I work with</p>
          <h2 className="font-display text-4xl md:text-5xl font-700 text-white">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-lg font-body">
            7+ years of hands-on expertise across the modern frontend stack
          </p>
        </motion.div>

        <div className="space-y-10">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.08 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-white/30 w-20 text-right shrink-0">{String(gi + 1).padStart(2, '0')}</span>
                <div className="h-px flex-1 bg-white/5" />
                <span className="text-sm font-display font-600 text-white/70">{group.category}</span>
                <div className="h-px flex-1 bg-white/5" />
              </div>
              <div className="flex flex-wrap gap-2 pl-24">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    className={group.pillClass}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: gi * 0.08 + si * 0.04 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
