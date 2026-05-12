import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="page-content">
      <section className="section-hero about-hero">
        <div>
          <span className="eyebrow">About Me</span>
          <h1>Profile & Background</h1>
          <p>I'm a motivated BSIT student from University of Cebu, specializing in web development, multimedia editing, and creative brand execution.</p>
        </div>
        <motion.div className="about-summary" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55 }}>
          <p>My strengths are in building practical digital products and delivering creative content across video, photography, and web experiences. I enjoy solving design and technical challenges with a polished final result.</p>
          <ul>
            <li>PSITS Officer & Media Chief</li>
            <li>CESAFI Esports League Editor</li>
            <li>Freelance media creator and web developer</li>
          </ul>
        </motion.div>
      </section>

      <section className="section-grid">
        <article className="card-panel">
          <h2>Personal Story</h2>
          <p>From campus media work to client projects, I adapt quickly and bring thoughtful execution to every job. I combine the structure of development with the energy of creative storytelling.</p>
        </article>
        <article className="timeline-panel">
          <h2>Experience</h2>
          <div className="timeline-item">
            <span>2024 – Present</span>
            <p>PSITS Officer & Media Chief — Leading club media, event coverage, and creative campaigns.</p>
          </div>
          <div className="timeline-item">
            <span>2024 – Present</span>
            <p>CESAFI Esports League Editor — Producing promotional videos and match highlight reels.</p>
          </div>
          <div className="timeline-item">
            <span>2023 – Present</span>
            <p>Academic freelancer — Web systems, UI design, and multimedia production.</p>
          </div>
        </article>
      </section>
    </div>
  );
}
