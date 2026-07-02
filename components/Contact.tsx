'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce:true, threshold:0.08 })
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' })
  const [sent, setSent] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `mailto:jainulhk.dev@gmail.com?subject=${encodeURIComponent(form.subject||'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Jainul,\n\nMy name is ${form.name}.\n\n${form.message}\n\nContact: ${form.email}`)}`
    setSent(true); setTimeout(()=>setSent(false),3000)
  }

  const inputStyle = {
    width:'100%', background:'rgba(255,255,255,0.04)',
    border:'1px solid rgba(255,255,255,0.09)', borderRadius:'10px',
    padding:'12px 16px', color:'#fff', fontSize:'14px', fontFamily:'Inter',
    outline:'none', transition:'all 0.25s',
  }

  return (
    <section id="contact" className="py-28 relative" ref={ref}>
      <div className="sep mb-1"/>
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, transparent, rgba(10,22,40,0.3), transparent)', pointerEvents:'none' }}/>
      <div className="max-w-6xl mx-auto px-6 pt-10 relative z-10">

        <motion.div initial={{opacity:0,y:28}} animate={inView?{opacity:1,y:0}:{}}
          transition={{duration:0.7}} style={{ textAlign:'center', marginBottom:'56px' }}>
          <p className="stag mb-3">Let's work together</p>
          <h2 style={{ fontFamily:'Space Grotesk', fontSize:'clamp(32px,5vw,48px)', fontWeight:700, color:'#fff', marginBottom:'12px' }}>
            Get In <span className="g-text">Touch</span>
          </h2>
          <p style={{ color:'rgba(203,213,225,0.45)', fontFamily:'Inter', fontSize:'15px', maxWidth:'460px', margin:'0 auto 16px' }}>
            Open to full-time roles & freelance projects. Let's build something great together.
          </p>
          <span style={{ display:'inline-flex', alignItems:'center', gap:'7px',
            background:'rgba(10,22,40,0.8)', border:'1px solid rgba(34,197,94,0.25)',
            borderRadius:'100px', padding:'6px 16px', fontFamily:'JetBrains Mono',
            fontSize:'11px', color:'rgba(34,197,94,0.8)' }}>
            <span style={{ width:7,height:7,borderRadius:'50%',background:'#22C55E',
              animation:'pulseGlow 2s ease-in-out infinite' }}/>
            Available · Immediate Joiner
          </span>
        </motion.div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'40px', alignItems:'start' }}>

          {/* Info */}
          <motion.div initial={{opacity:0,x:-28}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.7,delay:0.2}}>
            <div style={{ display:'flex', flexDirection:'column', gap:'10px', marginBottom:'28px' }}>
              {[
                {Icon:Mail,label:'Email',v:'jainulhk.dev@gmail.com',href:'mailto:jainulhk.dev@gmail.com'},
                {Icon:Phone,label:'Phone',v:'+91 76319 75588',href:'tel:+917631975588'},
                {Icon:MapPin,label:'Location',v:'Noida, Delhi NCR, India',href:null},
              ].map(({Icon,label,v,href})=>(
                <div key={label} className="gcard" style={{ padding:'16px', display:'flex', gap:'14px', alignItems:'center' }}>
                  <div style={{ width:38,height:38,borderRadius:'10px',background:'rgba(0,198,255,0.08)',
                    border:'1px solid rgba(0,198,255,0.18)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0 }}>
                    <Icon size={17} style={{color:'#00C6FF'}}/>
                  </div>
                  <div>
                    <div style={{ fontFamily:'JetBrains Mono',fontSize:'10px',color:'rgba(255,255,255,0.3)',marginBottom:'2px' }}>{label}</div>
                    {href
                      ? <a href={href} style={{ color:'#fff',fontSize:'14px',fontFamily:'Inter',fontWeight:500,textDecoration:'none',transition:'color 0.2s' }}
                          onMouseEnter={e=>(e.currentTarget.style.color='#00C6FF')}
                          onMouseLeave={e=>(e.currentTarget.style.color='#fff')}>{v}</a>
                      : <span style={{ color:'#fff',fontSize:'14px',fontFamily:'Inter' }}>{v}</span>
                    }
                  </div>
                </div>
              ))}
            </div>

            <p style={{ fontFamily:'JetBrains Mono',fontSize:'10px',color:'rgba(255,255,255,0.3)',
              letterSpacing:'3px',textTransform:'uppercase',marginBottom:'12px' }}>Profiles</p>
            {[
              {Icon:Github,label:'GitHub',href:'https://github.com/mdzainulkhan',h:'mdzainulkhan'},
              {Icon:Linkedin,label:'LinkedIn',href:'https://linkedin.com/in/jainulkhan',h:'jainulkhan'},
            ].map(({Icon,label,href,h})=>(
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="gcard"
                style={{ display:'flex',alignItems:'center',gap:'14px',padding:'14px',
                  marginBottom:'8px',textDecoration:'none',transition:'all 0.25s' }}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor='rgba(0,198,255,0.28)'}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor='rgba(0,198,255,0.12)'}}>
                <div style={{ width:36,height:36,borderRadius:'10px',background:'rgba(255,255,255,0.05)',
                  display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0 }}>
                  <Icon size={17} style={{color:'rgba(255,255,255,0.5)'}}/>
                </div>
                <div>
                  <div style={{ fontFamily:'JetBrains Mono',fontSize:'10px',color:'rgba(255,255,255,0.28)',marginBottom:'1px' }}>{label}</div>
                  <div style={{ fontFamily:'JetBrains Mono',fontSize:'13px',color:'rgba(255,255,255,0.6)' }}>/{h}</div>
                </div>
                <span style={{ marginLeft:'auto',color:'rgba(255,255,255,0.2)',fontSize:'16px' }}>→</span>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div initial={{opacity:0,x:28}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.7,delay:0.3}}>
            <form onSubmit={submit} className="gcard" style={{ padding:'28px' }}>
              <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px',marginBottom:'12px' }}>
                {['name','email'].map(f=>(
                  <div key={f}>
                    <label style={{ display:'block',fontFamily:'JetBrains Mono',fontSize:'10px',
                      color:'rgba(255,255,255,0.35)',marginBottom:'7px',textTransform:'capitalize',letterSpacing:'1px' }}>{f}</label>
                    <input type={f==='email'?'email':'text'} required
                      placeholder={f==='name'?'Your name':'your@email.com'}
                      value={form[f as keyof typeof form]}
                      onChange={e=>setForm({...form,[f]:e.target.value})}
                      style={inputStyle}
                      onFocus={e=>{e.target.style.borderColor='rgba(0,198,255,0.4)';e.target.style.background='rgba(0,198,255,0.04)'}}
                      onBlur={e=>{e.target.style.borderColor='rgba(255,255,255,0.09)';e.target.style.background='rgba(255,255,255,0.04)'}}
                    />
                  </div>
                ))}
              </div>
              <div style={{ marginBottom:'12px' }}>
                <label style={{ display:'block',fontFamily:'JetBrains Mono',fontSize:'10px',
                  color:'rgba(255,255,255,0.35)',marginBottom:'7px',letterSpacing:'1px' }}>SUBJECT</label>
                <input type="text" placeholder="Job Opportunity / Freelance"
                  value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})}
                  style={inputStyle}
                  onFocus={e=>{e.target.style.borderColor='rgba(0,198,255,0.4)';e.target.style.background='rgba(0,198,255,0.04)'}}
                  onBlur={e=>{e.target.style.borderColor='rgba(255,255,255,0.09)';e.target.style.background='rgba(255,255,255,0.04)'}}
                />
              </div>
              <div style={{ marginBottom:'20px' }}>
                <label style={{ display:'block',fontFamily:'JetBrains Mono',fontSize:'10px',
                  color:'rgba(255,255,255,0.35)',marginBottom:'7px',letterSpacing:'1px' }}>MESSAGE</label>
                <textarea required rows={5} placeholder="Tell me about the opportunity..."
                  value={form.message} onChange={e=>setForm({...form,message:e.target.value})}
                  style={{...inputStyle,resize:'none'}}
                  onFocus={e=>{e.target.style.borderColor='rgba(0,198,255,0.4)';e.target.style.background='rgba(0,198,255,0.04)'}}
                  onBlur={e=>{e.target.style.borderColor='rgba(255,255,255,0.09)';e.target.style.background='rgba(255,255,255,0.04)'}}
                />
              </div>
              <button type="submit" className="btn-p" style={{ width:'100%', justifyContent:'center' }}>
                <span>{sent?'Opening mail client...':'Send Message'}</span>
                {sent ? <CheckCircle size={16}/> : <Send size={16}/>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
