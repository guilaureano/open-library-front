![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-6-blue)
![Tests](https://img.shields.io/badge/tests-Vitest-green)
![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)
![License](https://img.shields.io/badge/license-Portfolio-lightgrey)

# Open Library Front

A modern React application built with React, Vite, and TypeScript that consumes the Open Library API to search and explore books.

This project was designed with a strong focus on scalable frontend architecture, performance, accessibility, testing strategy, and maintainable React patterns.

---

## Why This Project Exists

Open Library Front was created as a hands-on engineering project focused on modern frontend architecture and production-oriented practices.

Rather than building a simple API consumer, the goal was to explore how a real-world React application can be structured around scalability, maintainability, accessibility, testing, and performance.

The project serves both as a technical playground and as a public portfolio artifact, showcasing architectural decisions, engineering tradeoffs, and production-oriented frontend practices.

---

## Demo

- Production: [https://open-library-front-beta.vercel.app](https://open-library-front-beta.vercel.app)
- Search example: [https://open-library-front-beta.vercel.app/books?search=Harry](https://open-library-front-beta.vercel.app/books?search=Harry)

---

## Preview

#### Book feature

> Visual previews will be documented under `/docs/images`.

---

## Features

- Book search powered by Open Library API
- Client-side internationalization with locale-aware search behavior (English, Portuguese, and Spanish)
- Language-aware search results
- URL-based search and pagination state
- Book details modal
- Responsive interface
- Defensive image fallback handling
- Error boundaries and resilient API handling
- Loading and empty states
- Lazy-loaded routes and optimized rendering
- Friendly 404 experience and route recovery

---

## Tech Stack

### Core

- React 19
- TypeScript
- Vite

### Routing & State

- React Router 7
- TanStack Query

### Styling & UI

- TailwindCSS v4
- Self-hosted fonts (Inter + Fraunces)

### Internationalization

- i18next
- i18next-browser-languagedetector

### Testing

- Vitest
- Testing Library
- MSW (Mock Service Worker)

### Code Quality

- ESLint
- Prettier
- Husky
- lint-staged

### Commit Convention

This project follows the Conventional Commits specification.

Examples:

```txt
feat: add books pagination
fix: handle image fallback errors
refactor: simplify search params hook
chore: improve project configuration
```

Commit messages are validated using Commitlint and Husky.

#### Pre-commit validation includes:

- ESLint
- Prettier
- TypeScript type checking

#### Commit-msg:

- Conventional Commit validation via Commitlint

### CI/CD

- GitHub Actions
- Vercel

---

## Architecture Overview

The project follows a feature-oriented architecture focused on separation of concerns and maintainability.

```txt
src
├── app
├── features
│   └── books
├── shared
├── test
└── main.tsx
```

### Feature Layers (`features`)

Domain-specific business logic.

Example:

```txt
features/books
```

Contains:

- components
- hooks
- services
- api
- adapters
- lib
- types

### Shared Layer (`shared`)

Reusable and framework-level abstractions.

Examples:

- UI primitives
- HTTP client
- error handling
- i18n utilities
- configuration
- loaders
- shared hooks

### App Layer (`app`)

Application composition and routing concerns.

---

## Performance & Quality

This project includes several engineering practices intended to improve reliability and user experience.

### Performance

- Lighthouse-oriented optimization
- Route-level lazy loading
- Suspense-based loading states
- Self-hosted fonts
- Optimized image handling
- Responsive cover loading
- Defensive image fallback strategy

### Accessibility

- Semantic HTML
- Keyboard-friendly interactions
- Accessible dialog behavior
- Lighthouse accessibility validation

### Reliability

- Error Boundary support
- Typed API layer
- Centralized error normalization
- Network request resilience
- Friendly invalid-route recovery (404 handling)

---

## Lighthouse

Current Lighthouse results:

### Home

| Device  | Performance | Accessibility | Best Practices | SEO |
| ------- | ----------: | ------------: | -------------: | --: |
| Desktop |         100 |           100 |            100 | 100 |
| Mobile  |          98 |           100 |            100 | 100 |

### Books

| Device  | Performance | Accessibility | Best Practices | SEO |
| ------- | ----------: | ------------: | -------------: | --: |
| Desktop |          99 |           100 |             96 | 100 |
| Mobile  |          91 |           100 |             96 | 100 |

> Best Practices score can be affected by intermittent `502` responses returned by the Open Library Covers API.

---

## Running Locally

### 1. Clone the repository

```bash
git clone https://github.com/guilaureano/open-library-front
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Application will be available at:

```txt
http://localhost:5173
```

---

## Environment

Create a `.env` file if needed.

Example:

```env
VITE_API_URL=https://openlibrary.org
VITE_COVERS_URL=https://covers.openlibrary.org/b/id/
VITE_LINKEDIN=https://www.linkedin.com/in/guilaureano/
VITE_GITHUB=https://github.com/guilaureano
```

---

## Available Scripts

### Development

```bash
npm run dev
```

Runs the Vite development server.

### Build

```bash
npm run build
```

Creates a production build.

### Preview

```bash
npm run preview
```

Serves the production build locally.

### Lint

```bash
npm run lint
```

Runs ESLint.

### Tests

```bash
npm run test
```

Runs tests in watch mode.

### Coverage

```bash
npm run test:coverage
```

Generates test coverage reports.

### Type Check

```bash
npm run typecheck
```

Runs TypeScript type validation without emitting files.

### Format

```bash
npm run format
```

Formats project files using Prettier.

---

## Testing Strategy

The project uses a layered testing strategy.

### Unit Tests

Focused on:

- utilities
- adapters
- query builders
- business logic

Examples:

- `buildSearchQuery`
- `buildCoversUrl`
- locale mapping
- error normalization

### Hook Tests

Focused on:

- async state
- React Query integration
- feature hooks

Example:

- `useBooks`

### API Tests

API tests simulate real HTTP flows using MSW instead of mocking fetch directly.

This allows:

- request validation
- response mocking
- no dependency on real network calls
- stable and reproducible tests

---

## CI

GitHub Actions validates every push and pull request.

Pipeline includes:

- dependency installation
- lint
- type checking
- tests
- production build

This helps ensure that changes remain production-safe before deployment.

---

## Documentation

Additional technical documentation is being prepared under `/docs`.

Planned topics include:

- Architecture decisions
- State and URL management
- API layer design
- Testing strategy
- Performance decisions
- Internationalization
- Folder organization
- Engineering tradeoffs

---

## Future Improvements

Potential future enhancements:

- Advanced search filters
- Search result caching strategies
- Improved ranking and relevance handling
- Expanded technical documentation
- API resilience and retry strategies
- Optional offline experimentation

---

## License

This repository is intended for study, reference, and portfolio purposes.
