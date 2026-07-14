'use client'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ borderTop:'1px solid rgba(255,255,255,0.05)', padding:'36px 0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div style={{ display:'flex', flexWrap:'wrap', alignItems:'center',
          justifyContent:'space-between', gap:'20px' }}>
          <div>
            <div style={{ fontFamily:'Space Grotesk', fontSize:'18px', fontWeight:700, marginBottom:'4px' }}>
              <span className="g-text">JHK</span>
              <span style={{ color:'rgba(255,255,255,0.2)', margin:'0 8px' }}>·</span>
              <span style={{ color:'rgba(255,255,255,0.35)', fontSize:'13px', fontWeight:400, fontFamily:'Inter' }}>
                Md Jainul Haq Khan
              </span>
            </div>
            <p style={{ fontFamily:'JetBrains Mono', color:'rgba(255,255,255,0.25)', fontSize:'11px' }}>
              Frontend Developer · React.js & Next.js · Noida, Delhi NCR
            </p>
          </div>

          <div style={{ display:'flex', gap:'10px' }}>
            {[
              {Icon:Github,href:'https://github.com/mdzainulkhan'},
              {Icon:Linkedin,href:'https://linkedin.com/in/jainulkhan'},
              {Icon:Mail,href:'mailto:jainulhk.dev@gmail.com'},
            ].map(({Icon,href},i)=>(
              <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                style={{ width:36,height:36,borderRadius:'9px',
                  background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  color:'rgba(255,255,255,0.4)', textDecoration:'none', transition:'all 0.25s' }}
                onMouseEnter={e=>{const el=e.currentTarget as HTMLElement; el.style.color='#00C6FF'; el.style.borderColor='rgba(0,198,255,0.3)'}}
                onMouseLeave={e=>{const el=e.currentTarget as HTMLElement; el.style.color='rgba(255,255,255,0.4)'; el.style.borderColor='rgba(255,255,255,0.07)'}}>
                <Icon size={15}/>
              </a>
            ))}
          </div>

          <p style={{ fontFamily:'JetBrains Mono', color:'rgba(255,255,255,0.2)', fontSize:'11px',
            display:'flex', alignItems:'center', gap:'5px' }}>
            © {new Date().getFullYear()} · Built with
            <Heart size={11} style={{color:'rgba(0,198,255,0.5)'}}/>
            Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
