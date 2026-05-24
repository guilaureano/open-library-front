# Performance

## Overview

This document explains the performance philosophy and optimization strategies used in Open Library Front.

Performance is treated as an architectural concern rather than a final-stage optimization task.

The project prioritizes:

- predictable rendering
- efficient loading
- resilient UX
- mobile-aware performance
- maintainable optimization patterns

---

## Performance Philosophy

Performance is not limited to Lighthouse scores.

While metrics are important, the project prioritizes real user experience.

Optimization decisions aim to improve:

- perceived speed
- responsiveness
- rendering predictability
- navigation fluidity
- loading resilience

The goal is sustainable performance rather than isolated benchmark improvements.

---

## Performance Goals

The project was designed around several performance objectives.

Goals include:

- small initial payload
- route-level code splitting
- minimal blocking work
- resilient asset loading
- optimized runtime rendering
- graceful degradation

These goals influenced architectural decisions throughout the application.

---

## Route-Level Optimization

Routes are lazy loaded.

Example:

```tsx
lazy(() => import(...))
```

This strategy delays non-essential code loading.

Benefits include:

- smaller entry bundle
- faster startup
- improved mobile performance
- reduced parse and execution cost

---

## Suspense Strategy

React Suspense coordinates route loading.

Example:

```tsx
<Suspense fallback={<AppLoader />}>
```

The project uses a neutral loader during route transitions.

This avoids visual mismatch between unrelated screens.

---

## Avoiding Skeleton Flicker

A previous implementation rendered a Books-specific skeleton globally.

This produced brief flashes of unrelated UI during navigation.

The strategy was replaced with:

```txt
AppLoader
```

Benefits:

- consistent route loading
- cleaner transitions
- improved perceived performance

Feature skeletons remain localized.

---

## Asset Optimization

The project minimizes unnecessary assets.

Optimizations include:

- favicon cleanup
- removal of unused platform assets
- reduced static payload
- simplified public directory

Only assets with practical value are retained.

---

## Self-Hosted Fonts

Fonts are self-hosted.

Families:

- Inter
- Fraunces

Using WOFF2 with:

```css
font-display: swap;
```

Benefits include:

- reduced third-party dependency
- predictable caching
- improved privacy
- better control over loading

---

## Why Self-Hosted Fonts

External font CDNs introduce:

- additional DNS lookups
- connection overhead
- third-party dependency
- potential layout instability

Self-hosted fonts improve ownership and loading predictability.

---

## Image Strategy

Book covers represent a large portion of runtime assets.

The application uses:

- responsive cover sizing
- dynamic cover URLs
- defensive fallback handling

Cover URLs are generated through:

```txt
buildCoversUrl()
```

This avoids oversized image loading.

---

## Defensive Image Fallback

Open Library Covers API may intermittently return:

```txt
502 Bad Gateway
```

The project treats this as an external dependency limitation.

Images implement defensive fallback behavior.

Benefits:

- broken image prevention
- graceful degradation
- resilient UI behavior

The application remains functional even when covers fail.

---

## Rendering Strategy

Performance is also influenced by rendering decisions.

The project avoids performing business resolution directly inside UI components.

Instead:

- data normalization occurs earlier
- locale logic stays outside render
- components receive stable inputs

Example:

```txt
resolveBookLocale()
```

This approach reduces:

- render complexity
- conditional UI logic
- runtime mutation

---

## Stable Rendering

Components are designed to receive render-ready data.

Example:

Instead of choosing between:

- docs title
- edition title
- docs cover
- edition cover

inside the component tree, this logic is resolved beforehand.

Benefits include:

- stable rendering
- fewer rerenders
- predictable UI behavior

---

## React Query Performance

TanStack Query improves async performance.

Features used include:

- request deduplication
- cache ownership
- loading coordination
- async lifecycle management

This reduces:

- duplicated requests
- manual loading orchestration
- inconsistent fetch behavior

---

## Network Resilience

External APIs may fail.

The application uses:

- normalized errors
- resilient request handling
- defensive UI states

The UI remains functional under degraded conditions.

---

## Lighthouse Results

Current Lighthouse measurements:

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

---

## Lighthouse Caveat

Best Practices score may occasionally be affected by external API instability.

Observed examples include:

```txt
covers.openlibrary.org → 502
```

These errors originate outside the application.

The project handles them defensively whenever possible.

---

## Tradeoffs

Performance decisions involve tradeoffs.

The project intentionally chose:

- client-side rendering
- no SSR
- no server cache layer
- no PWA requirements

Benefits:

- simpler deployment
- reduced complexity
- easier iteration

Tradeoffs:

- network dependency
- client-side fetch cost
- no server pre-rendering

These decisions align with the project's scope and educational goals.

---

## Future Exploration

Potential future improvements include:

- route prefetching
- cache persistence
- request retry policies
- SSR experimentation
- edge caching exploration
- offline/PWA investigation

Performance remains an evolving concern rather than a finished task.
