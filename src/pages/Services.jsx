const services = [
  { title: 'Website Development', description: 'Custom websites with responsive React UI, modern design, and clean code.', accent: 'React projects and landing experiences.' },
  { title: 'Video Editing', description: 'Promotional reels, event coverage, and motion-driven storytelling.', accent: 'Fast turnaround with polished post-production.' },
  { title: 'Photography', description: 'Portraits, event photography, and social media-ready visual content.', accent: 'Editorial coverage that feels cinematic.' },
  { title: 'UI/UX Design', description: 'Interface design for websites, dashboards, and mobile-ready products.', accent: 'Clear visual systems with strong usability.' },
];

export default function Services() {
  return (
    <div className="page-content">
      <section className="section-hero services-hero">
        <div>
          <span className="eyebrow">Services</span>
          <h1>What I offer</h1>
          <p>Professional creative services tailored for startups, campus organizations, and personal brands.</p>
        </div>
      </section>

      <section className="services-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span>{service.accent}</span>
          </article>
        ))}
      </section>
    </div>
  );
}
