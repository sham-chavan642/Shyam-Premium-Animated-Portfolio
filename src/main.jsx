import React, { useState } from "react";
import { createRoot } from "react-dom/client";

/* =========================================================
   SHYAM CHAVAN — PREMIUM PORTFOLIO
   SINGLE FILE: main.jsx
========================================================= */

const SOCIAL = {
  linkedin:
    "https://www.linkedin.com/in/sham-chavan123/",
  github:
    "https://github.com/sham-chavan642",
  email:
    "mailto:shamc434@gmail.com",
  live:
    "https://weather-genius-ai-seven.vercel.app",
};

const projects = [
  {
    title: "PlantSathi AI",
    category: "AI / ML",
    description:
      "AI-powered plant identification and disease detection platform using modern machine learning technologies.",
    tech: ["React", "Python", "FastAPI", "AI/ML"],
    live: "#contact",
    github: SOCIAL.github,
  },
  {
    title: "Future Market AI",
    category: "AI / ML",
    description:
      "Smart market price prediction dashboard with crop alerts, analytics and machine learning insights.",
    tech: ["MERN", "Machine Learning", "Charts"],
    live: "#contact",
    github: SOCIAL.github,
  },
  {
    title: "WeatherGenius AI",
    category: "Web App",
    description:
      "Real-time weather application providing forecast, location-based updates and intelligent weather insights.",
    tech: ["React", "API", "Tailwind"],
    live: SOCIAL.live,
    github: SOCIAL.github,
  },
  {
    title: "Shetkari Bazaar",
    category: "Full Stack",
    description:
      "Digital agricultural marketplace connecting farmers with buyers through a simple web platform.",
    tech: ["HTML", "CSS", "JavaScript", "MySQL"],
    live: "#contact",
    github: SOCIAL.github,
  },
  {
    title: "AI Question Paper Generator",
    category: "AI Project",
    description:
      "Intelligent application designed to generate structured academic question papers using AI.",
    tech: ["Python", "AI", "NLP"],
    live: "#contact",
    github: SOCIAL.github,
  },
  {
    title: "Salary Management Pro",
    category: "MERN",
    description:
      "Full-stack salary management application for employee records, salary processing and administration.",
    tech: ["MongoDB", "Express", "React", "Node"],
    live: "#contact",
    github: SOCIAL.github,
  },
];

const skills = [
  { name: "Java", icon: "☕", level: "Advanced" },
  { name: "Spring Boot", icon: "◉", level: "Intermediate" },
  { name: "Python", icon: "🐍", level: "Advanced" },
  { name: "React.js", icon: "⚛", level: "Advanced" },
  { name: "JavaScript", icon: "JS", level: "Advanced" },
  { name: "Node.js", icon: "N", level: "Intermediate" },
  { name: "MongoDB", icon: "◆", level: "Intermediate" },
  { name: "MySQL", icon: "SQL", level: "Advanced" },
  { name: "Git & GitHub", icon: "⌘", level: "Intermediate" },
  { name: "REST APIs", icon: "API", level: "Advanced" },
];

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! 👋 I'm Shyam's AI Assistant. Ask me about his skills, projects, education or GitHub."
    }
  ]);

  const chatbotAnswers = {
    skills: "Shyam works with Java, Spring Boot, React, JavaScript, Python, MERN, SQL, REST APIs and AI/ML technologies.",
    projects: "Shyam has worked on PlantSathi AI, Future Market AI, WeatherGenius AI, Shetkari Bazaar, AI Question Paper Generator and Salary Management Pro.",
    education: "Shyam is pursuing MCA with specialization in Artificial Intelligence & Machine Learning. He completed BCA with a CGPA of 7.86.",
    github: "You can explore Shyam's projects and repositories on GitHub.",
    contact: "You can contact Shyam through LinkedIn or email from the portfolio.",
    about: "Shyam Chavan is an MCA student, AI/ML enthusiast and Full Stack Developer from Nashik, Maharashtra."
  };

  const sendChat = () => {
    const text = chatInput.trim();
    if (!text) return;

    const lower = text.toLowerCase();
    let reply = "I can help you with Shyam's skills, projects, education, GitHub, contact or about section.";

    if (lower.includes("skill") || lower.includes("technology")) reply = chatbotAnswers.skills;
    else if (lower.includes("project") || lower.includes("work")) reply = chatbotAnswers.projects;
    else if (lower.includes("education") || lower.includes("study") || lower.includes("mca") || lower.includes("bca")) reply = chatbotAnswers.education;
    else if (lower.includes("github") || lower.includes("repo")) reply = chatbotAnswers.github;
    else if (lower.includes("contact") || lower.includes("email") || lower.includes("linkedin")) reply = chatbotAnswers.contact;
    else if (lower.includes("about") || lower.includes("who is shyam")) reply = chatbotAnswers.about;

    setMessages((prev) => [
      ...prev,
      { type: "user", text },
      { type: "bot", text: reply }
    ]);
    setChatInput("");
  };

  const scrollTo = (id) => {
    setActive(id);
    setMenuOpen(false);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const navItems = [
    ["home", "⌂", "Home"],
    ["about", "◯", "About"],
    ["skills", "◇", "Skills"],
    ["projects", "▣", "Projects"],
    ["education", "◇", "Education"],
    ["achievements", "✦", "Achievements"],
    ["resume", "▤", "Resume"],
    ["contact", "✉", "Contact"],
  ];

  return (
    <div className={darkMode ? "app dark" : "app light"}>

      {/* =====================================================
          MOBILE HEADER
      ===================================================== */}

      <header className="mobileHeader">

        <div className="brand">
          <div className="brandLogo">SC</div>

          <div>
            <strong>Shyam Chavan</strong>
            <span>MCA • AI/ML Developer</span>
          </div>
        </div>

        <button
          className="mobileMenu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </header>


      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>

        <div className="sidebarTop">

          <div className="profileMini">

            <div className="miniLogo">
              SC
            </div>

            <div>
              <h3>Shyam Chavan</h3>
              <p>MCA • AI/ML Developer</p>
            </div>

          </div>

          {/* ONLY ONE AVAILABILITY */}
          <div className="availability">
            <span></span>
            Available for opportunities
          </div>

        </div>


        <nav>

          {navItems.map(([id, icon, label]) => (

            <button
              key={id}
              className={
                active === id
                  ? "navItem active"
                  : "navItem"
              }
              onClick={() => scrollTo(id)}
            >

              <span className="navIcon">
                {icon}
              </span>

              <span>
                {label}
              </span>

            </button>

          ))}

        </nav>


        <div className="sidebarBottom">

          <a
            href="/resume.pdf"
            download
            className="downloadCV"
          >
            ↓ &nbsp; DOWNLOAD CV
          </a>


          <div className="connectText">
            CONNECT WITH ME
          </div>


          <div className="socials">

            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              in
            </a>

            <a
              href={SOCIAL.github}
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              GH
            </a>

            <a
              href={SOCIAL.email}
              title="Email"
            >
              ✉
            </a>

          </div>


          <p className="copyright">
            © 2026 Shyam Chavan
            <br />
            All rights reserved.
          </p>

        </div>

      </aside>


      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="main">


        {/* ===================================================
            TOP BAR
        =================================================== */}

        <div className="topbar">

          {/* LEFT EMPTY / CLEAN */}
          <div></div>


          <div className="topActions">

            <span>
              MCA • AI/ML
            </span>

            <span>
              Nashik, India
            </span>


            {/* SOCIAL LINKS BEFORE THEME BUTTON */}

            <div className="topSocials">

              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
                className="topSocial linkedin"
              >
                in
              </a>


              <a
                href={SOCIAL.github}
                target="_blank"
                rel="noreferrer"
                title="GitHub"
                className="topSocial"
              >
                GH
              </a>


              <a
                href={SOCIAL.email}
                title="Email"
                className="topSocial"
              >
                ✉
              </a>

            </div>


            {/* THEME */}

            <button
              className="themeButton"
              onClick={() => setDarkMode(!darkMode)}
              title="Toggle theme"
            >
              {darkMode ? "☀" : "☾"}
            </button>

          </div>

        </div>


        {/* ===================================================
            HOME
        =================================================== */}

        <section
          id="home"
          className="hero section"
        >

          <div className="heroContent">


            {/* HERO LEFT */}

            <div className="heroLeft">

              <div className="roleBadge">
                MCA Student | AI/ML Enthusiast | Full Stack Developer
              </div>


              <h1>
                Hi, I'm
                <br />
                <span>Shyam Chavan</span>
              </h1>


              <p className="heroDescription">
                A passionate MCA student specializing in
                Artificial Intelligence & Machine Learning.
                I love building intelligent web applications
                and solving real-world problems with code.
              </p>


              <div className="heroButtons">

                <a
                  className="primaryButton githubWorkButton"
                  href={SOCIAL.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  View My Work →
                </a>


                <button
                  className="secondaryButton"
                  onClick={() => scrollTo("contact")}
                >
                  Get In Touch ↗
                </button>

              </div>


              <div className="stats">

                <div className="stat">
                  <strong>06+</strong>
                  <span>
                    Projects
                    <br />
                    Completed
                  </span>
                </div>


                <div className="stat">
                  <strong>10+</strong>
                  <span>
                    Technologies
                    <br />
                    Worked With
                  </span>
                </div>


                <div className="stat">
                  <strong>AI/ML</strong>
                  <span>
                    Primary
                    <br />
                    Focus
                  </span>
                </div>


                <div className="stat">
                  <strong>7.86</strong>
                  <span>
                    BCA
                    <br />
                    CGPA
                  </span>
                </div>

              </div>

            </div>


            {/* =================================================
                PROFILE RIGHT
            ================================================= */}

            <div className="heroRight">

              <div className="profileGlow"></div>


              <div className="profileCircle">

                <div className="circleRing ring1"></div>
                <div className="circleRing ring2"></div>

                <div className="orbit orbitOne">
                  <span className="orbitPlanet">✦</span>
                </div>

                <div className="orbit orbitTwo">
                  <span className="orbitPlanet moon">●</span>
                </div>

                <img
                  src="/profile.jpg"
                  alt="Shyam Chavan"
                  className="profileImage"
                />


                <div className="profileLabel">
                  <span>●</span>
                  SHYAM CHAVAN / PROFILE
                </div>

              </div>


              <div className="floatingTag tagOne">
                React
              </div>

              <div className="floatingTag tagTwo">
                AI / ML
              </div>

              <div className="floatingTag tagThree">
                Node.js
              </div>

            </div>

          </div>

        </section>


        {/* ===================================================
            ABOUT
        =================================================== */}

        <section id="about" className="section">

          <SectionTitle
            number="01"
            label="ABOUT"
            title="About Me"
            description="A quick overview of my background, interests and current direction."
          />


          <div className="aboutGrid">

            <div className="glassCard aboutText">

              <h3>
                Building with curiosity.
              </h3>

              <p>
                I'm Shyam Chavan — an MCA student,
                AI/ML enthusiast and full-stack developer
                from Nashik, Maharashtra.
              </p>

              <p>
                I enjoy transforming ideas into modern
                web applications and solving practical
                problems using software, artificial
                intelligence and machine learning.
              </p>

              <p>
                My goal is to become a strong software
                engineer capable of building scalable,
                intelligent and user-friendly applications.
              </p>


              <div className="aboutTags">
                <span>Full Stack</span>
                <span>AI / ML</span>
                <span>Problem Solving</span>
                <span>DSA</span>
              </div>

            </div>


            <div className="glassCard infoCard">

              <InfoRow
                label="Name"
                value="Shyam Chavan"
              />

              <InfoRow
                label="Location"
                value="Nashik, Maharashtra, India"
              />

              <InfoRow
                label="Education"
                value="MCA — Artificial Intelligence & Machine Learning"
              />

              <InfoRow
                label="BCA CGPA"
                value="7.86"
              />

              <InfoRow
                label="Focus"
                value="AI/ML • Full Stack • Software Development"
              />

              <InfoRow
                label="Status"
                value="Open to Opportunities"
              />

            </div>

          </div>

        </section>


        {/* ===================================================
            SKILLS
        =================================================== */}

        <section id="skills" className="section">

          <SectionTitle
            number="02"
            label="SKILLS"
            title="Technical Skills"
            description="Technologies I use to design, develop and ship applications."
          />


          <div className="skillsGrid">

            {skills.map((skill) => (

              <div
                className="skillCard"
                key={skill.name}
              >

                <div className="skillIcon">
                  {skill.icon}
                </div>


                <div className="skillInfo">

                  <h3>
                    {skill.name}
                  </h3>

                  <p>
                    {skill.level}
                  </p>


                  <div className="progress">

                    <div
                      className="progressValue"
                      style={{
                        width:
                          skill.level === "Advanced"
                            ? "88%"
                            : "72%",
                      }}
                    />

                  </div>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* ===================================================
            PROJECTS
        =================================================== */}

        <section id="projects" className="section">

          <SectionTitle
            number="03"
            label="PROJECTS"
            title="Featured Work"
            description="Selected projects across full-stack, AI/ML and practical problem solving."
          />


          <div className="projectsGrid">

            {projects.map((project, index) => (

              <div
                className="projectCard"
                key={project.title}
              >

                <div className="projectTop">

                  <div className="projectNumber">
                    PROJECT / 0{index + 1}
                  </div>

                  <div className="projectArrow">
                    ↗
                  </div>

                </div>


                <div className="projectCategory">
                  {project.category}
                </div>


                <h3>
                  {project.title}
                </h3>


                <p>
                  {project.description}
                </p>


                <div className="techTags">

                  {project.tech.map((tech) => (

                    <span key={tech}>
                      {tech}
                    </span>

                  ))}

                </div>


                <div className="projectLinks">

                  <a
                    href={project.live}
                    target={
                      project.live.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel="noreferrer"
                  >
                    Live Demo ↗
                  </a>


                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* ===================================================
            EDUCATION
        =================================================== */}

        <section
          id="education"
          className="section"
        >

          <SectionTitle
            number="04"
            label="EDUCATION"
            title="Education"
            description="My academic journey and technical foundation."
          />


          <div className="timeline">

            <div className="timelineItem">

              <div className="timelineDot">
                AI
              </div>


              <div className="timelineContent">

                <span className="timelineDate">
                  2025 — 2028
                </span>

                <h3>
                  Master of Computer Applications
                </h3>

                <p>
                  Specialization in Artificial Intelligence
                  & Machine Learning
                </p>

                <strong>
                  Sanjivani University, Kopargaon
                </strong>

              </div>

            </div>


            <div className="timelineItem">

              <div className="timelineDot">
                BCA
              </div>


              <div className="timelineContent">

                <span className="timelineDate">
                  Completed
                </span>

                <h3>
                  Bachelor of Computer Applications
                </h3>

                <p>
                  Computer Applications with strong
                  foundation in programming and software
                  development.
                </p>

                <strong>
                  BCA CGPA: 7.86
                </strong>

              </div>

            </div>

          </div>

        </section>


        {/* ===================================================
            ACHIEVEMENTS
        =================================================== */}

        <section
          id="achievements"
          className="section"
        >

          <SectionTitle
            number="05"
            label="ACHIEVEMENTS"
            title="What I Bring"
            description="Skills, certifications and qualities that define my journey."
          />


          <div className="achievementGrid">

            <div className="achievementCard">

              <div className="achievementIcon">
                &lt;/&gt;
              </div>

              <h3>
                Full-Stack Development
              </h3>

              <p>
                Experience building modern frontend
                and backend applications with practical
                development workflows.
              </p>

            </div>


            <div className="achievementCard">

              <div className="achievementIcon">
                AI
              </div>

              <h3>
                AI / ML Enthusiasm
              </h3>

              <p>
                Exploring machine learning, intelligent
                applications, APIs and AI-powered solutions.
              </p>

            </div>


            <div className="achievementCard">

              <div className="achievementIcon">
                ✦
              </div>

              <h3>
                Project-First Learning
              </h3>

              <p>
                Learning technologies by building practical
                projects based on real-world problems.
              </p>

            </div>

          </div>


          {/* CERTIFICATE */}

          <div className="certificateCard">

            <div className="certificatePreview">

              <div className="certificateInner">

                <div className="certificateSmall">
                  CERTIFICATE OF ACHIEVEMENT
                </div>

                <div className="certificateTitle">
                  Certificate
                </div>

                <div className="certificateLine"></div>

                <div className="certificateName">
                  SHYAM CHAVAN
                </div>

                <p>
                  Certificate / Achievement
                </p>

                <div className="certificateBottom">
                  <span>2026</span>
                  <span>★</span>
                  <span>Verified</span>
                </div>

              </div>

            </div>


            <div className="certificateInfo">

              <span className="sectionMini">
                FEATURED CERTIFICATION
              </span>

              <h3>
                Certificate of Achievement
              </h3>

              <p>
                A certification earned during my learning
                and development journey. This section can
                be updated later with the exact certificate
                title and issuer.
              </p>


              <div className="certificateMeta">

                <div>
                  <span>Holder</span>
                  <strong>
                    Shyam Chavan
                  </strong>
                </div>

                <div>
                  <span>Year</span>
                  <strong>
                    2026
                  </strong>
                </div>

              </div>


              <a
                href="https://www.geeksforgeeks.org/certificate/d62596bd586a4d53c9b9e7898f6c6e71?utm_source=socials&utm_medium=cc_link"
                target="_blank"
                rel="noreferrer"
                className="certificateButton"
              >
                View Certificate ↗
              </a>

            </div>

          </div>

        </section>


        {/* ===================================================
            RESUME
        =================================================== */}

        <section
          id="resume"
          className="section"
        >

          <SectionTitle
            number="06"
            label="RESUME"
            title="My Resume"
            description="A quick overview of my education, skills and development journey."
          />


          <div className="resumeCard">

            <div className="resumeIcon">
              PDF
            </div>


            <div className="resumeText">

              <h3>
                Shyam Chavan — Resume
              </h3>

              <p>
                MCA • AI/ML • Full Stack Development
              </p>

            </div>


            <div className="resumeActions">

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="secondaryButton small"
              >
                View Resume ↗
              </a>


              <a
                href="/resume.pdf"
                download
                className="primaryButton small"
              >
                Download ↓
              </a>

            </div>

          </div>

        </section>


        {/* ===================================================
            CONTACT
        =================================================== */}

        <section
          id="contact"
          className="section"
        >

          <SectionTitle
            number="07"
            label="CONTACT"
            title="Let's Connect"
            description="Have an opportunity, project or collaboration idea? Let's talk."
          />


          <div className="contactGrid">

            <div className="glassCard contactInfo">

              <h2>
                Let's build something.
              </h2>

              <p>
                I'm always interested in learning,
                building, collaborating and working on
                meaningful software projects.
              </p>


              <div className="contactRows">

                <div>
                  <span>Email</span>
                  <strong>
                    shamc434@gmail.com
                  </strong>
                </div>


                <div>
                  <span>Phone</span>
                  <strong>
                    +91 8767763441
                  </strong>
                </div>


                <div>
                  <span>Location</span>
                  <strong>
                    Nashik, Maharashtra, India
                  </strong>
                </div>

              </div>

            </div>


            <form
              className="glassCard contactForm"
              onSubmit={(e) => {
                e.preventDefault();

                const name =
                  e.currentTarget.elements.name.value;

                const email =
                  e.currentTarget.elements.email.value;

                const message =
                  e.currentTarget.elements.message.value;

                window.location.href =
                  `mailto:shamc434@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(
                    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
                  )}`;
              }}
            >

              <div className="formRow">

                <div className="field">

                  <label>
                    Your Name
                  </label>

                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />

                </div>


                <div className="field">

                  <label>
                    Email
                  </label>

                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />

                </div>

              </div>


              <div className="field">

                <label>
                  Message
                </label>

                <textarea
                  name="message"
                  placeholder="Tell me about your idea..."
                  rows="6"
                  required
                ></textarea>

              </div>


              <button
                className="primaryButton full"
                type="submit"
              >
                Send Message →
              </button>

            </form>

          </div>

        </section>


        {/* ===================================================
            FOOTER
        =================================================== */}

        <footer>

          <div>
            © 2026 <strong>Shyam Chavan</strong>
          </div>

          <div>
            Built with React • AI/ML • Full Stack
          </div>

        </footer>

      </main>


      {/* =====================================================
          AI CHATBOT
      ===================================================== */}

      <div className={`aiChat ${chatOpen ? "chatOpen" : ""}`}>
        {chatOpen && (
          <div className="chatWindow">
            <div className="chatHeader">
              <div className="chatBotAvatar">AI</div>
              <div className="chatHeaderText">
                <strong>Shyam AI Assistant</strong>
                <span>● Online</span>
              </div>
              <button className="chatClose" onClick={() => setChatOpen(false)}>×</button>
            </div>

            <div className="chatMessages">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={message.type === "user" ? "chatMessage userMessage" : "chatMessage botMessage"}
                >
                  {message.text}
                </div>
              ))}
            </div>

            <div className="chatSuggestions">
              <button onClick={() => setChatInput("What are Shyam's skills?")}>Skills</button>
              <button onClick={() => setChatInput("Tell me about projects")}>Projects</button>
              <button onClick={() => setChatInput("What is Shyam's education?")}>Education</button>
            </div>

            <div className="chatInputArea">
              <input
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") sendChat(); }}
                placeholder="Ask me anything..."
              />
              <button onClick={sendChat} className="chatSend">➤</button>
            </div>
          </div>
        )}

        <button className="aiChatButton" onClick={() => setChatOpen(!chatOpen)} title="Ask Shyam AI">
          <span className="aiPulse"></span>
          🤖
        </button>
      </div>

    </div>
  );
}


/* =========================================================
   COMPONENTS
========================================================= */

function SectionTitle({
  number,
  label,
  title,
  description,
}) {
  return (
    <div className="sectionTitle">

      <div>

        <span className="sectionNumber">
          {number} — {label}
        </span>

        <h2>
          {title}
        </h2>

      </div>

      <p>
        {description}
      </p>

    </div>
  );
}


function InfoRow({ label, value }) {
  return (
    <div className="infoRow">

      <span>
        {label}
      </span>

      <strong>
        {value}
      </strong>

    </div>
  );
}


/* =========================================================
   CSS
========================================================= */

const styles = `

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

  background: #050713;
}

button,
input,
textarea {
  font: inherit;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
}


/* =========================================================
   APP
========================================================= */

.app {

  min-height: 100vh;

  --bg: #060814;
  --sidebar: #080a18;
  --card: #0b0e1d;
  --card2: #101327;

  --text: #f5f7ff;
  --muted: #9ca3b8;

  --border: rgba(150, 140, 255, 0.16);

  --purple: #8b5cf6;
  --blue: #3b82f6;

  --gradient:
    linear-gradient(
      135deg,
      #8b5cf6,
      #3b82f6
    );

  background:
    radial-gradient(
      circle at 70% 5%,
      rgba(111, 66, 193, 0.13),
      transparent 30%
    ),
    var(--bg);

  color: var(--text);

  transition: 0.3s ease;
}


.app.light {

  --bg: #f5f7ff;
  --sidebar: #ffffff;
  --card: #ffffff;
  --card2: #f9f9ff;

  --text: #171827;
  --muted: #667085;

  --border: rgba(80, 70, 160, 0.14);

  background:
    radial-gradient(
      circle at 75% 0%,
      rgba(124, 58, 237, 0.12),
      transparent 30%
    ),
    #f5f7ff;
}


/* =========================================================
   SIDEBAR
========================================================= */

.sidebar {

  position: fixed;

  left: 0;
  top: 0;

  width: 235px;
  height: 100vh;

  padding: 24px 18px;

  background:
    linear-gradient(
      180deg,
      var(--sidebar),
      rgba(6, 8, 20, 0.96)
    );

  border-right:
    1px solid var(--border);

  display: flex;

  flex-direction: column;

  z-index: 100;

  overflow-y: auto;
}


.light .sidebar {
  background: #ffffff;
}


.sidebarTop {
  margin-bottom: 28px;
}


.profileMini {

  display: flex;

  align-items: center;

  gap: 12px;
}


.miniLogo,
.brandLogo {

  width: 42px;
  height: 42px;

  border-radius: 12px;

  display: grid;

  place-items: center;

  font-weight: 900;

  color: white;

  background: var(--gradient);

  box-shadow:
    0 0 28px rgba(139, 92, 246, 0.3);
}


.profileMini h3 {
  font-size: 14px;
  margin-bottom: 3px;
}


.profileMini p {
  font-size: 10px;
  color: var(--muted);
}


.availability {

  margin-top: 20px;

  font-size: 9px;

  color: var(--muted);

  display: flex;

  align-items: center;

  gap: 7px;
}


.availability span {

  width: 6px;
  height: 6px;

  border-radius: 50%;

  background: #7cfc00;

  box-shadow:
    0 0 10px #7cfc00;
}


/* =========================================================
   NAVIGATION
========================================================= */

.sidebar nav {

  display: flex;

  flex-direction: column;

  gap: 7px;
}


.navItem {

  width: 100%;

  border: 0;

  background: transparent;

  color: var(--muted);

  display: flex;

  align-items: center;

  gap: 14px;

  padding: 12px 13px;

  border-radius: 10px;

  text-align: left;

  font-size: 13px;

  transition: 0.25s ease;
}


.navItem:hover {

  color: var(--text);

  background:
    rgba(139, 92, 246, 0.08);
}


.navItem.active {

  color: white;

  background:
    linear-gradient(
      135deg,
      rgba(124, 58, 237, 0.95),
      rgba(59, 130, 246, 0.95)
    );

  box-shadow:
    0 12px 35px rgba(90, 60, 220, 0.25);
}


.navIcon {

  width: 20px;

  text-align: center;

  font-size: 15px;
}


/* =========================================================
   SIDEBAR BOTTOM
========================================================= */

.sidebarBottom {

  margin-top: auto;

  padding-top: 25px;
}


.downloadCV {

  width: 100%;

  display: flex;

  justify-content: center;

  align-items: center;

  padding: 11px;

  border:
    1px solid rgba(139, 92, 246, 0.6);

  border-radius: 9px;

  color: var(--text);

  font-size: 11px;

  transition: 0.25s;
}


.downloadCV:hover {

  background: var(--gradient);

  color: white;
}


.connectText {

  margin-top: 24px;

  margin-bottom: 12px;

  color: var(--muted);

  font-size: 9px;
}


.socials {

  display: flex;

  gap: 9px;
}


.socials a {

  width: 38px;
  height: 38px;

  border:
    1px solid var(--border);

  border-radius: 50%;

  display: grid;

  place-items: center;

  color: var(--muted);

  font-size: 12px;

  font-weight: 700;

  transition: 0.25s;
}


.socials a:hover {

  color: white;

  background: var(--gradient);

  border-color: transparent;

  transform: translateY(-3px);
}


.copyright {

  margin-top: 22px;

  font-size: 9px;

  line-height: 1.8;

  color: var(--muted);
}


/* =========================================================
   MOBILE HEADER
========================================================= */

.mobileHeader {
  display: none;
}


/* =========================================================
   MAIN
========================================================= */

.main {

  margin-left: 235px;

  padding:
    0 35px;

  max-width: 1500px;

  overflow: visible;
}


/* =========================================================
   TOPBAR
========================================================= */

.topbar {

  height: 68px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  border-bottom:
    1px solid var(--border);
}


.topActions {

  display: flex;

  align-items: center;

  gap: 16px;

  font-size: 9px;

  color: var(--muted);
}


/* =========================================================
   TOP SOCIAL LINKS
========================================================= */

.topSocials {

  display: flex;

  align-items: center;

  gap: 8px;

  margin-left: 4px;

  padding-right: 4px;
}


.topSocial {

  width: 37px;
  height: 37px;

  display: grid;

  place-items: center;

  border:
    1px solid var(--border);

  border-radius: 50%;

  background: var(--card);

  color: var(--text);

  font-size: 11px;

  font-weight: 800;

  transition:
    transform 0.25s ease,
    background 0.25s ease,
    border 0.25s ease;
}


.topSocial:hover {

  transform:
    translateY(-3px);

  background:
    var(--gradient);

  color: white;

  border-color:
    transparent;

  box-shadow:
    0 8px 22px
    rgba(99, 72, 220, 0.3);
}


.themeButton {

  width: 37px;
  height: 37px;

  border:
    1px solid var(--border);

  border-radius: 50%;

  background: var(--card);

  color: var(--text);

  transition: 0.25s;
}


.themeButton:hover {

  background:
    var(--gradient);

  color: white;

  transform:
    rotate(15deg);
}


/* =========================================================
   SECTIONS
========================================================= */

.section {

  padding:
    75px 0;

  scroll-margin-top:
    20px;
}


.sectionTitle {

  display: flex;

  justify-content:
    space-between;

  align-items:
    end;

  margin-bottom:
    30px;
}


.sectionNumber {

  display: block;

  color:
    #8b5cf6;

  font-size:
    9px;

  font-weight:
    700;

  letter-spacing:
    2px;

  margin-bottom:
    9px;
}


.sectionTitle h2 {

  font-size:
    28px;

  letter-spacing:
    -0.8px;
}


.sectionTitle > p {

  max-width:
    420px;

  color:
    var(--muted);

  font-size:
    11px;

  line-height:
    1.7;

  text-align:
    right;
}


/* =========================================================
   HERO
   FIXED: PROFILE WILL NOT GO BELOW / CUT
========================================================= */

.hero {

  min-height:
    calc(100vh - 68px);

  display:
    flex;

  align-items:
    center;

  padding-top:
    40px;

  padding-bottom:
    55px;
}


.heroContent {

  width: 100%;

  display: grid;

  grid-template-columns:
    minmax(0, 1.08fr)
    minmax(360px, 0.92fr);

  gap: 35px;

  align-items: center;

  padding: 40px;

  border:
    1px solid var(--border);

  border-radius:
    18px;

  background:
    radial-gradient(
      circle at 80% 20%,
      rgba(111, 66, 193, 0.13),
      transparent 35%
    ),
    var(--card);

  box-shadow:
    0 25px 90px
    rgba(0, 0, 0, 0.25);

  overflow: visible;
}


.heroLeft {
  min-width: 0;
}


.roleBadge {

  width: fit-content;

  padding:
    9px 14px;

  border:
    1px solid
    rgba(139, 92, 246, 0.6);

  border-radius:
    30px;

  color:
    #a98bff;

  background:
    rgba(139, 92, 246, 0.06);

  font-size:
    10px;

  margin-bottom:
    27px;
}


.hero h1 {

  font-size:
    clamp(48px, 5.5vw, 74px);

  line-height:
    0.98;

  letter-spacing:
    -3px;

  margin-bottom:
    24px;
}


.hero h1 span {

  background:
    var(--gradient);

  -webkit-background-clip:
    text;

  background-clip:
    text;

  color:
    transparent;
}


.heroDescription {

  max-width:
    570px;

  color:
    var(--muted);

  font-size:
    14px;

  line-height:
    1.8;

  margin-bottom:
    28px;
}


.heroButtons {

  display:
    flex;

  gap:
    12px;

  margin-bottom:
    38px;
}


.primaryButton,
.secondaryButton {

  display:
    inline-flex;

  align-items:
    center;

  justify-content:
    center;

  padding:
    13px 20px;

  border-radius:
    7px;

  font-size:
    11px;

  transition:
    0.25s;
}


.primaryButton {

  border:
    0;

  color:
    white;

  background:
    var(--gradient);

  box-shadow:
    0 12px 28px
    rgba(96, 64, 220, 0.25);
}


.primaryButton:hover {

  transform:
    translateY(-2px);

  box-shadow:
    0 18px 35px
    rgba(96, 64, 220, 0.35);
}


.secondaryButton {

  color:
    var(--text);

  border:
    1px solid
    rgba(139, 92, 246, 0.6);

  background:
    transparent;
}


.secondaryButton:hover {

  background:
    rgba(139, 92, 246, 0.1);
}


/* =========================================================
   STATS
========================================================= */

.stats {

  display:
    grid;

  grid-template-columns:
    repeat(4, 1fr);

  border-top:
    1px solid var(--border);

  padding-top:
    25px;
}


.stat {

  min-height:
    55px;

  border-right:
    1px solid var(--border);

  padding-left:
    18px;
}


.stat:first-child {
  padding-left: 0;
}


.stat:last-child {
  border-right: 0;
}


.stat strong {

  display:
    block;

  font-size:
    20px;

  margin-bottom:
    5px;
}


.stat span {

  color:
    var(--muted);

  font-size:
    9px;

  line-height:
    1.6;
}


/* =========================================================
   PROFILE
========================================================= */

.heroRight {

  min-height:
    470px;

  position:
    relative;

  display:
    grid;

  place-items:
    center;

  overflow:
    visible;
}


.profileGlow {

  position:
    absolute;

  width:
    330px;

  height:
    330px;

  border-radius:
    50%;

  background:
    radial-gradient(
      circle,
      rgba(124, 58, 237, 0.28),
      transparent 68%
    );

  filter:
    blur(15px);
}


.profileCircle {

  position:
    relative;

  width:
    min(370px, 90%);

  aspect-ratio:
    1 / 1;

  border-radius:
    50%;

  padding:
    10px;

  display:
    grid;

  place-items:
    center;

  border:
    1px solid
    rgba(139, 92, 246, 0.4);

  box-shadow:
    0 0 0 15px
    rgba(139, 92, 246, 0.025),

    0 0 70px
    rgba(104, 70, 220, 0.18);

  overflow:
    visible;
}


.profileImage {

  width:
    100%;

  height:
    100%;

  border-radius:
    50%;

  object-fit:
    cover;

  object-position:
    center top;

  display:
    block;

  border:
    4px solid
    rgba(139, 92, 246, 0.22);

  position:
    relative;

  z-index:
    3;
}


.circleRing {

  position:
    absolute;

  border-radius:
    50%;

  border:
    1px solid
    rgba(139, 92, 246, 0.35);

  pointer-events:
    none;
}


.ring1 {
  inset: -25px;
}


.ring2 {

  inset:
    -50px;

  border-color:
    rgba(59, 130, 246, 0.16);
}


.profileLabel {

  position:
    absolute;

  bottom:
    28px;

  left:
    35px;

  z-index:
    5;

  padding:
    8px 12px;

  border:
    1px solid
    var(--border);

  border-radius:
    7px;

  background:
    rgba(7, 9, 20, 0.85);

  backdrop-filter:
    blur(10px);

  font-size:
    8px;

  color:
    #c7cbe0;
}


.profileLabel span {
  color: #7cfc00;
}


.floatingTag {

  position:
    absolute;

  z-index:
    7;

  padding:
    9px 13px;

  border:
    1px solid
    rgba(139, 92, 246, 0.5);

  border-radius:
    7px;

  background:
    rgba(8, 10, 23, 0.9);

  backdrop-filter:
    blur(10px);

  font-size:
    9px;

  color:
    #d8d1ff;

  box-shadow:
    0 10px 30px
    rgba(0, 0, 0, 0.25);
}


.tagOne {
  top: 80px;
  left: 0;
}


.tagTwo {
  bottom: 80px;
  left: 5px;
}


.tagThree {
  top: 145px;
  right: 0;
}


/* =========================================================
   GLASS
========================================================= */

.glassCard {

  background:
    var(--card);

  border:
    1px solid
    var(--border);

  border-radius:
    13px;

  padding:
    25px;
}


/* =========================================================
   ABOUT
========================================================= */

.aboutGrid {

  display:
    grid;

  grid-template-columns:
    1.4fr 0.8fr;

  gap:
    18px;
}


.aboutText h3 {

  font-size:
    19px;

  margin-bottom:
    18px;
}


.aboutText p {

  color:
    var(--muted);

  font-size:
    12px;

  line-height:
    1.8;

  margin-bottom:
    13px;
}


.aboutTags {

  display:
    flex;

  gap:
    8px;

  flex-wrap:
    wrap;

  margin-top:
    20px;
}


.aboutTags span {

  padding:
    7px 10px;

  background:
    rgba(139, 92, 246, 0.08);

  border:
    1px solid
    var(--border);

  border-radius:
    5px;

  color:
    #a98bff;

  font-size:
    9px;
}


.infoCard {

  display:
    flex;

  flex-direction:
    column;

  justify-content:
    center;
}


.infoRow {

  padding:
    12px 0;

  border-bottom:
    1px solid
    var(--border);
}


.infoRow:last-child {
  border-bottom: 0;
}


.infoRow span {

  display:
    block;

  color:
    var(--muted);

  font-size:
    9px;

  margin-bottom:
    5px;
}


.infoRow strong {

  font-size:
    11px;

  line-height:
    1.5;
}


/* =========================================================
   SKILLS
========================================================= */

.skillsGrid {

  display:
    grid;

  grid-template-columns:
    repeat(5, 1fr);

  gap:
    12px;
}


.skillCard {

  min-height:
    105px;

  padding:
    15px;

  border-radius:
    10px;

  background:
    var(--card);

  border:
    1px solid
    var(--border);

  display:
    flex;

  gap:
    12px;

  align-items:
    flex-start;

  transition:
    0.25s;
}


.skillCard:hover {

  transform:
    translateY(-4px);

  border-color:
    rgba(139, 92, 246, 0.5);

  box-shadow:
    0 15px 35px
    rgba(0, 0, 0, 0.15);
}


.skillIcon {

  width:
    34px;

  height:
    34px;

  border-radius:
    8px;

  background:
    rgba(139, 92, 246, 0.08);

  border:
    1px solid
    var(--border);

  display:
    grid;

  place-items:
    center;

  font-size:
    10px;

  color:
    #a98bff;

  flex-shrink:
    0;
}


.skillInfo {
  flex: 1;
}


.skillInfo h3 {

  font-size:
    11px;

  margin-bottom:
    4px;
}


.skillInfo p {

  font-size:
    8px;

  color:
    var(--muted);

  margin-bottom:
    10px;
}


.progress {

  height:
    3px;

  border-radius:
    10px;

  background:
    rgba(139, 92, 246, 0.1);

  overflow:
    hidden;
}


.progressValue {

  height:
    100%;

  background:
    var(--gradient);

  border-radius:
    inherit;
}


/* =========================================================
   PROJECTS
========================================================= */

.projectsGrid {

  display:
    grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap:
    14px;
}


.projectCard {

  min-height:
    275px;

  padding:
    20px;

  background:
    var(--card);

  border:
    1px solid
    var(--border);

  border-radius:
    12px;

  display:
    flex;

  flex-direction:
    column;

  transition:
    0.25s;
}


.projectCard:hover {

  transform:
    translateY(-5px);

  border-color:
    rgba(139, 92, 246, 0.5);

  box-shadow:
    0 20px 45px
    rgba(0, 0, 0, 0.2);
}


.projectTop {

  display:
    flex;

  justify-content:
    space-between;
}


.projectNumber {

  font-size:
    8px;

  color:
    #707a98;

  letter-spacing:
    1px;
}


.projectArrow {

  color:
    #9d7cff;

  font-size:
    14px;
}


.projectCategory {

  margin-top:
    22px;

  color:
    #8b5cf6;

  font-size:
    8px;

  letter-spacing:
    1.5px;
}


.projectCard h3 {

  font-size:
    17px;

  margin:
    8px 0 10px;
}


.projectCard > p {

  color:
    var(--muted);

  font-size:
    10px;

  line-height:
    1.7;

  flex:
    1;
}


.techTags {

  display:
    flex;

  flex-wrap:
    wrap;

  gap:
    5px;

  margin-top:
    15px;
}


.techTags span {

  padding:
    5px 7px;

  border-radius:
    4px;

  background:
    rgba(139, 92, 246, 0.06);

  border:
    1px solid
    var(--border);

  font-size:
    8px;

  color:
    var(--muted);
}


.projectLinks {

  display:
    flex;

  gap:
    15px;

  margin-top:
    18px;

  padding-top:
    14px;

  border-top:
    1px solid
    var(--border);
}


.projectLinks a {

  color:
    var(--text);

  font-size:
    9px;
}


.projectLinks a:hover {
  color: #a98bff;
}


/* =========================================================
   EDUCATION
========================================================= */

.timeline {

  position:
    relative;

  max-width:
    900px;

  margin:
    auto;
}


.timeline::before {

  content:
    "";

  position:
    absolute;

  left:
    23px;

  top:
    20px;

  bottom:
    20px;

  width:
    1px;

  background:
    var(--border);
}


.timelineItem {

  position:
    relative;

  display:
    flex;

  gap:
    25px;

  margin-bottom:
    18px;
}


.timelineDot {

  position:
    relative;

  z-index:
    2;

  width:
    47px;

  height:
    47px;

  flex-shrink:
    0;

  border-radius:
    50%;

  display:
    grid;

  place-items:
    center;

  font-size:
    8px;

  color:
    #a98bff;

  background:
    var(--card);

  border:
    1px solid
    rgba(139, 92, 246, 0.5);
}


.timelineContent {

  flex:
    1;

  padding:
    22px;

  border-radius:
    12px;

  border:
    1px solid
    var(--border);

  background:
    var(--card);
}


.timelineDate {

  color:
    #8b5cf6;

  font-size:
    8px;

  letter-spacing:
    1px;
}


.timelineContent h3 {

  margin:
    8px 0;

  font-size:
    16px;
}


.timelineContent p {

  color:
    var(--muted);

  font-size:
    10px;

  line-height:
    1.6;

  margin-bottom:
    10px;
}


.timelineContent strong {
  font-size: 10px;
}


/* =========================================================
   ACHIEVEMENTS
========================================================= */

.achievementGrid {

  display:
    grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap:
    15px;

  margin-bottom:
    22px;
}


.achievementCard {

  padding:
    23px;

  border-radius:
    12px;

  border:
    1px solid
    var(--border);

  background:
    var(--card);

  transition:
    0.25s;
}


.achievementCard:hover {

  transform:
    translateY(-4px);

  border-color:
    rgba(139, 92, 246, 0.45);
}


.achievementIcon {

  width:
    40px;

  height:
    40px;

  display:
    grid;

  place-items:
    center;

  border-radius:
    9px;

  background:
    rgba(139, 92, 246, 0.08);

  border:
    1px solid
    var(--border);

  color:
    #9d7cff;

  font-size:
    11px;

  margin-bottom:
    17px;
}


.achievementCard h3 {

  font-size:
    14px;

  margin-bottom:
    9px;
}


.achievementCard p {

  color:
    var(--muted);

  font-size:
    10px;

  line-height:
    1.7;
}


/* =========================================================
   CERTIFICATE
========================================================= */

.certificateCard {

  display:
    grid;

  grid-template-columns:
    0.9fr 1.1fr;

  gap:
    30px;

  padding:
    24px;

  border:
    1px solid
    rgba(139, 92, 246, 0.28);

  border-radius:
    14px;

  background:
    linear-gradient(
      120deg,
      rgba(139, 92, 246, 0.08),
      rgba(59, 130, 246, 0.04)
    ),
    var(--card);

  overflow:
    hidden;
}


.certificatePreview {

  min-height:
    260px;

  display:
    grid;

  place-items:
    center;

  padding:
    20px;

  border-radius:
    10px;

  background:
    radial-gradient(
      circle,
      rgba(139, 92, 246, 0.12),
      transparent 65%
    );
}


.certificateInner {

  width:
    100%;

  max-width:
    390px;

  min-height:
    220px;

  padding:
    25px;

  background:
    linear-gradient(
      135deg,
      #15182b,
      #0a0c19
    );

  border:
    1px solid
    rgba(196, 181, 253, 0.35);

  border-radius:
    6px;

  text-align:
    center;

  box-shadow:
    0 20px 45px
    rgba(0, 0, 0, 0.3);
}


.light .certificateInner {

  background:
    linear-gradient(
      135deg,
      #ffffff,
      #f0efff
    );
}


.certificateSmall {

  color:
    #9d7cff;

  font-size:
    8px;

  letter-spacing:
    2px;
}


.certificateTitle {

  margin-top:
    20px;

  font-family:
    Georgia, serif;

  font-size:
    25px;

  font-weight:
    700;
}


.certificateLine {

  width:
    70px;

  height:
    2px;

  margin:
    12px auto;

  background:
    var(--gradient);
}


.certificateName {

  font-size:
    17px;

  font-weight:
    800;

  letter-spacing:
    2px;

  color:
    #a98bff;
}


.certificateInner p {

  margin-top:
    8px;

  font-size:
    9px;

  color:
    var(--muted);
}


.certificateBottom {

  margin-top:
    25px;

  display:
    flex;

  justify-content:
    space-between;

  color:
    var(--muted);

  font-size:
    8px;
}


.certificateInfo {

  display:
    flex;

  justify-content:
    center;

  flex-direction:
    column;
}


.sectionMini {

  color:
    #8b5cf6;

  font-size:
    8px;

  letter-spacing:
    2px;

  margin-bottom:
    10px;
}


.certificateInfo h3 {

  font-size:
    23px;

  margin-bottom:
    12px;
}


.certificateInfo > p {

  color:
    var(--muted);

  font-size:
    11px;

  line-height:
    1.8;

  max-width:
    500px;
}


.certificateMeta {

  display:
    flex;

  gap:
    40px;

  margin:
    22px 0;
}


.certificateMeta span {

  display:
    block;

  color:
    var(--muted);

  font-size:
    8px;

  margin-bottom:
    5px;
}


.certificateMeta strong {
  font-size: 10px;
}


.certificateButton {

  width:
    fit-content;

  padding:
    11px 17px;

  color:
    white;

  background:
    var(--gradient);

  border-radius:
    7px;

  font-size:
    10px;
}


/* =========================================================
   RESUME
========================================================= */

.resumeCard {

  display:
    flex;

  align-items:
    center;

  gap:
    18px;

  padding:
    18px 20px;

  border:
    1px solid
    var(--border);

  border-radius:
    12px;

  background:
    var(--card);
}


.resumeIcon {

  width:
    44px;

  height:
    44px;

  border-radius:
    9px;

  display:
    grid;

  place-items:
    center;

  color:
    #a98bff;

  background:
    rgba(139, 92, 246, 0.08);

  border:
    1px solid
    var(--border);

  font-size:
    9px;
}


.resumeText {
  flex: 1;
}


.resumeText h3 {

  font-size:
    13px;

  margin-bottom:
    5px;
}


.resumeText p {

  color:
    var(--muted);

  font-size:
    9px;
}


.resumeActions {

  display:
    flex;

  gap:
    8px;
}


.small {
  padding:
    10px 14px;
}


.resumeActions a {
  font-size: 9px;
}


/* =========================================================
   CONTACT
========================================================= */

.contactGrid {

  display:
    grid;

  grid-template-columns:
    0.8fr 1.2fr;

  gap:
    18px;
}


.contactInfo h2 {

  font-size:
    22px;

  margin-bottom:
    13px;
}


.contactInfo > p {

  color:
    var(--muted);

  font-size:
    11px;

  line-height:
    1.8;

  margin-bottom:
    25px;
}


.contactRows {

  display:
    flex;

  flex-direction:
    column;

  gap:
    15px;
}


.contactRows div {

  padding-bottom:
    13px;

  border-bottom:
    1px solid
    var(--border);
}


.contactRows span {

  display:
    block;

  color:
    var(--muted);

  font-size:
    8px;

  margin-bottom:
    4px;
}


.contactRows strong {
  font-size: 10px;
}


.contactForm {

  display:
    flex;

  flex-direction:
    column;

  gap:
    15px;
}


.formRow {

  display:
    grid;

  grid-template-columns:
    1fr 1fr;

  gap:
    12px;
}


.field {

  display:
    flex;

  flex-direction:
    column;

  gap:
    7px;
}


.field label {

  color:
    var(--muted);

  font-size:
    8px;

  text-transform:
    uppercase;

  letter-spacing:
    1px;
}


.field input,
.field textarea {

  width:
    100%;

  border:
    1px solid
    var(--border);

  border-radius:
    7px;

  background:
    var(--card2);

  color:
    var(--text);

  outline:
    none;

  padding:
    11px;

  font-size:
    10px;

  resize:
    vertical;
}


.field input:focus,
.field textarea:focus {

  border-color:
    rgba(139, 92, 246, 0.65);
}


.full {
  width: 100%;
}


/* =========================================================
   FOOTER
========================================================= */

footer {

  border-top:
    1px solid
    var(--border);

  padding:
    25px 0;

  display:
    flex;

  justify-content:
    space-between;

  color:
    var(--muted);

  font-size:
    9px;
}


/* =========================================================
   RESPONSIVE 1100
========================================================= */

@media (max-width: 1100px) {

  .sidebar {
    width: 205px;
  }

  .main {
    margin-left: 205px;
  }

  .heroContent {

    grid-template-columns:
      1fr;

  }

  .heroRight {

    min-height:
      450px;

  }

  .skillsGrid {

    grid-template-columns:
      repeat(3, 1fr);

  }

  .projectsGrid {

    grid-template-columns:
      repeat(2, 1fr);

  }

}


/* =========================================================
   RESPONSIVE 800
========================================================= */

@media (max-width: 800px) {

  .mobileHeader {

    display:
      flex;

    position:
      fixed;

    top:
      0;

    left:
      0;

    right:
      0;

    height:
      65px;

    z-index:
      200;

    align-items:
      center;

    justify-content:
      space-between;

    padding:
      10px 15px;

    background:
      var(--sidebar);

    border-bottom:
      1px solid
      var(--border);

  }


  .brand {

    display:
      flex;

    align-items:
      center;

    gap:
      9px;

  }


  .brandLogo {

    width:
      35px;

    height:
      35px;

    border-radius:
      9px;

    font-size:
      11px;

  }


  .brand strong {

    display:
      block;

    font-size:
      11px;

  }


  .brand span {

    display:
      block;

    color:
      var(--muted);

    font-size:
      8px;

  }


  .mobileMenu {

    width:
      38px;

    height:
      38px;

    border:
      1px solid
      var(--border);

    border-radius:
      8px;

    background:
      var(--card);

    color:
      var(--text);

    font-size:
      18px;

  }


  .sidebar {

    transform:
      translateX(-100%);

    transition:
      0.3s ease;

    top:
      65px;

    height:
      calc(100vh - 65px);

  }


  .sidebar.open {

    transform:
      translateX(0);

  }


  .main {

    margin-left:
      0;

    padding:
      65px 15px 0;

  }


  .topbar {
    display:
      none;
  }


  .section {

    padding:
      55px 0;

  }


  .hero {

    min-height:
      auto;

    padding-top:
      35px;

  }


  .heroContent {

    padding:
      24px;

    gap:
      20px;

  }


  .hero h1 {

    font-size:
      48px;

  }


  .heroRight {

    min-height:
      370px;

    margin-top:
      5px;

  }


  .profileCircle {

    width:
      290px;

  }


  .stats {

    grid-template-columns:
      repeat(2, 1fr);

    gap:
      20px;

  }


  .stat {

    border-right:
      0;

    padding-left:
      0;

  }


  .sectionTitle {

    display:
      block;

  }


  .sectionTitle > p {

    text-align:
      left;

    margin-top:
      10px;

  }


  .aboutGrid,
  .contactGrid,
  .certificateCard {

    grid-template-columns:
      1fr;

  }


  .skillsGrid {

    grid-template-columns:
      repeat(2, 1fr);

  }


  .projectsGrid,
  .achievementGrid {

    grid-template-columns:
      1fr;

  }


  .resumeCard {

    align-items:
      flex-start;

    flex-direction:
      column;

  }


  .resumeActions {

    width:
      100%;

  }


  .resumeActions a {

    flex:
      1;

  }


  footer {

    flex-direction:
      column;

    gap:
      8px;

  }

}


/* =========================================================
   RESPONSIVE 500
========================================================= */

@media (max-width: 500px) {

  .hero h1 {

    font-size:
      41px;

    letter-spacing:
      -2px;

  }


  .roleBadge {

    font-size:
      8px;

  }


  .heroDescription {

    font-size:
      11px;

  }


  .heroButtons {

    flex-direction:
      column;

  }


  .primaryButton,
  .secondaryButton {

    width:
      100%;

  }


  .profileCircle {

    width:
      245px;

  }


  .heroRight {

    min-height:
      320px;

  }


  .ring1 {

    inset:
      -15px;

  }


  .ring2 {

    inset:
      -30px;

  }


  .floatingTag {

    font-size:
      7px;

    padding:
      7px 9px;

  }


  .tagOne {

    left:
      -5px;

  }


  .tagThree {

    right:
      -5px;

  }


  .skillsGrid {

    grid-template-columns:
      1fr;

  }


  .formRow {

    grid-template-columns:
      1fr;

  }


  .certificateMeta {

    gap:
      20px;

  }

}


/* =========================================================
   PROFILE ORBIT ANIMATION
========================================================= */

.profileCircle {
  overflow: visible !important;
}

.orbit {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 390px;
  height: 170px;
  border: 1px solid rgba(130, 100, 255, 0.35);
  border-radius: 50%;
  transform: translate(-50%, -50%) rotate(-18deg);
  pointer-events: none;
  z-index: 1;
}

.orbitTwo {
  width: 330px;
  height: 135px;
  border-color: rgba(0, 210, 255, 0.25);
  transform: translate(-50%, -50%) rotate(35deg);
}

.orbitOne { animation: orbitRotate 7s linear infinite; }
.orbitTwo { animation: orbitRotateReverse 10s linear infinite; }

.orbitPlanet {
  position: absolute;
  top: -8px;
  left: 50%;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #8b5cf6;
  color: white;
  font-size: 9px;
  box-shadow: 0 0 10px #8b5cf6, 0 0 25px rgba(139, 92, 246, 0.7);
  transform: translateX(-50%);
}

.orbitTwo .orbitPlanet {
  width: 12px;
  height: 12px;
  background: #22d3ee;
  box-shadow: 0 0 10px #22d3ee, 0 0 22px rgba(34, 211, 238, 0.7);
}

@keyframes orbitRotate {
  from { transform: translate(-50%, -50%) rotate(-18deg) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(-18deg) rotate(360deg); }
}

@keyframes orbitRotateReverse {
  from { transform: translate(-50%, -50%) rotate(35deg) rotate(360deg); }
  to { transform: translate(-50%, -50%) rotate(35deg) rotate(0deg); }
}

.githubWorkButton {
  text-decoration: none !important;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* =========================================================
   AI CHATBOT
========================================================= */

.aiChat {
  position: fixed;
  right: 28px;
  bottom: 28px;
  z-index: 9999;
  font-family: inherit;
}

.aiChatButton {
  position: relative;
  width: 62px;
  height: 62px;
  border: 1px solid rgba(139, 92, 246, 0.6);
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.95), rgba(37, 99, 235, 0.95));
  color: white;
  font-size: 27px;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.5), 0 0 45px rgba(37, 99, 235, 0.25);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.aiChatButton:hover { transform: scale(1.08) rotate(5deg); box-shadow: 0 0 30px rgba(139, 92, 246, 0.8), 0 0 65px rgba(37, 99, 235, 0.35); }

.aiPulse {
  position: absolute;
  inset: -6px;
  border: 1px solid rgba(139, 92, 246, 0.5);
  border-radius: 50%;
  animation: chatbotPulse 2s infinite;
}

@keyframes chatbotPulse { from { transform: scale(0.9); opacity: 1; } to { transform: scale(1.35); opacity: 0; } }

.chatWindow {
  position: absolute;
  right: 0;
  bottom: 78px;
  width: 360px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(139, 92, 246, 0.35);
  border-radius: 22px;
  background: linear-gradient(145deg, rgba(15, 15, 30, 0.97), rgba(10, 12, 25, 0.98));
  backdrop-filter: blur(25px);
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.5), 0 0 40px rgba(139, 92, 246, 0.18);
  overflow: hidden;
  animation: chatAppear 0.3s ease;
}

@keyframes chatAppear { from { opacity: 0; transform: translateY(20px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }

.chatHeader {
  min-height: 72px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  background: linear-gradient(90deg, rgba(139,92,246,0.12), rgba(37,99,235,0.08));
}

.chatBotAvatar {
  width: 42px; height: 42px; display: flex; align-items: center; justify-content: center;
  border-radius: 14px; background: linear-gradient(135deg, #8b5cf6, #2563eb); color: white; font-size: 12px; font-weight: 800;
  box-shadow: 0 0 18px rgba(139,92,246,0.4);
}

.chatHeaderText { display: flex; flex-direction: column; gap: 3px; flex: 1; }
.chatHeaderText strong { color: white; font-size: 14px; }
.chatHeaderText span { color: #4ade80; font-size: 11px; }
.chatClose { border: 0; background: transparent; color: rgba(255,255,255,0.6); font-size: 25px; cursor: pointer; }
.chatClose:hover { color: white; }

.chatMessages { flex: 1; padding: 18px; display: flex; flex-direction: column; gap: 12px; overflow-y: auto; }
.chatMessage { max-width: 82%; padding: 11px 13px; border-radius: 14px; font-size: 12px; line-height: 1.6; }
.botMessage { align-self: flex-start; color: rgba(255,255,255,0.88); background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.06); }
.userMessage { align-self: flex-end; color: white; background: linear-gradient(135deg, #7c3aed, #2563eb); box-shadow: 0 5px 20px rgba(37,99,235,0.2); }

.chatSuggestions { display: flex; gap: 6px; padding: 0 14px 10px; overflow-x: auto; }
.chatSuggestions button { flex-shrink: 0; padding: 7px 10px; border-radius: 20px; border: 1px solid rgba(139,92,246,0.3); background: rgba(139,92,246,0.08); color: rgba(255,255,255,0.75); font-size: 10px; cursor: pointer; }
.chatSuggestions button:hover { background: rgba(139,92,246,0.2); color: white; }

.chatInputArea { display: flex; gap: 8px; padding: 12px; border-top: 1px solid rgba(255,255,255,0.08); }
.chatInputArea input { flex: 1; min-width: 0; padding: 12px 14px; border: 1px solid rgba(255,255,255,0.1); border-radius: 13px; outline: none; background: rgba(255,255,255,0.06); color: white; font-size: 12px; }
.chatInputArea input::placeholder { color: rgba(255,255,255,0.4); }
.chatInputArea input:focus { border-color: rgba(139,92,246,0.6); }
.chatSend { width: 43px; border: 0; border-radius: 13px; background: linear-gradient(135deg, #8b5cf6, #2563eb); color: white; cursor: pointer; transition: transform 0.2s ease; }
.chatSend:hover { transform: scale(1.05); }

@media (max-width: 600px) {
  .aiChat { right: 16px; bottom: 16px; }
  .chatWindow { right: -4px; bottom: 72px; width: min(360px, calc(100vw - 32px)); height: 480px; }
  .aiChatButton { width: 56px; height: 56px; font-size: 24px; }
  .orbit { width: 320px; height: 140px; }
  .orbitTwo { width: 275px; height: 115px; }
}

`;


/* =========================================================
   INJECT CSS
========================================================= */

if (typeof document !== "undefined") {

  const style =
    document.createElement("style");

  style.innerHTML =
    styles;

  document.head.appendChild(style);
}


/* =========================================================
   RENDER
========================================================= */

createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>
    <App />
  </React.StrictMode>

);