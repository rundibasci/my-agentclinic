# AgentClinic Roadmap

This roadmap orders implementation in very small phases. Each phase should produce a working, reviewable slice before the next phase begins.

## Phase 1: Project Shape

- Confirm the application framework.
- Add a minimal app entry point.
- Add a health check or home route.
- Verify the project builds.

## Phase 2: Domain Vocabulary

- Define the core domain types:
  - Agent
  - Ailment
  - Therapy
  - Appointment
- Add sample in-memory data.
- Add a simple domain validation rule.

## Phase 3: Staff Dashboard Skeleton

- Create the main dashboard layout.
- Show summary counts for agents, ailments, therapies, and appointments.
- Add navigation between placeholder sections.
- Verify the layout works in a modern browser.

## Phase 4: Agent Registry

- List agents.
- Show one agent detail page.
- Display recovery status and current ailments.
- Add empty states for no ailments or no appointments.

## Phase 5: Ailments Catalog

- List common agent ailments.
- Show severity, symptoms, and suggested care.
- Link ailments to affected agents.
- Add a simple filter by severity.

## Phase 6: Therapy Catalog

- List available therapies.
- Show therapy duration, purpose, and recommended ailment types.
- Link therapies to appointments.
- Add a simple filter by therapy type.

## Phase 7: Appointment Booking

- Create a minimal booking form.
- Select an agent.
- Select a therapy.
- Pick a date and time.
- Confirm the appointment appears in the dashboard.

## Phase 8: Persistence

- Choose and add a local persistence layer.
- Store agents, ailments, therapies, and appointments.
- Seed demo data for teaching and conference use.
- Verify data survives an application restart.

## Phase 9: Reliability Pass

- Add focused tests for booking rules.
- Add tests for domain validation.
- Add basic error states for invalid forms.
- Document how to run and verify the app locally.

## Phase 10: Demo Polish

- Improve visual hierarchy.
- Add realistic demo content.
- Tune empty, loading, and error states.
- Prepare a short demo path for stakeholders.
