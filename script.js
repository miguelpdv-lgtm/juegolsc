const diasSemana = [
    { nombre: 'Lunes',     imagen: 'images/dias/lunes.png',     concepto: 'images/conceptos/concept-lunes.jpg',     emoji: '📅', frase: 'Odio los lunes... ¡pero amo aprender LSC!' },
    { nombre: 'Martes',    imagen: 'images/dias/martes.png',    concepto: 'images/conceptos/concept-martes.jpg',    emoji: '📅', frase: 'Martes de productividad, ¡vamos con todo!' },
    { nombre: 'Miercoles', imagen: 'images/dias/miercoles.png', concepto: 'images/conceptos/concept-miercoles.png', emoji: '📅', frase: 'Ombligo de la semana, ya falta poco' },
    { nombre: 'Jueves',    imagen: 'images/dias/jueves.png',    concepto: 'images/conceptos/concept-jueves.jpg',    emoji: '📅', frase: '#TBT los jueves de nostalgia' },
    { nombre: 'Viernes',   imagen: 'images/dias/viernes.png',   concepto: 'images/conceptos/concept-viernes.jpg',   emoji: '🎉', frase: '¡Por fin es viernes! Tiempo de celebrar' },
    { nombre: 'Sabado',    imagen: 'images/dias/sabado.png',    concepto: 'images/conceptos/concept-sabado.jpg',    emoji: '🌞', frase: 'Sábado de dormir hasta tarde sin culpa' },
    { nombre: 'Domingo',   imagen: 'images/dias/domingo.png',   concepto: 'images/conceptos/concept-domingo.jpg',   emoji: '🌻', frase: 'Domingo en familia y buena comida' }
];

const mesesAno = [
    { nombre: 'Enero',      imagen: 'images/meses/enero.png',      concepto: 'images/conceptos/concept-enero.jpg',      emoji: '🎆', frase: 'Año nuevo, vida nueva, metas nuevas' },
    { nombre: 'Febrero',    imagen: 'images/meses/febrero.png',    concepto: 'images/conceptos/concept-febrero.png',    emoji: '❤️', frase: 'Febrero de amor y amistad colombiana' },
    { nombre: 'Marzo',      imagen: 'images/meses/marzo.png',      concepto: 'images/conceptos/concept-marzo.jpg',      emoji: '🌸', frase: 'Marzo de flores y celebración de mujeres' },
    { nombre: 'Abril',      imagen: 'images/meses/abril.png',      concepto: 'images/conceptos/concept-abril.jpg',      emoji: '🌧️', frase: 'Abril, aguas mil... ¡paraguas listo!' },
    { nombre: 'Mayo',       imagen: 'images/meses/mayo.png',       concepto: 'images/conceptos/concept-mayo.jpg',       emoji: '🌺', frase: 'Mayo de madres, la reina del hogar' },
    { nombre: 'Junio',      imagen: 'images/meses/junio.png',      concepto: 'images/conceptos/concept-junio.jpg',      emoji: '☀️', frase: 'Junio de papás y vacaciones escolares' },
    { nombre: 'Julio',      imagen: 'images/meses/julio.png',      concepto: 'images/conceptos/concept-julio.png',      emoji: '🇨🇴', frase: 'Julio de independencia y orgullo patrio' },
    { nombre: 'Agosto',     imagen: 'images/meses/agosto.png',     concepto: 'images/conceptos/concept-agosto.jpg',     emoji: '🌻', frase: 'Agosto de sol, playa y vacaciones' },
    { nombre: 'Septiembre', imagen: 'images/meses/septiembre.png', concepto: 'images/conceptos/concept-septiembre.jpg', emoji: '🍂', frase: 'Septiembre, primavera de flores nuevas' },
    { nombre: 'Octubre',    imagen: 'images/meses/octubre.png',    concepto: 'images/conceptos/concept-octubre.jpg',    emoji: '🎃', frase: 'Octubre de Halloween y dulces terror' },
    { nombre: 'Noviembre',  imagen: 'images/meses/noviembre.png',  concepto: 'images/conceptos/concept-noviembre.jpg',  emoji: '🍁', frase: 'Noviembre de velitas y tradición' },
    { nombre: 'Diciembre',  imagen: 'images/meses/diciembre.png',  concepto: 'images/conceptos/concept-diciembre.jpg',  emoji: '🎄', frase: 'Diciembre de navidad, novenas y regalos' }
];

const masVocabulario = [
    { nombre: 'Dia',               imagen: 'images/mas/dia.png',               concepto: 'images/conceptos/concept-dia.png',               emoji: '🌤️', frase: 'Hoy es un buen día para aprender señas' },
    { nombre: 'Todos los dias',    imagen: 'images/mas/todos-los-dias.png',    concepto: 'images/conceptos/concept-todos-los-dias.jpg',    emoji: '🔄', frase: 'Practico LSC todos los días sin falta' },
    { nombre: 'Semana',            imagen: 'images/mas/semana.png',            concepto: 'images/conceptos/concept-semana.jpg',            emoji: '📆', frase: 'Esta semana tiene muchas sorpresas' },
    { nombre: 'Mes',               imagen: 'images/mas/mes.png',               concepto: 'images/conceptos/concept-mes.jpg',               emoji: '🗓️', frase: 'Este mes tiene 30 días de oportunidades' },
    { nombre: 'Año',               imagen: 'images/mas/ano.png',               concepto: 'images/conceptos/concept-ano.png',               emoji: '📅', frase: 'Doce meses forman un año de logros' },
    { nombre: 'Vacaciones',        imagen: 'images/mas/vacaciones.png',        concepto: 'images/conceptos/concept-vacaciones.png',        emoji: '🏖️', frase: '¡Vacaciones en diciembre, playa y descanso!' },
    { nombre: 'Viejo (Persona)',   imagen: 'images/mas/viejo-persona.png',     concepto: 'images/conceptos/concept-viejo-persona.jpg',     emoji: '👴', frase: 'Mi abuelo es viejo pero muy sabio' },
    { nombre: 'Viejo (Cosas)',     imagen: 'images/mas/viejo-cosas.png',       concepto: 'images/conceptos/concept-viejo-cosas.avif',      emoji: '🪨', frase: 'Ese carro está viejo, necesita taller' },
    { nombre: 'Feriado',           imagen: 'images/mas/feriado.png',           concepto: 'images/conceptos/concept-feriado.png',           emoji: '🎊', frase: 'El 20 de julio es feriado en Colombia' },
    { nombre: 'Hora',              imagen: 'images/mas/hora.png',              concepto: 'images/conceptos/concept-hora.jpg',              emoji: '🕐', frase: '¿Qué hora es? ¡Ya es hora de practicar!' },
    { nombre: 'Minuto',            imagen: 'images/mas/minuto.png',            concepto: 'images/conceptos/concept-minuto.png',            emoji: '⏱️', frase: 'Dame un minuto, casi termino' },
    { nombre: 'Nuevo',             imagen: 'images/mas/nuevo.png',             concepto: 'images/conceptos/concept-nuevo.png',             emoji: '✨', frase: 'Tengo un celular nuevo, ¡qué emoción!' },
    { nombre: 'Puente (Festivo)',  imagen: 'images/mas/puente-festivo.png',    concepto: 'images/conceptos/concept-puente-festivo.png',    emoji: '🌉', frase: 'Hicimos puente festivo, ¡largo finde!' },
    { nombre: 'Seguir',            imagen: 'images/mas/seguir.png',            concepto: 'images/conceptos/concept-seguir.jpg',            emoji: '➡️', frase: 'Sigue adelante, nunca pares de aprender' },
    { nombre: 'Semana Santa',      imagen: 'images/mas/semana-santa.png',      concepto: 'images/conceptos/concept-semana-santa.png',      emoji: '✝️', frase: 'Semana Santa en familia y tradición' },
    { nombre: 'Todo el dia',       imagen: 'images/mas/todo-el-dia.png',       concepto: 'images/conceptos/concept-todo-el-dia.jpg',       emoji: '🌅', frase: 'Estudié LSC todo el día y aprendí mucho' }
];

const bancoFrases = [
    { texto: "¿Qué mes viene después de marzo?", respuesta: "Abril", tipo: "texto" },
    { texto: "El primer día de la semana escolar es:", respuesta: "Lunes", tipo: "texto" },
    { texto: "En Colombia, muchas personas salen de ___ en diciembre.", respuesta: "Vacaciones", tipo: "texto" },
    { texto: "Después de jueves sigue:", respuesta: "Viernes", tipo: "texto" },
    { texto: "Doce meses forman un:", respuesta: "Año", tipo: "texto" },
    { texto: "Cuando algo acaba de salir, es:", respuesta: "Nuevo", tipo: "texto" },
    { texto: "Si una persona tiene mucha edad, se dice que es:", respuesta: "Viejo (Persona)", tipo: "texto" },
    { texto: "Un reloj normalmente muestra la:", respuesta: "Hora", tipo: "texto" },
    { texto: "Después de sábado viene:", respuesta: "Domingo", tipo: "texto" },
    { texto: "En un reloj hay 60 ___ en una hora.", respuesta: "Minuto", tipo: "texto" },
    { texto: "El mes que sigue después de agosto es:", respuesta: "Septiembre", tipo: "texto" },
    { texto: "Cuando no se trabaja por una celebración nacional, es un:", respuesta: "Feriado", tipo: "texto" },
    { texto: "Si una camisa tiene muchos años de uso, está:", respuesta: "Viejo (Cosas)", tipo: "texto" },
    { texto: "Después de martes sigue:", respuesta: "Miercoles", tipo: "texto" }
];

const todosLosItems = [...diasSemana, ...mesesAno, ...masVocabulario];

let zoomLista = [];
let zoomIndice = 0;
let zoomOrigen = '';

let frasesJuego = [];
let fraseActual = 0;
let puntosFrases = 0;
let respondiendoFrase = false;

function mostrarPantalla(id) {
    document.querySelectorAll('.pantalla').forEach(p => p.classList.remove('activa'));
    document.getElementById('pantalla-' + id).classList.add('activa');
    window.scrollTo(0, 0);
}

function renderizarTarjetas() {
    document.getElementById('grid-dias').innerHTML   = diasSemana.map((item, i)    => crearTarjetaHTML(item, 'dias',  i)).join('');
    document.getElementById('grid-meses').innerHTML  = mesesAno.map((item, i)      => crearTarjetaHTML(item, 'meses', i)).join('');
    document.getElementById('grid-mas').innerHTML    = masVocabulario.map((item, i) => crearTarjetaHTML(item, 'mas',   i)).join('');
}

// ── Tarjeta con DOS imágenes: concepto (arriba) + seña (abajo) ──────────────
function crearTarjetaHTML(item, categoria, indice) {
    const idConcepto = 'cpt-' + item.nombre.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const idSena     = 'sna-' + item.nombre.toLowerCase().replace(/[^a-z0-9]/g, '-');
    return `
        <div class="tarjeta tarjeta-dual" onclick="abrirZoom('${categoria}', ${indice})">
            <!-- Imagen concepto (representativa) -->
            <div class="tarjeta-concepto-wrapper">
                <img src="${item.concepto}" alt="Concepto ${item.nombre}"
                     class="tarjeta-concepto-img" id="${idConcepto}"
                     onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                <div class="tarjeta-concepto-fallback" style="display:none">${item.emoji || '🤟'}</div>
            </div>
            <!-- Imagen seña (LSC) -->
            <div class="tarjeta-sena-wrapper">
                <img src="${item.imagen}" alt="Seña de ${item.nombre}"
                     class="tarjeta-sena" id="${idSena}"
                     onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                <div class="tarjeta-sena-fallback" style="display:none">Seña de ${item.nombre}</div>
            </div>
            <div class="tarjeta-nombre">${item.nombre}</div>
        </div>
    `;
}

function mostrarPlaceholder(img, nombre) {
    img.style.display = 'none';
    const placeholder = document.createElement('div');
    placeholder.className = 'tarjeta-placeholder';
    placeholder.textContent = 'Imagen de ' + nombre;
    img.parentNode.insertBefore(placeholder, img);
}

// ── Zoom con DOS imágenes ────────────────────────────────────────────────────
function abrirZoom(categoria, indice) {
    if (categoria === 'dias')       zoomLista = [...diasSemana];
    else if (categoria === 'meses') zoomLista = [...mesesAno];
    else                            zoomLista = [...masVocabulario];
    zoomIndice = indice;
    zoomOrigen = 'aprende';
    mostrarPantalla('zoom');
    actualizarZoom();
}

function actualizarZoom() {
    const item = zoomLista[zoomIndice];

    // ── concepto ──
    const imgConcepto   = document.getElementById('zoom-concepto-img');
    const phConcepto    = document.getElementById('zoom-concepto-placeholder');
    imgConcepto.src = item.concepto || '';
    imgConcepto.classList.remove('visible');
    phConcepto.classList.remove('oculto');
    imgConcepto.onload  = () => { imgConcepto.classList.add('visible'); phConcepto.classList.add('oculto'); };
    imgConcepto.onerror = () => { imgConcepto.classList.remove('visible'); phConcepto.classList.remove('oculto'); phConcepto.textContent = item.emoji || '🤟'; };

    // ── seña ──
    const imgSena   = document.getElementById('zoom-img');
    const phSena    = document.getElementById('zoom-placeholder');
    imgSena.src = item.imagen;
    imgSena.classList.remove('visible');
    phSena.classList.remove('oculto');
    imgSena.onload  = () => { imgSena.classList.add('visible'); phSena.classList.add('oculto'); };
    imgSena.onerror = () => { imgSena.classList.remove('visible'); phSena.classList.remove('oculto'); phSena.textContent = 'Seña de ' + item.nombre; };

    // ── nombre, frase, contador ──
    document.getElementById('zoom-nombre').textContent = item.nombre;
    const fraseEl = document.getElementById('zoom-frase');
    if (fraseEl) {
        fraseEl.textContent = item.frase || '';
        fraseEl.classList.remove('visible');
        void fraseEl.offsetWidth;
        fraseEl.classList.add('visible');
    }

    const contador  = document.getElementById('zoom-contador');
    const btnAnt    = document.querySelectorAll('.btn-zoom-nav')[0];
    const btnSig    = document.querySelectorAll('.btn-zoom-nav')[1];
    contador.textContent = (zoomIndice + 1) + ' / ' + zoomLista.length;
    btnAnt.disabled = zoomIndice === 0;
    btnSig.disabled = zoomIndice === zoomLista.length - 1;
}

function zoomAnterior() {
    if (zoomIndice > 0) { zoomIndice--; actualizarZoom(); reproducirSonido('click'); }
}
function zoomSiguiente() {
    if (zoomIndice < zoomLista.length - 1) { zoomIndice++; actualizarZoom(); reproducirSonido('click'); }
}
function cerrarZoom() { mostrarPantalla(zoomOrigen); }

// ── Audio ────────────────────────────────────────────────────────────────────
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function reproducirSonido(tipo) {
    try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        if (tipo === 'correcto') {
            osc.frequency.setValueAtTime(523, audioCtx.currentTime);
            osc.frequency.setValueAtTime(659, audioCtx.currentTime + 0.1);
            osc.frequency.setValueAtTime(784, audioCtx.currentTime + 0.2);
            gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
            osc.start(audioCtx.currentTime); osc.stop(audioCtx.currentTime + 0.4);
        } else if (tipo === 'incorrecto') {
            osc.frequency.setValueAtTime(300, audioCtx.currentTime);
            osc.frequency.setValueAtTime(200, audioCtx.currentTime + 0.15);
            gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
            osc.start(audioCtx.currentTime); osc.stop(audioCtx.currentTime + 0.3);
        } else if (tipo === 'click') {
            osc.frequency.setValueAtTime(800, audioCtx.currentTime);
            gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
            osc.start(audioCtx.currentTime); osc.stop(audioCtx.currentTime + 0.1);
        } else if (tipo === 'swap') {
            osc.frequency.setValueAtTime(600, audioCtx.currentTime);
            gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
            osc.start(audioCtx.currentTime); osc.stop(audioCtx.currentTime + 0.15);
        } else if (tipo === 'timeout') {
            osc.frequency.setValueAtTime(150, audioCtx.currentTime);
            gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
            osc.start(audioCtx.currentTime); osc.stop(audioCtx.currentTime + 0.5);
        } else if (tipo === 'victoria') {
            const notas = [523, 659, 784, 1047];
            notas.forEach((nota, i) => {
                const o = audioCtx.createOscillator(); const g = audioCtx.createGain();
                o.connect(g); g.connect(audioCtx.destination);
                o.frequency.setValueAtTime(nota, audioCtx.currentTime + i * 0.15);
                g.gain.setValueAtTime(0.12, audioCtx.currentTime + i * 0.15);
                g.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + i * 0.15 + 0.3);
                o.start(audioCtx.currentTime + i * 0.15); o.stop(audioCtx.currentTime + i * 0.15 + 0.3);
            });
        }
    } catch (e) {}
}

// ── Frases ───────────────────────────────────────────────────────────────────
function iniciarFrases() {
    frasesJuego = mezclarArray([...bancoFrases]).slice(0, 10);
    fraseActual = 0; puntosFrases = 0; respondiendoFrase = false;
    document.getElementById('puntos-frases').textContent = '0';
    document.getElementById('total-frases').textContent = '10';
    mostrarPantalla('frases'); mostrarFrase();
}
function generarDistractores(respuestaCorrecta) {
    return mezclarArray(todosLosItems.filter(i => i.nombre !== respuestaCorrecta)).slice(0, 3).map(i => i.nombre);
}
function mostrarFrase() {
    respondiendoFrase = false;
    const item = frasesJuego[fraseActual];
    document.getElementById('frase-actual-num').textContent = fraseActual + 1;
    document.getElementById('progreso-frases').style.width = ((fraseActual) / 10 * 100) + '%';
    document.getElementById('frase-texto').textContent = item.texto;

    // Mostrar IMAGEN DEL CONCEPTO como pista visual
    const itemRespuesta = todosLosItems.find(i => i.nombre === item.respuesta);
    const imgPregunta   = document.getElementById('img-pregunta-frase');
    const phPregunta    = document.getElementById('placeholder-pregunta-frase');
    if (itemRespuesta && imgPregunta && phPregunta) {
        imgPregunta.src = itemRespuesta.concepto;
        imgPregunta.classList.remove('visible'); phPregunta.classList.remove('oculto');
        imgPregunta.onload  = () => { imgPregunta.classList.add('visible'); phPregunta.classList.add('oculto'); };
        imgPregunta.onerror = () => { imgPregunta.classList.remove('visible'); phPregunta.classList.remove('oculto'); phPregunta.textContent = itemRespuesta.emoji || 'Imagen'; };
    }

    const opcionesNombres = mezclarArray([item.respuesta, ...generarDistractores(item.respuesta)]);
    document.getElementById('opciones-frases').innerHTML = opcionesNombres.map(nombre => {
        const opItem = todosLosItems.find(i => i.nombre === nombre);
        return `
            <div class="opcion-frase" data-nombre="${nombre}" onclick="verificarFrase('${nombre}', this)">
                <img src="${opItem.imagen}" alt="Seña"
                     onerror="mostrarPlaceholderFrase(this,'${opItem.nombre}')">
            </div>`;
    }).join('');

    document.getElementById('feedback-frases').textContent = '';
    document.getElementById('feedback-frases').className = 'feedback';
}
function mostrarPlaceholderFrase(img, nombre) {
    img.style.display = 'none';
    const ph = document.createElement('div'); ph.className = 'placeholder-frase'; ph.textContent = 'Seña de ' + nombre;
    img.parentNode.appendChild(ph);
}
function verificarFrase(nombre, el) {
    if (respondiendoFrase) return;
    respondiendoFrase = true;
    const correcta = frasesJuego[fraseActual].respuesta;
    const feedback  = document.getElementById('feedback-frases');
    const opciones  = document.querySelectorAll('.opcion-frase');
    opciones.forEach(op => op.classList.add('deshabilitada'));
    if (nombre === correcta) {
        el.classList.add('correcta'); puntosFrases++;
        document.getElementById('puntos-frases').textContent = puntosFrases;
        feedback.textContent = '¡Correcto!'; feedback.className = 'feedback exito'; reproducirSonido('correcto');
    } else {
        el.classList.add('incorrecta');
        opciones.forEach(op => { if (op.dataset.nombre === correcta) op.classList.add('correcta'); });
        feedback.textContent = 'Incorrecto'; feedback.className = 'feedback error'; reproducirSonido('incorrecto');
    }
    setTimeout(() => { fraseActual++; if (fraseActual < frasesJuego.length) mostrarFrase(); else mostrarResultados(puntosFrases, 10, 'frases'); }, 1800);
}

// ── Resultados ───────────────────────────────────────────────────────────────
function mostrarResultados(correctas, total, juego) {
    mostrarPantalla('resultados');
    const porcentaje = Math.round((correctas / total) * 100);
    document.getElementById('stat-correctas').textContent  = correctas;
    document.getElementById('stat-total').textContent      = total;
    document.getElementById('stat-porcentaje').textContent = porcentaje + '%';
    let titulo, mensaje;
    if (porcentaje >= 90)      { titulo = '¡Excelente!';    mensaje = 'Conoces muy bien las señas. ¡Eres un experto!'; reproducirSonido('victoria'); iniciarConfetti(); }
    else if (porcentaje >= 70) { titulo = '¡Muy bien!';     mensaje = 'Tienes un buen conocimiento de las señas.';   reproducirSonido('victoria'); iniciarConfetti(); }
    else if (porcentaje >= 50) { titulo = '¡Buen intento!'; mensaje = 'Sigue practicando para mejorar.'; }
    else                       { titulo = '¡No te rindas!'; mensaje = 'Revisa la sección Aprende y vuelve a intentarlo.'; }
    document.getElementById('titulo-resultado').textContent  = titulo;
    document.getElementById('mensaje-resultado').textContent = mensaje;
}

function iniciarConfetti() {
    const canvas = document.getElementById('confetti-canvas'); const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    const colores = ['#6366f1','#ec4899','#f59e0b','#22c55e','#3b82f6','#ef4444'];
    const particulas = [];
    for (let i = 0; i < 150; i++) particulas.push({ x: Math.random()*canvas.width, y: Math.random()*canvas.height-canvas.height, size: Math.random()*8+4, color: colores[Math.floor(Math.random()*colores.length)], speedY: Math.random()*3+2, speedX: Math.random()*2-1, rotation: Math.random()*360, rotationSpeed: Math.random()*4-2 });
    let frames = 0;
    function animar() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        particulas.forEach(p => { p.y+=p.speedY; p.x+=p.speedX; p.rotation+=p.rotationSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rotation*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.size/2,-p.size/2,p.size,p.size); ctx.restore(); });
        frames++;
        if (frames < 300) requestAnimationFrame(animar);
        else ctx.clearRect(0,0,canvas.width,canvas.height);
    }
    animar();
    window.addEventListener('resize', () => { canvas.width=window.innerWidth; canvas.height=window.innerHeight; });
}

function mezclarArray(array) {
    const arr = [...array];
    for (let i = arr.length-1; i > 0; i--) { const j = Math.floor(Math.random()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]]; }
    return arr;
}

document.addEventListener('DOMContentLoaded', () => { renderizarTarjetas(); });