# Elsayed Kouta Portfolio

## Overview

A personal developer portfolio website for Elsayed Kouta, a Flutter/Mobile Developer. The site showcases professional projects, skills, and provides a contact form for potential clients or employers. Built as a full-stack application with React frontend and Express backend, designed for static deployment to GitHub Pages.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight router)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Animations**: Framer Motion for scroll and entry animations
- **Smooth Scrolling**: react-scroll for navigation
- **State Management**: TanStack React Query for server state
- **Forms**: React Hook Form with Zod validation
- **Theming**: next-themes for dark/light mode support

### Backend Architecture
- **Framework**: Express 5 on Node.js
- **Language**: TypeScript with ESM modules
- **API Design**: RESTful endpoints defined in shared routes
- **Storage**: In-memory storage (MemStorage) for static deployment - database schema exists but is unused
- **Build Tool**: Vite for frontend, esbuild for backend bundling

### Project Structure
```
├── client/           # React frontend application
│   ├── src/
│   │   ├── components/   # UI components (Navbar, Footer, ProjectCard, ContactForm)
│   │   ├── pages/        # Page components (Home, not-found)
│   │   ├── hooks/        # Custom hooks (use-projects, use-contact, use-toast)
│   │   └── lib/          # Utilities and static data
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data storage layer (in-memory)
│   └── static.ts     # Static file serving
├── shared/           # Shared code between frontend and backend
│   ├── schema.ts     # Drizzle ORM schemas and Zod types
│   └── routes.ts     # API route definitions with type safety
```

### Key Design Decisions

1. **Static Site Optimization**: The portfolio is configured for GitHub Pages deployment with a custom base path (`/Elsayed_kouta_portfolio/`). Project data is hardcoded in `client/src/lib/data.ts` rather than fetched from a database.

2. **Type-Safe API Layer**: Shared route definitions in `shared/routes.ts` provide type safety between frontend and backend using Zod schemas.

3. **Component Library**: Uses shadcn/ui with Radix UI primitives for accessible, customizable components. Components are copied into the project (not installed as dependencies).

4. **Database Schema Present but Unused**: Drizzle ORM schemas exist for projects and messages tables, but the current implementation uses in-memory storage for static deployment.

## External Dependencies

### UI & Styling
- Tailwind CSS with custom theme configuration
- Radix UI primitives (dialog, dropdown, tooltip, etc.)
- Lucide React and react-icons for iconography
- Framer Motion for animations

### Data & Forms
- TanStack React Query for data fetching
- React Hook Form with @hookform/resolvers
- Zod for schema validation
- drizzle-zod for generating Zod schemas from Drizzle tables

### Database (configured but not active)
- Drizzle ORM with PostgreSQL dialect
- connect-pg-simple for session storage
- DATABASE_URL environment variable required for database features

### Build & Development
- Vite for frontend bundling with HMR
- esbuild for production server bundling
- TypeScript with strict mode

### Deployment
- Configured for GitHub Pages via `.github/workflows/deploy.yml`
- Static asset serving from `dist/public`