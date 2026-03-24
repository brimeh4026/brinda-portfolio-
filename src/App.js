import React, { useState } from "react";
import "./App.css";

import profilePhoto from "./assets/images/brinda-photo.png";
import linkedinIcon from "./assets/images/linkedin.png";
import githubIcon from "./assets/images/github.png";
import emailIcon from "./assets/images/email.png";
import instagramIcon from "./assets/images/instagram.png";

import resumePDF from "./assets/documents/Brinda_Mehra_Resume.pdf";
import resumePreview from "./assets/images/resume.png";

function App() {
  const [activeProject, setActiveProject] = useState(null);

  const [formStatus, setFormStatus] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xjgazvvy", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };
  const projectStories = {
    economic: {
      title: "Economic Comp.",
      story: (
        <>
          <p>
            <strong>The Challenge:</strong> We were tasked with analyzing the
            economic and environmental impacts of closing a local coal plant.
          </p>
          <br />
          <p>
            <strong>The Process:</strong> I led the data analysis phase, diving
            deep into historical economic metrics and projecting job
            displacement versus long-term green energy growth. We used extensive
            datasets to build a predictive model.
          </p>
          <br />
          <p>
            <strong>The Outcome:</strong> We placed 4th overall out of a dozen
            of teams. Our final presentation balanced economic growth with
            sustainability, proving that data-driven transitions can protect
            local economies.
          </p>
        </>
      ),
    },
    spark: {
      title: "Spark AI-Powered Big Data Analytics",
      story: (
        <>
          <p>
            <strong>The Architecture:</strong> I built a Spark-based analytics
            platform to process massive competitive programming datasets,
            leveraging HDFS storage and Hive tables to ensure scalable and
            efficient querying.
          </p>
          <br />
          <p>
            <strong>The Implementation:</strong> I implemented comprehensive
            data analysis using Spark RDD, DataFrame, and SQL APIs. By joining
            multiple datasets, I was able to deeply analyze problem difficulty
            and uncover underlying solution patterns.
          </p>
          <br />
          <p>
            <strong>The Optimization:</strong> To ensure peak performance, I
            optimized queries using Spark caching and bucketing. Additionally, I
            utilized Spark MLlib to train decision tree models capable of
            accurately predicting programming problem difficulty.
          </p>
        </>
      ),
    },
    gcpPipeline: {
      title: "Google Cloud School Data Pipeline",
      story: (
        <>
          <p>
            <strong>The Architecture:</strong> I built a comprehensive cloud
            data pipeline on Google Cloud (Compute Engine, GCS, Dataform,
            BigQuery) to ingest and analyze 3,086 Wisconsin school records
            spanning 517 cities.
          </p>
          <br />
          <p>
            <strong>The Implementation:</strong> I utilized Dataform SQL
            workflows and BigQuery geospatial joins to accurately map school
            coordinates to 72 distinct county boundaries.
          </p>
          <br />
          <p>
            <strong>The Automation:</strong> To streamline the process, I
            automated data ingestion and analysis using Python (Jupyter) and
            Google Cloud APIs, enabling efficient querying of statewide school
            distributions and characteristics.
          </p>
        </>
      ),
    },
    kafkaWeather: {
      title: "Kafka Weather Streaming System",
      story: (
        <>
          <p>
            <strong>The Architecture:</strong> I designed a Python-based Kafka
            streaming pipeline using a robust producer-consumer architecture to
            continuously generate and process weather observations.
          </p>
          <br />
          <p>
            <strong>The Producer:</strong> I implemented a Kafka producer
            utilizing protobuf serialization to stream weather data to a
            4-partition topic, ensuring reliability with retry logic and strong
            delivery guarantees.
          </p>
          <br />
          <p>
            <strong>The Consumer:</strong> I developed partition-aware consumers
            with fault-tolerant offset checkpointing. These consumers computed
            real-time weather statistics and exported the aggregated JSON data
            for seamless dashboard visualization.
          </p>
        </>
      ),
    },
  };

  return (
    <div className="figma-canvas">
      <header className="top-header">
        <div className="logo-name">Brinda Mehra</div>
        <nav className="top-nav">
          <a href="#about">ABOUT ME</a> |<a href="#experience">EXPERIENCE</a> |
          <a href="#projects">PROJECTS</a> |<a href="#contact">CONTACT ME</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="profile-cluster">
            <img
              src={profilePhoto}
              alt="Brinda Mehra"
              className="profile-img"
            />
          </div>

          <div className="intro-text">
            <p className="hello-text">Hello,</p>
            <h1 className="name-title slide-up-anim">I'm Brinda Mehra</h1>

            <div className="social-icons fade-in-anim">
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

      {/* About Section */}
      <section id="about" className="about-section fade-in-anim">
        <div className="card about-card">
          <div className="about-text">
            <h2>About Me</h2>
            <br />
            <p>
              Computer Science & Economics student at the University of
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
            <div className="browser-mockup react-bits-float">
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

      {/* Experience Section */}
      <div id="experience" className="section-header fade-in-anim">
        <h2>Experience</h2>
      </div>
      <section className="experience-container fade-in-anim">
        <div className="card grid-card exp-card">
          <div className="card-header">
            <div>
              <h3>AbbVie</h3>
              <p className="subtitle">Commodity Analyst • May 2025 - Present</p>
            </div>
          </div>
          <p className="card-desc">
            Led development of internal AI testing tools at AbbVie using React,
            TypeScript, and Python to improve developer workflows.
          </p>
        </div>

        <div className="card grid-card exp-card">
          <div className="card-header">
            <div>
              <h3>Orsini</h3>
              <p className="subtitle">Data Analyst • Sep 2024 - May 2025</p>
            </div>
          </div>
          <p className="card-desc">
            Analyzed healthcare data using Power BI to identify trends and
            generate insights that improved medication management and
            operational efficiency.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <div id="projects" className="section-header fade-in-anim">
        <h2>Projects</h2>
      </div>
      <section className="main-grid fade-in-anim">
        <div className="left-cards-grid">
          <div className="card grid-card">
            <div className="card-header">
              <div>
                <h3>GCP Data Pipeline</h3>
                <p className="subtitle">Academic Project • Dec 2025</p>
              </div>
            </div>
            <p className="card-desc">
              Built a cloud data pipeline on Google Cloud (GCS, Dataform,
              BigQuery) to ingest and analyze 3,086 school records, automating
              workflows with Python.
            </p>
            <button
              className="learn-more-btn"
              onClick={() => setActiveProject("gcpPipeline")}
            >
              Learn More
            </button>
          </div>

          <div className="card grid-card">
            <div className="card-header">
              <div>
                <h3>Kafka Weather Streaming</h3>
                <p className="subtitle">Academic Project • Nov 2025</p>
              </div>
            </div>
            <p className="card-desc">
              Built a fault-tolerant Kafka streaming pipeline in Python with a
              producer–consumer architecture to continuously process and export
              real-time weather data.
            </p>
            <button
              className="learn-more-btn"
              onClick={() => setActiveProject("kafkaWeather")}
            >
              Learn More
            </button>
          </div>

          <div className="card grid-card">
            <div className="card-header">
              <div>
                <h3>Spark AI Platform</h3>
                <p className="subtitle">Academic Project • Oct 2025</p>
              </div>
            </div>
            <p className="card-desc">
              Built a distributed Spark and Hive data platform to analyze
              millions of programming records, integrating generative AI for
              natural-language-to-SQL queries.
            </p>
            <button
              className="learn-more-btn"
              onClick={() => setActiveProject("spark")}
            >
              Learn More
            </button>
          </div>

          <div className="card grid-card">
            <div className="card-header">
              <div>
                <h3>Economic Comp.</h3>
                <p className="subtitle">Madison, WI • Oct 2024 - Nov 2024</p>
              </div>
            </div>
            <p className="card-desc">
              Placed 4th in an economic case competition by analyzing the
              impacts of coal plant closures and proposing data-driven solutions
              balancing economic growth.
            </p>
            <button
              className="learn-more-btn"
              onClick={() => setActiveProject("economic")}
            >
              Learn More
            </button>
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

      {/* Interests Section */}
      <section className="interests-section fade-in-anim">
        <h3>If I'm not coding you can find me...</h3>
        <div className="emojis-container react-bits-bounce">
          {/* Top Row: 3 Emojis */}
          <div className="emoji-row">
            <div className="emoji-wrap">
              <span className="emoji">🧶</span>
              <div className="tooltip">...crocheting my next project!</div>
            </div>
            <div className="emoji-wrap">
              <span className="emoji">🏔️</span>
              <div className="tooltip">...hiking a new trail!</div>
            </div>
            <div className="emoji-wrap">
              <span className="emoji">🍝</span>
              <div className="tooltip">...trying out a new restaurant!</div>
            </div>
          </div>

          <div className="emoji-row">
            <div className="emoji-wrap">
              <span className="emoji">🏓</span>
              <div className="tooltip">...on the pickleball court!</div>
            </div>
            <div className="emoji-wrap">
              <span className="emoji">✈️</span>
              <div className="tooltip">...traveling somewhere new!</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section fade-in-anim">
        <div className="card contact-card">
          <form className="contact-form" onSubmit={handleFormSubmit}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" placeholder="Message" rows="4"></textarea>
            <button
              type="submit"
              className="submit-btn"
              disabled={formStatus === "submitting"}
            >
              {formStatus === "submitting" ? "Sending..." : "Submit"}
            </button>

            {formStatus === "success" && (
              <p
                style={{
                  color: "#799476",
                  marginTop: "10px",
                  fontWeight: "bold",
                }}
              >
                Thanks! Your message was sent successfully.
              </p>
            )}
            {formStatus === "error" && (
              <p
                style={{ color: "red", marginTop: "10px", fontWeight: "bold" }}
              >
                Oops! There was a problem submitting your form.
              </p>
            )}
          </form>
          <div className="contact-info">
            <h2>Get in Touch!</h2>
            <ul>
              <li>Chicago, US</li>
              <li>(847)-271-1912</li>
              <li>brindamehra03@gmail.com</li>
            </ul>
          </div>
        </div>
      </section>

      {activeProject && (
        <div className="modal-overlay" onClick={() => setActiveProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-modal-btn"
              onClick={() => setActiveProject(null)}
            >
              ×
            </button>
            <h2 className="modal-title">
              {projectStories[activeProject].title}
            </h2>
            <div className="modal-body">
              {projectStories[activeProject].story}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
