const skillGroups = [
  { label: 'Web Development', skills: ['React', 'JavaScript', 'HTML', 'CSS', 'PHP'] },
  { label: 'Creative Media', skills: ['Video Editing', 'Photography', 'Design', 'Motion Graphics'] },
];

export default function Skills() {
  return (
    <div className="page-content">
      <section className="section-hero skills-hero">
        <div>
          <span className="eyebrow">Skills</span>
          <h1>Core Competencies</h1>
          <p>A balanced blend of development, design, and media production skills for modern digital projects.</p>
        </div>
      </section>

      <section className="skill-grid">
        {skillGroups.map((group) => (
          <article key={group.label} className="skill-card">
            <h3>{group.label}</h3>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
}
