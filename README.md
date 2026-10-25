# Portfolio

A responsive React portfolio built with Vite. Most of the portfolio content is
kept in one place so it can be updated without changing the page components.

## Run locally

```sh
npm install
npm run dev
```

Run `npm run build` to create a production build, or `npm run lint` to check the
code.

## Update the portfolio content

Edit [`src/data/portfolio.js`](./src/data/portfolio.js) to update:

- Your name, role, location, availability, email, introduction, and about copy
- Navigation links, skills, experience, and social profiles
- Project titles, descriptions, tags, and links

Each project also has a `visual` value (`finance`, `studio`, or `outdoors`) that
selects its decorative preview style. The mockup text is editable alongside the
rest of each project's data. Update the page metadata and title in `index.html`
when changing the portfolio owner's name or description.

The current profile and project entries are starter examples; replace them with
your own details and project links before publishing.
