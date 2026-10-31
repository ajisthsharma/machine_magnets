# Machine Magnet — Club Website

Static site for NIET's Machine Magnet club (HTML, CSS, vanilla JS). No build step, no dependencies.

## Structure
```
index.html              all pages, hash-routed (#home #about #hall-of-fame #events #projects #journal)
assets/css/             main.css (layout/base), effects.css (background, hover, cards, popup, timeline)
assets/js/              main.js (content + router + staircases), effects.js, timeline.js, projects.js
assets/img/favicon.svg
netlify.toml            Netlify config (publish = ".")
vercel.json             Vercel config (outputDirectory = ".")
```

## Run locally
`python3 -m http.server 8000` then open http://localhost:8000

## Deploy
- **Netlify:** Add new site, Import from Git, pick this repo. Build command: empty. Publish directory: `.`
- **Vercel:** Add New Project, import this repo. Framework preset: Other. Leave build and output settings as default.

## Content
All names, dates, photos and projects are placeholders. Edit the data blocks at the top of `main.js`, `timeline.js` and `projects.js`.
