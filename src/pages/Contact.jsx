export default function Contact() {
  return (
    <div className="page-content">
      <section className="section-hero contact-hero">
        <div>
          <span className="eyebrow">Contact</span>
          <h1>Let's connect</h1>
          <p>Ready to build? Send a message and I will follow up with a project plan and timeline.</p>
        </div>
      </section>

      <section className="contact-panel">
        <div className="contact-card">
          <h2>Get in touch</h2>
          <p>Email me directly to discuss your next project or collaboration.</p>
          <a className="btn btn-primary" href="mailto:kagornigaw@gmail.com">Email: kagornigaw@gmail.com</a>
        </div>
        <div className="contact-card contact-info">
          <div>
            <span>Phone</span>
            <p>+63 950 688 6467</p>
          </div>
          <div>
            <span>Location</span>
            <p>Basak Mandaue, Cebu City</p>
          </div>
          <div>
            <span>Career</span>
            <p>BSIT Student • Creative Technologist</p>
          </div>
        </div>
      </section>
    </div>
  );
}
