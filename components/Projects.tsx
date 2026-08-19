'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Zap, Star } from 'lucide-react'

const projects = [
  {
    name:'IndiaResultLive',
    sub:'Government Job & Exam Portal',
    url:'https://indiaresultlive.com',
    live:true,
    score:'90+',
    desc:'High-traffic Sarkari Result portal with dynamic routing for jobs, results, admit cards & answer keys. Achieved Lighthouse 90+ via aggressive optimization.',
    tags:['Next.js','Bootstrap','CSS3','REST APIs','SSR','Lighthouse'],
    pts:['Lighthouse Performance Score 90+','Dynamic routing for jobs, results, admit cards','Real-time REST API integration','WCAG-compliant & SEO-optimized','Fully responsive — mobile & desktop'],
    grad:'linear-gradient(135deg, rgba(0,198,255,0.15), rgba(139,92,246,0.1))',
    border:'rgba(0,198,255,0.2)', accent:'#00C6FF',
  },
  {
    name:'AllConvertHub',
    sub:'Online Utility Platform',
    url:'https://allconverthub.com',
    live:true,
    score:null,
    desc:'10+ browser-based utility tools — Text-to-Speech, Speech-to-Text, image conversion & PDF tools — all client-side using native browser APIs.',
    tags:['React.js','Next.js','Web Speech API','Canvas API','FileReader API','SSR'],
    pts:['10+ utility tools built from scratch','Web Speech API for TTS & STT','Canvas API for image processing','Fully client-side — no backend','SSR for improved SEO & speed'],
    grad:'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(245,158,11,0.1))',
    border:'rgba(139,92,246,0.25)', accent:'#A78BFA',
  },
  {
    name:'INTELLISPINE',
    sub:'Hospital Management System',
    url:null,
    live:false,
    score:null,
    desc:'Built a 3-panel Hospital Management System (Super Admin, Admin, Dashboard) centralizing hospital operations',
    tags:['React.js','Next.js','Tailwind CSS','REST APIs','JavaScript'],
    pts:['Patient & Hospital management UI','Reusable component library','REST API for real-time data','Mobile-first & cross-browser','Optimized React architecture'],
    grad:'linear-gradient(135deg, rgba(245,158,11,0.12), rgba(16,185,129,0.1))',
    border:'rgba(245,158,11,0.22)', accent:'#FCD34D',
  },
]

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce:true, threshold:0.05 })

  return (
    <section id="projects" className="py-28 relative" ref={ref}>
      <div className="sep mb-1"/>
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, transparent, rgba(10,22,40,0.3), transparent)', pointerEvents:'none' }}/>
      <div className="max-w-6xl mx-auto px-6 pt-10 relative z-10">

        <motion.div initial={{opacity:0,y:28}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.7}} className="mb-14">
          <p className="stag mb-3">What I've built</p>
          <h2 style={{ fontFamily:'Space Grotesk', fontSize:'clamp(32px,5vw,48px)', fontWeight:700, color:'#fff' }}>
            Key <span className="g-text">Projects</span>
          </h2>
          <p style={{ color:'rgba(203,213,225,0.4)', marginTop:'10px', fontFamily:'Inter', fontSize:'15px' }}>
            Live products built from scratch — real performance, real results
          </p>
        </motion.div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'20px' }}>
          {projects.map((p,i)=>(
            <motion.div key={p.name}
              initial={{opacity:0,y:36}} animate={inView?{opacity:1,y:0}:{}}
              transition={{duration:0.7,delay:i*0.12}}
              className="gcard" style={{ overflow:'hidden' }}>

              {/* Top band */}
              <div style={{ height:'3px', background:p.grad.replace('135deg','90deg').replace('0.15','0.8').replace('0.1','0.6') }}/>

              <div style={{ padding:'22px' }}>
                {/* Header */}
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'14px' }}>
                  <div>
                    {p.live && (
                      <div style={{ display:'flex', alignItems:'center', gap:'5px', marginBottom:'6px' }}>
                        <Star size={11} style={{color:'#FCD34D'}}/>
                        <span style={{ fontFamily:'JetBrains Mono', fontSize:'10px', color:'rgba(252,211,77,0.7)' }}>Live Project</span>
                      </div>
                    )}
                    <h3 style={{ fontFamily:'Space Grotesk', fontSize:'20px', fontWeight:700,
                      color:'#fff', marginBottom:'3px', transition:'color 0.2s' }}>
                      {p.name}
                    </h3>
                    <p style={{ fontFamily:'JetBrains Mono', fontSize:'11px', color:'rgba(255,255,255,0.35)' }}>{p.sub}</p>
                  </div>
                  {p.score && (
                    <div style={{ textAlign:'center' }}>
                      <div style={{ width:48, height:48, borderRadius:'10px',
                        background:'rgba(16,185,129,0.1)', border:'1px solid rgba(16,185,129,0.25)',
                        display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
                        <Zap size={11} style={{color:'#6EE7B7'}}/>
                        <span style={{ fontFamily:'JetBrains Mono', fontSize:'12px', fontWeight:600, color:'#6EE7B7' }}>{p.score}</span>
                      </div>
                      <span style={{ fontFamily:'JetBrains Mono', fontSize:'9px', color:'rgba(255,255,255,0.25)' }}>Lighthouse</span>
                    </div>
                  )}
                </div>

                <p style={{ color:'rgba(203,213,225,0.55)', fontSize:'13px', lineHeight:'1.65',
                  marginBottom:'14px', fontFamily:'Inter' }}>{p.desc}</p>

                <ul style={{ display:'flex', flexDirection:'column', gap:'6px', marginBottom:'16px' }}>
                  {p.pts.map(pt=>(
                    <li key={pt} style={{ display:'flex', gap:'8px', fontSize:'12px',
                      color:'rgba(203,213,225,0.5)', fontFamily:'Inter' }}>
                      <span style={{ color:p.accent, flexShrink:0 }}>✓</span>{pt}
                    </li>
                  ))}
                </ul>

                <div style={{ display:'flex', flexWrap:'wrap', gap:'6px', marginBottom:'16px' }}>
                  {p.tags.map(t=>(
                    <span key={t} style={{ fontFamily:'JetBrains Mono', fontSize:'10px',
                      padding:'3px 9px', borderRadius:'100px',
                      background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)',
                      color:'rgba(255,255,255,0.4)' }}>{t}</span>
                  ))}
                </div>

                <div style={{ borderTop:'1px solid rgba(255,255,255,0.05)', paddingTop:'14px', display:'flex', gap:'14px' }}>
                  {p.url ? (
                    <a href={p.url} target="_blank" rel="noopener noreferrer"
                      style={{ display:'flex', alignItems:'center', gap:'5px', fontSize:'13px',
                        fontFamily:'JetBrains Mono', color:p.accent, textDecoration:'none',
                        transition:'opacity 0.2s' }}
                      onMouseEnter={e=>(e.currentTarget.style.opacity='0.7')}
                      onMouseLeave={e=>(e.currentTarget.style.opacity='1')}>
                      <ExternalLink size={13}/> Live Site
                    </a>
                  ) : (
                    <span style={{ display:'flex', alignItems:'center', gap:'5px', fontSize:'13px',
                      fontFamily:'JetBrains Mono', color:'rgba(255,255,255,0.2)' }}>
                      <ExternalLink size={13}/> Private Project
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{opacity:0,y:18}} animate={inView?{opacity:1,y:0}:{}}
          transition={{delay:0.5}} style={{ textAlign:'center', marginTop:'48px' }}>
          <a href="https://github.com/mdzainulkhan" target="_blank" rel="noopener noreferrer" className="btn-o">
            <Github size={17}/> View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
