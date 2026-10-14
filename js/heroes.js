/* ==========================================================================
   THE BODY SHOP · heroes.js
   Plantillas de los heros. El titular es el nombre del estudio.
   ========================================================================== */
(function () {
  var IMG = { artista: 'img/artista-premio.jpg' };
  var WA = 'https://wa.me/message/UXP43RGK2EU6G1';

  function links() {
    return '<nav class="hx__links" aria-label="Principal"><a href="#trabajos">Trabajos</a><a href="#piercing">Piercing</a><a href="#estudio">Estudio</a>' +
      '<a class="hx__book" href="' + WA + '">Citas</a></nav>';
  }
  var grain = '<span class="hx__grain" aria-hidden="true"></span>';

  var T = {
    retrato: function () {
      return '<div class="hx hx--retrato">' +
        '<div class="hx__photo"><img class="hx__bw" src="' + IMG.artista + '" alt="Artista de The Body Shop con el trofeo de primer lugar en realismo color"></div>' + grain +
        '<div class="hx__top"><a class="hx__mark" href="#inicio" aria-label="The Body Shop, inicio"><svg viewBox="0 0 360 248" aria-hidden="true"><use href="#tb-lockup"/></svg></a>' + links() + '</div>' +
        '<h1 class="hx__name"><span>The Body</span><span>Shop</span></h1>' +
        '<div class="hx__foot"><span><b>Tattoo &amp; Piercing</b> · Cra. 43 #75B-187 · Barranquilla</span>' +
        '<span class="hx__caption">1er lugar realismo color · Expo Atlántico</span></div></div>';
    }
  };

  window.tbHero = function (el, id) {
    el.innerHTML = T[id]();
    return el.firstElementChild;
  };
})();
