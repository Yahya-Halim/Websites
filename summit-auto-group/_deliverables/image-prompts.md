# Image Prompt Scaffolds — Summit Auto Group

_Produced with the **higgsfield** skill (prompt-scaffold sub-capability — no API call made). Model: Nano Banana Pro for hero/quality, Flash for bulk inventory. These fill the branded photo placeholders currently on the site._

## 1. Homepage hero (16:9)

```
Photorealistic wide shot of a clean modern used-car dealership lot at golden hour,
a row of SUVs and trucks neatly arranged, snow-dusted Colorado Rocky Mountains on the
horizon, deep green and gold brand banners, warm inviting light, professional
automotive photography, sharp focus, high dynamic range

Negative: cartoon, illustration, text, watermark, distorted cars, lens flare overload
```
Model: Nano Banana Pro · Aspect: 16:9 · Steps: 30 · CFG: 6 · Seed: fixed per approved shot

## 2. Inventory vehicle card (16:10) — template

Repeat per vehicle, swapping the `{{...}}` tokens from `src/data/cars.json`:

```
Photorealistic 3/4 front studio shot of a {{year}} {{make}} {{model}} in {{color}},
clean seamless light-grey background, soft even studio lighting, subtle reflection on
floor, professional dealership listing photo, sharp detail, true-to-life color

Negative: motion blur, busy background, people, text, watermark, wrong badges, warped body panels
```
Model: Nano Banana Flash (speed for 6+ listings) · Aspect: 16:10

Example fill — `2022 Ford F-150 Lariat`:
```
Photorealistic 3/4 front studio shot of a 2022 Ford F-150 Lariat 4x4 in metallic blue,
clean seamless light-grey background, soft even studio lighting, subtle floor reflection,
professional dealership listing photo, sharp detail, true-to-life color
```

## 3. Location page banner (Denver / Aurora / Lakewood)

```
Photorealistic scenic banner of {{city}}, Colorado skyline with the Front Range behind it,
a modern SUV on a clean foreground road, warm daylight, automotive lifestyle photography,
space on the left for a headline

Negative: text, logos, watermark, crowds, cartoon, low light
```
Model: Nano Banana Pro · Aspect: 21:9

## Handoff
- Generate → download WebP (compressed) → place under `public/images/inventory/` etc.
- Filenames must match `featuredImage` / `images[]` in `cars.json` (e.g. `rav4-xle-front.jpg`).
- Re-run `factory build`; the placeholders resolve to real photos automatically.
- Add descriptive `alt` text when wiring `<img>` (required by `seo-geo-ai-validation`).
