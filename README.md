# Hilcar Idelio — Portfolio

A premium, minimalist one-page portfolio for **Hilcar Idelio**, Web Developer & IT Support Technician based in Portugal. Built with plain HTML5, CSS3 and vanilla JavaScript — no frameworks, no build step.

## Tech stack

- HTML5 (semantic, accessible markup)
- CSS3 with custom properties (design tokens) for theming
- Vanilla JavaScript (ES5-compatible, no dependencies)
- Google Fonts (Poppins)

## File structure

```
├── index.html      → Page markup (all sections)
├── style.css       → Design tokens, layout, components, dark mode, responsive rules
├── script.js       → Theme toggle, navbar scroll state, mobile nav, reveal animations, form
├── assets/         → Placeholder project preview SVGs
└── README.md
```

## Features

- **Sticky navbar** — transparent on load, glassmorphism blur once the page scrolls.
- **Dark mode** — toggle in the navbar, respects the visitor's OS preference on first visit, choice persisted in `localStorage`.
- **Sections** — Hero, About, Services, Featured Project (case study), Projects grid, Skills, Experience timeline, Contact, Footer.
- **Motion** — fade-up reveals on scroll, hover lift on cards, button scale-down on press, smooth in-page scrolling. Everything is disabled automatically when the visitor has `prefers-reduced-motion: reduce` set.
- **Accessibility** — semantic landmarks, skip-to-content link, visible focus states, labelled form fields, `aria-*` attributes on interactive controls, sufficient color contrast in both themes.
- **Performance** — no external JS libraries, system-preferred font fallback stack, `loading="lazy"` on below-the-fold images, lightweight inline SVG illustrations instead of raster images.

## Running locally

No build step is required. Open `index.html` directly in a browser, or serve the folder with any static server, for example:

```bash
npx serve .
```

## Customizing

- **Colors & type** — all brand tokens live at the top of `style.css` under `:root` (light) and `html[data-theme="dark"]` (dark). Change `--color-primary`, `--color-accent`, etc. in one place to re-theme the whole site.
- **Content** — copy for every section lives directly in `index.html`; project cards and images are in the `#projects` section and `assets/`.
- **Contact form** — `script.js` currently validates and shows a confirmation message client-side only. Wire the `submit` handler up to your backend, form service (e.g. Formspree, Netlify Forms) or API endpoint to actually send messages.

---

© 2026 Hilcar Idelio — Built with HTML, CSS & JavaScript.
