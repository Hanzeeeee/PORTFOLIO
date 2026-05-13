# Christ Hanzen Rallos — Portfolio Website

## Folder Structure

```
portfolio/
├── index.html          ← Home page (hero, typewriter, social links)
├── about.html          ← About page (bio, timeline, stats, hobbies)
├── projects.html       ← Projects page (filter, cards, modal)
├── education.html      ← Education page (schools, organizations)
├── services.html       ← Services page (cards, payment modal)
├── skills.html         ← Skills page (animated progress bars)
├── contact.html        ← Contact page (form, FAQ accordion)
│
├── css/
│   └── style.css       ← All styles (shared across every page)
│
├── js/
│   └── script.js       ← All shared JS (cursor, particles, chatbot,
│                          footer, loading screen, reveal animations)
│
└── assets/
    └── images/
        └── profile.jpg ← REPLACE with your actual photo
```

## Setup Instructions

1. **Extract** the ZIP to any folder.
2. **Add your photo** — place your profile picture inside `assets/images/`
   and name it `profile.jpg` (or update the `src` in `index.html`).
3. **Open** `index.html` in any modern browser — no server needed.
4. To **deploy**, upload the entire `portfolio/` folder to any static host:
   - GitHub Pages
   - Netlify (drag & drop the folder)
   - Vercel
   - Any cPanel-based hosting (public_html)

## Navigation

Each navbar link opens its own dedicated HTML page:

| Link       | File              |
|------------|-------------------|
| Home       | index.html        |
| About      | about.html        |
| Projects   | projects.html     |
| Education  | education.html    |
| Services   | services.html     |
| Skills     | skills.html       |
| Contact    | contact.html      |

## Customization Tips

- **Add real projects**: Edit the `projects` array in `projects.html`
- **Update skills %**: Edit the skill arrays in `skills.html`
- **Add services**: Edit the `services` array in `services.html`
- **Update contact info**: Directly edit any `.html` file
- **Change colors**: Edit CSS variables at the top of `css/style.css`

## Tech Stack

- Pure HTML5, CSS3, Vanilla JavaScript
- Google Fonts: Orbitron, Rajdhani, Share Tech Mono
- No frameworks, no build tools — open and run directly
