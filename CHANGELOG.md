# Changelog

All notable changes to Mosaic Canvas Card. Newest first.

Entries are written for people using the card, not people reading its source. Anything
a user cannot notice — refactors, tooling, documentation — is deliberately absent.
Issue links point at the public tracker; work driven by the private tracker is
described by its effect rather than by its ticket.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

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
