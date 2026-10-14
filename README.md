# The Body Shop · página de inicio

Propuesta de página de inicio para The Body Shop Tattoo & Piercing Studio
(Cra. 43 #75B-187, El Porvenir, Barranquilla · [@tbs_colombia](https://www.instagram.com/tbs_colombia/)).
Sitio estático sin dependencias ni paso de compilación: se sirve tal cual.
En producción: https://thebodytattoo.vercel.app

```
index.html          página
css/sistema.css     tokens y componentes del sistema de diseño (tema tinta y papel)
css/heroes.css      hero "Retrato" (referencia: Shamrock Social Club, Los Ángeles)
css/inicio.css      layout de la página
js/stencil.js       genera el stencil de una foto y monta el comparador stencil / tinta
js/heroes.js        plantilla del hero
js/inicio.js        tema, horario en hora de Barranquilla, filtros, zonas de piercing, cuidados
img/                fotos del perfil de Instagram del estudio
```

Para verla en local: `python3 -m http.server` y abrir http://localhost:8000.
El comparador de stencil necesita servirse por HTTP (por `file://` el navegador bloquea leer los píxeles de la foto).

Pendiente de confirmar con el estudio: joyería de titanio y perforación con aguja,
tiempos de cicatrización y duración de sesiones, nombre del artista ganador de la Expo Atlántico.
