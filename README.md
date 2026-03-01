# InfoCluster-xi — Unparalleled Scholar

> **Empowering Students with Digital Excellence**

A modern, single-page web application for **InfoCluster-xi**, a student-focused digital services platform that offers affordable web development, resume building, LinkedIn optimization, content writing, and SEO services.

---

## 🌐 Live Site

The project is deployed on [Vercel](https://vercel.com). Visit the live site at your Vercel deployment URL.

---

## ✨ Features

- **Responsive Navigation** — Glassmorphism navbar with smooth anchor scrolling and a mobile hamburger menu
- **Hero Section** — Dynamic landing with animated floating cards
- **About Section** — Mission statement and tech stack overview
- **Services Section** — Six service cards: Website Building, Web Portfolios, Resume Building, LinkedIn Optimization, Content Writing, and SEO Optimization
- **Portfolio Section** — Featured works with live links and a full portfolio page
- **Contact Section** — Contact information panel alongside a message form
- **Modern Aesthetics** — Glassmorphism UI, ambient gradient blobs, smooth animations, and a dark theme

---

## 🛠️ Tech Stack

| Layer       | Technology                             |
|-------------|----------------------------------------|
| Framework   | [React 18](https://react.dev/)         |
| Build Tool  | [Vite 5](https://vitejs.dev/)          |
| Routing     | [React Router DOM 7](https://reactrouter.com/) |
| Icons       | [Lucide React](https://lucide.dev/)    |
| Styling     | Vanilla CSS (`styles.css`)             |
| Deployment  | [Vercel](https://vercel.com)           |

---

## 📁 Project Structure

```
UNPS/
├── asset/               # Image assets (logo, project screenshots)
├── public/              # Static files (favicon, etc.)
├── dist/                # Production build output (auto-generated)
├── Home.jsx             # Main landing page component
├── Portfolio.jsx        # Full portfolio page component
├── index.jsx            # Router setup
├── main.jsx             # React app entry point
├── index.html           # HTML shell
├── styles.css           # Global styles & design system
├── vite.config.js       # Vite configuration
├── vercel.json          # Vercel SPA routing config
└── package.json         # Project dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd UNPS
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

---

## 📜 Available Scripts

| Command           | Description                              |
|-------------------|------------------------------------------|
| `npm run dev`     | Start local development server (Vite)    |
| `npm run build`   | Build the app for production into `dist/`|
| `npm run preview` | Preview the production build locally     |

---

## 🚢 Deployment

This project is configured for one-click deployment on **Vercel**.

- `vercel.json` includes a catch-all rewrite rule so React Router handles client-side navigation correctly.
- Simply connect your repository to Vercel and it will auto-detect Vite and deploy on every push to `main`.

**Manual build & deploy:**
```bash
npm run build
# Upload the `dist/` folder to your hosting provider
```

---

## 📸 Pages

| Page       | Route        | Description                              |
|------------|--------------|------------------------------------------|
| Home       | `/`          | Landing page with all main sections      |
| Portfolio  | `/portfolio` | Full showcase of all completed projects  |

---

## 📬 Contact

| Channel   | Details                                                                |
|-----------|------------------------------------------------------------------------|
| 📞 Phone  | +91 79733-47454                                                        |
| 📧 Email  | shreejansamsung@gmail.com / scholarxx7@gmail.com                       |
| 💼 LinkedIn | [Unparalleled Scholar](https://www.linkedin.com/company/unparalleled-scholar/) |

---

## 📄 License

This project is proprietary. All rights reserved © InfoCluster-xi.
