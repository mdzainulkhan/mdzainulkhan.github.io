# Md Jainul Haq Khan
🌐 Portfolio - https://jainulhk.vercel.app/
📧 jainulhk.dev@gmail.com

Modern, high-performance portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typing Animation**: react-type-animation
- **Intersection Observer**: react-intersection-observer
- **Deployment**: Vercel (recommended)

## 📦 Setup & Run Locally

```bash
# 1. Extract the zip and enter the folder
cd jainul-portfolio

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 🌐 Deploy to Vercel (Free)

1. Push code to GitHub
2. Go to https://vercel.com
3. Import your GitHub repository
4. Click Deploy — done!

## 📁 Project Structure

```
├── app/
│   ├── globals.css       # Global styles, animations, custom scrollbar
│   ├── layout.tsx        # Root layout with SEO metadata
│   └── page.tsx          # Main page assembling all sections
│
├── components/
│   ├── CustomCursor.tsx  # Custom animated cursor
│   ├── Navbar.tsx        # Sticky nav with scroll-aware active states
│   ├── Hero.tsx          # Hero with typing animation & particles
│   ├── About.tsx         # About me with highlight cards
│   ├── Skills.tsx        # Categorized skill pills
│   ├── Experience.tsx    # Work timeline
│   ├── Projects.tsx      # Project cards with live links
│   ├── Achievements.tsx  # Animated stat counters
│   ├── Contact.tsx       # Contact form + info
│   └── Footer.tsx        # Footer
```

## ✏️ Customization

- **Update personal info**: Edit each component file
- **Change accent color**: Update `--primary` in `tailwind.config.js` and `globals.css`  
- **Add new project**: Edit the `projects` array in `components/Projects.tsx`
- **Update resume PDF**: Replace `/public/Jainul_H_Khan_Senior_Frontend_Developer.pdf`

---

Built by Md Jainul Haq Khan · jainulhk.dev@gmail.com
