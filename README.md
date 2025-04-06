# 🔐 Acunetix 12.0 – Official Event Website

**Acunetix 12.0** is the flagship tech event organized by **ACES** and **CSI**, designed to bring out the best in student talent across technical and non-technical domains. This is the official React-based web platform built to showcase event details, schedules, and announcements in a modern, animated experience.

🌐 **Live Website**: [https://acunetix12.tech/](https://acunetix12.tech/)

---

## 🎯 About the Event

Acunetix 12.0 offers a dynamic mix of solo and team-based **Tech & Non-Tech competitions** where students can showcase their talents, creativity, and problem-solving skills. With exciting rewards, recognition, and a festival-like vibe, this is more than just a competition—it's an **unforgettable experience**.

**Organized by:**  
- 💻 ACES (Association of Computer Engineering Students)  
- 🧠 CSI (Computer Society of India – Student Chapter)

---

## 🌟 Highlights

- 🧠 Technical Challenges  
- 🎮 Non-Technical Games  
- 👨‍💻 Hackathons & Quizzes  
- 🎤 Guest Talks & Presentations  
- 🏆 Prizes & Certificates  
- 👥 Solo & Team Participation

---

## 🛠 Tech Stack

This website is built using modern web technologies for a high-performance, visually engaging user experience:

- **React**  
  A powerful, component-based JavaScript library for building interactive UIs.
- **Vite**  
  A lightning-fast development and build tool that streamlines the workflow.
- **SCSS/CSS**  
  For writing modular, maintainable, and responsive styles.
- **Locomotive Scroll**  
  Adds smooth, scroll-based animations to enhance user interaction.
- **Custom Fonts & Graphic Assets**  
  Curated assets that align with the vibrant event theme.

---

## 📁 Project Structure

Below is a detailed breakdown of the repository’s structure, designed for scalability and ease of development:
<details>
  <summary>
      Acunetix-12.0/
├── 📂 assets/                     # Custom fonts, images, and visual assets
│   ├── 📂 fonts/                 # Typography used across the website
│   └── 📂 images/                # Banners, illustrations, and event graphics
│
├── 📂 src/                        # Core source code of the React application
│   ├── 📂 components/            # Reusable React components
│   │   ├── 🧩 Hero.jsx           # Landing section with event title & animations
│   │   ├── 🧩 Events.jsx         # Lists all tech & non-tech event cards
│   │   ├── 🧩 About.jsx          # Overview and purpose of the event
│   │   ├── 🧩 Contact.jsx        # Contact details or query form
│   │   └── 🧩 [Other].jsx        # Any additional sections/components
│   │
│   ├── 🧠 App.jsx                # Root component wrapping all sections
│   ├── 🚀 main.jsx               # Entry point that bootstraps the React app
│   └── 🎨 styles/                # Global styles and animation configs
│       └── 🌀 locomotive-custom.scss  # Smooth scroll styling using Locomotive Scroll
│
├── 📂 public/                    # Static files served directly
│   └── 🌐 index.html             # Main HTML template rendered by Vite
│
├── 📜 vite.config.js             # Vite build & plugin configuration
├── 📦 package.json               # Project dependencies and npm scripts
├── 📄 .gitignore                 # Files and folders ignored by Git
└── 📝 README.md                  # This awesome documentation file
  </summary>
</details>
