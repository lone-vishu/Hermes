---
name: Zero-State Tactical Defense
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#3d4947'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#6d7a77'
  outline-variant: '#bcc9c6'
  surface-tint: '#006a61'
  primary: '#00685f'
  on-primary: '#ffffff'
  primary-container: '#008378'
  on-primary-container: '#f4fffc'
  inverse-primary: '#6bd8cb'
  secondary: '#006b5f'
  on-secondary: '#ffffff'
  secondary-container: '#6df5e1'
  on-secondary-container: '#006f64'
  tertiary: '#016950'
  on-tertiary: '#ffffff'
  tertiary-container: '#2d8268'
  on-tertiary-container: '#f5fff8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#89f5e7'
  primary-fixed-dim: '#6bd8cb'
  on-primary-fixed: '#00201d'
  on-primary-fixed-variant: '#005049'
  secondary-fixed: '#71f8e4'
  secondary-fixed-dim: '#4fdbc8'
  on-secondary-fixed: '#00201c'
  on-secondary-fixed-variant: '#005048'
  tertiary-fixed: '#9ff3d3'
  tertiary-fixed-dim: '#84d6b8'
  on-tertiary-fixed: '#002117'
  on-tertiary-fixed-variant: '#00513d'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  headline-xl:
    fontFamily: IBM Plex Sans
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-xl-mobile:
    fontFamily: IBM Plex Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: IBM Plex Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: IBM Plex Sans
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: IBM Plex Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: IBM Plex Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-md:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: IBM Plex Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1.25rem
  space-xl: 2rem
---

## Brand & Style

This design system expresses an ultra-minimalist, industrial telemetry paradigm tailored for high-stakes cybersecurity and infrastructure control planes. Drawing direct inspiration from the technical quietude of Ollama's developer-first aesthetic and the razor-sharp mechanical rigor of modern shadcn/ui components, it rejects visual clutter, glossy skeuomorphism, and superfluous decoration in favor of sheer informational density and calm operational clarity.

The interface evokes absolute operational command, hyper-focused situational awareness, and forensic precision. The visual style merges technical minimalism with high-density data visualization: flat layered planes, monospaced diagnostic markers, crisp hairline dividers, and deliberate high-contrast semantic accents that instantly communicate threat telemetry without cognitive fatigue.

## Colors

The palette is engineered around an architectural light theme dominated by pure chalk and surgical off-white surfaces, paired with slate neutral scales for razor-sharp visual hierarchy.

- **Base Surfaces**: Pure white canvas (`#FFFFFF`) for active working panels and content wells; off-white technical layers (`#F8FAFC` and `#F1F5F9`) for peripheral structural sidebars, table headers, and recessed system tracks.
- **Structural Haarlines & Borders**: Sub-pixel precision dividers use crisp cool slates (`#E2E8F0` and `#E5E7EB`).
- **Typography Neutrals**: Highest-order text sits in deep charcoal slate (`#0F172A`), secondary labels and metadata rely on mid-slate (`#334155`), while disabled, tertiary, or protocol metadata rests in muted slate (`#64748B`).
- **Brand Accents**: Primary action states and selected tactical indicators leverage industrial deep teal (`#0D9488`), secondary active states use bright emerald teal (`#14B8A6`), and fine terminal telemetry/glow highlights employ soft seafoam (`#8DE0C1`).
- **Semantic Severity Matrix**:
  - `Critical`: `#EF4444` (emphasis text/badge fill) and `#F87171` (subtle border/indicator aura).
  - `High`: `#F59E0B` (primary warning fill) and `#FBBF24` (indicator accent).
  - `Medium`: `#EAB308` (advisory status).
  - `Low`: `#3B82F6` (informational telemetry).

## Typography

Typography delivers strict legibility and engineering authority. Headings and primary body copy utilize IBM Plex Sans for clean geometric neutrality with humanist cues. JetBrains Mono is designated for all telemetry values, hashes, IP vectors, table headers, labels, and status badges to enforce columnar vertical scanning and terminal-grade accuracy.

All monospaced labels must be set in uppercase when designating operational status (e.g., `CRITICAL`, `RESOLVED`, `SECURE`) with explicit positive letter spacing. Numeric readouts must leverage tabular figures (`tnum`) across tables and monitoring dashboards to eliminate layout shifting during continuous data streaming.

## Layout & Spacing

The layout is built upon an engineering-first fluid grid structured with strict 4px base increments. Content containers align to 12-column layouts on wide monitors and collapse gracefully to 4-column structures on compact mobile devices.

- **Desktop (>= 1280px)**: 12-column grid utilizing `gutter-desktop` (1.5rem) and full screen shell padding of `margin-desktop` (2rem). Primary workspace incorporates collapsible 260px tactical side panels and infinite-width content logs.
- **Tablet (768px - 1279px)**: 8-column layout with 1rem gutters; secondary panels tuck into drawer flyouts or tabular switches.
- **Mobile (< 768px)**: 4-column layout with edge-to-edge full width cards; canvas borders tuck inward using `margin` (1rem). High-density telemetry switches to vertically stacked key-value blocks.

## Elevation & Depth

Visual hierarchy rejects heavy, artificial drop shadows in favor of crisp tonal layers and ultra-thin border planes (`1px solid #E2E8F0`). 

- **Level 0 (Canvas Base)**: `#F8FAFC`. Houses static panels, persistent toolbars, and backdrop layout grids.
- **Level 1 (Card / Table Surface)**: `#FFFFFF`. Sits directly atop the canvas, delineated exclusively by a 1px border (`#E2E8F0`). Zero shadow.
- **Level 2 (Hover / Active Module)**: `#FFFFFF` paired with an imperceptible ambient contact shadow: `0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.05)`.
- **Level 3 (Overlays & Command Palettes)**: `#FFFFFF` floating over a subtle darkened scrim (`rgba(15, 23, 42, 0.3)` with a backdrop blur of `4px`). Shadow parameter: `0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.04)`.

## Shapes

The design system adopts a disciplined "Soft" curvature philosophy (Value 1). Radii are controlled, engineered, and intentional:
- Standard interactive elements (buttons, input fields, dropdown trigger buttons) utilize a precise `0.25rem` (4px) radius.
- Cards, modal containers, and perimeter dashboard panels utilize `rounded-lg` (`0.5rem` / 8px).
- Status pill tags and operational status indicators utilize pure full-capsule radii to create stark formal contrast against rectangular data tables.

## Components

### Buttons
- **Primary**: Solid deep slate background (`#0F172A`), white text (`#FFFFFF`), 4px border radius. On hover, background shifts to `#1E293B`.
- **Accent Primary**: Filled `#0D9488` with `#FFFFFF` text for core system actions (e.g., "Deploy Fix", "Execute Sweep").
- **Secondary / Outline**: Pure white background (`#FFFFFF`), hairline border (`#E2E8F0`), charcoal text (`#0F172A`). On hover, surface switches to `#F8FAFC` with border `#CBD5E1`.
- **Ghost**: Transparent base, text `#334155`. On hover, surface shifts to `#F1F5F9`.
- **Dimensions**: Compact `36px` height standard, `8px 14px` padding, font `label-md`.

### Status Badges & Pills
- Pill-shaped (`rounded-full`), padded `2px 8px`, typography `label-sm`.
- **Critical Severity**: Surface `rgba(239, 68, 68, 0.1)`, text `#EF4444`, border `1px solid rgba(239, 68, 68, 0.2)`.
- **High Severity**: Surface `rgba(245, 158, 11, 0.1)`, text `#F59E0B`, border `1px solid rgba(245, 158, 11, 0.2)`.
- **Medium Severity**: Surface `rgba(234, 179, 8, 0.1)`, text `#CA8A04`, border `1px solid rgba(234, 179, 8, 0.2)`.
- **Low Severity**: Surface `rgba(59, 130, 246, 0.1)`, text `#3B82F6`, border `1px solid rgba(59, 130, 246, 0.2)`.
- **System Active (Teal)**: Surface `rgba(13, 148, 136, 0.1)`, text `#0D9488`, border `1px solid rgba(13, 148, 136, 0.2)`.

### Form Controls & Inputs
- **Input Fields**: Height `36px`, background `#FFFFFF`, border `1px solid #E2E8F0`, corner radius `4px`, padding `0 12px`. Text in `#0F172A`, placeholder `#64748B`. Focus ring: strict `2px solid #0D9488` offset by `2px`.
- **Checkboxes & Radios**: 16px square/circle, border `1px solid #CBD5E1`, background `#FFFFFF`. Active checked state: `#0D9488` fill with crisp white internal mark.

### Cards & Panels
- Background `#FFFFFF`, border `1px solid #E2E8F0`, radius `8px`. Padding follows internal `space-lg` (1.25rem). Card headers feature hairline lower divider lines (`1px solid #F1F5F9`) separating high-level meta from data rows.

### Tables & Telemetry Lists
- Table headers set in `#F8FAFC`, uppercase `label-sm` in `#64748B`, with explicit `1px solid #E2E8F0` top/bottom dividers. Rows feature pure white backgrounds with `#F8FAFC` on cursor hover. Borderless lateral bounds for an uncluttered visual horizon.