# Portfolio Project Instructions

## Project

Personal portfolio for Kidus Admassu.

The project is a React + Vite portfolio using JavaScript/JSX.

---

# Mandatory Technology Decisions

Use:

* React
* Vite
* JavaScript
* JSX
* CSS

DO NOT USE:

* TypeScript
* TSX
* Backend services
* Node/Express backend
* Database
* Authentication
* Admin dashboard
* Server-side application

This is a frontend-only portfolio.

---

# Source of Truth

Before implementing content, read:

`CONTENT.md`

Before implementing visual design, read:

`DESIGN.md`

These files are authoritative.

Do not invent:

* employment
* companies
* clients
* users
* achievements
* certifications
* awards
* professional experience
* project outcomes
* metrics
* testimonials

Only use information explicitly supplied by the project files or the user.

---

# Code Quality

Use reusable React components.

Prefer:

* Clear component responsibilities
* Simple data-driven rendering
* Maintainable CSS
* Semantic HTML
* Descriptive naming

Avoid:

* Giant components
* Copy-pasted markup
* Unnecessary abstraction
* Unnecessary dependencies
* Unrelated refactors

---

# Design

Follow `DESIGN.md`.

The desired result is polished, modern, professional, and restrained.

Do not add visual effects simply because they are technically possible.

---

# Animation

Prefer CSS transitions and lightweight JavaScript behavior.

Animations must:

* Be subtle
* Have a clear UI purpose
* Be performant
* Respect `prefers-reduced-motion`

Do not introduce a heavy animation library unless there is a specific requirement that cannot reasonably be implemented otherwise.

---

# Responsive Behavior

Test and account for:

* 320px
* 375px
* 768px
* 1024px
* 1440px

Never knowingly introduce horizontal scrolling.

---

# Accessibility

Use:

* Semantic HTML
* Logical heading hierarchy
* Keyboard-accessible controls
* Visible focus states
* Accessible link names
* Appropriate alt text
* Reduced-motion handling

---

# File Modification Rules

When given a task:

1. Inspect the relevant existing files.
2. Modify only what is necessary.
3. Do not rewrite unrelated sections.
4. Preserve working functionality.
5. Validate the result after significant changes.

Do not rebuild the whole application when a targeted modification is sufficient.

---

# Validation

After significant implementation work:

* Run lint if configured.
* Run the production build.
* Check for console errors.
* Check responsive behavior where possible.

Fix issues caused by your changes.

---

# Dependency Policy

Before installing a new dependency, determine whether the requirement can reasonably be implemented with:

* React
* JavaScript
* CSS
* existing project dependencies

Keep the dependency footprint small.

---

# Content Policy

Never fabricate portfolio information.

When content is unclear, use existing source material rather than inventing claims.

---

# Deployment

The project will be stored in GitHub and deployed through Vercel.

The project must remain suitable for static deployment.

Do not introduce backend assumptions.

