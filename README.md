# 🚀 Nikhil Bhagoria | Portfolio Website

![Repository Views](https://komarev.com/ghpvc/?username=NikhilBhagoria&repo=nikhil-dev-portfolio&label=Repository+Views&color=00d1ff&style=flat-square)

Welcome to my personal portfolio repository! This is a modern, high-performance, and visually stunning developer portfolio designed to showcase my skills, projects, and work history.

Built using **Next.js 14+ (App Router)**, **Tailwind CSS**, and **React**, it features a sleek glassmorphic dark interface (Obsidian-inspired), interactive micro-interactions, and a custom developer console to provide visitors with an engaging, interactive experience.

🔗 **Live Link:** [https://nikhilbhagoria.netlify.app/](https://nikhilbhagoria.netlify.app/) 

---

## ✨ Features

- **💻 Interactive Dev Console:** A simulated IDE terminal on the Hero section allowing users to toggle between different tech stacks (`Next.js`, `React`, `Node.js`, `MongoDB`), showing actual production-grade code snippets and optimized Lighthouse speed indicators.
- **⚡ 100% Lighthouse Optimized:** Engineered with performance, SEO, accessibility, and clean structure in mind, verifying a near-perfect mobile and desktop experience.
- **📁 Dynamic Projects Grid:** Showcases full-stack production apps, frontend clones, utility apps, and in-development/confidential projects, complete with progress meters and tech stack badges.
- **💼 Interactive Timeline:** Modern vertical experience and education tracker highlighting contributions at:
  - **Hornet Dynamics Pvt. Ltd.** (Next.js Developer)
  - **Extensive Host Pvt. Ltd.** (React.js Developer)
  - **Neerja Softwares** (ReactJS Intern)
- **🎨 Modern Dark Glassmorphism:** Curated HSL color palette, smooth gradients, 3D card tilt effects (custom hook), custom scrollbars, and fluid animations.
- **📱 Fully Responsive Design:** Handcrafted layouts using CSS Grid and Flexbox, fully optimized for all viewports from ultra-wide monitors to compact mobile screens.

---

## 🛠️ Tech Stack & Skills

### **Frontend Development**
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![Redux](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![Material UI](https://img.shields.io/badge/Material_UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### **Backend Development & Databases**
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-00758F?style=for-the-badge&logo=mysql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-39827F?style=for-the-badge&logo=prisma&logoColor=white)
![Hono](https://img.shields.io/badge/Hono-E36002?style=for-the-badge&logo=hono&logoColor=white)
![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)

### **DevOps, Cloud & Tools**
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![AWS](https://img.shields.io/badge/AWS_S3/EC2-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)
![Google Cloud](https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)

### **Languages**
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![C++](https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white)
![C](https://img.shields.io/badge/C-A8B9CC?style=for-the-badge&logo=c&logoColor=white)

---

## 📂 Project Structure

```bash
portfolio/
├── public/                 # Static assets, PDFs, icons, images
├── src/
│   ├── app/                # Next.js App Router (pages, layouts, metadata, CSS globals)
│   │   ├── about/          # About page route
│   │   ├── contact/        # Contact page route
│   │   ├── projects/       # Projects page route
│   │   ├── globals.css     # Tailwind custom variables, scrollbars & glassmorphism utilities
│   │   └── layout.js       # Main Root Layout with SEO meta tags
│   ├── components/
│   │   ├── layout/         # Navbar, Footer
│   │   ├── sections/       # Hero, About, Projects, Contact, CTA
│   │   └── ui/             # Reusable UI elements (Button, BackButton, Icons, WebVitals)
│   ├── data/               # Static config & content files
│   │   ├── projects.js     # Data array for my portfolio projects
│   │   └── skills.js       # Detailed list of skills with SVG references
│   └── hooks/              # Custom React hooks (e.g. use3DTilt)
├── tailwind.config.mjs     # Tailwind CSS theme extension parameters
├── package.json            # Scripts and dependencies
└── README.md               # You are here!
```

---

## ⚙️ Getting Started

To run this project locally, follow these steps:

### **1. Prerequisites**
Ensure you have [Node.js](https://nodejs.org/) installed (v18.x or above is recommended).

### **2. Clone the Repository**
```bash
git clone https://github.com/NikhilBhagoria/nikhil-dev-portfolio.git
cd nikhil-dev-portfolio
```

### **3. Install Dependencies**
```bash
npm install
```

### **4. Run the Development Server**
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### **5. Build for Production**
To build the application for deployment:
```bash
npm run build
npm run start
```

---

## 🛡️ License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📬 Contact & Connect

Feel free to reach out if you have any questions or would like to work together!

- **Email:** [nikhilkumar2450@gmail.com](mailto:nikhilkumar2450@gmail.com)
- **GitHub:** [@NikhilBhagoria](https://github.com/NikhilBhagoria)
- **LinkedIn:** [Nikhil Bhagoria](https://www.linkedin.com/in/nikhilbhagoria)
