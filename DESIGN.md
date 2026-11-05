---
name: Vishnu Surendran Portfolio
description: A light, commercial founder introduction. Ink type on near-white, one tangerine accent, hairline rules, a dark ink contact band.
colors:
  ground: "#FCFCFB"
  warm-band: "#F3F2EF"
  ink: "#0F1115"
  ink-soft: "#4A4F59"
  hairline: "#E3E1DC"
  tangerine: "#F24E0A"
  tangerine-ink: "#A5320A"
  tangerine-tint: "#FFEADF"
  dark-ink: "#0F1115"
  dark-raised: "#171A20"
  dark-rule: "#2B3038"
  on-dark: "#F5F4F1"
  on-dark-soft: "#B7BBC4"
  live-green: "#1E9E5A"
typography:
  display:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(46px, 6.2vw, 88px)"
    fontWeight: 750
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(34px, 4.4vw, 56px)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(22px, 2.2vw, 28px)"
    fontWeight: 650
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.3
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "22px"
  pill: "999px"
spacing:
  gutter: "clamp(20px, 4vw, 48px)"
  section: "clamp(72px, 9vw, 128px)"
  row: "34px"
  container: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "18px 26px"
  button-primary-hover:
    backgroundColor: "#2A2F3A"
  button-on-dark:
    backgroundColor: "{colors.tangerine}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "18px 26px"
  chip:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.sm}"
    padding: "6px 12px"
  tag-pill:
    backgroundColor: "{colors.tangerine-tint}"
    textColor: "{colors.tangerine-ink}"
    rounded: "{rounded.pill}"
    padding: "7px 14px"
  input-dark:
    backgroundColor: "#0B0D11"
    textColor: "{colors.on-dark}"
    rounded: "10px"
    padding: "14px 16px"
  contact-form:
    backgroundColor: "{colors.dark-raised}"
    rounded: "20px"
---

# Design System: Vishnu Surendran Portfolio

## Overview

**Creative North Star: "The Founder's Ledger"**

A calm, commercial, light-ground site played straight at full craft: near-white paper, ink type, hairline rules that read like ledger lines, and a single tangerine accent that is used large or as a thin underline, never as wallpaper. A dark ink band closes the page at the contact section. The page is a journey told in order (engineer, retail, agency, client, leaving corporate, what is next), so the structure is rows, rules and a vertical timeline rather than cards.

Density is generous: sections breathe with 72-128px vertical padding, copy holds to a 64ch measure, and hierarchy comes from the Bricolage display face against a quiet Hanken body, not from boxes or shadows. Motion is soft and purposeful: content rises into place once, a hand-drawn underline sweeps under one word in the headline, and a dot field reacts to the cursor.

The system rejects the dark, monospace, typewriter developer-resume look (the incumbent direction contract's thesis).

**Key Characteristics:**
- Near-white ground, ink type, one tangerine accent, warm-grey bands for alternation.
- Hairline 1px rules and 1px ink rules at the top of lists carry structure.
- Two grotesque faces: Bricolage Grotesque for display, Hanken Grotesk for everything else.
- Flat at rest; shadow only on the floating "now" card and the work screenshot.
- Dark ink contact band and footer as the single inverted zone.

## Colors

A restrained light palette: paper, ink, warm grey, and one hot orange.

### Primary
- **Tangerine** (#F24E0A): the single accent. Used large or thin: the hero emphasis word and its underline, the brand dot, timeline nodes, scroll-progress bar, focus ring, caret, hover underline in nav, and the primary button on dark. Never body text on light ground (fails contrast).
- **Burnt Tangerine Ink** (#A5320A): the accent when it must be read as text on light ground: text links, step numbers, tag pill text, comparison column header.
- **Tangerine Tint** (#FFEADF): pill and selection backgrounds, the checked option pill.

### Neutral
- **Paper** (#FCFCFB): page ground, header background.
- **Warm Band** (#F3F2EF): alternating section bands (work, process) and row hover; the bands render at 86% opacity so the dot field shows through.
- **Ink** (#0F1115): headings, primary button, strong rules, dark band.
- **Soft Ink** (#4A4F59): paragraph and secondary text.
- **Hairline** (#E3E1DC): 1px dividers, card and chip borders.
- **Dark Raised** (#171A20) and **Dark Rule** (#2B3038): form panel and borders inside the contact band.
- **On Dark** (#F5F4F1) and **On Dark Soft** (#B7BBC4): text on the dark band.
- **Live Green** (#1E9E5A): used only for the small availability dot, with a 4px #DDF3E6 halo.

### Named Rules
**The One Voice Rule.** Tangerine is the only chromatic accent. It appears large (a word, a node, a bar) or as a thin line; it never fills big surfaces and never carries small text on the light ground (use Burnt Tangerine Ink).
**The Ink Band Rule.** The only dark region is the contact section and footer. Everything above it stays light.

## Typography

**Display Font:** Bricolage Grotesque (with system-ui, sans-serif), loaded via next/font with the opsz axis.
**Body Font:** Hanken Grotesk (with system-ui, sans-serif).

**Character:** Bricolage brings tight, slightly quirky confidence to headings; Hanken keeps reading text neutral and legible at a generous 18px base.

### Hierarchy
- **Display** (750, clamp 46-88px, 0.98): the hero h1 only, tracking -0.035em, with one emphasis word in tangerine.
- **Headline** (700, clamp 34-56px, 1.04): section h2, -0.03em.
- **Title** (650, clamp 22-28px, 1.15): h3, row and card titles; feature and chapter titles scale up to clamp 28-40px.
- **Body** (400, 18px, 1.6): paragraphs in Soft Ink, held to 64ch; hero sub is clamp 18-21px at 56ch.
- **Label** (550-650, 14.5-17px): buttons, chips, dates, form labels, nav links. Sentence case, no tracking.

### Named Rules
**The Tight Display Rule.** Display faces carry negative tracking (-0.02 to -0.035em) and balanced wrapping; body text never does.
**The Sentence Case Rule.** Labels, buttons, and tags are sentence case. No uppercase tracked labels.

## Layout

A 1200px centered container with a fluid gutter (20-48px). Sections use `clamp(72px, 9vw, 128px)` vertical padding. Asymmetric two-column grids define the rhythm: hero 7/5, services 4/8 with a sticky heading, feature 7/5, about 5/7, contact 5/6. Lists are ruled rows (34px vertical padding) opened by a 1px ink rule rather than boxed cards. The journey is a vertical timeline with a 2px hairline spine, 24px ring nodes, and a 190px date column. Sticky 72px header; anchors offset by 72px.

Responsive: at 960px multi-column grids collapse to one column, the nav becomes a menu button with a full-width mobile menu, process steps go 2-up and then 1-up at 560px, comparison tables restack with inline prefixes. At 760px the timeline date column stacks. Full-width CTAs on phones.

## Elevation & Depth

Flat by default; depth is carried by hairlines and tonal bands (Paper vs Warm Band vs Ink). Two shadows exist, both soft and diffused:

- **Floating card** (`box-shadow: 0 14px 30px -12px rgba(15,17,21,.22), 0 2px 6px rgba(15,17,21,.06)`): the "right now" card overlapping the portrait.
- **Screenshot lift** (`box-shadow: 0 24px 50px -24px rgba(15,17,21,.28)`): framed work screenshots.

Behind everything sits a fixed dot-grid canvas (30px pitch) that swells and warms to tangerine near the cursor.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat. Shadows are soft, large-blur, and reserved for the two overlapping or framed media objects above.

## Shapes

Soft but not bubbly. Buttons 12px (small 10px), chips 8px, inputs 10px, cards and screenshots 16px, portrait frame 22px, contact form panel 20px, pills and avatars fully round (999px / 50%). Borders are always 1px hairline; the only 2px lines are the timeline spine, the link underline, and the ring nodes. The hero portrait is a halftone artwork with feathered mask edges, not a framed photo.

## Components

### Buttons
- **Shape:** gently rounded (12px).
- **Primary:** Ink fill, white 17px/600 label, padding 18px 26px, trailing arrow icon.
- **Hover / Focus:** fill lifts to #2A2F3A over .25s on the spring-out ease; arrow nudges 4px right. Focus is a 3px tangerine outline with 3px offset.
- **On dark:** tangerine fill with ink label, hover #FF6A2A.
- **Text link:** 600 weight in Burnt Tangerine Ink (or ink with `.ink`), 2px underline appears on hover.

### Chips and tag pills
- **Chip:** white fill, 1px hairline, 8px radius, 14.5px/550 Soft Ink. Used for tech and skills.
- **Pill (row tags):** fully round, hairline border, Paper fill.
- **Tag pill:** Tangerine Tint fill, Burnt Tangerine Ink 13.5px/650 label, fully round; marks client or retail status on work items.

### Ruled rows
List items (services, comparison, facts, jobs) sit between hairlines under a 1px ink top rule. Service rows tint to Warm Band and inset 20px on hover while an outlined round arrow fills ink.

### Navigation
Sticky Paper header, 72px tall, hairline bottom border. Brand is a 12px tangerine dot plus Bricolage 19px/650 wordmark. Links are 16px/550 Soft Ink with a 2px tangerine underline on hover. One ink small button as the CTA. Below 960px a bordered menu button opens a full-width list of 16px/600 rows.

### Timeline (signature)
The journey: a 2px hairline spine, 24px ring nodes (Paper fill, 2px tangerine border; the "next" chapter fills solid tangerine), date in Soft Ink on the left, Title-scale heading, body, optional chips and link.

### Contact form (signature)
A 20px-radius Dark Raised panel with Dark Rule border inside the ink band. Inputs are #0B0D11, 10px radius, 17px text; hover border #454B57; focus is a 3px tangerine outline plus tangerine border. Intent options are visually hidden radios rendered as round pills that turn Tangerine Tint when checked. Email address displayed large with a 2px tangerine underline and a copy button.

### Motion
One easing, `cubic-bezier(.16,1,.3,1)`. Hero content rises 22px over .9s with 90-100ms staggers; sections reveal on scroll (28px rise, .9s, staggered by index); a 3px tangerine scroll-progress bar sits at the page top. All of it, including the dot field animation and the teaser shimmer, is gated behind `prefers-reduced-motion`.

## Do's and Don'ts

### Do:
- **Do** keep tangerine (#F24E0A) large or thin; switch to #A5320A for any accent text on the light ground.
- **Do** build lists as ruled rows with a 1px ink top rule and hairline separators.
- **Do** use Bricolage for headings, labels in display contexts, and the wordmark; Hanken for all running text and UI labels.
- **Do** use the single spring-out ease and honor `prefers-reduced-motion`.
- **Do** keep the 64ch measure on paragraphs and 3px tangerine focus rings on every interactive element.
- **Do** keep the contact section and footer as the only dark zone.

### Don't:
- **Don't** drift to dark, monospace, or terminal styling on the light sections.
- **Don't** fill large surfaces with tangerine or add a second accent hue.
- **Don't** add shadows to ordinary rows or cards; hairlines do that job.
- **Don't** use uppercase tracked labels or other small-caps-style headings above sections.
- **Don't** round beyond the scale above or mix border widths beyond 1px (2px only for spine, underlines, nodes).
