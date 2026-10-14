/* ==========================================================================
   THE BODY SHOP · stencil.js
   Convierte la foto de una pieza en su stencil de transferencia (líneas
   violeta sobre papel) y monta el comparador stencil / tinta.
   Uso: <div class="tb-stencil" data-stencil> <canvas></canvas> <img> … </div>
   ========================================================================== */
(function () {
  var INK = [75, 47, 166];      /* violeta de transferencia */
  var PAPER = [247, 245, 251];

  /* opts: { ink: [r,g,b], paper: [r,g,b], alpha: true (fondo transparente), max: px } */
  function stencilize(img, canvas, opts) {
    opts = opts || {};
    var ink = opts.ink || INK, paper = opts.paper || PAPER;
    /* offsetWidth no cambia con transform: scale, así que sirve dentro de vistas previas */
    var bw = canvas.parentElement.offsetWidth || 1, bh = canvas.parentElement.offsetHeight || 1;
    var w = Math.max(240, Math.min(opts.max || 720, Math.round(bw * Math.min(window.devicePixelRatio || 1, 2))));
    var h = Math.round(w * bh / bw);
    canvas.width = w; canvas.height = h;
    var ctx = canvas.getContext('2d', { willReadFrequently: true });
    /* encuadre "cover", igual que la foto encima */
    var s = Math.max(w / img.naturalWidth, h / img.naturalHeight);
    var dw = img.naturalWidth * s, dh = img.naturalHeight * s;
    ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);
    var src = ctx.getImageData(0, 0, w, h), d = src.data;
    var g = new Float32Array(w * h), b = new Float32Array(w * h);
    for (var i = 0, p = 0; p < g.length; p++, i += 4) g[p] = d[i] * .299 + d[i + 1] * .587 + d[i + 2] * .114;
    /* desenfoque 3×3 para que la piel no haga ruido */
    for (var y = 1; y < h - 1; y++) for (var x = 1; x < w - 1; x++) {
      var k = y * w + x, sum = 0;
      for (var yy = -1; yy <= 1; yy++) for (var xx = -1; xx <= 1; xx++) sum += g[k + yy * w + xx];
      b[k] = sum / 9;
    }
    /* Sobel + umbral suave: los bordes se vuelven trazo */
    var out = ctx.createImageData(w, h), o = out.data;
    for (y = 0; y < h; y++) for (x = 0; x < w; x++) {
      var q = (y * w + x) * 4, a = 0;
      if (y > 0 && y < h - 1 && x > 0 && x < w - 1) {
        k = y * w + x;
        var gx = -b[k - w - 1] - 2 * b[k - 1] - b[k + w - 1] + b[k - w + 1] + 2 * b[k + 1] + b[k + w + 1];
        var gy = -b[k - w - 1] - 2 * b[k - w] - b[k - w + 1] + b[k + w - 1] + 2 * b[k + w] + b[k + w + 1];
        var m = Math.sqrt(gx * gx + gy * gy);
        a = Math.max(0, Math.min(1, (m - 38) / 70));
        /* las sombras muy oscuras se marcan con trama, como en el stencil a mano */
        if (b[k] > 16 && b[k] < 62 && ((x + y) % 6 === 0)) a = Math.max(a, .5);
      }
      if (opts.alpha) { o[q] = ink[0]; o[q + 1] = ink[1]; o[q + 2] = ink[2]; o[q + 3] = 255 * a; continue; }
      o[q]     = paper[0] + (ink[0] - paper[0]) * a;
      o[q + 1] = paper[1] + (ink[1] - paper[1]) * a;
      o[q + 2] = paper[2] + (ink[2] - paper[2]) * a;
      o[q + 3] = 255;
    }
    ctx.putImageData(out, 0, 0);
  }

  function mount(root) {
    var canvas = root.querySelector('canvas'), img = root.querySelector('img'), range = root.querySelector('input');
    function set(v) { root.style.setProperty('--split', v + '%'); }
    if (range) { set(range.value); range.addEventListener('input', function () { set(range.value); }); }
    function draw() { try { stencilize(img, canvas); } catch (e) { root.classList.add('is-nostencil'); } }
    if (img.complete && img.naturalWidth) draw(); else img.addEventListener('load', draw);
    var t; window.addEventListener('resize', function () { clearTimeout(t); t = setTimeout(draw, 200); });
    /* Una pasada lenta de stencil a tinta al aparecer, una sola vez */
    if (range && root.hasAttribute('data-sweep') && !matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (es) {
        if (!es[0].isIntersecting) return; io.disconnect();
        var start = performance.now(), from = 88, to = +range.value;
        (function step(now) {
          var k = Math.min(1, (now - start) / 1800), e = k < .5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
          set(from + (to - from) * e);
          if (k < 1) requestAnimationFrame(step);
        })(start);
      }, { threshold: .4 });
      io.observe(root);
    }
  }
  window.tbStencilize = stencilize;
  window.tbStencil = function () { document.querySelectorAll('[data-stencil]').forEach(mount); };
})();
