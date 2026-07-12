# Dark Mode Toggle

A dark mode toggle: flip a live switch and copy the CSS-variables + JavaScript that powers it, with system-preference and saved-choice support. A free, zero-dependency Web Component you can drop into any site.

```html
<script src="dark-mode-toggle.js"></script>
<dark-mode-toggle></dark-mode-toggle>
```

## What it does

Driving colours through CSS custom properties means one attribute on the root element repaints the whole site. A small script flips that attribute, reads prefers-color-scheme on first visit, and remembers the user's manual choice in localStorage.

## When you'd use it

Adding a dark theme to any site without per-component theme logic.

See the [Usage & API guide](usage.md) for framework examples, or the [guide](guide.md) for tips.

## About

This tool is maintained by [SGBP — Singapore Build Partners](https://sgbp.tech), a Singapore
studio building fast, accessible websites for SMEs. It is part of a set of free developer tools.
