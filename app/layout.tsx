import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Md Jainul Haq Khan | Frontend Developer | React.js & Next.js Developer',
  description: 'Frontend Developer with 7+ years of experience in React.js, Next.js, and modern web technologies. Based in Delhi NCR. Immediate Joiner.',
  keywords: [
    'Frontend Developer','React.js Developer','Next.js Developer',
    'UI Developer Delhi NCR','JavaScript Developer','Tailwind CSS',
    'Core Web Vitals','Md Jainul Haq Khan','React Next.js India',
    'Senior Frontend Engineer','TypeScript Developer',
  ],
  authors: [{ name: 'Md Jainul Haq Khan', url: 'mailto:jainulhk.dev@gmail.com' }],
  openGraph: {
    title: 'Md Jainul Haq Khan | Frontend Developer | React.js & Next.js Developer',
    description: 'Frontend Developer specializing in React.js, Next.js & high-performance web apps.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/profile.jpg" type="image/jpeg" />
      </head>
      <body>{children}</body>
    </html>
  )
}
