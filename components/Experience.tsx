'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
  {
    role: 'Senior Frontend Developer',
    company: 'Indai Technologies',
    period: 'Aug 2024 – Present',
    type: 'Full Time',
    current: true,
    highlights: [
      'Developed scalable, responsive UI components using React.js, Next.js, Tailwind CSS for high-traffic apps',
      'Engineered reusable component architecture with React Hooks, improving development efficiency by ~25%',
      'Optimized performance using lazy loading & code splitting — Lighthouse scores 85–95+',
      'Reduced page load time by up to 40%, improving Core Web Vitals and user engagement',
      'Integrated 10+ REST APIs using Fetch/Axios for dynamic, data-driven interfaces',
      'Maintained WCAG accessibility standards and SEO-friendly structure across all projects',
    ],
    tags: ['React.js', 'Next.js', 'Tailwind CSS', 'Lighthouse', 'Core Web Vitals'],
  },
  {
    role: 'Frontend Developer',
    company: 'Infoicon Technologies',
    period: 'Sep 2023 – Jul 2024',
    type: 'Full Time',
    current: false,
    highlights: [
      'Delivered responsive & pixel-accurate UI for 25+ projects using React.js, HTML5, CSS3 & Bootstrap',
      'Improved page performance by ~30% through asset optimization and efficient rendering',
      'Built reusable component libraries, reducing development redundancy by ~20%',
      'Implemented WCAG & ARIA accessibility, improving usability and compliance',
      'Coordinated with clients and cross-functional teams to deliver projects on schedule',
    ],
    tags: ['React.js', 'HTML5', 'CSS3', 'Bootstrap', 'WCAG'],
  },
  {
    role: 'Frontend Developer',
    company: 'Cliffex Software Solutions',
    period: 'Oct 2022 – Sep 2023',
    type: 'Full Time',
    current: false,
    highlights: [
      'Transitioned from web design to frontend development with React.js and modern JavaScript',
      'Converted Figma, Adobe XD, and PSD designs into responsive, cross-browser compatible interfaces',
      'Improved application routing and performance for faster loads and smoother navigation',
      'Ensured mobile-first design consistency across multiple devices and screen sizes',
    ],
    tags: ['React.js', 'JavaScript', 'Figma', 'Mobile-First'],
  },
  {
    role: 'Senior Web Designer',
    company: 'B. Jain Publishers',
    period: 'May 2021 – Oct 2022',
    type: 'Full Time',
    current: false,
    highlights: [
      'Designed & developed responsive UI for eCommerce & publishing platforms',
      'Reduced bounce rate by 18% through targeted UI enhancements and SEO optimization',
      'Developed dynamic pages using Next.js with server-side rendering (SSR)',
      'Converted PSD/XD mockups into responsive HTML/CSS pages with pixel accuracy',
    ],
    tags: ['Next.js', 'SSR', 'SEO', 'UI Design', 'HTML/CSS'],
  },
  {
    role: 'Web Designer',
    company: 'Goyal Brothers Prakashan',
    period: 'Jul 2018 – May 2021',
    type: 'Full Time',
    current: false,
    highlights: [
      'Specialized in PSD-to-HTML conversion for 50+ publications with pixel accuracy',
      'Designed UI assets including banners, landing pages & marketing creatives',
      'Implemented SEO-friendly semantic HTML to improve search visibility',
      'Maintained mobile responsiveness and cross-browser compatibility',
    ],
    tags: ['PSD to HTML', 'SEO', 'Semantic HTML', 'Cross-Browser'],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="experience" className="py-28 relative" ref={ref}>
      <div className="section-separator" />
      <div className="max-w-7xl mx-auto px-6 pt-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-tag mb-3">My journey</p>
          <h2 className="font-display text-4xl md:text-5xl font-700 text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px timeline-line hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="md:pl-24 relative"
              >
                {/* Timeline dot */}
                <div className={`absolute left-5 top-6 w-6 h-6 rounded-full border-2 items-center justify-center hidden md:flex ${
                  exp.current
                    ? 'bg-primary border-primary shadow-[0_0_15px_rgba(0,212,255,0.6)]'
                    : 'bg-dark-3 border-primary/30'
                }`}>
                  {exp.current && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>

                <div className={`glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 glow-box-hover ${
                  exp.current ? 'border-primary/20' : 'border-white/5'
                }`}>
                  {/* Header */}
                  <div className="flex flex-wrap gap-3 justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {exp.current && (
                          <span className="text-xs bg-primary/15 text-primary border border-primary/20 rounded-full px-3 py-0.5 font-mono">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="font-display text-xl font-600 text-white">{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase size={13} className="text-primary/70" />
                        <span className="text-primary/90 font-mono text-sm">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-white/40 text-sm font-mono">
                      <Calendar size={13} />
                      {exp.period}
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((h, hi) => (
                      <li key={hi} className="flex gap-3 text-white/60 text-sm leading-relaxed">
                        <span className="text-primary/60 mt-0.5 shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
