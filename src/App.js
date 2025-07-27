import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <div className={darkMode ? "app-container dark" : "app-container"}>
      {/* Header */}
      <header className="header">
        <h1>My Portfolio</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <button onClick={toggleTheme} className="theme-toggle">
          {darkMode ? "☀" : "🌙"}
        </button>
      </header>

      {/* Sections */}
     <section id="home" className="section home">
  <div className="home-content">
    <div className="home-text">
      <h2>Hello, I'm <span className="highlight">PRAGADHEESHWARAN</span></h2>
      <p>A passionate Engineering Student | Web Developer</p>
      <a href="/PRAGADHEESHWARAN-M.pdf" download className="resume-btn">Download Resume</a>
    </div>
    <div className="home-image">
      <img src="/magi.jpg" alt="Profile" />
    </div>
  </div>
</section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am currently pursuing my 3rd year of B.Tech in Information Technology, with a strong passion for Artificial Intelligence, UI/UX design, and building innovative platforms powered by AI. I enjoy blending creativity with technology, crafting intelligent solutions that enhance user experience and drive impactful change.
I have successfully completed certifications in AI, Web Development, and related technologies, strengthening my skills in designing interactive interfaces and developing smart systems. My goal is to create AI-driven platforms that combine functionality, aesthetics, and intelligence, making technology more accessible and engaging.
Always eager to learn, experiment, and innovate, I aim to contribute to the future of intelligent applications and modern design.
        </p>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="card">
            <h3>AI Chatbot (Buddy AI)</h3>
            <p>Built using React and OpenAI API.</p>
          </div>
          <div className="card">
            <h3>College Department Website</h3>
            <p>A responsive website using Html,Css,Javascript.</p>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>React.js</li>
          <li>JavaScript</li>
          <li>HTML & CSS</li>
        </ul>
      </section>

      {/* WhatsApp Contact */}
      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const name = e.target.name.value;
            const email = e.target.email.value;
            const message = e.target.message.value;

            const text = `Hello, my name is ${name}. My email is ${email}. Here is my message: ${message}`;
            const whatsappURL = `https://wa.me/9087542052?text=${encodeURIComponent(text)}`;

            window.open(whatsappURL, "_blank");
          }}
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Send on WhatsApp</button>
        </form>
      </section>

      <footer className="footer">
        <p>© 2025 Pragadheeshwaran. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
