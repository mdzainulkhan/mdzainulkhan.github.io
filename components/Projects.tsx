'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Zap, Star } from 'lucide-react'

const projects = [
  {
    name: 'IndiaResultLive',
    tagline: 'Government Job & Exam Portal',
    url: 'https://indiaresultlive.com',
    github: null,
    featured: true,
    score: '90+',
    description:
      'High-traffic Sarkari Result portal with dynamic routing for jobs, results, admit cards, and answer keys. Achieved Lighthouse performance score 90+ via aggressive optimization techniques.',
    tags: ['Next.js', 'Bootstrap', 'CSS3', 'REST APIs', 'Lighthouse', 'SSR'],
    highlights: [
      'Lighthouse Performance Score 90+',
      'Dynamic routing for jobs, results, admit cards',
      'Real-time API data integration',
      'WCAG-compliant & SEO-optimized',
      'Responsive across all devices',
    ],
    gradient: 'from-primary/20 to-purple-500/20',
    accentColor: 'text-primary',
    borderColor: 'border-primary/20',
  },
  {
    name: 'AllConvertHub',
    tagline: 'Online Utility Platform',
    url: 'https://allconverthub.com',
    github: null,
    featured: true,
    score: null,
    description:
      '10+ browser-based utility tools including Text-to-Speech, Speech-to-Text, image conversion, and PDF tools — all fully client-side using native browser APIs.',
    tags: ['React.js', 'Next.js', 'Web Speech API', 'Canvas API', 'FileReader API', 'SSR'],
    highlights: [
      '10+ utility tools built from scratch',
      'Web Speech API for TTS & STT',
      'Canvas API for image processing',
      'Fully client-side — no backend needed',
      'SSR with Next.js for SEO boost',
    ],
    gradient: 'from-purple-500/20 to-amber-500/20',
    accentColor: 'text-purple-400',
    borderColor: 'border-purple-400/20',
  },
  {
    name: 'INTELLISPINE',
    tagline: 'Clinic Management System',
    url: null,
    github: null,
    featured: false,
    score: null,
    description:
      'Comprehensive clinic and patient management frontend with reusable components, real-time data rendering via REST APIs, and mobile-first design for clinical operations.',
    tags: ['React.js', 'Next.js', 'Bootstrap', 'REST APIs', 'JavaScript', 'HTML5'],
    highlights: [
      'Patient & clinic management workflows',
      'Reusable UI component library',
      'REST API integration for real-time data',
      'Mobile-first & cross-browser compatible',
      'Optimized React component architecture',
    ],
    gradient: 'from-amber-500/20 to-green-500/20',
    accentColor: 'text-amber-400',
    borderColor: 'border-amber-400/20',
  },
]

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="projects" className="py-28 relative" ref={ref}>
      <div className="section-separator" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-2/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-tag mb-3">What I've built</p>
          <h2 className="font-display text-4xl md:text-5xl font-700 text-white">
            Key <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-lg font-body">
            Live products built from scratch — reflecting real-world performance and design standards
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className={`group relative glass rounded-2xl overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${project.borderColor}`}
            >
              {/* Top gradient band */}
              <div className={`h-1 w-full bg-gradient-to-r ${project.gradient} opacity-80`} />

              {/* Card content */}
              <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    {project.featured && (
                      <div className="flex items-center gap-1 mb-2">
                        <Star size={12} className="text-amber-400" />
                        <span className="text-xs font-mono text-amber-400/80">Live Project</span>
                      </div>
                    )}
                    <h3 className="font-display text-xl font-700 text-white group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-white/40 text-sm font-mono mt-0.5">{project.tagline}</p>
                  </div>
                  {project.score && (
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex flex-col items-center justify-center">
                        <Zap size={10} className="text-green-400" />
                        <span className="text-green-400 text-xs font-mono font-600">{project.score}</span>
                      </div>
                      <span className="text-white/30 text-[10px] font-mono">Lighthouse</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-white/55 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-5">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-white/50 text-xs">
                      <span className={`shrink-0 ${project.accentColor}`}>✓</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/8 text-white/45"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 border-t border-white/5 pt-4">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1.5 text-sm font-mono ${project.accentColor} hover:opacity-80 transition-opacity`}
                    >
                      <ExternalLink size={13} />
                      Live Site
                    </a>
                  ) : (
                    <span className="text-white/20 text-sm font-mono flex items-center gap-1.5">
                      <ExternalLink size={13} />
                      Private Project
                    </span>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-mono text-white/40 hover:text-white transition-colors"
                    >
                      <Github size={13} />
                      Source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-white/40 font-mono text-sm mb-4">More projects on GitHub</p>
          <a
            href="https://github.com/mdzainulkhan"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Github size={18} />
            github.com/mdzainulkhan
          </a>
        </motion.div>
      </div>
    </section>
  )
}
