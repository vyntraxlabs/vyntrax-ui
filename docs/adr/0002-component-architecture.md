# ADR 0002

# Component Architecture

## Status

Accepted

---

## Context

The library will contain dozens of reusable components.

Without a standard structure maintenance becomes difficult.

---

## Decision

Every component must follow this structure.

Component/

Component.tsx

Component.types.ts

Component.css

README.md

index.ts

Future

Component.test.tsx

---

## Benefits

Easy navigation.

Consistent organization.

Simpler maintenance.

Predictable structure.

---

## Rules

One component per folder.

Dedicated types file.

Dedicated CSS file.

Barrel exports.

Reusable props.

Accessibility support.