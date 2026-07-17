/* Progressive enhancement: turn the phone nav into a hamburger dropdown.
   Shipped as a first-party <script src> (public asset) so it clears the
   do-not-ship inline-script guard. No-JS fallback = the horizontal scroll
   strip (data-enhanced absent → the collapse rules never apply). */
(function () {
  var header = document.querySelector('.site-header');
  if (!header) return;
  var btn = header.querySelector('.nav-toggle');
  var nav = header.querySelector('#site-nav');
  if (!btn || !nav) return;
  header.setAttribute('data-enhanced', '');
  function setOpen(open) {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) header.setAttribute('data-open', '');
    else header.removeAttribute('data-open');
  }
  setOpen(false);
  btn.addEventListener('click', function () {
    setOpen(btn.getAttribute('aria-expanded') !== 'true');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest && e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' || e.key === 'Esc') setOpen(false);
  });
})();
