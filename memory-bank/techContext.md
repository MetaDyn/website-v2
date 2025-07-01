# Technical Context

This document outlines the key technologies, libraries, and frameworks used in the MetaDyn website.

## Core Framework

*   **Next.js (v13.5.6):** A React framework for building server-side rendered and statically generated web applications. The project utilizes the App Router, which is the standard for modern Next.js development.
*   **React (v18.2.0):** A JavaScript library for building user interfaces.

## Key Libraries

*   **Three.js (v0.157.0):** A 3D graphics library that enables the creation of GPU-accelerated 3D animations and visualizations directly in the browser.
    *   **@react-three/fiber (v8.15.11):** A React renderer for Three.js, which allows for a declarative, component-based approach to building 3D scenes.
    *   **@react-three/drei (v9.88.7):** A collection of useful helpers and abstractions for `@react-three/fiber`.
*   **Framer Motion (v10.16.4):** A production-ready motion library for React that simplifies the creation of complex animations.
*   **Tailwind CSS (v3.3.5):** A utility-first CSS framework for rapidly building custom user interfaces. It is configured with PostCSS and Autoprefixer for optimal compatibility.
*   **EmailJS (@emailjs/browser v4.4.1):** A client-side library for sending emails directly from JavaScript, used for the contact form.

## Development & Tooling

*   **TypeScript (v5.2.2):** A statically typed superset of JavaScript that adds type safety to the codebase.
*   **ESLint:** A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript. The configuration is extended from `eslint-config-next` for Next.js best practices.
