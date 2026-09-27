# Abhishek Negi — Modern Frontend Developer Portfolio

A showcase portfolio engineered for recruiters and engineering managers, built with **React**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Live Preview & Quick Start

### 1. Run Locally
```bash
npm install
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### 2. Build for Production
```bash
npm run build
```

---

## 🛠️ Tech Stack & Key Features
- **React 19 & Vite**: Ultra-fast build & lightning hot module replacement (HMR).
- **Tailwind CSS 3.4**: Custom design tokens, dark theme surfaces, gradients, and micro-interactions.
- **Framer Motion**: Smooth entrance transitions, scroll progress spring indicators, and modal animations.
- **Interactive Tech Terminal**: A live developer terminal allowing recruiters to run commands (`whoami`, `skills`, `experience`, `contact`).
- **Interactive Architecture Modals**: Deep dive into frontend highlights, performance metrics, and technology breakdowns.
- **Resume PDF Integration**: Real resume file (`/Abhishek_Negi_Resume.pdf`) embedded with download triggers and celebration confetti.
- **One-Click Contact**: Copy-to-clipboard for email/phone, WhatsApp direct chat, and interactive contact form.

---

## 📁 Project Structure

```
abhishek-portfolio/
├── public/
│   ├── Abhishek_Negi_Resume.pdf    # Official downloadable CV
│   ├── abhishek.jpg                 # Profile picture
│   ├── favicon.svg                  # Custom monogram icon
│   └── projects/                    # Showcase screenshots
│       ├── dashboard.jpg
│       ├── ai_studio.jpg
│       ├── fintech.jpg
│       └── ecommerce.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx               # Glassmorphic header with active links
│   │   ├── ScrollProgress.jsx       # Spring scroll progress bar
│   │   ├── BackgroundEffect.jsx     # Cursor spotlight & ambient gradient orbs
│   │   ├── Hero.jsx                 # High-impact introduction & rotating titles
│   │   ├── TechTerminal.jsx         # Interactive developer terminal
│   │   ├── ResumeSection.jsx        # Resume highlights & education
│   │   ├── Skills.jsx               # Categorized skills & animated progress bars
│   │   ├── Projects.jsx             # Filterable project showcase
│   │   ├── ProjectModal.jsx         # Architecture deep-dive modal
│   │   ├── WhyHireMe.jsx            # 4 core value pillars for recruiters
│   │   ├── Experience.jsx           # Commercial career timeline
│   │   ├── Contact.jsx              # Direct channels & form
│   │   ├── Footer.jsx               # Links, local time & back-to-top
│   │   └── Icons.jsx                # SVG icons (GitHub, LinkedIn)
│   ├── data/
│   │   └── portfolioData.js         # Single source of truth for all info
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
└── package.json
```

---

## ✏️ How to Update Your Projects & Info Later

All content is centralized in **[portfolioData.js](file:///d:/Abhishek/abhishek-portfolio/src/data/portfolioData.js)**:
1. To change personal info or links, update `personalInfo`.
2. To add or change projects, edit the `projectsData` array. You can replace the image paths with your own screenshots in `public/projects/`.
3. To update work history, edit `workExperience`.
4. To update technical proficiencies, edit `skillsData`.

---

## 🚢 Free 1-Click Deployment (Vercel / Netlify)

### Option A: Vercel
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Click **"Deploy"** (Vercel auto-detects Vite).

### Option B: Netlify
1. Run `npm run build`.
2. Drag and drop the `dist/` folder onto [Netlify Drop](https://app.netlify.com/drop).
