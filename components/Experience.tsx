'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin } from 'lucide-react'
import { features } from 'process'

const exp = [
  {
    role:'Frontend Developer',
    co:'Indai Technologies',
    period:'Aug 2024 – Present',
    loc:'Delhi NCR',
    current:true,
    pts:[
      'Developed scalable and responsive frontend applications using React.js, Next.js, JavaScript, and Tailwind CSS.',
      'Built reusable UI components for dashboard, authentication, forms, listing pages, and dynamic modules, improving development speed and code maintainability.',
      'Optimized performance via lazy loading & code splitting — Lighthouse 85–95+ consistently',
      'Reduced page load time by up to 40%, improving Core Web Vitals & user engagement',
      'Integrated 10+ REST APIs using Fetch/Axios for dynamic, data-driven interfaces',
      'Converted Figma designs into pixel-perfect, mobile-first, and cross-browser compatible user interfaces.',
      'Collaborated with backend developers and QA teams in an Agile environment to deliver production-ready frontend features.'
    ],
    tags:['React.js','Next.js', 'JavaScript ES6+', 'TypeScript', 'Tailwind CSS','Core Web Vitals','REST APIs'],
  },
  {
    role:'Frontend Developer',
    co:'Infoicon Technologies',
    period:'Oct 2023 – Jul 2024',
    loc:'Delhi NCR',
    current:false,
    pts:[
      'Delivered responsive & pixel-accurate UI for 25+ projects using React.js, HTML5, CSS3 & Bootstrap',
      'Improved page performance by ~30% through asset optimization & efficient rendering',
      'Built reusable component libraries, reducing development redundancy by ~20%',
      'Implemented WCAG & ARIA standards, improving usability & compliance',
      'Coordinated with clients & cross-functional teams for on-time delivery',
    ],
    tags:['React.js','Next.js', 'HTML5','CSS3', 'Tailwind CSS', 'Bootstrap','WCAG','ARIA'],
  },
  {
    role:'Frontend Developer',
    co:'Cliffex Software Solutions',
    period:'Nov 2022 – Sep 2023',
    loc:'Delhi NCR',
    current:false,
    pts:[
      'Transitioned from web design to frontend dev — React.js & modern JavaScript',
      'Converted Figma, Adobe XD & PSD designs into responsive cross-browser interfaces',
      'Improved routing & performance for faster loads and smoother navigation',
      'Ensured mobile-first design consistency across all devices & screen sizes',
    ],
    tags:['React.js','JavaScript', 'Tailwind CSS' ,'Figma','Adobe XD','Mobile-First'],
  },
  {
    role:'Senior Web Designer',
    co:'B. Jain Publishers',
    period:'June 2021 – Oct 2022',
    loc:'Noida',
    current:false,
    pts:[
      'Designed & developed responsive UI for eCommerce & publishing platforms',
      'Reduced bounce rate by 18% through UI enhancements & SEO optimization',
      'Developed scalable frontend apps using React.js for improved performance',
      'Converted PSD/XD designs into pixel-perfect, responsive HTML/CSS interfaces',
    ],
    tags:['React.js','UI Design','SEO','HTML/CSS','eCommerce'],
  },
  {
    role:'Web Designer',
    co:'Goyal Brothers Prakashan',
    period:'Jul 2018 – May 2021',
    loc:'Noida',
    current:false,
    pts:[
      'PSD-to-HTML conversion for 25+ publications with pixel accuracy',
      'Designed banners, landing pages & marketing creatives for digital campaigns',
      'Implemented SEO-friendly semantic HTML to improve search visibility',
      'Maintained mobile responsiveness & cross-browser compatibility',
    ],
    tags:['HTML/CSS','SEO','PSD to HTML','Photoshop','Responsive'],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce:true, threshold:0.04 })

  return (
    <section id="experience" className="py-28 relative" ref={ref}>
      <div className="sep mb-1"/>
      <div className="max-w-6xl mx-auto px-6 pt-10">

        <motion.div initial={{opacity:0,y:28}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6}} className="mb-14">
          <p className="stag mb-3">My journey</p>
          <h2 style={{ fontFamily:'Space Grotesk', fontSize:'clamp(32px,5vw,48px)', fontWeight:700, color:'#fff' }}>
            Work <span className="g-text">Experience</span>
          </h2>
        </motion.div>

        <div style={{ position:'relative' }}>
          {/* Timeline line */}
          <div
            className="hidden md:block tline"
            style={{ position:'absolute', left:'32px', top:0, bottom:0, width:'2px', display:'none' }}
          />

          <div style={{ display:'flex', flexDirection:'column', gap:'20px' }}>
            {exp.map((e,i)=>(
              <motion.div key={e.co}
                initial={{opacity:0,x:-24}} animate={inView?{opacity:1,x:0}:{}}
                transition={{duration:0.7,delay:i*0.09}}
                style={{ paddingLeft:'0' }} className="md:pl-20"
              >
                {/* Timeline dot */}
                <div style={{
                  position:'absolute', left:'10px', marginTop:'10px',
                  width:'22px', height:'22px', borderRadius:'50%', zIndex:2,
                  background: e.current ? '#050B18' : '#050B18',
                  border: e.current ? '2px solid #00C6FF' : '2px solid rgba(0,198,255,0.3)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  boxShadow: e.current ? '0 0 16px rgba(0,198,255,0.5)' : 'none',
                }} className="hidden md:flex">
                  {e.current && <div style={{ width:8,height:8,borderRadius:'50%',background:'#00C6FF' }}/>}
                </div>

                <div className="gcard" style={{ padding:'24px' }}>
                  {/* Header */}
                  <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-between',
                    alignItems:'flex-start', gap:'10px', marginBottom:'16px' }}>
                    <div>
                      {e.current && (
                        <span style={{ display:'inline-flex', alignItems:'center', gap:'5px',
                          background:'rgba(0,198,255,0.1)', border:'1px solid rgba(0,198,255,0.25)',
                          borderRadius:'100px', padding:'3px 10px', fontSize:'11px',
                          fontFamily:'JetBrains Mono', color:'#00C6FF', marginBottom:'6px' }}>
                          <span style={{ width:6,height:6,borderRadius:'50%',background:'#22C55E',
                            animation:'pulseGlow 2s ease-in-out infinite' }}/>
                          Current
                        </span>
                      )}
                      <h3 style={{ fontFamily:'Space Grotesk', fontSize:'19px', fontWeight:700,
                        color:'#fff', marginBottom:'4px' }}>{e.role}</h3>
                      <p style={{ fontFamily:'JetBrains Mono', fontSize:'13px', color:'#00C6FF' }}>
                        {e.co}
                      </p>
                    </div>
                    <div style={{ display:'flex', flexDirection:'column', gap:'4px', alignItems:'flex-end' }}>
                      <span style={{ display:'flex', alignItems:'center', gap:'5px',
                        fontFamily:'JetBrains Mono', fontSize:'12px', color:'rgba(255,255,255,0.35)' }}>
                        <Calendar size={12}/>{e.period}
                      </span>
                      <span style={{ display:'flex', alignItems:'center', gap:'5px',
                        fontFamily:'JetBrains Mono', fontSize:'11px', color:'rgba(255,255,255,0.2)' }}>
                        <MapPin size={11}/>{e.loc}
                      </span>
                    </div>
                  </div>

                  {/* Points */}
                  <ul style={{ display:'flex', flexDirection:'column', gap:'8px', marginBottom:'16px' }}>
                    {e.pts.map((pt,pi)=>(
                      <li key={pi} style={{ display:'flex', gap:'10px',
                        color:'rgba(203,213,225,0.6)', fontSize:'14px', lineHeight:'1.65', fontFamily:'Inter' }}>
                        <span style={{ color:'rgba(0,198,255,0.5)', marginTop:'2px', flexShrink:0 }}>▸</span>
                        {pt}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div style={{ display:'flex', flexWrap:'wrap', gap:'6px', borderTop:'1px solid rgba(255,255,255,0.05)', paddingTop:'14px' }}>
                    {e.tags.map(t=>(
                      <span key={t} style={{ fontFamily:'JetBrains Mono', fontSize:'11px',
                        padding:'3px 10px', borderRadius:'100px',
                        background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)',
                        color:'rgba(255,255,255,0.4)' }}>
                        {t}
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
