# JPB Netflix Site — Project Context for Claude Code

This file is loaded automatically every time Claude Code runs in this repository. Read it first. Hold these rules. Ask before breaking any of them.

## The project

A premium, cinematic, Netflix-style portfolio site for **Jermaine Peguese**. A digital home that routes four audiences into the right story, the right page, and the right next step.

Live: `netflix-jermainepb-website.vercel.app`
Repo: `Pathworth/netflix-jermainepb`

## The four lanes (audience routing model)

The site sends every visitor into one of four lanes via the `/browse` profile picker. Hold these names exactly:

- **Chairman of AI** (`/chairman-of-ai`) — practical AI, automation, systems, workflow support for businesses, nonprofits, and operators. Governance and standard-bearer tone. *(Renamed from "AI Strategist" 2026-05-24. Old `/ai-strategist` route 301-redirects.)*
- **Community Builder** (`/community-builder`) — civic and nonprofit impact. Detroit-first, people-first.
- **Speaking & Workshops** (`/speaking-workshops`) — talks, trainings, workshops for organizations and teams.
- **Meet Jermaine** (`/meet-jermaine`) — story, values, blueprint, personal operating code.

## Routes

- `/` — splash / title card
- `/browse` — "Where should we start?" profile picker
- `/chairman-of-ai`, `/community-builder`, `/speaking-workshops`, `/meet-jermaine` — the four lane heroes
- `/chairman-of-ai/about`, `/community-builder/about`, `/speaking-workshops/about`, `/meet-jermaine/about` — placeholder More Info pages (Phase 3 turns these into real modals)
- `/chairman-of-ai/manifesto` — placeholder for the Chairman of AI manifesto video
- `/chairman-of-ai/coming-soon`, `/community-builder/coming-soon`, `/speaking-workshops/coming-soon`, `/meet-jermaine/coming-soon` — generic placeholder pages for cards still in production. Read `?title=` query param to name what the visitor clicked.
- `/ai-strategist` — 301-redirects to `/chairman-of-ai` (legacy URL)
- `/skills` — Superpowers (15 pillars)
- `/bio` — Blueprint: Bio
- `/work-experience` — Experience Seasons
- `/core-values` — guided values experience
- `/contact` — contact / hire
- `/one-pager` — professional one-pager

Do not rename, remove, or add routes without explicit approval.

## Tech stack — do not switch

React + TypeScript + Create React App + React Router + CSS (per-component) + Framer Motion + Swiper + React Icons.

Do **not** introduce: Tailwind, styled-components, Next.js, Vite, a different state library, a video player library (`react-player`, `video.js`, `plyr`), DatoCMS expansion, GraphQL clients beyond what currently exists. The native `<video>` element is sufficient for hero motion.

The starter template's residue (`src/profilePage/`, `src/queries/`, `src/pages/Blogs.tsx | Certifications.tsx | ContactMe.tsx | Music.tsx | PlacesVisited.tsx | Projects.tsx | Reading.tsx | Recommendations.tsx | WorkPermit.tsx`) is scheduled for removal but still present. Do not extend any of it. Do not delete any of it without explicit approval.

`src/pages/AIstrategist.tsx` is superseded by `src/pages/ChairmanOfAI.tsx` but kept in the tree for rollback safety. Do not extend it. Phase 2 cleanup removes it.

## Voice — preserve Jermaine's voice

Direct, human, clear, grounded. Sounds like a sharp, honest operator who solves real problems and protects people while getting the work done. Not consultant fluff.

**Banned words and patterns** unless Jermaine explicitly asks: synergy, leverage, ramp, hygiene, ecosystem, unlock potential, game-changer, world-class, cutting-edge, transformative journey, "this, not that" contrast language, generic inspirational filler. No em dashes — use periods, commas, colons, or parentheses.

Do not invent accomplishments, clients, numbers, partnerships, awards, or personal stories. If a fact is unknown, mark it unknown or ask.

## Canonical names — immutable

- Jermaine Peguese
- Pathworth Consulting & Solutions
- NAACP Detroit Branch
- Recession Proof Extreme Inc. Michigan Chapter
- Chairman of AI (personal brand title for the AI pillar)

## Approved language

- Use **Student Mode** — never "Learning" or "Curiosity."
- Use **More Supporting Values** — never "Values Library." (Two stale references still need fixing: `src/data/coreValues.ts` line 94 and `src/pages/CoreValues.tsx` line 411.)
- Use **Chairman of AI** — never "AI Strategist" (renamed 2026-05-24).

## What is built and on-brand — leave alone unless asked

- Splash (`/`) and Browse (`/browse`) — the strongest screens on the site.
- Skills (`/skills`) — 360 lines, real content, modal experience.
- Bio (`/bio`) — Blueprint and Assets, 376 lines, query-string state.
- Work Experience (`/work-experience`) — Experience Seasons, 430 lines, Pathworth featured first.
- Core Values (`/core-values`) — 614 lines, guided room with eight featured values including Student Mode.
- **All four lane pages** — running the new `BillboardHero` + `ContentRow` system. Chairman of AI shipped first (Phase 1, branch `cinematic/chairman-of-ai-billboard-hero-v1`). Community Builder, Speaking & Workshops, and Meet Jermaine shipped together in Phase 2 (branch `cinematic/three-pillars-v1`). Each lane has its own pillar config in `src/data/pillarConfig.ts` and its own row data file in `src/data/`.

These nine surfaces are the spine. Do not rewrite them.

## What is broken and prioritized

All four lanes are on the new `BillboardHero` + `ContentRow` system. The legacy `ProfilePage` component is no longer imported by any lane page but still lives in `src/profilePage/` as starter-template residue. Do not delete without approval.

**Next priorities (Phase 3 and beyond):**
1. Replace placeholder "coming soon" pages with real content as it ships (manifesto video, framework PDFs, workshop recap reels, etc).
2. Build the real Netflix-style More Info modal that replaces the `/[pillar]/about` placeholder pages.
3. Swap row card placeholder gradient covers for real cover art as it's designed.

The cinematic hero architect agent (`.claude/agents/cinematic-hero-architect.md`) owns hero motion work.

## Approval gates — stop and ask

Before changing any of the following, stop and ask:

- Route names or main site structure.
- Core values naming (especially Student Mode).
- Brand colors or design tokens.
- Any of the page experience models (Blueprint, Seasons, guided room, profile picker).
- Canonical organization names.
- Personal biography or work history content.
- Anything that removes completed approved work.
- Adding any dependency.

## Branch and build discipline

- Work on branches, never directly on `main`. Branch name format: `<area>/<short-purpose>` (e.g. `cinematic/chairman-of-ai-billboard-hero-v1`).
- Run `npm run build` after meaningful changes and surface any TypeScript or ESLint errors.
- Run `npm start` and ask Jermaine to walk the page visually before merging.
- Output the exact terminal commands Jermaine needs to run, in plain language. Do not run `git push` autonomously without explicit say-so in that session.
- Vercel auto-deploys preview URLs from branches.

## Specialized agents in this repo

- `.claude/agents/cinematic-hero-architect.md` — for any work touching hero motion on splash, browse, or the four lane pages. Delegate hero motion requests to this agent.

## Response format — preferred

When the request is non-trivial, close with a five-part handoff:

1. **What changed** — files touched, one-line reason each.
2. **What was preserved** — interactions, copy, styling deliberately left alone.
3. **What needs testing** — exact pages and behaviors to walk.
4. **Commands to run** — one per line, with a half-sentence describing each.
5. **Risks or follow-up** — anything to decide before merge.

If the request is small, answer directly. Do not over-formalize.

## The standard

The site should feel like Jermaine: clear, grounded, premium, direct, human, and built for real people who need to know where to go next. Hold that.
