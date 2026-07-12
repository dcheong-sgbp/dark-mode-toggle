# Dark Mode Toggle

A dark mode toggle: flip a live switch and copy the CSS-variables + JavaScript that powers it, with system-preference and saved-choice support. Zero dependencies — works in plain HTML, React, Vue, Svelte or Astro.

**▶ [Live demo](https://sgbp.tech/tools/dark-mode-toggle)**

```html
<script src="dark-mode-toggle.js"></script>
<dark-mode-toggle></dark-mode-toggle>
```

## What it does

Driving colours through CSS custom properties means one attribute on the root element repaints the whole site. A small script flips that attribute, reads prefers-color-scheme on first visit, and remembers the user's manual choice in localStorage.

## Install

```bash
npm install @sgbp/dark-mode-toggle
```

or copy `dark-mode-toggle.js` into your project.

## Further reading

Maintained by [SGBP — Singapore Build Partners](https://sgbp.tech), a studio building fast,
accessible websites for Singapore SMEs, as one of a set of free developer tools.

## License

MIT © SGBP. Contributions welcome.
