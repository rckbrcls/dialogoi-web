# Dialogoi Web

> **Status:** To be confirmed
> The repository contains a small working web archive, but current deployment and content ownership should be confirmed.

Lightweight web archive for browsing and filtering dialogue entries. It presents a small catalog of discussions with tags, search, sorting, cards, and a simple institutional header.

## Summary

- Small Next.js archive for browsing, searching, sorting, and filtering dialogue entries.
- Solves public discovery for curated dialogue-style content through cards, tags, and a simple institutional header.
- Main stack: Next.js, React, TypeScript, app-local mock data, filtering utilities, and static assets.
- Current status: to be confirmed; it works as a local/static prototype but still needs a durable content source.
- Technical value: keeps list filtering pure and easy to migrate when a real content backend exists.

## Overview

`dialogoi-web` is a Next.js interface for organizing dialogue-style content. The main screen lets visitors search discussions, sort them, filter by tags, and open cards that summarize each dialogue.

## Motivation

- Provide a clean public archive for curated discussions.
- Make discovery easy through search, tags, and sorting.
- Keep the first version small and content-focused.
- Establish a reusable card/filter structure for future content expansion.

## Features

- Sticky header with Dialogoi branding.
- Dialog list with card-based summaries.
- Search input and sort control.
- Tag filters built from the available dialogue data.
- Empty state with filter reset.

## Project Structure

```text
dialogoi-web/
├── app/          # App Router page and layout
├── components/   # Header, filters, cards, summaries, and UI primitives
├── lib/          # Mock data, filtering utilities, and shared helpers
├── public/       # Branding assets
└── package.json
```

## Current Status

The current app is a local/static prototype powered by mock dialogue data. It is ready for UI iteration, but a durable content source still needs to be defined.

## Known Limitations

- Move visible strings into a localization/content layer if the archive becomes multilingual.
- Replace mock data with a real content source before treating the app as production.
- Keep the filter utilities pure so they can be reused when data storage changes.
