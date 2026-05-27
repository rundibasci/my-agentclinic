# Project Shape Plan

## 1. Confirm Framework Direction

1. Record Next.js as the recommended server-side TypeScript framework for this phase.
2. Keep the decision aligned with the mission's need for a reliable, modern browser experience.
3. Keep the decision aligned with the tech stack's preference for popular, TypeScript-first tools.

## 2. Establish Application Skeleton

1. Add the minimal Next.js project files required to run the app.
2. Preserve TypeScript as the application language.
3. Keep the existing project simple enough for course students and conference demos.

## 3. Add Minimal Routes

1. Add a home route that confirms AgentClinic is available.
2. Add a health route that confirms the service can respond successfully.
3. Avoid adding domain workflows in this phase.

## 4. Create Minimal AgentClinic Home Page

1. Show the AgentClinic name clearly on the first page.
2. State that AgentClinic helps AI agents recover from contact with their humans.
3. Include a small set of visible entry points for future clinic areas:
   - Agents
   - Ailments
   - Therapies
   - Appointments
4. Keep these entry points non-functional or placeholder-only in this phase.
5. Keep the page simple, readable, and useful for course students and conference booth demos.
6. Make the page responsive so content stacks cleanly on small screens and uses available space on wider screens.

## 5. Add Main Layout Component

1. Create a main layout component for the application shell.
2. Split the layout into three subcomponents:
   - Header
   - Main
   - Footer
3. Move shared page frame styling into a dedicated CSS file.
4. Import the layout CSS file from the layout component so the styles are linked to the component.
5. Keep the layout generic enough for later AgentClinic routes.
6. Ensure the layout header, main region, and footer adapt without overlap on mobile and desktop viewports.

## 6. Verify Build and Local Run

1. Add or update npm scripts for development and production build.
2. Run the build command.
3. Run the local app and confirm the home route and health route respond.
4. Confirm the home page remains usable at mobile and desktop viewport sizes.

## 7. Keep Scope Clean

1. Do not add persistence.
2. Do not implement dashboard sections.
3. Do not add agent, ailment, therapy, or appointment workflows yet.
