import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="page-content">
      <section className="hero-panel">
        <div className="hero-copy">
          <span className="eyebrow">Professional Portfolio</span>
          <h1>Christ Hanzen<br />Rallos</h1>
          <p>BSIT student and creative technologist building polished web experiences, bold video content, and modern brand systems.</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/projects">Explore Work</Link>
            <a className="btn btn-ghost" href="mailto:kagornigaw@gmail.com">Contact Me</a>
          </div>
        </div>
        <motion.div className="hero-card" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
          <div className="hero-card-tag">Full-Stack & Multimedia</div>
          <div className="hero-card-copy">Focused on responsive React websites, Web3-ready landing experiences, and creative media production for local brands.</div>
          <div className="hero-card-list">
            <span>React</span>
            <span>Framer Motion</span>
            <span>WordPress</span>
            <span>Video Editing</span>
          </div>
        </motion.div>
      </section>
      <section className="section-grid">
        <article className="info-panel">
          <h2>Why choose me?</h2>
          <p>I bring technical precision, polished visuals, and dependable project delivery. Every page is built to feel professional, responsive, and memorable.</p>
        </article>
        <article className="stats-panel">
          <div className="stat-card">
            <span>3+</span>
            <p>Years Experience</p>
          </div>
          <div className="stat-card">
            <span>10+</span>
            <p>Featured Projects</p>
          </div>
          <div className="stat-card">
            <span>7+</span>
            <p>Service Areas</p>
          </div>
        </article>
      </section>
    </div>
  );
}
