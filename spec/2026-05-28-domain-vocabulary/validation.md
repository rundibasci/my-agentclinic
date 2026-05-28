# Domain Vocabulary Validation

## Merge Readiness

The feature can be merged when AgentClinic has a small, tested TypeScript domain vocabulary that later features can reuse.

## Required Checks

1. `npm run test` completes successfully.
2. `npm run build` completes successfully.
3. The code defines `Agent`, `Ailment`, `Therapy`, and `Appointment`.
4. The code includes deterministic in-memory sample data.
5. The code includes one domain validation rule.
6. Vitest covers both a valid and invalid validation-rule case.

## Manual Verification

1. Inspect the domain type names and confirm they match the roadmap vocabulary.
2. Inspect sample data and confirm it uses AgentClinic language rather than generic placeholder data.
3. Confirm appointments connect an agent to a therapy.
4. Confirm the validation rule protects a meaningful clinic workflow.
5. Confirm no new UI screens, database setup, or routes were added.

## Scope Verification

1. Domain code is TypeScript-first.
2. Sample data is in-memory only.
3. Validation code can be tested without a browser.
4. Future features can import the domain vocabulary without depending on Next.js UI components.

## Evidence to Capture

- Test command used.
- Build command used.
- Domain files created or changed.
- Validation rule summary.
- Known limitations intentionally left for later phases.
