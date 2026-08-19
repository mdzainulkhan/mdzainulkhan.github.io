'use client'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Github, Linkedin, Mail, Phone, ArrowDown, Download, Briefcase } from 'lucide-react'
import Image from 'next/image'

const pts = Array.from({length:18},(_,i)=>({
  id:i, x:Math.random()*100, y:Math.random()*100,
  s:Math.random()*3+1, d:Math.random()*4, dur:Math.random()*5+4,
}))

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center dotgrid overflow-hidden">

      {/* Mesh gradient bg */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none' }}>
        <div style={{ position:'absolute', top:'10%', left:'5%', width:'500px', height:'500px',
          borderRadius:'50%', background:'radial-gradient(circle, rgba(0,198,255,0.06) 0%, transparent 70%)',
          filter:'blur(60px)' }} />
        <div style={{ position:'absolute', bottom:'15%', right:'5%', width:'450px', height:'450px',
          borderRadius:'50%', background:'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)',
          filter:'blur(60px)', animationDelay:'2s' }} />
        <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)',
          width:'800px', height:'400px', borderRadius:'50%',
          background:'radial-gradient(ellipse, rgba(0,114,255,0.03) 0%, transparent 70%)',
          filter:'blur(40px)' }} />
      </div>

      {/* Particles */}
      {pts.map(p=>(
        <div key={p.id} style={{
          position:'absolute', left:`${p.x}%`, top:`${p.y}%`,
          width:p.s, height:p.s, borderRadius:'50%',
          background: p.id%3===0?'#00C6FF':p.id%3===1?'#8B5CF6':'#F59E0B',
          opacity:0.25, animation:`particleFloat ${p.dur}s ${p.d}s ease-in-out infinite`,
          pointerEvents:'none',
        }}/>
      ))}

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-12">

          {/* ── LEFT ── */}
          <div className="flex-1 text-center lg:text-left">

            {/* Status */}
            <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:0.2}}
              className="flex justify-center lg:justify-start mb-7">
              <span style={{ display:'inline-flex', alignItems:'center', gap:'8px',
                background:'rgba(10,22,40,0.8)', border:'1px solid rgba(0,198,255,0.2)',
                borderRadius:'100px', padding:'7px 16px',
                fontFamily:'JetBrains Mono', fontSize:'11px', color:'rgba(0,198,255,0.85)' }}>
                <span style={{ width:8, height:8, borderRadius:'50%', background:'#22C55E',
                  boxShadow:'0 0 8px #22C55E', animation:'pulseGlow 2s ease-in-out infinite' }} />
                Open to Work · Immediate Joiner
              </span>
            </motion.div>

            {/* Name */}
            <motion.div initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{delay:0.3,duration:0.8}}>
              <p className="stag mb-3">Hello, I'm</p>
              <h1 style={{ fontFamily:'Space Grotesk', fontSize:'clamp(40px,7vw,76px)',
                fontWeight:700, lineHeight:0.95, letterSpacing:'-2px', marginBottom:'12px' }}>
                <span style={{ color:'#fff' }}>Md Jainul</span><br/>
                <span style={{ color:'#fff' }}>Haq </span>
                <span className="g-text">Khan</span>
              </h1>
            </motion.div>

            {/* Typing */}
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.55}}
              style={{ marginTop:'16px', marginBottom:'20px', height:'40px',
                display:'flex', alignItems:'center' }}
              className="lg:justify-start">
              {/* <span style={{ color:'rgba(0,198,255,0.5)', fontFamily:'JetBrains Mono', fontSize:'18px', marginRight:'8px' }}>&gt;</span> */}
              <TypeAnimation
                sequence={[
                  'React.js Developer', 2000,
                  'Next.js Developer', 2000,
                  'Frontend Developer', 2000,
                  'UI Developer', 2000,
                  // 'Core Web Vitals Pro', 2000,
                ]}
                wrapper="span"
                speed={55} repeat={Infinity}
                style={{ fontFamily:'Space Grotesk', fontSize:'clamp(16px,2.5vw,22px)',
                  fontWeight:600, color:'#00C6FF' }}
              />
              <span style={{ marginLeft:4, width:2, height:24, background:'#00C6FF',
                display:'inline-block', animation:'pulseGlow 1s ease-in-out infinite' }} />
            </motion.div>

            {/* Stats row */}
            <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:0.7}}
              style={{ display:'flex', flexWrap:'wrap', gap:'24px',
                marginBottom:'24px' }} className="lg:justify-start">
              {[
                {n:'8',l:'Years Exp'},{n:'3+',l:'React Years'},
                {n:'40%',l:'Perf Boost'},{n:'90+',l:'Lighthouse'},
              ].map(s=>(
                <div key={s.l} style={{ textAlign:'center' }}>
                  <div style={{ fontFamily:'Space Grotesk', fontSize:'26px', fontWeight:700, color:'#00C6FF',
                    textShadow:'0 0 20px rgba(0,198,255,0.5)' }}>{s.n}</div>
                  <div style={{ fontFamily:'JetBrains Mono', fontSize:'10px', color:'rgba(255,255,255,0.35)',
                    letterSpacing:'1px', marginTop:'2px' }}>{s.l}</div>
                </div>
              ))}
            </motion.div>

            {/* Desc */}
            <motion.p initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:0.82}}
              style={{ color:'rgba(203,213,225,0.6)', fontSize:'16px', lineHeight:'1.75',
                maxWidth:'520px', marginBottom:'32px', fontFamily:'Inter' }}
              className="mx-auto lg:mx-0">
              Building scalable, high-performance web applications with{' '}
              <span className="c-text" style={{fontWeight:500}}>React.js</span> &{' '}
              <span className="v-text" style={{fontWeight:500}}>Next.js</span>.
              Focused on <span className="a-text" style={{fontWeight:500}}>responsive UI, REST API integration, Lazy Loading, Code Splitting</span>, reusable components, pixel-perfect interfaces, and modern frontend architecture.
            </motion.p>

            {/* CTAs */}
            <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:0.92}}
              style={{ display:'flex', flexWrap:'wrap', gap:'12px',
                marginBottom:'36px' }} className="lg:justify-start">
              <a href="#projects" className="btn-p">
                <span>View Projects</span>
                <Briefcase size={15}/>
              </a>
              <a href="/resume.pdf" download="Jainul_Haq_Khan_Frontend_Developer_Resume.pdf" className="btn-o">
                <Download size={15}/> Resume
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.1}}
              style={{ display:'flex', alignItems:'center', gap:'12px', justifyContent:'start' }}
              className="lg:justify-start">
              {[
                {Icon:Github,href:'https://github.com/mdzainulkhan',label:'GitHub'},
                {Icon:Linkedin,href:'https://linkedin.com/in/jainulkhan',label:'LinkedIn'},
                {Icon:Mail,href:'mailto:jainulhk.dev@gmail.com',label:'Email'},
                {Icon:Phone,href:'tel:+917631975588',label:'Phone'},
              ].map(({Icon,href,label})=>(
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  style={{ width:40, height:40, borderRadius:'10px',
                    background:'rgba(10,22,40,0.8)', border:'1px solid rgba(255,255,255,0.08)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    color:'rgba(255,255,255,0.45)', transition:'all 0.25s', textDecoration:'none' }}
                  onMouseEnter={e=>{
                    const el=e.currentTarget as HTMLElement
                    el.style.color='#00C6FF'; el.style.borderColor='rgba(0,198,255,0.35)'
                    el.style.transform='translateY(-3px)'; el.style.background='rgba(0,198,255,0.07)'
                  }}
                  onMouseLeave={e=>{
                    const el=e.currentTarget as HTMLElement
                    el.style.color='rgba(255,255,255,0.45)'; el.style.borderColor='rgba(255,255,255,0.08)'
                    el.style.transform='translateY(0)'; el.style.background='rgba(10,22,40,0.8)'
                  }}>
                  <Icon size={17}/>
                </a>
              ))}
              <div style={{ height:1, width:40, background:'linear-gradient(90deg,rgba(0,198,255,0.4),transparent)' }}/>
              <span style={{ fontFamily:'JetBrains Mono', fontSize:'10px', color:'rgba(255,255,255,0.25)', letterSpacing:'1px' }}>
                Noida, Delhi NCR, India
              </span>
            </motion.div>
          </div>

          {/* ── RIGHT: Photo ── */}
          <motion.div
            initial={{opacity:0, scale:0.8, y:20}}
            animate={{opacity:1, scale:1, y:0}}
            transition={{delay:0.35, duration:1.1, ease:[0.22,1,0.36,1]}}
            style={{ flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center' }}
          >
            <div style={{ position:'relative' }}>

              {/* Outer rotating rings */}
              <div style={{ position:'absolute', inset:'-20px', borderRadius:'50%',
                border:'1px dashed rgba(0,198,255,0.2)',
                animation:'rotateSlow 20s linear infinite', pointerEvents:'none' }}/>
              <div style={{ position:'absolute', inset:'-38px', borderRadius:'50%',
                border:'1px dashed rgba(139,92,246,0.15)',
                animation:'rotateSlowR 30s linear infinite', pointerEvents:'none' }}/>

              {/* Glow ring behind image */}
              <div style={{ position:'absolute', inset:'-5px', borderRadius:'50%',
                background:'conic-gradient(from 0deg, #00C6FF, #8B5CF6, #00C6FF)',
                opacity:0.6, filter:'blur(12px)',
                animation:'rotateSlow 5s linear infinite', zIndex:0 }}/>

              {/* Photo */}
              <div style={{ position:'relative', zIndex:1,
                width:'clamp(240px,30vw,310px)', height:'clamp(240px,30vw,310px)',
                borderRadius:'50%', overflow:'hidden',
                border:'3px solid rgba(0,198,255,0.35)',
                boxShadow:'0 0 60px rgba(0,198,255,0.18), inset 0 0 40px rgba(0,0,0,0.3)',
              }}>
                <Image
                  src="/profile.jpg"
                  alt="Md Jainul Haq Khan - Frontend Developer"
                  fill
                  style={{ objectFit:'cover', objectPosition:'center top' }}
                  priority
                />
                {/* Overlay */}
                <div style={{ position:'absolute', inset:0, borderRadius:'50%',
                  background:'linear-gradient(180deg, transparent 50%, rgba(5,11,24,0.4) 100%)',
                  pointerEvents:'none' }}/>
              </div>

              {/* React badge */}
              <motion.div animate={{y:[0,-10,0]}} transition={{repeat:Infinity,duration:3,ease:'easeInOut'}}
                style={{ position:'absolute', top:'8%', right:'-28px',
                  background:'rgba(10,22,40,0.97)', border:'1px solid rgba(0,198,255,0.25)',
                  borderRadius:'12px', padding:'8px 13px', zIndex:2,
                  display:'flex', alignItems:'center', gap:'7px',
                  boxShadow:'0 8px 30px rgba(0,0,0,0.45)' }}>
                <span style={{fontSize:'17px'}}>⚛️</span>
                <span style={{fontFamily:'JetBrains Mono',fontSize:'12px',color:'#00C6FF',fontWeight:500}}>React.js</span>
              </motion.div>

              {/* Next badge */}
              <motion.div animate={{y:[0,10,0]}} transition={{repeat:Infinity,duration:3.6,ease:'easeInOut',delay:0.5}}
                style={{ position:'absolute', bottom:'14%', left:'-32px',
                  background:'rgba(10,22,40,0.97)', border:'1px solid rgba(139,92,246,0.28)',
                  borderRadius:'12px', padding:'8px 13px', zIndex:2,
                  display:'flex', alignItems:'center', gap:'7px',
                  boxShadow:'0 8px 30px rgba(0,0,0,0.45)' }}>
                <span style={{fontSize:'15px',fontWeight:'bold',color:'#fff'}}>▲</span>
                <span style={{fontFamily:'JetBrains Mono',fontSize:'12px',color:'#A78BFA',fontWeight:500}}>Next.js</span>
              </motion.div>

              {/* Score badge */}
              <motion.div animate={{y:[0,-7,0]}} transition={{repeat:Infinity,duration:4,ease:'easeInOut',delay:1}}
                style={{ position:'absolute', bottom:'-14px', right:'10%',
                  background:'rgba(10,22,40,0.97)', border:'1px solid rgba(245,158,11,0.28)',
                  borderRadius:'12px', padding:'8px 13px', zIndex:2,
                  display:'flex', alignItems:'center', gap:'7px',
                  boxShadow:'0 8px 30px rgba(0,0,0,0.45)' }}>
                <span style={{fontSize:'14px'}}>TW</span>
                <span style={{fontFamily:'JetBrains Mono',fontSize:'12px',color:'#FCD34D',fontWeight:500}}>Tailwind CSS</span>
              </motion.div>

              {/* TypeScript badge */}
              <motion.div animate={{y:[0,8,0]}} transition={{repeat:Infinity,duration:3.2,ease:'easeInOut',delay:1.5}}
                style={{ position:'absolute', top:'18%', left:'-36px',
                  background:'rgba(10,22,40,0.97)', border:'1px solid rgba(16,185,129,0.28)',
                  borderRadius:'12px', padding:'8px 13px', zIndex:2,
                  display:'flex', alignItems:'center', gap:'7px',
                  boxShadow:'0 8px 30px rgba(0,0,0,0.45)' }}>
                <span style={{fontSize:'14px',color:'#3178C6',fontWeight:'bold'}}>JS</span>
                <span style={{fontFamily:'JetBrains Mono',fontSize:'12px',color:'#6EE7B7',fontWeight:500}}>JavaScript</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5}}
        style={{ position:'absolute', bottom:'28px', left:'50%', transform:'translateX(-50%)',
          display:'flex', flexDirection:'column', alignItems:'center', gap:'6px',
          color:'rgba(255,255,255,0.25)' }}>
        <span style={{ fontFamily:'JetBrains Mono', fontSize:'10px', letterSpacing:'3px' }}>SCROLL</span>
        <motion.div animate={{y:[0,7,0]}} transition={{repeat:Infinity,duration:1.8}}>
          <ArrowDown size={15}/>
        </motion.div>
      </motion.div>
    </section>
  )
}
