# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## Supabase data model

The Supabase project uses versioned SQL migrations in `supabase/migrations`. The Collabio schema covers profiles and preferences, deals and access, invitations, milestones, deliverables, revision requests, ledger events, audit events, and module configuration. Row Level Security is enabled on every exposed table.

The current React screens are still a UI prototype and are not yet connected to Supabase.

## Extending the database

Use a new migration for each schema change. Add relational tables for new core workflows, with their foreign keys, indexes, and Row Level Security policies. Register a module in `module_registry`; use `module_settings.settings` and the relevant entity's JSONB metadata for optional, user-specific module configuration. Do not create tables dynamically at runtime: schema changes should be reviewed and versioned as migrations.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
