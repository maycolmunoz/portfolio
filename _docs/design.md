# Neo-Brutalist Black & White — Style Reference
> high-contrast monochrome architecture, hard drop shadows, zero frivolous animations

**Theme:** light (pure black & white monochrome)

Source measurements are normalized; roles and recommendations are interpreted.

This design system strips away all candy colors, playful tilts, and bouncy animations in favor of an unapologetic, high-contrast **Neo-Brutalist** aesthetic. Every element is built on hard 2px solid black strokes, solid 4px/3px black drop shadows with zero blur, and an orthogonal, disciplined grid. The interface communicates speed, backend engineering rigour, and stark architectural clarity.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Carbon | `#000000` | `--color-carbon` | Primary ink, 2px borders, hard drop shadows, filled CTA buttons, inverted badge fills |
| Paper White | `#ffffff` | `--color-paper-white` | Card backgrounds, pill buttons, high-contrast text on dark surfaces |
| Console Canvas | `#e5e5e5` | `--color-console-canvas` | Main page ground and app chassis (matte neutral concrete/paper for high card contrast) |
| Surface Muted | `#dcdcdc` | `--color-surface-muted` | Secondary trims, table headers, blockquote background, tag pills |
| Concrete Gray | `#d4d4d4` | `--color-concrete-gray` | Dividers, neutral accents |
| Soft Mist | `#f0f0f0` | `--color-soft-mist` | Subtle hover surfaces |

## Tokens — Typography

### Anton / Lateral — Display headlines only — wordmarks and section banners sit at compressed leading (0.75–0.85) forming heavy, brutalist typographic blocks. · `--font-display`
- **Substitute:** Anton, Druk, Impact, Arial Narrow
- **Weights:** 400 / 800
- **Line height:** 0.75–0.85
- **Role:** High-impact display headlines and title wordmarks.

### Inter / Aeonik Pro — All UI, body, nav, buttons, subheads. · `--font-body`
- **Substitute:** Inter, General Sans, system-ui
- **Weights:** 500 (body), 700 (labels/buttons)
- **Letter spacing:** -0.010em body, 0.032em uppercase labels

### Fira Code — Code snippets, terminal badges, metadata. · `--font-mono`
- **Substitute:** JetBrains Mono, SF Mono
- **Weights:** 400, 500
- **Role:** Monospace dates, index counters, technical tags.

## Tokens — Spacing & Shapes

**Base unit:** 4px

### Borders & Shadows (Neo-Brutalist Signature)

| Element | Border | Shadow | Radius |
|---------|--------|--------|--------|
| Cards | `2px solid #000000` | `4px 4px 0px 0px #000000` | `16px` |
| Cards Elevated | `2px solid #000000` | `6px 6px 0px 0px #000000` | `24px` |
| Primary CTA (Btn) | `2px solid #000000` | `3px 3px 0px 0px #000000` | `9999px` |
| Pills / Tags | `2px solid #000000` | none (or `2px 2px`) | `9999px` |
| Badges / Stickers | `2px solid #000000` | none | `10px` |

## Components

### Card
Solid white (#ffffff) surface bounded by a hard `2px solid #000000` border and an unblurred `4px 4px 0px 0px #000000` drop shadow. Completely stationary on hover (no floating transforms).

### Pill Button
High-contrast pill with `2px solid #000000` outline. Normal state: #ffffff background with #000000 text. Hover state: immediate inversion to #000000 background with #ffffff text.

### Primary CTA Button (.btn)
Solid black (#000000) background, white (#ffffff) text, `2px solid #000000` outline, and `3px 3px 0px 0px #000000` hard shadow. On click (`:active`), shifts 2px down and right to give tactile physical switch feedback.

### Technical Badge (.sticker)
Orthogonal (0deg rotation), sharp `2px solid #000000` border, #000000 fill with #ffffff text (or #ededed fill). No tilt, no wobble.

### Code Block (.blog-content pre)
Pure black (#000000) terminal window with white (#ffffff) monospace font, bounded by a `2px solid #000000` border and `4px 4px 0px 0px #000000` hard shadow.

## Do's and Don'ts

### Do
- Use strictly black (#000000), white (#ffffff), and subtle grays (#ededed / #f8f8f8).
- Use `2px solid #000000` borders on all cards, buttons, badges, and dividers.
- Apply hard box-shadows (`4px 4px 0px 0px #000000`) with zero blur.
- Keep all elements orthogonal and upright (no rotate transforms).
- Use high-contrast color inversion on hover (white background flips to solid black).

### Don't
- Do not use color accents (no blues, greens, yellows, reds, or purples).
- Do not use floating hover animations (`hover:-translate-y-0.5` or similar smooth lifts).
- Do not use rotated or tilted badges (`rotate-[-6deg]`, `rotate-[-8deg]`).
- Do not use blurry box-shadows or gradient fills.

## Quick Start (Tailwind v4 @theme)

```css
@theme {
  --color-carbon: #000000;
  --color-paper-white: #ffffff;
  --color-console-canvas: #e5e5e5;
  --color-surface-muted: #dcdcdc;
  --color-concrete-gray: #d4d4d4;
  --color-soft-mist: #f0f0f0;

  --font-display: 'Anton', 'Arial Narrow', sans-serif;
  --font-body: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --font-mono: 'Fira Code', monospace;

  --radius-card: 16px;
  --radius-card-lg: 24px;
}
```
