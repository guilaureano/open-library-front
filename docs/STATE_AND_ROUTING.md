# State and Routing

## Overview

This document explains how state, navigation, and URL synchronization are handled inside Open Library Front.

The project intentionally separates concerns between:

- server state
- UI state
- navigation state
- derived state

This separation improves predictability, maintainability, and user experience.

---

## Philosophy

The project avoids treating React component state as the single source of truth.

Instead, state ownership is distributed according to responsibility.

General principles:

- server data belongs to React Query
- navigation belongs to React Router
- shareable UI state belongs to the URL
- local interaction state stays inside components

This approach reduces duplication and keeps application behavior predictable.

---

## Routing Architecture

Routing is managed using React Router 7.

Routes are defined inside the application layer.

Example structure:

```txt
app/router
```

Responsibilities include:

- route registration
- lazy loading
- page composition
- navigation ownership

---

## Invalid Route Handling

The application includes explicit invalid-route handling through a dedicated 404 page.

This ensures:

- predictable navigation behavior
- graceful recovery from broken or outdated URLs
- consistent user experience
- no application crashes caused by unknown routes

Routing resilience is treated as part of the overall navigation architecture.

Rather than allowing unmatched routes to fail silently or produce unstable rendering behavior, the router resolves unknown paths through a dedicated fallback experience.

This keeps navigation behavior explicit and production-safe.

---

## Lazy Loaded Routes

Pages are lazy loaded.

Example:

```tsx
const HomePage = lazy(() => import('@/features/home/pages/HomePage'));
```

This improves performance by:

- reducing initial bundle size
- delaying non-critical code
- improving startup performance

React Suspense is used to coordinate loading behavior.

---

## Global Route Loading

A global loader is used during route resolution.

Example:

```tsx
<Suspense fallback={<AppLoader />}>
  <RouterProvider router={router} />
</Suspense>
```

---

## Why AppLoader Exists

An earlier implementation used a feature-specific skeleton globally.

Example:

```tsx
<BookSkeleton />
```

This created a visual mismatch.

The Books skeleton briefly appeared while unrelated routes loaded, producing UI flicker and misleading loading feedback.

The project now uses a neutral global loader.

Benefits:

- route-independent loading
- consistent UX
- reduced visual confusion
- better perceived performance

Feature-specific skeletons remain localized.

---

## URL as State

The application intentionally stores search state inside the URL.

Example:

```txt
/books?search=harry&page=2
```

This makes state:

- shareable
- bookmarkable
- reload-safe
- navigation-friendly

Search state survives:

- refreshes
- browser navigation
- copied links
- direct access

---

## Search State Ownership

Books search uses URL-driven state.

Typical values include:

- search term
- page
- locale-aware search behavior

The URL acts as the source of truth.

Components derive behavior from URL parameters instead of maintaining duplicated internal state.

Benefits include:

- no synchronization bugs
- predictable navigation
- simpler logic
- cleaner state ownership

---

## React Router Responsibilities

React Router owns:

- route matching
- navigation
- URL params
- search params
- history integration

The project avoids duplicating these concerns inside components.

---

## Server State

Server state is handled through TanStack Query.

Server state includes:

- API responses
- async loading state
- fetch lifecycle
- request caching

Server state is intentionally separated from component state.

This avoids:

- duplicated requests
- loading inconsistencies
- manual fetch orchestration

---

## Why React Query

React Query was chosen because server data behaves differently from local state.

Characteristics include:

- asynchronous lifecycle
- stale data
- retry behavior
- caching needs
- request deduplication

React Query provides built-in solutions for these concerns.

---

## Query Ownership

Feature hooks own query orchestration.

Example:

```txt
features/books/hooks
```

Responsibilities include:

- query execution
- parameter composition
- loading state exposure
- error propagation

UI components remain presentation-focused.

---

## Derived State

The project prefers derived state over duplicated state.

Example:

Instead of storing:

- locale-specific title
- locale-specific cover
- raw API data

The application derives render-ready values using resolver functions.

Example:

```txt
resolveBookLocale()
```

Benefits:

- fewer sync issues
- predictable rendering
- reduced mutation
- simpler components

---

## Locale and Routing

Locale affects both:

- UI translation
- data resolution

The application avoids live mutation of already-resolved entities.

Book data is normalized before rendering.

This prevents:

- UI flicker
- cover switching
- title instability

Language changes trigger fresh data flow rather than runtime mutation.

---

## State Ownership Summary

State ownership follows this model:

| Concern           | Owner        |
| ----------------- | ------------ |
| Navigation        | React Router |
| Search params     | URL          |
| Server data       | React Query  |
| Local interaction | Components   |
| Derived UI values | Resolvers    |

This ownership model keeps responsibilities explicit and predictable.

---

## Tradeoffs

This architecture intentionally favors explicit ownership.

Benefits:

- predictable behavior
- scalable routing
- shareable state
- cleaner components

Tradeoffs include:

- additional abstraction
- more coordination between layers
- learning curve around URL-driven state

These tradeoffs were considered acceptable in exchange for maintainability and production-oriented behavior.

---

## Future Exploration

Potential future improvements include:

- route-level prefetching
- search param schema validation
- persistent query strategies
- SSR-aware routing exploration
- deeper cache coordination
