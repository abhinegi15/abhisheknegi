# Abhishek Negi — Frontend & WordPress Developer Portfolio

A professional portfolio website built with **React**, **Tailwind CSS**, and modern web standards.

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
- **React & Vite**: Fast build and responsive user interface.
- **Tailwind CSS**: Clean responsive design, modern dark surfaces, and custom styling.
- **WordPress Custom Themes Focus**: Dedicated showcase for WordPress theme development and modern frontend.
- **Interactive Developer Terminal**: A live terminal allowing visitors to run commands (`whoami`, `skills`, `experience`, `contact`).
- **Project Case Studies & Modals**: Detailed views of custom WordPress themes and web projects.
- **Resume PDF Integration**: Downloadable resume PDF (`/Abhishek_Negi_Resume.pdf`).
- **One-Click Contact**: Copy-to-clipboard for email/phone, WhatsApp direct chat, and contact form.

---

## 📁 Project Structure

```
abhishek-portfolio/
├── public/
│   ├── Abhishek_Negi_Resume.pdf    # Downloadable CV / Resume
│   ├── abhishek.png                 # Profile picture (PNG)
│   ├── favicon.svg                  # Custom icon
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
