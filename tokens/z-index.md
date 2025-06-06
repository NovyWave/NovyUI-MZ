# Z-Index Tokens

This file defines the z-index scale for the design system. All values use a 1–x scale, with special values as needed.

| Token         | Value | Usage Example         |
|---------------|-------|-----------------------|
| z.1           | 10    | Base layer            |
| z.2           | 100   | Dropdowns             |
| z.3           | 1000  | Modals                |
| z.4           | 10000 | Overlays, tooltips    |
| z.auto        | auto  | Default stacking      |

## Usage Guidelines
- Use `z.1` for base content.
- Use `z.2` for dropdowns and popovers.
- Use `z.3` for modals and dialogs.
- Use `z.4` for overlays, tooltips, and always-on-top elements.
- Extend with higher values if your UI needs more stacking contexts.
- Use only the 1–x scale for z-index. Use `auto` for default stacking context.
