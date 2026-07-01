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
| `components/Hero.astro`          | Hero / above-the-fold section  |
| `pages/index.astro`              | Home page                      |
| `pages/about.astro`              | About page                     |
| `pages/contact.astro`            | Contact page                   |

To shadow a file, copy (or create) the same relative path under your
project's `src/` directory. For example, to customise the header:

```
src/components/Header.astro   ← your version wins
```

The engine will detect the local copy and use it instead of its built-in
default.

## Wire-input contract restriction

Engine-provided files follow a strict **wire-input contract**: they
receive all data through Astro props and content-collection queries that
the engine controls. They never import project-relative modules directly.

**You must honour this contract in your shadow files.**

Specifically, shadow files **must not** import from project-relative
paths such as `src/data` or `src/content` directly, because:

1. The engine owns the data-loading pipeline and passes resolved data
   via props.
2. Importing from `src/data` or `src/content` couples your override to
   internal file layout that may change between engine versions.
3. Wire-input isolation keeps shadow files portable and testable.

Instead, consume data exclusively through the props and slots the engine
passes to each component or layout.
