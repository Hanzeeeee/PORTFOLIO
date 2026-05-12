export default function Education() {
  return (
    <div className="page-content">
      <section className="section-hero education-hero">
        <div>
          <span className="eyebrow">Education</span>
          <h1>Academic Journey</h1>
          <p>Focused study in information technology, complemented by hands-on media and systems production.</p>
        </div>
      </section>

      <section className="section-grid">
        <article className="edu-card">
          <div>
            <span className="edu-title">University of Cebu</span>
            <p>BS Information Technology</p>
          </div>
          <div className="edu-year">2023 – 2027</div>
        </article>
        <article className="edu-card">
          <div>
            <span className="edu-title">Academic Projects</span>
            <p>Systems development, UI design, and research-based digital solutions.</p>
          </div>
          <div className="edu-year">2023 – Present</div>
        </article>
      </section>

      <section className="timeline-panel">
        <h2>Learning Highlights</h2>
        <div className="timeline-item">
          <span>2024</span>
          <p>Launched student information system and completed OJT with Philippine Postal Corporation.</p>
        </div>
        <div className="timeline-item">
          <span>2025</span>
          <p>Expanded portfolio design capabilities and produced promotional campaign media.</p>
        </div>
      </section>
    </div>
  );
}
