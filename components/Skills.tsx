'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const groups = [
  { label:'Frontend Core', cls:'spill', skills:['React.js','Next.js','TypeScript','JavaScript ES6+','HTML5','CSS3'] },
  { label:'React Ecosystem', cls:'spill spill-v', skills:['React Hooks','Context API','React Router','SSR / SSG','Component Architecture','Code Splitting','Lazy Loading'] },
  { label:'Styling & UI', cls:'spill spill-a', skills:['Tailwind CSS','Bootstrap 5','Sass / SCSS','Responsive Design','Mobile-First','Figma','Adobe XD'] },
  { label:'API & Data', cls:'spill spill-g', skills:['REST APIs','Axios','Fetch API','Dynamic Rendering','Web Speech API','Canvas API','FileReader API'] },
  { label:'Performance & SEO', cls:'spill', skills:['Core Web Vitals','Lighthouse','Bundle Optimization','SEO Optimization','Google Search Console','SSR/SSG'] },
  { label:'Tools & Platforms', cls:'spill spill-v', skills:['Git & GitHub','Vercel','Netlify','NPM','CI/CD','VS Code','Photoshop','Canva'] },
  { label:'Accessibility', cls:'spill spill-g', skills:['WCAG','ARIA','Semantic HTML','Cross-Browser','Screen Readers'] },
]

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce:true, threshold:0.05 })

  return (
    <section id="skills" className="py-28 relative" ref={ref}>
      <div className="sep mb-1"/>
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, transparent, rgba(10,22,40,0.25), transparent)', pointerEvents:'none' }}/>
      <div className="max-w-6xl mx-auto px-6 pt-10 relative z-10">

        <motion.div initial={{opacity:0,y:28}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.7}} className="mb-14">
          <p className="stag mb-3">What I use</p>
          <h2 style={{ fontFamily:'Space Grotesk', fontSize:'clamp(32px,5vw,48px)', fontWeight:700, color:'#fff' }}>
            Technical <span className="g-text">Skills</span>
          </h2>
          <p style={{ color:'rgba(203,213,225,0.45)', marginTop:'12px', fontFamily:'Inter', fontSize:'15px' }}>
            7+ years across the modern frontend stack
          </p>
        </motion.div>

        <div style={{ display:'flex', flexDirection:'column', gap:'32px' }}>
          {groups.map((g,gi)=>(
            <motion.div key={g.label}
              initial={{opacity:0,x:-24}} animate={inView?{opacity:1,x:0}:{}}
              transition={{duration:0.6,delay:gi*0.07}}>
              <div style={{ display:'flex', alignItems:'center', gap:'16px', marginBottom:'12px' }}>
                <span style={{ fontFamily:'JetBrains Mono', fontSize:'11px',
                  color:'rgba(255,255,255,0.2)', minWidth:'24px', textAlign:'right' }}>
                  {String(gi+1).padStart(2,'0')}
                </span>
                <div style={{ height:'1px', width:'20px', background:'rgba(255,255,255,0.08)' }}/>
                <span style={{ fontFamily:'Space Grotesk', fontSize:'13px', fontWeight:600,
                  color:'rgba(255,255,255,0.55)', letterSpacing:'0.5px' }}>{g.label}</span>
                <div style={{ flex:1, height:'1px', background:'rgba(255,255,255,0.05)' }}/>
              </div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'8px', paddingLeft:'52px' }}>
                {g.skills.map((s,si)=>(
                  <motion.span key={s} className={g.cls}
                    initial={{opacity:0,scale:0.85}} animate={inView?{opacity:1,scale:1}:{}}
                    transition={{duration:0.3,delay:gi*0.07+si*0.04}}>
                    {s}
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
