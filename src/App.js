import React from "react";
import "./App.css";

import profilePhoto from "./assets/images/brinda-photo.png";
import linkedinIcon from "./assets/images/linkedin.png";
import githubIcon from "./assets/images/github.png";
import emailIcon from "./assets/images/email.png";
import instagramIcon from "./assets/images/instagram.png";

import resumePDF from "./assets/documents/Brinda_Mehra_Resume.pdf";
import resumePreview from "./assets/images/resume.png";

function App() {
  return (
    <div className="figma-canvas">
      <header className="top-header">
        <div className="logo-name">Brinda Mehra</div>
        <nav className="top-nav">
          <a href="#about">ABOUT ME</a> |
          <a href="#experience">EXPERIENCE & PROJECTS</a> |
          <a href="#contact">CONTACT ME</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="profile-cluster">
            <div className="circle-bg circle-1"></div>
            <div className="circle-bg circle-2"></div>
            <img
              src={profilePhoto}
              alt="Brinda Mehra"
              className="profile-img"
            />
          </div>

          <div className="intro-text">
            <p className="hello-text">Hello,</p>
            <h1 className="name-title">I'm Brinda Mehra</h1>

            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/brinda-mehra-605318240"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
              >
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className="social-icon-img"
                />
              </a>

              <a
                href="https://github.com/brimeh4026"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
              >
                <img
                  src={githubIcon}
                  alt="GitHub"
                  className="social-icon-img"
                />
              </a>

              <a href="mailto:brindamehra03@gmail.com" className="social-btn">
                <img src={emailIcon} alt="Email" className="social-icon-img" />
              </a>

              <a
                href="https://www.instagram.com/brinda.mehra?igsh=M2Nhbnd0ejhpYWho&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
              >
                <img
                  src={instagramIcon}
                  alt="instagram"
                  className="social-icon-img"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="card about-card">
          <div className="about-text">
            <h2>About Me</h2>
            <br />
            <p>
              Computer Science & Economics student, at the University of
              Wisconsin-Madison
            </p>
            <p className="skills-text">
              <strong>Key Technical Skills:</strong>{" "}
              <span className="highlight-text">
                Java, React, Python, Javascript, HTML, CSS, JavaFX, Regex, Power
                BI
              </span>
              <br />
              <strong>Languages:</strong>{" "}
              <span className="highlight-text">English & Hindi</span>
              <br />
              <strong>Relevant Courses:</strong>{" "}
              <span className="highlight-text">
                Introduction to Algorithms | Introduction to Software Security |
                Industrial Structure and Competitive Strategy
              </span>
            </p>
          </div>
          <div className="about-illustration">
            <div className="browser-mockup">
              <div className="browser-header">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
              <div className="browser-body"></div>
            </div>
          </div>
        </div>
      </section>

      <div
        id="experience"
        className="experience-header"
        style={{ textIndent: "50px" }}
      >
        <h2> Experience & Projects</h2>
        <br />
      </div>

      <section className="main-grid">
        <div className="left-cards-grid">
          <div className="card grid-card">
            <div className="card-header">
              <span className="card-icon">🦾</span>
              <div>
                <h3>AbbVie</h3>
                <p className="subtitle">AI Intern</p>
              </div>
            </div>
            <p className="card-desc">
              Led development of internal AI testing tools at AbbVie using
              React, TypeScript, and Python to improve developer workflows.
            </p>
          </div>

          <div className="card grid-card">
            <div className="card-header">
              <span className="card-icon">📊</span>
              <div>
                <h3>Orsini</h3>
                <p className="subtitle">Data Analyst</p>
              </div>
            </div>
            <p className="card-desc">
              Analyzed healthcare data using Power BI to identify trends and
              generate insights that improved medication management and
              operational efficiency.
            </p>
          </div>

          <div className="card grid-card">
            <div className="card-header">
              <span className="card-icon">📈</span>
              <div>
                <h3>Economic Comp.</h3>
              </div>
            </div>
            <p className="card-desc">
              Placed 4th in an economic case competition by analyzing the
              impacts of coal plant closures and proposing data-driven solutions
              balancing economic growth and sustainability.
            </p>
            <button className="learn-more-btn">Learn More</button>
          </div>

          <div className="card grid-card">
            <div className="card-header">
              <span className="card-icon">⚡</span>
              <div>
                <h3>Spark AI Platform</h3>
              </div>
            </div>
            <p className="card-desc">
              Built a distributed Spark and Hive data platform to analyze
              millions of programming records, integrating generative AI for
              natural-language-to-SQL queries and ML models to predict problem
              difficulty.
            </p>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>

        <div className="right-resume-stack">
          <div className="resume-paper paper-back-2"></div>
          <div className="resume-paper paper-back-1"></div>
          <div className="resume-paper paper-front">
            <img
              src={resumePreview}
              alt="Resume Preview"
              className="resume-preview-img"
            />

            <a
              href={resumePDF}
              download="Brinda_Mehra_Resume.pdf"
              className="download-btn"
            >
              DOWNLOAD PDF RESUME
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="card contact-card">
          <form className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message" rows="4"></textarea>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>

          <div className="contact-info">
            <h2>Get in Touch!</h2>
            <ul>
              <li>
                <span className="c-icon">📍</span> Chicago, US
              </li>
              <li>
                <span className="c-icon">📞</span> (847)-271-1912
              </li>
              <li>
                <span className="c-icon">✉️</span> brindamehra03@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
