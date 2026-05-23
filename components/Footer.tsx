'use client'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-display text-xl font-800 mb-1">
              <span className="gradient-text">JHK</span>
              <span className="text-white/20 mx-1">·</span>
              <span className="text-white/40 text-sm font-normal font-body">Jainul Haq Khan</span>
            </div>
            <p className="text-white/30 text-sm font-mono">Senior Frontend Developer · Delhi NCR</p>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: 'https://github.com/mdzainulkhan' },
              { icon: Linkedin, href: 'https://linkedin.com/in/jainulkhan' },
              { icon: Mail, href: 'mailto:jainulhk.dev@gmail.com' },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 glass rounded-lg flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/30 transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <p className="text-white/25 text-sm font-mono flex items-center gap-1.5">
            © {currentYear} · Built with
            <Heart size={12} className="text-primary/60" />
            Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
