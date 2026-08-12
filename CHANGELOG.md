# Changelog

All notable changes to Mosaic Canvas Card. Newest first.

Entries are written for people using the card, not people reading its source. Anything
a user cannot notice — refactors, tooling, documentation — is deliberately absent.
Issue links point at the public tracker; work driven by the private tracker is
described by its effect rather than by its ticket.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## 0.89 — 2026-08-12

### Added

- Settings has a new **About** section showing the card version, with links to the project repository, the documentation and the Ko-fi support page. The version line above the editor has moved there.

### Fixed

- Setting a corner radius on the canvas now shapes the card's outer corners too — a radius of 0 gives genuinely square corners instead of being clipped to the theme's rounding. Leave it unset to keep the theme's radius.

## 0.88 — 2026-08-11

### Breaking

- Popover cards now lay their fields out exactly as Mosaic cards do. **Align** finally
  reaches a popover's columns, so fields sit left, centre or right instead of always
  stretching the full column width; columns size to their content and are spaced by
  **Column gap** rather than the field gap; empty columns take no room; and column spans
  and docked fields work on a popover for the first time. **Popovers will look different
  after updating** — a control that filled its column now sits at the card's alignment, and
  a popover relying on evenly split columns may need its widths or Column gap set once.

### Changed

- A field's own **Align** now only sets its text. Where the field sits in its column follows
  the card's **Align**, on every field and on both card types — previously a field that
  spanned columns placed itself, which on a control meant it was placed by the setting that
  positions its label rows.

### Fixed

- Element library graphics now load on whatever address you reach Home Assistant on. A card
  set up on your local address kept asking that address for its SVGs, so the same dashboard
  opened through the Nabu Casa remote URL, a reverse proxy or the companion app showed those
  fields empty. A graphic that genuinely fails now says so in the browser console instead of
  leaving a blank space.

---

## 0.87 — 2026-08-10

### Breaking

- Popover cards no longer inherit the Mosaic card box style. Popover Card Defaults has
  moved to **Settings ▸ Global Defaults**, alongside the renamed **Mosaic Card Defaults**,
  and each surface now has its own dimming setting. **Popovers that relied on the
  inherited style will look different and need setting up once** on their own screen.
- **Existing Additional CSS on an embedded card has become Card CSS**, and is now applied
  to the embedded card itself rather than to the element holding it. Anything in it that
  positioned, sized or layered the whole card needs moving up to **Additional CSS** under
  Frame.

### Added

- Editor options explain themselves. Hover any option's name and a tooltip says what it
  does and what leaving it blank means, marked by a dotted underline, with a **?** beside
  the undo buttons pointing it out. Notes that used to sit permanently under a row have
  moved into those tooltips, so the screens are shorter, and the ones that stayed are the
  warnings worth stopping for.
- Embedded cards can be framed and hidden like everything else on the canvas. **Card
  Style** on an embedded card offers the same background, border, radius, padding, glow
  and blur a Mosaic card has, and **Card Visibility** shows or hides the card on an
  entity's state. The frame is drawn around the card, so **Transparent** still decides
  whether the card's own background shows inside it.
- **Embedded Card Default** under Global Defaults sets the starting point for every
  embedded card — the frame, **Transparent** and **Card CSS** alike. A card follows the
  global until you untick **Use global card style** or **Use global transparency** on it,
  so setting them once covers every embedded card on the canvas.
- A button group with manual options can now be saved as a reusable variant, from a
  **Variant** section of its own — its options travel with it, keeping their labels, icons
  and layout but not their entities, so you point a new copy at your own entities. A field
  already using a custom variant can update that variant in place rather than only saving
  a new one, and switching a field to a variant that brings no options of its own now
  warns before clearing the list.
- Icon position on a button group or dropdown option cell now offers **No Icon**, which
  leaves the icon out — the only way to drop it on an option that drives its own entity,
  since those otherwise always show that entity's state icon. Settable per option or for a
  whole control.
- **Popover Card Defaults** has a *Copy styling from Mosaic Card Defaults* button, which
  brings the whole box style across in one go — background and gradient, border colour,
  border, width, radius, padding, glow, additional CSS and blur. It asks first, and it
  copies values rather than linking the two, so changing your Mosaic cards later leaves
  popovers alone.

### Changed

- Every colour that can fade into a second one now has a **Gradient** checkbox beside it,
  so the gradient rows only appear when you want them, and each gradient has its own
  angle. Control gradients left without an angle still follow the control-wide **Gradient
  angle**, and an SVG that ships its own gradient keeps its own direction.
- A popover's **Card Style** and **Text Styles** screens now open with a *Use global*
  switch, so a popover follows Popover Card Defaults until you deliberately turn the
  switch off and style that one popover.
- An embedded card now has two CSS boxes instead of one, because it has two surfaces.
  **Additional CSS** under Frame styles the frame Mosaic draws — that is where anything
  sizing, moving or layering the whole element goes. **Card CSS** is applied to the
  embedded card itself, so a `--ha-card-…` override or a font change finally lands where
  the name says it does. Both have a global twin on **Embedded Card Default**, and a
  card's own declarations are added after the global ones rather than replacing them, so
  the card wins where the two name the same property.
- An overlay's corners now follow the card's own **Border radius** instead of a separate
  **Corner radius** setting, which has been removed — the panel behind a popup has no
  colour of its own, so a second radius only clipped the corners you had already set.
- The field **Type** dropdown is now listed alphabetically.

### Fixed

- Popover cards and expanded cards now render at the same scale as the mosaic canvas
  behind them, so a field styled to look right on the canvas looks the same in a popover
  instead of much smaller. One that can't fit at that scale shrinks until it does.
- Pressing Escape in the colour picker now cancels — the colour returns to what it was
  when you opened the picker, and the card editor stays open instead of closing behind it.
  Clicking outside the picker still keeps the colour you were trying.

---

## 0.85 — 2026-08-05

### Changed

- The **Selector** control is now called **Button Group**. Existing cards need
  `type: selector` changed to `type: button_group`, and any hand-written `selector_*`
  style keys changed to `button_group_*`.

---

## 0.81 — 2026-08-04

### Fixed

- **Done** in a field editor returns to the card editor instead of dropping you back to
  the home menu
  ([#3](https://github.com/ratava/mosaic-canvas-card/issues/3)).

---

## 0.80 — 2026-08-03

Pre-release. Entries below were reconstructed from the issue tracker after the fact —
they are grouped by theme rather than itemised, and this is the last release written
retrospectively.

### Added

- Editor-wide search and quick-jump across every navigation screen.
- Undo/redo for editor changes, with an undo prompt on destructive actions.
- A Config Health screen that reports dangling references and dead entity bindings.
- One-click duplicate on item-card rows, and touch-capable drag reordering.
- Double-click an element in the expanded mosaic editor to close it and jump straight to
  that element's config screen.
- Recent-screen jump chips on the ribbon root, and small sections now render inline as
  expansion panels instead of costing a navigation hop.
- Per-section "modified" badges and a per-section **Clear overrides** action.
- Entity-aware placeholders: name, unit, decimals and range hints are suggested from the
  entity's current state.
- Editor rows for settings that previously required hand-written YAML — embedded card
  X/Y position, flow endpoint offsets, and option icon style.
- A warning before entering Grid placement mode, which re-lays out the card one way.
- An **Include entities** option when exporting a template.
- A short tutorial after the initial setup wizard.

### Changed

- Card and editor styling migrated to CSS custom properties with Home Assistant theme
  fallbacks, so the card follows your theme instead of fighting it.

### Fixed

- Remote SVG content is sanitized before rendering. Two separate injection paths were
  closed.
- Unavailable entities show a no-data state instead of rendering a confident zero.
- Statistics read correctly: cumulative sums, sub-hour periods with no data, and
  daylight-saving boundaries were all producing wrong numbers.
- Virtual fields no longer compute against shifted operands when one input is
  unavailable.
- Value fields honour the Global Defaults power unit instead of always auto-scaling.
- Clearing a value in the editor no longer resurrects a deprecated legacy setting.
- Editor selection and navigation state stays correct after external edits, reorders and
  deletions.
- Live updates no longer freeze virtuals, graphs and embedded cards, or thrash the layout
  on every state change.
- Position tools in the expanded editor: zone pixel inputs, alignment precision, and grid
  drag membership.
- Theme and contrast fixes, including an unreadable setup wizard in light themes.
- Flow line midpoints can be selected and dragged again.

---

## 0.60 — 2026-07-26

### Added

- Control fields: Dropdown, Selector, Input, Button, SpinBox, Slider and Toggle.
- Embed a third-party Home Assistant card as a field.
- Group layout controls.

### Changed

- Extensive ribbon menu revisions.

---

## 0.50 — 2026-07-20

### Added

- The ribbon editor menu, replacing the accordion editor.

---

## 0.20 — 2026-07-19

First tagged release.
