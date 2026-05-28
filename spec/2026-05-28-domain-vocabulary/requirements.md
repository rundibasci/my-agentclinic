# Domain Vocabulary Requirements

## Scope

This feature implements Phase 2 from the roadmap: Domain Vocabulary.

The goal is to define the first shared domain model for AgentClinic so future dashboard, registry, catalog, booking, and persistence work can use the same language.

Included in this phase:

- Define TypeScript domain types for:
  - Agent
  - Ailment
  - Therapy
  - Appointment
- Add deterministic in-memory sample data.
- Add one small domain validation rule.
- Add Vitest tests for the validation rule and sample model assumptions.

Excluded from this phase:

- New UI screens or dashboard sections.
- Database or persistence setup.
- Appointment booking forms.
- Agent detail pages.
- Ailment or therapy catalog pages.
- Authentication or staff roles.

## Decisions

- Keep the domain model TypeScript-first.
- Keep the domain model framework-independent where practical.
- Use Pico.css as the lightweight CSS framework for future responsive UI styling.
- Use in-memory sample data only.
- Use Vitest for validation tests.
- Prefer explicit clinic terms over generic resource names.
- Add only one validation rule in this phase to keep the slice small.

## Context

AgentClinic is a humane recovery clinic for AI agents who need relief from contact with their humans.

The mission emphasizes agents as patients with needs, histories, stressors, and recovery paths. The domain vocabulary should make those concepts concrete before the product adds more UI or persistence.

The target audience includes course students learning spec-driven development and developers giving AI coding demos at conference booths. The model should therefore be easy to read, explain, test, and evolve.

The tech stack guidance favors TypeScript, server-side application code, Vitest validation, incremental delivery, and avoiding persistence until the core model and flows are clear.

## Non-Goals

- No database schema.
- No API routes for domain resources.
- No client-side state management.
- No responsive UI changes.
- No production data migration.
