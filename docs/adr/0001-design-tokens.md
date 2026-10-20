# ADR 0001

# Use Design Tokens

## Status

Accepted

---

## Context

The project needs visual consistency.

Hardcoded values become difficult to maintain as the component library grows.

---

## Decision

All visual values must come from Design Tokens.

Examples:

Colors

Spacing

Typography

Radius

Shadow

Transitions

---

## Consequences

Positive

Single source of truth.

Easy theme creation.

Consistent UI.

Better maintenance.

Negative

Initial setup requires more work.

---

## Alternatives Considered

Hardcoded CSS values.

CSS variables without organization.

Tailwind utility only.

Both were rejected.