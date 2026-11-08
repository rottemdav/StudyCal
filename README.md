# StudyCal

A local, Hebrew, right-to-left study planner. Open `index.html` in a browser to use it. No installation or server is required.

## Features

- Weekly study calendar with lectures, tutorials, labs, all-day events, and exams.
- Recurring events with sequential numbering, course colors, notes, and resource links.
- Assignment columns by semester course, due-date countdowns, completion filters, and quick-view drawers.
- Exam preparation with an independent course list, solved exams, question notes, and confidence tracking by topic.
- Browser-local saving and JSON backup export/import.

## Getting started

1. Open `index.html`.
2. Add courses through the course-management button.
3. Configure semester dates and holidays from the calendar toolbar.
4. Export backups from the sidebar when needed.

The source starts with empty course, event, assignment, and exam-preparation lists. Built-in semester dates and holiday settings are editable template defaults. Records are saved in browser local storage under `weeknote-study-calendar-clean-v1`. The clean copy uses separate storage from the original personal planner.

Local file links are subject to browser restrictions. Use the copy-path button and open the path in File Explorer when direct opening is blocked.

## Validation

Run `npm test`, or `node tests/verify.cjs`, from this directory. The dependency-free suite checks application behavior with a simulated DOM. It does not verify visual layout in a browser.

## Repository contents

- `index.html` contains the complete application.
- `tests/verify.cjs` contains behavior checks.
- `package.json` provides the test command.

Browser records and exported personal backups are not part of this repository.

## Memorizer

The `memorizer/` folder contains the source and assets of the theorem-practice and concept-map app hosted at [Memorizer](https://theorem-garden-rottem.frozengoldfinch.chatgpt.site/). Open `memorizer/dist/index.html` locally, or serve `memorizer/dist/` with a static server. Its Hebrew documentation is in `memorizer/README.md`.

This snapshot matches published Site version 8 and upstream commit `f6929eaaf6cd9367c92904f6f59dfdbcbdc62351`. The source Site identity and hosting configuration are preserved in `memorizer/.openai/hosting.json`. Run Site publishing commands from the `memorizer/` directory.

The app, bundled learning content, KaTeX assets, and upstream checks are included. Browser-saved progress, exported backups, and authentication credentials are excluded. The original PDF documents referenced by the learning content are not part of the website source.

Run `npm run test:memorizer` with Node.js 22 or newer to validate the imported app. `npm test` runs the StudyCal checks.

This is a source snapshot. Changes made on the hosted Site and changes pushed to GitHub do not synchronize automatically.
