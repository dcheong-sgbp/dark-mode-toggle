/**
 * <dark-mode-toggle> — live dark/light toggle demo + copy-ready snippet. Zero dependencies.
 * Built & maintained by SGBP — Singapore Build Partners (https://sgbp.tech). MIT.
 */
const DMT_SNIPPET = `<!-- Button -->
<button id="theme-toggle" aria-label="Toggle dark mode">🌙</button>

<style>
  :root { --bg:#ffffff; --fg:#111111; }
  :root[data-theme="dark"] { --bg:#0b0b0c; --fg:#f4f4f4; }
  body { background:var(--bg); color:var(--fg); transition:background .2s,color .2s; }
</style>

<script>
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  const prefersDark = matchMedia('(prefers-color-scheme: dark)').matches;
  root.dataset.theme = saved || (prefersDark ? 'dark' : 'light');
  document.getElementById('theme-toggle').onclick = () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    localStorage.setItem('theme', next);
  };
</script>`;
class DarkModeToggle extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: "open" }); this.dark = false; }
  connectedCallback() { this.render(); }
  _apply() {
    const $ = (s) => this.shadowRoot.querySelector(s);
    const p = $("#preview");
    p.toggleAttribute("data-on", this.dark);   // remove attr when off (empty string still matches [data-on])
    $("#knob").textContent = this.dark ? "Dark" : "Light";
  }
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        *,*::before,*::after{box-sizing:border-box}
        :host{display:block;width:100%;max-width:600px;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif}
        .card{border:1px solid #e2e2e2;border-radius:12px;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.06);padding:16px}
        .preview{border:1px solid #eee;border-radius:10px;padding:22px;text-align:center;transition:background .25s,color .25s;background:#fff;color:#111}
        .preview[data-on]{background:#0b0b0c;color:#f4f4f4;border-color:#333}
        .preview h3{margin:0 0 6px;font-size:17px}
        .preview p{margin:0 0 16px;font-size:13px;opacity:.8}
        .sw{display:inline-flex;align-items:center;gap:10px;cursor:pointer;user-select:none}
        .track{width:52px;height:28px;border-radius:99px;background:#ccc;position:relative;transition:background .25s}
        .preview[data-on] .track{background:#EB0028}
        .dot{position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;background:#fff;transition:transform .25s;box-shadow:0 1px 3px rgba(0,0,0,.3)}
        .preview[data-on] .dot{transform:translateX(24px)}
        .knob{font-size:12px;font-weight:700}
        .snip{margin-top:16px}
        .snip label{display:flex;justify-content:space-between;align-items:center;font-size:12px;font-weight:600;color:#555;margin-bottom:6px}
        .copy{font:inherit;font-size:11px;font-weight:700;color:#fff;background:#EB0028;border:0;border-radius:7px;padding:6px 12px;cursor:pointer}
        pre{background:#1a1a1a;color:#f4f4f4;border-radius:8px;padding:12px;font-family:ui-monospace,monospace;font-size:12px;line-height:1.5;margin:0;overflow-x:auto}
      </style>
      <div class="card">
        <div class="preview" id="preview">
          <h3>Live preview</h3>
          <p>Flip the switch — this panel is powered by the snippet below.</p>
          <div class="sw" id="sw"><div class="track"><div class="dot"></div></div><span class="knob" id="knob">Light</span></div>
        </div>
        <div class="snip">
          <label>Copy-ready snippet (CSS variables + toggle) <button class="copy" id="copy">Copy</button></label>
          <pre id="code"></pre>
        </div>
      </div>`;
    const $ = (s) => this.shadowRoot.querySelector(s);
    $("#code").textContent = DMT_SNIPPET;
    $("#sw").addEventListener("click", () => { this.dark = !this.dark; this._apply(); });
    $("#copy").addEventListener("click", () => { navigator.clipboard && navigator.clipboard.writeText(DMT_SNIPPET); const b = $("#copy"), o = b.textContent; b.textContent = "Copied"; setTimeout(() => b.textContent = o, 900); });
    this._apply();
  }
}
if (!customElements.get("dark-mode-toggle")) customElements.define("dark-mode-toggle", DarkModeToggle);
