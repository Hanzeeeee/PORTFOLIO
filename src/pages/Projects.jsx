import { useState } from 'react';

const projectData = [
  { title: 'Student Portal System', category: 'Web Systems', description: 'Full-stack student portal for enrollment, grades, and attendance.', labels: ['PHP', 'MySQL', 'JavaScript'] },
  { title: 'PSITS Events Reel', category: 'Video Editing', description: 'High-energy promotional reel for campus events and launches.', labels: ['Premiere Pro', 'After Effects'] },
  { title: 'Portfolio UI Mockup', category: 'UI/UX Design', description: 'Modern portfolio design with neon-glow visual style.', labels: ['Figma', 'Wireframe'] },
  { title: 'CESAFI Event Photography', category: 'Photography', description: 'Editorial event photography for esports competition coverage.', labels: ['DSLR', 'Lightroom', 'Retouching'] },
];

const filters = ['All', 'Web Systems', 'Video Editing', 'Photography', 'UI/UX Design'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const projects = filter === 'All' ? projectData : projectData.filter((item) => item.category === filter);

  return (
    <div className="page-content">
      <section className="section-hero projects-hero">
        <div>
          <span className="eyebrow">Projects</span>
          <h1>Featured Work</h1>
          <p>Selected projects that showcase clean UI, functional systems, and creative media experiences.</p>
        </div>
      </section>

      <section className="filters-row">
        {filters.map((option) => (
          <button
            key={option}
            className={`filter-pill ${filter === option ? 'active' : ''}`}
            onClick={() => setFilter(option)}
          >
            {option}
          </button>
        ))}
      </section>

      <section className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-card-top">
              <span>{project.category}</span>
              <h3>{project.title}</h3>
            </div>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.labels.map((tag) => (<span key={tag}>{tag}</span>))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
