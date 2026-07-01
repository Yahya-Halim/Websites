# captains-fish-chicken

This project was scaffolded by the [localevolve-factory](https://github.com/LocalEvolve/localevolve-factory) engine (v0.1.0, archetype: `restaurant`).

## Instruction precedence

This `CLAUDE.md` file is the **delegate-pointer** for the project. It overrides the localevolve-factory engine defaults. Any project-level instruction written here takes priority over engine-shipped defaults, but engine-shipped **safety** constraints remain in force unless explicitly relaxed in this file.

Subsequent skill instructions (added by archetypes or plugins) may **add to** the rules below **but** must **not contradict** the Safety section.

## Safety

The following constraints are **non-negotiable**:

1. **wire-input contract** — All data entering the build pipeline must conform to the Zod schemas published by the engine. Never bypass or weaken schema validation.
2. **Engine-owned files** — The following paths are generated and owned by the engine. Do not hand-edit them; they will be overwritten on the next build:
   - `public/llms.txt` (engine-owned)
   - `public/robots.txt` (engine-owned)
3. **Engine-controlled directories** — The `.factory/` directory is engine-controlled and gitignored. Do not commit its contents or rely on its structure between builds.
