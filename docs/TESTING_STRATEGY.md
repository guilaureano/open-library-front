# Testing Strategy

This document explains how testing is approached in the project and why the testing strategy is intentionally layered.

The goal is not merely to increase coverage numbers, but to build confidence, improve maintainability, and validate behavior at the correct level of abstraction.

Testing is treated as an engineering concern rather than a final development step.

---

# Testing Philosophy

The testing strategy follows a few guiding principles:

- test behavior rather than implementation details
- validate logic at the correct abstraction level
- prefer deterministic and reproducible tests
- isolate external instability
- keep tests maintainable and meaningful

The objective is confidence.

Coverage is treated as a signal, not as the final goal.

---

# Testing Stack

The project uses a modern React testing stack.

Core tools:

- Vitest
- Testing Library
- MSW (Mock Service Worker)
- JSDOM

Each tool addresses a specific concern.

---

## Vitest

Used as the test runner.

Responsibilities:

- execution
- assertions
- mocking utilities
- coverage generation
- fast feedback loop

Vitest integrates naturally with Vite and supports fast local iteration.

---

## Testing Library

Used for React interaction testing.

Philosophy:

> test the application the way users interact with it

Responsibilities:

- rendering
- querying
- interaction simulation
- accessibility-oriented assertions

This encourages behavior-focused tests rather than component internals.

---

## MSW

Used to simulate network behavior.

Responsibilities:

- intercept HTTP requests
- mock responses
- validate request contracts
- remove dependency on real APIs

MSW plays a central role in the testing architecture.

More details are described later in this document.

---

## JSDOM

Provides a browser-like environment.

Responsibilities:

- DOM APIs
- rendering support
- interaction simulation

This enables React components and hooks to be tested in Node environments.

---

# Layered Testing Strategy

The project uses a layered testing approach.

Different concerns are tested at different levels.

High-level view:

```txt id="yjlwmr"
Unit
↓
Hooks
↓
API
↓
UI behavior
```

Each layer validates a different type of risk.

This reduces duplicated testing and keeps the suite maintainable.

---

# Unit Tests

Unit tests focus on deterministic and isolated logic.

Characteristics:

- fast
- pure
- low setup cost
- framework-independent when possible

Typical targets:

- utilities
- query builders
- adapters
- mapping logic
- normalization
- helpers

Examples:

```txt id="0zwt7m"
buildSearchQuery
buildCoversUrl
locale mapping
error normalization
resolveBook
```

Unit tests validate rules and transformations.

They should avoid:

- DOM rendering
- network calls
- unrelated infrastructure

---

# Adapter Tests

Adapters receive dedicated validation.

This is intentional.

External APIs often expose:

- inconsistent payloads
- optional fields
- incomplete data
- transport-oriented structures

The UI should not inherit this instability.

Adapters are therefore tested independently.

Typical validations:

- fallback behavior
- locale resolution
- normalized shapes
- missing field handling

Example:

```txt id="k0m3wt"
raw response
↓
adapter
↓
resolved model
```

This ensures UI-facing models remain stable.

---

# Hook Tests

Hooks encapsulate behavior and state coordination.

They are tested independently from full page rendering.

Typical concerns:

- async state
- React Query behavior
- loading state
- error state
- derived values
- feature coordination

Examples:

```txt id="y8qf5h"
useBooks
```

Hook tests validate behavior rather than UI appearance.

Typical scenarios:

- query execution
- state transitions
- pagination behavior
- debounce logic
- URL synchronization

This keeps feature behavior reliable and isolated.

---

# API Tests

API requests are tested separately from components.

The objective is validating request behavior and network integration.

Typical validations:

- request construction
- parameters
- language mapping
- response handling
- error handling

Example:

```txt id="tm6e3z"
searchBooks
```

This layer validates communication contracts.

It avoids coupling network behavior to rendering tests.

---

# Why MSW Instead of Fetch Mocking

The project intentionally uses MSW rather than mocking fetch directly.

Common fetch mocking:

```txt id="8thv3k"
mock(fetch)
```

While possible, this approach often introduces problems:

- implementation coupling
- unrealistic behavior
- duplicated setup
- fragile tests

MSW instead intercepts requests at the network boundary.

Flow:

```txt id="tr5d1m"
real request
↓
MSW interception
↓
mocked response
```

This creates a more realistic testing environment.

Benefits:

- request validation
- real request lifecycle
- cleaner tests
- reusable handlers
- reduced mocking complexity

The application behaves as if it were talking to a real API.

Only the server is simulated.

---

# Contract-Oriented API Testing

MSW allows API tests to validate contracts.

Example:

Instead of testing:

```txt id="0yyfqt"
was fetch called?
```

tests validate:

```txt id="2g6cgc"
was the correct request produced?
```

Examples:

- language parameter
- search query
- pagination
- request shape

This aligns testing with user-facing behavior.

The request itself becomes part of the validated contract.

---

# UI Behavior Testing

UI testing focuses on behavior rather than internal implementation.

Typical concerns:

- rendering
- interaction
- loading states
- accessibility
- conditional UI

Tests avoid:

- internal React state
- implementation details
- private component behavior

Preferred mindset:

```txt id="e1f42z"
what does the user observe?
```

rather than:

```txt id="50nzt2"
how is this implemented?
```

This makes refactoring safer.

Implementation may evolve while behavior remains protected.

---

# Reliability and Determinism

A major objective of the strategy is deterministic testing.

Tests should produce stable results regardless of:

- network conditions
- external API availability
- timing instability

This is particularly important because Open Library and Covers endpoints may intermittently fail.

Examples:

```txt id="j5k5d2"
502 responses
network instability
missing covers
```

The suite should remain stable even when external systems are not.

---

# Coverage Strategy

Coverage is monitored using:

```txt id="56l0o6"
Vitest coverage
```

The project defines minimum thresholds.

Current targets:

- lines
- functions
- statements
- branches

Coverage helps identify untested areas.

However:

coverage does not automatically equal quality.

High coverage with weak assertions still provides low confidence.

The emphasis remains on meaningful validation.

---

# Testing Tradeoffs

No testing strategy is free from tradeoffs.

This approach introduces:

- additional setup
- MSW configuration
- layered test organization
- slightly higher initial complexity

However, the tradeoff favors:

- confidence
- maintainability
- realistic behavior
- safer refactoring
- reduced regression risk

The project prioritizes reliability over minimal setup.

---

# Relationship With Architecture

The testing strategy is closely connected to the project architecture.

Layer separation enables:

- isolated testing
- focused assertions
- reusable setup
- independent validation

Architecture and testing reinforce each other.

Examples:

```txt id="rl0xig"
API layer
↓
API tests

Adapters
↓
adapter tests

Hooks
↓
hook tests
```

This relationship is intentional.

Testability is treated as an architectural property.

---

# Continuous Validation

Testing is integrated into the development workflow.

Validation includes:

- lint
- type checking
- tests
- CI execution

GitHub Actions validates:

- pushes
- pull requests
- production safety checks

This helps ensure changes remain stable before deployment.

---

# Related Documentation

Additional topics are documented separately.

Related documents:

- ARCHITECTURE.md
- API_LAYER.md
- STATE_AND_ROUTING.md
- PERFORMANCE.md
- I18N.md
