# Atlas — Archetypal Knowledge Graph

Atlas is a system for capturing ideas, symbols, and insights as a navigable **graph**.  
Every object is an **Entry**, every category is an **Archetype**, every connection is a **Link**, and every dynamic is a **Resonance**.

The interface is minimalist, dark, fast, and structured — optimized for frictionless input and deep graph navigation.

---

## Core Principles

- **Graph-first** — everything is a node or a link.
- **Archetypes** — each Entry belongs to a semantic type.
- **Fast Capture** — input speed > organization.
- **Dark Minimalism** — monochrome UI, zero noise.
- **Deterministic Flow** — Action → Reaction → Shortcut logic.
- **Structure Over Aesthetics** — strict modularity on both frontend and backend.

---

## System Overview

Atlas consists of three primary domains:

1. **Frontend** — React (Vite, TypeScript), Zustand store.
2. **Backend** — NestJS (Node.js, TypeScript) with domain modules.
3. **Database** — PostgreSQL + TypeORM + FTS (`tsvector`/`tsquery`).

Realtime events use **WebSockets**.  
Graph rendering uses **GraphCanvas** (react-force-graph or vis-network).

---

## Folder Structure

/frontend
/src
/components/
/routes/
/store/
/hooks/useHotkeys.ts
/graph/GraphCanvas.tsx

/backend
/src
/modules
/entries/
/tags/
/links/
/analytics/
/auth/
/config/
/app.module.ts

/database
migrations/


---

## Frontend (React + Vite + TypeScript)

### Main Components

- **EntryCard** — view/edit an Entry
- **TagPicker** — manage tags
- **LinkDrawer** — create/view links
- **GraphCanvas** — visualize the graph
- **ArchetypeSelector** — select type for Entry

### State Management

Zustand (Redux-like predictable store)

### API Client

Axios, structured per domain (`entries`, `tags`, `links`, `analytics`)

### Global Hotkeys

- **N** — new Entry
- **L** — create Link
- **T** — tag picker
- **F** — global search
- **E** — edit Entry
- **Alt+↑ / Alt+↓** — graph neighbor navigation

UI style: dark, modular, monochrome.

---

## Backend (NestJS + PostgreSQL + TypeORM)

Each domain is a separate NestJS module:

entries/
tags/
links/
analytics/
auth/


Each module contains:

- `*.module.ts`
- `*.service.ts`
- `*.controller.ts`
- `dto/`
- `entities/`
- `schemas/`

### Validation & Auth

- DTO + Pipes
- Guards
- Swagger for REST API
- Optional GraphQL for relational queries

---

## Domain Model

### Entry

- id
- title
- body
- type (archetype)
- created_at
- updated_at

### Tag

- id
- name

### Link

- id
- source_entry_id
- target_entry_id
- type (semantic relation)

### Analytics

- weighted_degree
- mention_count
- recency
- intensity

---

## Resonance Formula

resonance =
zscore(weighted_degree + 0.5 * mention_count)

(0.7 + 0.3 * recency_boost)
0.4 * intensity


Calculated via SQL or inside AnalyticsService.

---

## Full Text Search (FTS)

- PostgreSQL `tsvector` + `tsquery`
- Fields: `title`, `body`
- Index: GIN
- Ranking: `rank()`
- Filtering: by tags, types, time ranges via JOINs

---

## API Routes

### Entries


GET /entries
GET /entries/:id
POST /entries
PATCH /entries/:id
DELETE /entries/:id


### Tags

POST /tags
GET /tags


### Links

POST /links
GET /links/:entryId


### Analytics

GET /analytics/resonance/:entryId


---

## Development Workflow

1. Install dependencies: `npm install`
2. Run backend: `npm run start:dev`
3. Run frontend: `npm run dev`
4. Run migrations: `typeorm migration:run`
5. Testing:
    - Jest (unit)
    - Supertest (e2e)

---

## Testing

- Unit tests for services/guards/pipes
- E2E tests with Supertest
- Isolated database schemas
- Deterministic calculation outputs

---

## Roadmap

### v0.1 — Initialization

- Repo structure
- README
- Module skeletons

### v0.2 — Core Graph Engine

- Entries / Tags / Links modules
- GraphCanvas MVP
- DTO + Entities + Relations

### v0.3 — Search & Analytics

- PostgreSQL FTS
- Rank-based sorting
- Resonance metrics

### v0.4 — Realtime Graph

- WebSockets
- Live resonance flares

### v1.0 — Complete Atlas

- Full graph editor
- Archetype engine
- JSON + Markdown export/import
- Backlinks with YAML front-matter

---

## License

MIT
