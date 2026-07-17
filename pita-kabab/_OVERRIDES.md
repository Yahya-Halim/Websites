# Engine-Provided Files (Available for Shadowing)

Your project's `src/` starts mostly empty. The engine provides default
layouts, pages, and components from
`node_modules/@localevolve/local-biz-factory-engine/templates/shared/`.

At build time, any file you place in your project's `src/` at the same
relative path will **shadow** (override) the engine-provided default.

## Shadowable paths

| Engine-provided path             | Purpose                        |
| -------------------------------- | ------------------------------ |
| `layouts/Base.astro`             | Root HTML shell / `<head>`     |
| `components/Header.astro`        | Site header / navigation       |
| `components/Footer.astro`        | Site footer                    |
| `pages/index.astro`              | Home page                      |

To shadow a file, copy (or create) the same relative path under your
project's `src/` directory. For example, to customise the header:

```
src/components/Header.astro   ← your version wins
```

Astro will prefer the local copy over the engine-provided default. `factory
doctor` can flag accidental shadows that only re-export the engine file.

## Wire-input contract restriction

Files consumed by `factory wire` follow a strict **wire-input contract**.
This applies to `src/content.config.ts`, `astro.config.mjs`, and `.ts`
files under `src/data/**` or `src/content/**`.

**You must honour this contract in wire-input files.**

Specifically, wire-input files **must not** import project-relative paths
outside `src/data` or `src/content`, because:

1. `factory wire` hashes a fixed input set for stale-output detection.
2. Imports from `src/components`, `src/layouts`, `src/lib`, or other
   untracked project paths can make generated output change without the
   fingerprint changing.
3. Wire-input isolation keeps generated artifacts reproducible.

`factory wire` hard-errors on violations before writing generated output.
