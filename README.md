# Dialogoi Web

> **Status:** Maintenance status to be confirmed
> The repository contains a small working web archive, but current deployment and content ownership should be confirmed.

Lightweight web archive for browsing and filtering dialogue entries. It presents a small catalog of discussions with tags, search, sorting, cards, and a simple institutional header.

## Summary

- [What it is](#what-it-is)
- [Goals](#goals)
- [Product areas](#product-areas)
- [Project map](#project-map)
- [Current state](#current-state)
- [Working notes](#working-notes)

## What it is

`dialogoi-web` is a Next.js interface for organizing dialogue-style content. The main screen lets visitors search discussions, sort them, filter by tags, and open cards that summarize each dialogue.

## Goals

- Provide a clean public archive for curated discussions.
- Make discovery easy through search, tags, and sorting.
- Keep the first version small and content-focused.
- Establish a reusable card/filter structure for future content expansion.

## Product areas

- Sticky header with Dialogoi branding.
- Dialog list with card-based summaries.
- Search input and sort control.
- Tag filters built from the available dialogue data.
- Empty state with filter reset.

## Project map

```text
dialogoi-web/
├── app/          # App Router page and layout
├── components/   # Header, filters, cards, summaries, and UI primitives
├── lib/          # Mock data, filtering utilities, and shared helpers
├── public/       # Branding assets
└── package.json
```

## Current state

The current app is a local/static prototype powered by mock dialogue data. It is ready for UI iteration, but a durable content source still needs to be defined.

## Working notes

- Move visible strings into a localization/content layer if the archive becomes multilingual.
- Replace mock data with a real content source before treating the app as production.
- Keep the filter utilities pure so they can be reused when data storage changes.
