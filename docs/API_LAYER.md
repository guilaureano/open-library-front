# API Layer

This document explains how the application communicates with external services and why the API layer is intentionally separated from UI and rendering concerns.

The goal is not simply to fetch data, but to create a predictable, testable, and maintainable boundary between the application and external systems.

---

# Design Goals

The API layer was designed around a few principles:

- separation of concerns
- typed network interaction
- predictable request flow
- isolated normalization
- testability
- resilience to external API inconsistencies

External APIs are treated as unstable boundaries rather than trusted application state.

This architecture helps keep the UI independent from backend response formats and networking details.

---

# High-Level Request Flow

A typical request follows this lifecycle:

```txt
UI
↓
Hook
↓
Service
↓
API Layer
↓
Open Library API
↓
Adapter
↓
UI-ready model
↓
Component rendering
```

Each step has a dedicated responsibility.

This separation avoids coupling components directly to network logic.

---

# Why Not Fetch Inside Components

A common approach is:

```txt
Component
↓
fetch()
↓
render
```

While simple at first, this approach often creates problems as applications grow:

- duplicated request logic
- harder testing
- tightly coupled UI
- inconsistent error handling
- scattered normalization
- low reuse

This project avoids network calls inside components.

Components are intentionally limited to rendering and interaction responsibilities.

---

# Layer Responsibilities

The API flow is divided into distinct layers.

---

## Components

Components render UI.

Responsibilities:

- presentation
- interaction
- accessibility
- composition

Components should not know:

- request URLs
- query parameters
- response formats
- normalization rules
- API-specific behavior

Example:

```txt
BookCard
BookList
BookModal
```

Components receive already-resolved data.

---

## Hooks

Hooks coordinate feature behavior.

Responsibilities:

- async lifecycle
- React Query integration
- URL synchronization
- loading and error state
- feature orchestration

Examples:

```txt
useBooks
useBookSearchParams
```

Hooks connect UI with the service layer.

They coordinate behavior but avoid raw networking logic.

---

## Services

Services orchestrate domain-level operations.

Responsibilities:

- coordinating requests
- composing feature logic
- connecting API and adapters
- enforcing feature behavior

Example:

```txt
searchBooks
```

Services sit between UI and infrastructure.

They understand the feature but remain independent from rendering.

Typical flow:

```txt
Service
↓
API request
↓
Adapter
↓
resolved model
```

This keeps business logic centralized.

---

## API Layer

The API layer handles communication with external systems.

Responsibilities:

- request construction
- query building
- network interaction
- typed responses
- transport concerns

Examples:

```txt
buildSearchQuery
Open Library requests
HTTP utilities
```

The API layer understands the external contract.

It should not contain:

- UI logic
- component state
- presentation concerns

---

## Adapters

Adapters transform external responses into application-safe models.

External APIs frequently expose:

- verbose payloads
- optional fields
- inconsistent structures
- transport-oriented data

The UI should not carry this complexity.

Adapters isolate those concerns.

Responsibilities:

- response normalization
- locale-aware resolution
- fallback logic
- UI-safe shapes

Examples:

```txt
resolveBook
book mappers
```

This allows components to consume stable and predictable models.

---

# Request Construction

The project separates query generation from network execution.

Example:

```txt
buildSearchQuery
```

Instead of building URLs inline across the codebase, query construction is centralized.

Benefits:

- reuse
- consistency
- easier testing
- isolated parameter logic

This approach also improves readability and maintainability.

---

# Typed API Contracts

API communication is strongly typed.

Responses are represented using TypeScript types.

Benefits:

- compile-time safety
- autocomplete
- safer refactoring
- clearer contracts

Example:

```txt
Open Library response
↓
typed shape
↓
adapter normalization
↓
application model
```

Typing helps reduce accidental runtime assumptions.

---

# Response Normalization

External APIs should not dictate internal application structure.

Open Library responses may contain:

- missing fields
- locale variations
- multiple editions
- inconsistent cover availability

Normalization exists to absorb this complexity.

Example:

```txt
raw API response
↓
adapter
↓
resolved title
resolved cover
fallback-safe data
```

The application works with resolved data instead of raw payloads.

This improves both reliability and developer experience.

---

# Locale-Aware Resolution

Internationalization affects API behavior.

The selected locale influences:

- request language
- edition resolution
- displayed title
- selected cover

This logic is intentionally resolved before rendering.

Example:

```txt
locale
↓
language mapping
↓
API request
↓
edition resolution
↓
resolved model
```

This avoids locale logic leaking into UI components.

Instead of rendering conditional language logic inside components, data arrives already resolved.

---

# Error Handling

The API layer treats failures as expected scenarios.

External services may fail due to:

- network instability
- malformed responses
- server issues
- unavailable resources

The project uses centralized error normalization.

Responsibilities:

- consistent error shapes
- predictable UI handling
- safer failure recovery

Examples:

- API normalization
- defensive handling
- resilient rendering

This avoids scattered error parsing throughout the application.

---

# Defensive Media Handling

The Open Library Covers API may intermittently return errors such as:

```txt
502 Bad Gateway
```

The application therefore uses defensive image handling.

Strategy:

```txt
cover request
↓
failure
↓
fallback image
↓
safe rendering
```

This prevents broken UI states caused by external instability.

External failures should degrade gracefully.

---

# Testability

One major reason for this architecture is improved testing.

Because request construction, services, and adapters are separated, each layer can be validated independently.

Examples:

## Query tests

Validate:

- parameters
- URL construction
- language mapping

---

## API tests

Validate:

- request behavior
- response handling
- integration flow

Using:

```txt
MSW
```

---

## Adapter tests

Validate:

- normalization
- fallback behavior
- locale resolution

This makes testing more reliable and avoids coupling tests to UI rendering.

---

# Architectural Tradeoffs

This architecture introduces more layers than a minimal application might require.

Tradeoffs include:

- additional abstraction
- more files
- slightly higher setup cost

However, the benefits favor:

- scalability
- maintainability
- testability
- explicit ownership
- cleaner UI components

The project intentionally prioritizes long-term clarity over minimal implementation size.

---

# Related Documentation

Additional topics are documented separately.

Related documents:

- ARCHITECTURE.md
- TESTING_STRATEGY.md
- STATE_AND_ROUTING.md
- I18N.md
- PERFORMANCE.md
