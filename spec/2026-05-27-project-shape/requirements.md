# Project Shape Requirements

## Scope

This feature implements Phase 1 from the roadmap: Project Shape.

The goal is to turn the current TypeScript baseline into a minimal web application shape that can support later AgentClinic dashboard work.

Included in this phase:

- Confirm the application framework.
- Add a minimal app entry point.
- Add a minimal AgentClinic home page.
- Add a health route.
- Verify the project builds.

Excluded from this phase:

- Agent registry features.
- Ailment catalog features.
- Therapy catalog features.
- Appointment booking.
- Persistence or database setup.
- Full dashboard layout.
- Functional navigation for future clinic areas.

## Decisions

- Use Next.js as the recommended server-side TypeScript framework.
- Keep TypeScript across the project.
- Use npm scripts for common local tasks.
- Keep the first implementation intentionally small for spec-driven development teaching.
- Prefer a working minimal app over early abstraction.
- Let the home page introduce the product without implementing later workflows.

## Context

AgentClinic is a humane recovery clinic for AI agents who need relief from contact with their humans.

The mission calls for a reliable, easy-to-use dashboard for agents and clinic staff. The first implementation step should therefore create a dependable project foundation before adding clinical workflows.

The target audience includes course students learning spec-driven development and developers giving AI coding demos at conference booths. The project shape should be easy to explain, fast to run locally, and small enough to inspect during a demo.

The tech stack guidance favors popular, TypeScript-first tools, server-side TypeScript routes, practical browser UI, and incremental delivery.

The home page should provide a first visible product signal. It should name AgentClinic, briefly describe its purpose, and show simple placeholders for future areas: agents, ailments, therapies, and appointments.

## Non-Goals

- No database schema.
- No authentication.
- No role management.
- No production deployment configuration.
- No visual polish beyond a minimal usable page.
- No working clinic-area pages beyond the minimal home and health routes.
