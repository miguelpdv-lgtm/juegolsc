(function () {
  var root = document.documentElement;

  /* ---- Tema --------------------------------------------------------- */
  var themeBtn = document.getElementById('theme-btn');
  function isLight() { var t = root.getAttribute('data-theme'); return t ? t === 'light' : matchMedia('(prefers-color-scheme: light)').matches; }
  function paint() {
    var l = isLight();
    themeBtn.querySelector('use').setAttribute('href', l ? '#i-luna' : '#i-sol');
    themeBtn.setAttribute('aria-label', l ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro');
  }
  themeBtn.addEventListener('click', function () { root.setAttribute('data-theme', isLight() ? 'dark' : 'light'); paint(); });
  paint();

  tbHero(document.getElementById('hero'), 'retrato');
  var header = document.querySelector('.lp-header'), heroEl = document.getElementById('inicio');
  function headerState() { header.classList.toggle('is-shown', heroEl.getBoundingClientRect().bottom < 80); }
  addEventListener('scroll', headerState, { passive: true }); headerState();
  window.tbStencil();

  /* ---- Abierto ahora (hora de Barranquilla, UTC−5) ------------------ */
  function bogota() {
    var now = new Date(), utc = now.getTime() + now.getTimezoneOffset() * 60000;
    return new Date(utc - 5 * 3600000);
  }
  function hoursState() {
    var t = bogota(), d = t.getDay(), h = t.getHours() + t.getMinutes() / 60;
    document.querySelectorAll('#hours [data-d]').forEach(function (r) { r.classList.toggle('is-today', +r.dataset.d === d); });
  }
  hoursState(); setInterval(hoursState, 60000);

  /* ---- Filtro de trabajos ------------------------------------------- */
  var chips = document.querySelectorAll('.lp-filters .tb-chip');
  chips.forEach(function (c) {
    c.addEventListener('click', function () {
      chips.forEach(function (x) { x.setAttribute('aria-pressed', String(x === c)); });
      var f = c.dataset.filter;
      document.querySelectorAll('#works .lp-work').forEach(function (w) { w.classList.toggle('is-dim', f !== 'todo' && w.dataset.tags.split(' ').indexOf(f) < 0); });
    });
  });

  /* ---- Zonas de piercing -------------------------------------------- */
  var zones = [
    { n: 'Lóbulo', g: '18G', mm: 1.0, heal: '6–8 sem', j: 'Topo', d: 'El primero de muchos. Rápido de cicatrizar y fácil de cuidar.' },
    { n: 'Hélix', g: '16G', mm: 1.2, heal: '6–12 m', j: 'Labret', d: 'Cartílago del borde superior de la oreja. Pide paciencia y no dormir de ese lado.' },
    { n: 'Tragus', g: '16G', mm: 1.2, heal: '6–12 m', j: 'Labret', d: 'El pequeño cartílago frente al oído. Ojo con audífonos de inserción las primeras semanas.' },
    { n: 'Nostril', g: '18G', mm: 1.0, heal: '4–6 m', j: 'Labret plano', d: 'Aleta de la nariz. Discreto y muy versátil para cambiar de joya después.' },
    { n: 'Septum', g: '16G', mm: 1.2, heal: '6–8 sem', j: 'Aro con bola', d: 'Pasa por la zona blanda entre las fosas nasales. Se puede esconder volteando la joya.' },
    { n: 'Ombligo', g: '14G', mm: 1.6, heal: '6–12 m', j: 'Banana', d: 'Depende mucho de la anatomía. Lo evaluamos de pie y sentado antes de marcar.' },
    { n: 'Labio', g: '16G', mm: 1.2, heal: '6–8 sem', j: 'Labret', d: 'Monroe, medusa o labret. La joya inicial es más larga por la inflamación.' },
    { n: 'Ceja', g: '16G', mm: 1.2, heal: '6–8 sem', j: 'Banana curva', d: 'Superficial y vistoso. Se coloca siguiendo el arco natural de la ceja.' }
  ];
  var picker = document.getElementById('zone-picker');
  function show(z) {
    document.getElementById('z-name').textContent = z.n;
    document.getElementById('z-desc').textContent = z.d;
    document.getElementById('z-gauge').textContent = z.g + ' · ' + String(z.mm).replace('.', ',') + ' mm';
    document.getElementById('z-heal').textContent = z.heal;
    document.getElementById('z-jewel').textContent = z.j;
    document.getElementById('z-ring').style.setProperty('--d', (z.mm * 44).toFixed(0) + 'px');
  }
  zones.forEach(function (z, i) {
    var b = document.createElement('button'); b.type = 'button'; b.className = 'tb-chip'; b.textContent = z.n;
    b.setAttribute('aria-pressed', i === 1 ? 'true' : 'false');
    b.addEventListener('click', function () { picker.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); }); show(z); });
    picker.appendChild(b);
  });
  show(zones[1]);

  /* ---- Cuidados: tatuaje / piercing --------------------------------- */
  document.querySelectorAll('[data-care]').forEach(function (b) {
    b.addEventListener('click', function () {
      document.querySelectorAll('[data-care]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      document.getElementById('care-tattoo').hidden = b.dataset.care !== 'tattoo';
      document.getElementById('care-piercing').hidden = b.dataset.care !== 'piercing';
    });
  });
})();
