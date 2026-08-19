'use client'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { TrendingUp, Zap, Target, Palette, Star, Code } from 'lucide-react'

const stats = [
  {v:40,sfx:'%',label:'Performance Boost',Icon:TrendingUp,c:'#00C6FF'},
  {v:95,sfx:'+',label:'Lighthouse Score',Icon:Zap,c:'#6EE7B7'},
  {v:25,sfx:'+',label:'Projects Delivered',Icon:Target,c:'#A78BFA'},
  {v:50,sfx:'+',label:'Designs Converted',Icon:Palette,c:'#FCD34D'},
  {v:18,sfx:'%',label:'Bounce Rate Reduced',Icon:Star,c:'#F87171'},
  {v:8,sfx:'+',label:'Years Experience',Icon:Code,c:'#00C6FF'},
]

function Counter({v, inView}:{v:number; inView:boolean}) {
  const n = useMotionValue(0)
  const rounded = useTransform(n, x => Math.round(x))
  useEffect(() => {
    if (inView) { const c = animate(n, v, {duration:2, ease:'easeOut'}); return c.stop }
  }, [inView, v, n])
  return <motion.span>{rounded}</motion.span>
}

const achs = [
  'Improved frontend performance by up to 40% using lazy loading, code splitting & Core Web Vitals optimizations',
  'Achieved Lighthouse scores of 85–95+ across production React.js and Next.js applications',
  'Delivered 25+ responsive, pixel-accurate frontend projects across multiple business domains',
  'Reduced client bounce rate by 18% at B. Jain Publishers through UI & SEO improvements',
  'Built & deployed 2 live public products (IndiaResultLive & AllConvertHub) from scratch',
  'Converted 50+ Figma/PSD/XD designs into responsive, production-ready interfaces over 7+ years',
]

export default function Achievements() {
  const [ref, inView] = useInView({ triggerOnce:true, threshold:0.05 })

  return (
    <section className="py-28 relative" ref={ref}>
      <div className="sep mb-1"/>
      <div className="max-w-6xl mx-auto px-6 pt-10">

        <motion.div initial={{opacity:0,y:28}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.7}} className="mb-14">
          <p className="stag mb-3">By the numbers</p>
          <h2 style={{ fontFamily:'Space Grotesk', fontSize:'clamp(32px,5vw,48px)', fontWeight:700, color:'#fff' }}>
            Key <span className="g-text">Achievements</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))', gap:'14px', marginBottom:'40px' }}>
          {stats.map(({v,sfx,label,Icon,c},i)=>(
            <motion.div key={label}
              initial={{opacity:0,scale:0.85}} animate={inView?{opacity:1,scale:1}:{}}
              transition={{duration:0.5,delay:i*0.08}}
              className="gcard"
              style={{ padding:'20px', textAlign:'center', border:`1px solid ${c}22` }}>
              <div style={{ width:36,height:36, borderRadius:'10px',
                background:`${c}14`, border:`1px solid ${c}22`,
                display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 10px' }}>
                <Icon size={17} style={{color:c}}/>
              </div>
              <div style={{ fontFamily:'Space Grotesk', fontSize:'28px', fontWeight:700, color:c,
                textShadow:`0 0 20px ${c}55` }}>
                <Counter v={v} inView={inView}/>{sfx}
              </div>
              <div style={{ fontFamily:'JetBrains Mono', fontSize:'10px', color:'rgba(255,255,255,0.35)',
                marginTop:'4px', lineHeight:'1.4' }}>{label}</div>
            </motion.div>
          ))}
        </div>

        {/* Achievement list */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'12px' }}>
          {achs.map((a,i)=>(
            <motion.div key={i}
              initial={{opacity:0,x:i%2===0?-18:18}} animate={inView?{opacity:1,x:0}:{}}
              transition={{duration:0.6,delay:0.4+i*0.08}}
              className="gcard"
              style={{ padding:'16px 18px', display:'flex', gap:'12px', alignItems:'flex-start' }}>
              <span style={{ fontFamily:'Space Grotesk', fontSize:'14px', fontWeight:700,
                color:'rgba(0,198,255,0.5)', flexShrink:0, minWidth:'24px' }}>
                {String(i+1).padStart(2,'0')}
              </span>
              <p style={{ color:'rgba(203,213,225,0.6)', fontSize:'13px', lineHeight:'1.65', fontFamily:'Inter' }}>{a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
