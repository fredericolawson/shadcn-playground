# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 project with TypeScript and React 19, built with ShadCN/UI components. The project uses the App Router and is configured with Tailwind CSS v4 (note: no tailwind.config file exists, uses built-in configuration).

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production  
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture & Structure

### Core Setup
- **Framework**: Next.js 15 with App Router
- **React**: Version 19 
- **TypeScript**: Strict mode enabled
- **Styling**: Tailwind CSS v4 + ShadCN/UI components
- **Component Library**: Full ShadCN/UI component suite pre-installed

### Directory Structure
```
src/
├── app/            # Next.js App Router pages
├── components/ui/  # ShadCN/UI components 
├── hooks/          # Custom React hooks
└── lib/            # Utilities (cn() helper function)
```

### Key Conventions
- **Path Aliases**: `@/` maps to `src/`
- **Component Styling**: Use `cn()` helper from `@/lib/utils` for conditional Tailwind classes
- **ShadCN Config**: Uses "new-york" style, CSS variables enabled, Lucide icons
- **Mobile Detection**: `useIsMobile()` hook available at `@/hooks/use-mobile`

### Important Files
- `components.json` - ShadCN/UI configuration
- `src/lib/utils.ts` - Contains `cn()` helper for class merging
- All UI components follow ShadCN patterns with class-variance-authority

### Notes
- Turbopack enabled for faster development builds
- Full ShadCN/UI component library already installed and configured
- No custom Tailwind config - uses Tailwind v4 defaults
- TypeScript path mapping configured for clean imports