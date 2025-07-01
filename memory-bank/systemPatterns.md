# System Patterns

This document describes the high-level architecture and design patterns used in the MetaDyn website.

## Core Architecture

*   **Next.js App Router:** The application uses the file-system-based App Router introduced in Next.js 13. The primary page is `app/page.tsx`, and the main layout is defined in `app/layout.tsx`. This architecture supports nested layouts and server components by default.
*   **Component-Based Design:** The UI is broken down into reusable React components located in the `app/components/` directory. This promotes modularity, maintainability, and separation of concerns.

## Key Design Patterns

*   **Server Components:** As is standard with the App Router, components are React Server Components (RSCs) by default. This allows for data fetching and rendering to occur on the server, reducing the amount of JavaScript sent to the client.
*   **Client Components:** Components requiring interactivity, state, or browser-only APIs (like `useEffect` and `useState`) are explicitly marked with the `"use client"` directive. This is evident in components that handle user interactions, such as `ContactForm.tsx` and animations.
*   **Declarative 3D Scenes:** The use of `@react-three/fiber` promotes a declarative approach to 3D graphics. Instead of imperative Three.js code, 3D scenes are described using React components, which is a more maintainable and reusable pattern.
*   **Utility-First CSS:** The project leverages Tailwind CSS, which uses a utility-first approach. This avoids the need for large, custom CSS files and instead styles elements directly in the JSX, leading to faster development and more consistent styling.
*   **Animated Sections:** The `AnimatedSection.tsx` component suggests a pattern of revealing content on scroll, a common UX pattern for modern web applications, likely implemented with Framer Motion.
