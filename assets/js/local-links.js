/* Live site (www.arokk.in / Cloudflare Pages) uses clean links: /, /about, /gold-loan#calc.
   When the files are opened directly from a computer (file://), turn them back into
   index.html, about.html, gold-loan.html#calc so the preview still navigates. */
(function () {
  if (location.protocol !== "file:") return;
  function fix(a) {
    var h = a.getAttribute("href");
    if (!h || h.charAt(0) !== "/" || h.charAt(1) === "/") return;
    var parts = h.split("#"), path = parts[0], hash = parts.length > 1 ? "#" + parts[1] : "";
    if (/\.[a-z0-9]+$/i.test(path)) { a.setAttribute("href", path.slice(1) + hash); return; }  // /assets/x.png -> assets/x.png
    var page = path === "/" ? "index" : path.slice(1).replace(/\/$/, "");
    a.setAttribute("href", page + ".html" + hash);
  }
  function run() { var l = document.querySelectorAll('a[href^="/"]'); for (var i = 0; i < l.length; i++) fix(l[i]); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run); else run();
  // links added later by scripts (e.g. rendered cards)
  document.addEventListener("click", function (e) { var a = e.target.closest && e.target.closest('a[href^="/"]'); if (a) fix(a); }, true);
})();
