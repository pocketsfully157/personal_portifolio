# Hilcar Mahema — Portfolio

An editorial personal portfolio in Portuguese, built with HTML, CSS and vanilla JavaScript. No build step or framework.

## Preview

Serve this folder with any static HTTP server (for example `python3 -m http.server 8080`) and open `http://localhost:8080`.

## Pages and assets

- `index.html`: introduction, selected projects, about, services, experience and contact.
- `venix.html`: Venix project story, linked from both the project image and title.
- `style.css`: responsive editorial layout, ivory/blue palette, dark theme and reduced-motion support.
- `script.js`: persistent theme choice, accessible mobile navigation and contact submission.
- `images/hilcar-portrait.jpg` and `images/hilcar-portrait-small.jpg`: optimized versions of the approved AI-edited portrait supplied for this redesign. Original source photos are not included.
- Existing project images are brand artwork, not screenshots of the websites.

## Editing

Text and project URLs live in the HTML. Palette tokens live at the top of `style.css`. The website defaults to the editorial light theme, and remembers an explicit theme choice. All sections remain visible without JavaScript; native navigation, project disclosures and the form action still work.

The Venix case study intentionally has no unverified public website URL. Add the confirmed URL when available. The Start Out project links to `https://startoutglobal.com/`. The personal GitHub profile link is preserved from the original portfolio; the source-code link points to this repository.

## Contact

The form posts to the existing Formspree endpoint `https://formspree.io/f/xaqggzpv`. Native validation runs before submission; JavaScript handles pending, success, failure and timeout states, blocks duplicate submissions, and retains the message after a failure. The name is read through `form.elements.namedItem`, avoiding the built-in `form.name` property. Email and WhatsApp remain alternative contact paths.

Automated verification must intercept Formspree requests. Do not send test messages to the live inbox. Successful delivery by the third-party service needs a separate authorized live check.

## Deployment

Deploy the repository root as a static website; there is no build command. Relative asset paths support subdirectory hosting. Open Graph imagery uses the existing production portfolio domain and becomes available there once the change is deployed.
