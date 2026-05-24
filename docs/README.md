# Technical Documentation

This directory contains the technical documentation for Open Library Front.

These documents complement the main project README and provide deeper explanations about architecture, engineering decisions, implementation details, and tradeoffs made throughout the project.

The goal is not only to document _what_ was built, but also _why_ certain decisions were made.

---

## Documentation Philosophy

This project follows a documentation approach focused on:

- clarity
- maintainability
- engineering reasoning
- production-oriented practices
- explicit tradeoff discussion

Rather than documenting implementation details line-by-line, these documents aim to explain the system at an architectural and decision-making level.

---

## Recommended Reading Order

For the best understanding of the project, the recommended reading order is:

### 1. Architecture

High-level system organization and project structure.

File:

```txt
ARCHITECTURE.md
```

Covers:

- feature-oriented architecture
- application layers
- separation of concerns
- dependency boundaries
- folder organization
- design rationale

---

### 2. API Layer

How external communication is modeled and protected.

File:

```txt
API_LAYER.md
```

Covers:

- API client abstraction
- service layer design
- adapters and normalization
- error handling
- defensive networking
- request responsibilities

---

### 3. Testing Strategy

Testing philosophy and validation layers.

File:

```txt
TESTING_STRATEGY.md
```

Covers:

- testing pyramid decisions
- unit testing
- hook testing
- API mocking with MSW
- reliability goals
- coverage philosophy

---

### 4. State and Routing

How application state and navigation are modeled.

File:

```txt
STATE_AND_ROUTING.md
```

Covers:

- URL-driven state
- Router design
- search params
- TanStack Query integration
- client state boundaries
- routing decisions

---

### 5. Performance

Performance-oriented decisions and Lighthouse strategy.

File:

```txt
PERFORMANCE.md
```

Covers:

- lazy loading
- bundle strategy
- image handling
- font loading
- Lighthouse optimization
- runtime performance considerations

---

## Planned Documentation

Additional documents may be added over time.

Potential topics include:

### Internationalization

```txt
I18N.md
```

Topics:

- locale strategy
- language detection
- translation architecture
- Open Library language handling
- content normalization

### Engineering Decisions / ADRs

```txt
decisions/
```

Potential future Architecture Decision Records (ADRs):

- why feature-oriented architecture was adopted
- why URL-driven state was preferred
- why React Query was chosen
- performance and Lighthouse tradeoffs

### Contribution Guide

```txt
CONTRIBUTING.md
```

Topics:

- local setup
- commit conventions
- code quality workflow
- pull request expectations

---

## Documentation Status

| Document             | Status  |
| -------------------- | ------- |
| ARCHITECTURE.md      | ✅      |
| API_LAYER.md         | ✅      |
| TESTING_STRATEGY.md  | ✅      |
| STATE_AND_ROUTING.md | ✅      |
| PERFORMANCE.md       | ✅      |
| I18N.md              | Planned |

---

## Maintenance

Documentation is treated as part of the project itself.

Whenever significant architectural or engineering changes occur, related documents should be updated to keep technical context accurate and useful.
