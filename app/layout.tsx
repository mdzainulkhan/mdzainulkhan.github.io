import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jainul Haq Khan | Senior Frontend Developer',
  description: 'Senior Frontend Developer with 7+ years of experience in React.js, Next.js & modern web technologies. Based in Delhi NCR.',
  keywords: [
    'Senior Frontend Developer',
    'React.js Developer',
    'Next.js Developer',
    'UI Developer',
    'JavaScript Developer',
    'Tailwind CSS',
    'Web Performance',
    'Delhi NCR Developer',
    'Jainul Haq Khan',
    'Frontend Engineer India',
  ],
  authors: [{ name: 'Md Jainul Haq Khan' }],
  openGraph: {
    title: 'Jainul Haq Khan | Senior Frontend Developer',
    description: 'Senior Frontend Developer specializing in React.js, Next.js, and high-performance web applications.',
    type: 'website',
    locale: 'en_IN',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
