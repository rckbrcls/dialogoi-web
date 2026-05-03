# Architecture

## Overview

`dialogoi-web` is a small Next.js App Router archive for dialogue-style content. The current app focuses on browsing, search, sorting, tag filters, and empty states over local data.

## Components

- `app/`: root layout and page entry point.
- `components/`: header, filters, cards, summaries, and UI primitives.
- `lib/`: mock dialogue data, filtering utilities, and shared helpers.
- `public/`: static branding assets.

## Data Flow

1. Local dialogue data is loaded from `lib/`.
2. Filter and sorting utilities derive the visible list.
3. Components render cards, tags, summaries, and empty states.

## Trade-offs

- Mock data keeps iteration fast, but a durable content source is still a future decision.
- The compact codebase is appropriate for a prototype archive but should gain content ownership rules before production.
