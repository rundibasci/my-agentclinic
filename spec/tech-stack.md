# AgentClinic Tech Stack

AgentClinic should use a popular, TypeScript-first stack that is easy to explain, demo, and evolve during spec-driven development.

## Current Baseline

- Language: TypeScript
- Runtime target: Node.js
- Build tool: TypeScript compiler through `npm run build`
- Package manager: npm

## Recommended Direction

- Application language: TypeScript across the full project.
- Web framework: a mainstream TypeScript-friendly framework suitable for server-rendered pages and dashboard workflows.
- UI: browser-based dashboard with accessible forms, tables, and navigation.
- Data model: agents, ailments, therapies, appointments, staff notes, and recovery status.
- Testing: start with focused unit tests for domain rules, then add integration tests for booking flows.

## Stack Principles

- Prefer stable, widely understood tools over unusual choices.
- Keep the first implementation small and easy to inspect.
- Avoid adding infrastructure before a spec requires it.
- Make local development simple for students and conference demos.
- Choose tools that support incremental delivery rather than one large rewrite.

## Near-Term Technical Decisions

- Keep TypeScript strict enough to teach clear contracts.
- Define domain types before building screens.
- Use server-side TypeScript when introducing application routes.
- Add persistence only after the core domain model and user flows are clear.
- Keep styling practical, modern, and dashboard-oriented.
