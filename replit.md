# AI Automation Academy

## Overview

AI Automation Academy is a comprehensive educational platform for training professionals in AI automation skills. The project is a full-stack web application built as a landing page and course enrollment system, designed to market and sell AI automation bootcamps targeted at African professionals. The application features a modern, responsive design with course information, success stories, pricing, and enrollment functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system using CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible interface
- **Animations**: Framer Motion for smooth animations and transitions
- **Form Management**: React Hook Form with Zod for validation and type-safe forms
- **State Management**: TanStack Query for server state management and caching

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for RESTful API development
- **Build System**: Vite for development server and build tooling, esbuild for production builds
- **Development**: Hot module replacement and automatic rebuilds in development mode

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database serverless PostgreSQL
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Fallback Storage**: In-memory storage implementation for development/testing
- **Session Management**: PostgreSQL-backed sessions using connect-pg-simple

### Database Schema Design
The application uses a simple but effective schema with three main entities:
- **Users**: Basic user authentication with username/password
- **Enrollments**: Course enrollment data including personal information, experience level, and payment plans
- **Consultations**: Consultation booking system for potential students

### API Structure
- **RESTful Design**: Clean REST endpoints for enrollments and consultations
- **Validation**: Zod schemas for request validation with detailed error responses
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **Logging**: Request/response logging for API monitoring

### Development Workflow
- **Type Safety**: Shared TypeScript types between client and server
- **Code Splitting**: Separate client, server, and shared code directories
- **Hot Reloading**: Vite-powered development with instant updates
- **Path Aliases**: Clean import paths using TypeScript path mapping

### Component Architecture
The landing page is built with a modular component structure:
- **Reusable UI Components**: Button, Dialog, Form, Input, Select, etc.
- **Landing Page Sections**: Hero, Problem, Solution, Curriculum, Success Stories, Pricing, FAQ, etc.
- **Custom Hooks**: Countdown timer, mobile detection, toast notifications
- **Form Components**: Enrollment and consultation forms with validation

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18+ with TypeScript, React DOM, React Hook Form
- **Build Tools**: Vite, esbuild, TypeScript compiler
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer

### UI and Design
- **Component Library**: Radix UI primitives for accessible components
- **Icons**: Lucide React for consistent iconography
- **Animations**: Framer Motion for smooth animations
- **Fonts**: Google Fonts (Inter, JetBrains Mono)

### Backend Infrastructure
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Validation**: Zod for schema validation
- **Session Storage**: connect-pg-simple for PostgreSQL session store

### Development Tools
- **Replit Integration**: Vite plugins for Replit-specific functionality
- **Error Handling**: Runtime error overlay for development
- **Code Cartography**: Replit cartographer for code navigation

### Utility Libraries
- **Class Management**: clsx and tailwind-merge for conditional classes
- **Date Handling**: date-fns for date manipulation
- **State Management**: TanStack Query for server state
- **Carousel**: Embla Carousel for image/content carousels
- **Command Interface**: cmdk for command palette functionality