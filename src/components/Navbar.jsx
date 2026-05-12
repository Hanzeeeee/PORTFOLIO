import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Education', path: '/education' },
  { label: 'Services', path: '/services' },
  { label: 'Skills', path: '/skills' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="brand-bar">
        <NavLink to="/" className="brand-logo">CHR<span>•</span></NavLink>
        <button className="nav-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </button>
      </div>
      <nav className={`site-nav ${open ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
