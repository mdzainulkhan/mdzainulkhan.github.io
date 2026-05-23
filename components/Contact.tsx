'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:jainulhk.dev@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Jainul,\n\nMy name is ${form.name}.\n\n${form.message}\n\nContact: ${form.email}`)}`
    window.location.href = mailtoLink
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'jainulhk.dev@gmail.com', href: 'mailto:jainulhk.dev@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 76319 75588', href: 'tel:+917631975588' },
    { icon: MapPin, label: 'Location', value: 'Delhi NCR, India', href: null },
  ]

  const socials = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/mdzainulkhan', handle: 'mdzainulkhan' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/jainulkhan', handle: 'jainulkhan' },
  ]

  return (
    <section id="contact" className="py-28 relative" ref={ref}>
      <div className="section-separator" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-2/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="section-tag mb-3">Let's work together</p>
          <h2 className="font-display text-4xl md:text-5xl font-700 text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-lg mx-auto font-body">
            I'm available for new opportunities. Whether it's a full-time role or freelance project — let's talk!
          </p>
          <div className="mt-4 inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs font-mono text-green-400">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available · Immediate Joiner
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-4 mb-10">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="glass rounded-xl p-4 border border-white/5 flex items-center gap-4 hover:border-primary/20 transition-colors group">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs font-mono mb-0.5">{label}</div>
                    {href ? (
                      <a href={href} className="text-white group-hover:text-primary transition-colors text-sm font-500">
                        {value}
                      </a>
                    ) : (
                      <span className="text-white text-sm">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <p className="text-white/40 text-xs font-mono uppercase tracking-widest mb-4">Social Profiles</p>
              {socials.map(({ icon: Icon, label, href, handle }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-xl p-4 border border-white/5 flex items-center gap-4 hover:border-primary/20 hover:-translate-x-1 transition-all group block"
                >
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-white/60 group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs font-mono">{label}</div>
                    <div className="text-white/70 group-hover:text-primary transition-colors text-sm font-mono">
                      /{handle}
                    </div>
                  </div>
                  <span className="ml-auto text-white/20 group-hover:text-primary transition-colors">→</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 border border-white/5">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                {['name', 'email'].map((field) => (
                  <div key={field}>
                    <label className="block text-xs font-mono text-white/40 mb-2 capitalize">{field}</label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      required
                      placeholder={field === 'name' ? 'Your name' : 'your@email.com'}
                      value={form[field as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/90 text-sm placeholder:text-white/20 focus:outline-none focus:border-primary/40 focus:bg-primary/5 transition-all font-body"
                    />
                  </div>
                ))}
              </div>

              <div className="mb-4">
                <label className="block text-xs font-mono text-white/40 mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="Job Opportunity / Freelance Project"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/90 text-sm placeholder:text-white/20 focus:outline-none focus:border-primary/40 focus:bg-primary/5 transition-all font-body"
                />
              </div>

              <div className="mb-6">
                <label className="block text-xs font-mono text-white/40 mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about the opportunity..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/90 text-sm placeholder:text-white/20 focus:outline-none focus:border-primary/40 focus:bg-primary/5 transition-all resize-none font-body"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                {sent ? (
                  <>
                    <CheckCircle size={18} />
                    Opening mail client...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
