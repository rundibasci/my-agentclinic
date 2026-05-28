# Domain Vocabulary Plan

## 1. Confirm Domain Language

1. Use the roadmap's Phase 2 domain terms as the source of truth.
2. Define the core concepts as `Agent`, `Ailment`, `Therapy`, and `Appointment`.
3. Keep the naming aligned with the mission's clinic metaphor and avoid generic CRUD language.

## 2. Define Core Types

1. Add TypeScript types or interfaces for agents.
2. Add TypeScript types or interfaces for ailments.
3. Add TypeScript types or interfaces for therapies.
4. Add TypeScript types or interfaces for appointments.
5. Keep the model small enough to explain in a course or demo.

## 3. Add In-Memory Sample Data

1. Add a few realistic demo agents.
2. Add sample ailments that describe stress or recovery needs.
3. Add sample therapies that can address known ailment categories.
4. Add sample appointments that connect agents and therapies.
5. Keep demo data deterministic and easy to inspect.

## 4. Add One Domain Validation Rule

1. Choose one rule that protects a meaningful clinic workflow.
2. Implement the rule close to the domain model.
3. Prefer a pure function that is simple to test with Vitest.
4. Return clear validation results instead of relying on UI behavior.

## 5. Validate the Slice

1. Add Vitest coverage for the domain types and validation rule.
2. Run `npm run test`.
3. Run `npm run build`.
4. Confirm no UI, database, or routing scope was added.
