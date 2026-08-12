import React from "react";


function Github() {
  return (
    <>
      <style>{`
        .github-section {
          min-height: 100vh;
          padding: 100px 8%;
          background: #0b0b0f;
          color: #ffffff;
        }

        .github-container {
          max-width: 1200px;
          margin: auto;
        }

        /* Heading */
        .github-heading {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 60px;
        }

        .section-tag {
          display: inline-block;
          color: #8b5cf6;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 3px;
          margin-bottom: 15px;
        }

        .github-heading h2 {
          font-size: 48px;
          margin: 0 0 18px;
          font-weight: 800;
        }

        .github-heading h2 span {
          color: #8b5cf6;
        }

        .github-heading p {
          color: #a1a1aa;
          font-size: 16px;
          line-height: 1.7;
        }

        /* GitHub Profile */
        .github-profile {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 25px 30px;
          margin-bottom: 50px;
          background: #13131a;
          border: 1px solid #27272f;
          border-radius: 16px;
        }

        .github-icon {
          width: 55px;
          height: 55px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #ffffff;
          color: #0b0b0f;
          font-size: 28px;
          font-weight: bold;
        }

        .github-info {
          flex: 1;
        }

        .github-info h3 {
          margin: 0 0 5px;
          font-size: 20px;
        }

        .github-info p {
          margin: 0;
          color: #a1a1aa;
          font-size: 14px;
        }

        .github-button {
          text-decoration: none;
          color: #ffffff;
          padding: 12px 20px;
          border: 1px solid #3f3f46;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          transition: 0.3s;
        }

        .github-button:hover {
          background: #ffffff;
          color: #0b0b0f;
        }

        /* Project Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        /* Project Card */
        .project-card {
          padding: 28px;
          background: #13131a;
          border: 1px solid #27272f;
          border-radius: 16px;
          transition: 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: #8b5cf6;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.35);
        }

        .project-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }

        .project-icon {
          font-size: 28px;
        }

        .project-type {
          font-size: 12px;
          color: #8b5cf6;
          padding: 6px 10px;
          background: rgba(139, 92, 246, 0.1);
          border-radius: 20px;
        }

        .project-card h3 {
          margin: 0 0 12px;
          font-size: 21px;
        }

        .project-card p {
          color: #a1a1aa;
          font-size: 14px;
          line-height: 1.7;
          min-height: 72px;
        }

        /* Tech Stack */
        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 22px 0;
        }

        .tech-stack span {
          padding: 6px 10px;
          background: #1c1c24;
          color: #d4d4d8;
          border-radius: 6px;
          font-size: 11px;
        }

        /* Project Links */
        .project-links {
          display: flex;
          gap: 20px;
          padding-top: 18px;
          border-top: 1px solid #27272f;
        }

        .project-links a {
          color: #ffffff;
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          transition: 0.3s;
        }

        .project-links a:hover {
          color: #8b5cf6;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 650px) {
          .github-section {
            padding: 70px 5%;
          }

          .github-heading h2 {
            font-size: 36px;
          }

          .github-profile {
            flex-direction: column;
            text-align: center;
          }

          .github-button {
            width: 100%;
            text-align: center;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="github-section" id="github">
        <div className="github-container">

          {/* Heading */}
          <div className="github-heading">
            <span className="section-tag">MY WORK</span>

            <h2>
              GitHub <span>& Projects</span>
            </h2>

            <p>
              Explore some of the projects I've built while learning
              development, AI/ML, and modern web technologies.
            </p>
          </div>

          {/* GitHub Profile */}
          <div className="github-profile">

            <div className="github-icon">
              ⌘
            </div>

            <div className="github-info">
              <h3>My GitHub</h3>

              <p>
                Check out my repositories and open-source projects.
              </p>
            </div>

            <a
              href="https://github.com/priy-hue"
              target="_blank"
              rel="noreferrer"
              className="github-button"
            >
              Visit GitHub →
            </a>

          </div>

          {/* Projects */}
          <div className="projects-grid">

            {/* Project 1 */}
            <div className="project-card">

              <div className="project-top">
                <span className="project-icon">🤖</span>
                <span className="project-type">AI / ML</span>
              </div>

              <h3>Recommendation System</h3>

              <p>
                A product recommendation system that suggests products
                based on user preferences and item similarity.
              </p>

              <div className="tech-stack">
                <span>Python</span>
                <span>Scikit-learn</span>
                <span>Pandas</span>
              </div>

              <div className="project-links">
                <a href="#" target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>

                <a href="#" target="_blank" rel="noreferrer">
                  Live Demo ↗
                </a>
              </div>

            </div>


            {/* Project 2 */}
            <div className="project-card">

              <div className="project-top">
                <span className="project-icon">🎬</span>
                <span className="project-type">Web</span>
              </div>

              <h3>Netflix Clone</h3>

              <p>
                A responsive Netflix-inspired frontend built using
                modern web development technologies.
              </p>

              <div className="tech-stack">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>

              <div className="project-links">
                <a href="#" target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>

                <a href="#" target="_blank" rel="noreferrer">
                  Live Demo ↗
                </a>
              </div>

            </div>


            {/* Project 3 */}
            <div className="project-card">

              <div className="project-top">
                <span className="project-icon">🔐</span>
                <span className="project-type">React</span>
              </div>

              <h3>Password Generator</h3>

              <p>
                A React-based password generator with customizable
                length, numbers, and special character options.
              </p>

              <div className="tech-stack">
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
              </div>

              <div className="project-links">
                <a href="#" target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>

                <a href="#" target="_blank" rel="noreferrer">
                  Live Demo ↗
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default Github;