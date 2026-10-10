# Portfolio Design Specification

## Overall Goal

Create a professional, modern, polished personal portfolio targeting approximately a 7.5–8/10 level of visual and technical quality.

The design must feel:

* Professional
* Modern
* Clean
* Confident
* Technical
* Personal
* Restrained
* Easy to navigate

It must not feel like:

* A generic AI template
* A developer dashboard
* An animation showcase
* A gaming website
* An over-designed landing page

---

# Page Structure

Use a single-page portfolio.

## Navigation

Logo / Name

Navigation links:

* About
* Skills
* Projects
* Labs
* Contact

Right-side action:

* CV

Navigation should remain simple and obvious.

---

# Hero

The hero is the first major visual section.

Structure:

Name / identity

Large headline

Short supporting statement

Primary CTA:
View Projects

Secondary CTA:
View CV

Social links may appear nearby.

The hero should communicate identity within a few seconds.

Do not occupy most of the screen with unnecessary decoration.

---

# About

Simple readable section.

Use a strong section heading and a comfortable reading width.

Do not create a giant wall of text.

Use supporting visual elements only when they improve hierarchy.

---

# Skills

Use grouped skill categories.

Do NOT create an enormous grid of technology logos.

Preferred organization:

IT & Systems
Cybersecurity
Software Development
Business Systems
Productivity

Skill presentation should prioritize readability and credibility over visual quantity.

---

# Featured Projects

This is one of the strongest sections of the portfolio.

Display three featured projects.

Preferred layout:

Desktop:
3-column or balanced responsive grid depending on content width.

Tablet:
2-column layout where appropriate.

Mobile:
1-column layout.

Each card should communicate:

* Project name
* Category
* Short description
* Technologies
* Project status/context
* Relevant links

Cards should have consistent visual structure.

Project content must remain readable without excessive scrolling.

---

# Experience / Training / Labs

Use a clean timeline or structured vertical layout.

Clearly distinguish:

Projects
Training
Labs

Do not make training appear to be employment.

---

# Contact

Keep the final conversion area simple.

Heading:
Let's Connect

Supporting paragraph

Contact action

Social links

CV action where appropriate

Do not create unnecessary form complexity.

No backend is required.

A direct email action is acceptable.

---

# Footer

Simple footer containing:

Name
Primary professional focus
Social links
CV

Keep it visually quiet.

---

# Typography

Use one primary typeface family.

Recommended style:

Modern sans-serif.

Prioritize:

* Strong heading hierarchy
* Readable body text
* Comfortable line height
* Limited font weights
* Consistent sizes

Avoid decorative typography.

---

# Color Direction

Use a neutral technical palette.

Recommended foundation:

* Deep dark background
* Slightly lighter card/surface backgrounds
* High-contrast primary text
* Muted secondary text
* One primary accent color

Recommended accent direction:

Cool blue / blue-cyan.

Do not use many accent colors.

Avoid excessive gradients.

Gradients may be used sparingly for visual depth but must never dominate the interface.

---

# Spacing

Use a consistent spacing system.

Prioritize:

* Generous section spacing
* Comfortable card padding
* Strong alignment
* Consistent container widths

Avoid both extreme whitespace and cramped layouts.

---

# Cards

Cards should use:

* Subtle border
* Small radius
* Controlled shadow
* Clear internal hierarchy

Avoid:

* Huge rounded corners
* Excessive glassmorphism
* Excessive shadows
* Decorative card noise

---

# Buttons

Buttons should be visually obvious.

Primary button:
strong contrast

Secondary button:
outlined / lower emphasis

Buttons should have subtle transitions.

Avoid exaggerated scaling.

---

# Animation Principles

Animation should make the interface feel polished, not busy.

Use:

### Page/section entrance

Subtle fade + vertical movement.

### Project cards

Small hover lift.

### Buttons

Background / border / color transition.

### Navigation

Subtle hover indicator.

### Scroll reveal

Use only for major sections or grouped elements.

---

# Animation Restrictions

Never use:

* Constant looping animations
* Large parallax effects
* Excessive floating objects
* Cursor-following effects
* Spinning decorative objects
* Text flying around the screen
* Large screen-wide motion
* Animation on every element

Respect:

`prefers-reduced-motion`

Animations must remain performant.

---

# Responsive Design

The portfolio must work at minimum across:

320px
375px
768px
1024px
1440px

Mobile is not an afterthought.

The mobile layout must maintain:

* Correct spacing
* Readable typography
* Functional navigation
* Accessible buttons
* No horizontal overflow
* Correct project-card stacking

---

# Accessibility

Use:

* Semantic HTML
* Correct heading order
* Keyboard navigation
* Visible focus states
* Meaningful alt text
* Sufficient contrast
* Reduced-motion support
* Accessible links and buttons

Do not rely only on visual styling to communicate meaning.

---

# Performance

Prefer:

* CSS transitions
* Small JavaScript utilities
* Optimized images
* Minimal dependencies
* Reusable components
* No unnecessary animation libraries

The site should load and feel fast.

---

# Technical Rules

Use:

React
Vite
JavaScript
JSX
CSS

Do not use TypeScript.

Do not add a backend.

Do not introduce a database.

Do not introduce authentication.

Do not introduce an admin dashboard.

Do not add libraries unless there is a clear benefit.

---

# Design Philosophy

The desired feeling is:

"Professional junior developer / IT / cybersecurity portfolio"

rather than:

"AI-generated portfolio demo."

Visual polish comes from:

* Typography
* Spacing
* Hierarchy
* Consistency
* Responsive behavior
* Subtle motion

not from visual gimmicks.

