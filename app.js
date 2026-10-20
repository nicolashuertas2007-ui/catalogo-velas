/* ============================================================
   CAJAS DE VELAS
   Las fotos del mismo producto van juntas en imgs.
   La primera foto es la que se ve en la tarjeta.
   ============================================================ */
const EXTRA = "Puedes escoger cualquiera de nuestros diseños para decorarlas.";

const productos = [
  {
    nombre: "Vela baby blanca x 5",
    desc: ["Caja de 5 velas baby blancas.", EXTRA],
    detalles: ["Presentación: caja x 5 velas", "Vela baby blanca", "$9.500"],
    imgs: ["img/baby5caja.png", "img/baby5.png"]
  },
  {
    nombre: "Vela baby blanca x 10 (caja roja)",
    desc: ["Caja roja de 10 velas baby blancas.", EXTRA],
    detalles: ["Presentación: caja x 10 velas", "Vela baby blanca", "$19.000"],
    imgs: ["img/rojababy3.png", "img/rojababy.png", "img/rojababy2.png"]
  },
  {
    nombre: "Vela baby pastel x 10 (caja dorada)",
    desc: ["Caja dorada de 10 velas baby en colores pastel.", EXTRA],
    detalles: ["Presentación: caja x 10 velas", "Vela baby pastel", "$19.000"],
    imgs: ["img/doradababy3.png", "img/doradababy.png", "img/doradababy2.png"]
  },
  {
    nombre: "Vela colombiana blanca x 10 (caja roja)",
    desc: ["Caja roja de 10 velas colombianas blancas.", EXTRA],
    detalles: ["Presentación: caja x 10 velas", "Vela colombiana blanca", "$16.000"],
    imgs: ["img/rojacolombiana2.png", "img/rojacolombiana.png", "img/rojacolombiana3.png"]
  },
  {
    nombre: "Vela colombiana blanca x 10 (caja juguetería)",
    desc: ["Caja dorada con juguetes, 10 velas colombianas blancas.", EXTRA],
    detalles: ["Presentación: caja x 10 velas", "Vela colombiana blanca", "$16.000"],
    imgs: ["img/jugueteriacolombiana2.png", "img/jugueteriacolombiana.png", "img/jugueteriacolombiana3.png"]
  },
  {
    nombre: "Vela colombiana pastel x 10 (Virgen del Carmen)",
    desc: ["Caja Virgen del Carmen con 10 velas colombianas en colores pastel.", EXTRA],
    detalles: ["Presentación: caja x 10 velas", "Vela colombiana pastel","$19.000"],
    imgs: ["img/virgencolombiana3.png", "img/virgencolombiana.png", "img/virgencolombiana2.png"]
  }
];

/* ============================================================
   DISEÑOS
   Una sola imagen por diseño.
   ============================================================ */
const disenos = [
  {
    nombre: "Animalitos navideños",
    desc: ["Animalitos navideños con palabras en letra manuscrita de colores."],
    detalles: ["Palabras: Sueños, Amor, Viajes, Dinero, Salud, Trabajo, Unión, Sabiduría, Dios, Éxitos"],
    imgs: ["img/animalesnavideños.png"]
  },
  {
    nombre: "Animalitos navideños 2",
    desc: ["Animalitos navideños con palabras en letra gruesa de colores."],
    detalles: ["Palabras: Amor, Familia, Dios, Dinero, Salud, Viajes, Éxitos, Metas, Unión, Trabajo"],
    imgs: ["img/animalitosnavidad.png"]
  },
  {
    nombre: "Navidad",
    desc: ["Pingüinos, muñecos de nieve y renos sobre trazos pastel."],
    detalles: ["Palabras: Amor, Felicidad, Bendiciones, Familia, Dinero, Sueños, Abundancia, Éxitos, Trabajo, Prosperidad"],
    imgs: ["img/navidad.png"]
  },
  {
    nombre: "Pesebre",
    desc: ["Personajes del pesebre en colores pastel."],
    detalles: ["Palabras: Amor, Amistad, Sabiduría, Éxitos, Dinero, Viajes, Salud, Prosperidad, Felicidad, Abundancia"],
    imgs: ["img/pesebre.png"]
  },
  {
    nombre: "Pesebre dorado",
    desc: ["Personajes del pesebre en línea dorada."],
    detalles: ["Palabras: Dinero, Abundancia, Trabajo, Bienestar, Familia, Felicidad, Bendiciones, Dios, Amor, Salud"],
    imgs: ["img/pesebredorado.png"]
  },
  {
    nombre: "Vírgenes",
    desc: ["Virgenes sobre trazos de colores."],
    detalles: ["Palabras: Sabiduría, Éxitos, Unión, Viajes, Salud, Prosperidad, Felicidad, Abundancia, Amor, Trabajo"],
    imgs: ["img/virgenes.png"]
  },
  {
    nombre: "BTS",
    desc: ["Personajes BT21 con palabras de deseos en trazos de colores."],
    detalles: ["Palabras: Abundancia, Amor, Amistad, Sabiduría, Éxitos, Dinero, Viajes, Salud, Prosperidad, Felicidad"],
    imgs: ["img/bts.png"]
  },
  {
    nombre: "Deseos blancos",
    desc: ["Deseos en blanco con corazones y estrellas."],
    detalles: ["Palabras: Éxitos, Bendiciones, Dinero, Trabajo, Abundancia, Dios, Salud, Amor, Familia, Sabiduría"],
    imgs: ["img/deseosblancos.png"]
  },
  {
    nombre: "Deseos dorados",
    desc: ["Deseos en dorado con corazones y estrellas."],
    detalles: ["Palabras: Éxitos, Bendiciones, Dinero, Trabajo, Abundancia, Dios, Salud, Amor, Familia, Sabiduría"],
    imgs: ["img/deseosdorados.png"]
  },
  {
    nombre: "Deseos negros",
    desc: ["Deseos en negro con corazones y estrellas."],
    detalles: ["Palabras: Éxitos, Bendiciones, Dinero, Trabajo, Abundancia, Dios, Salud, Amor, Familia, Sabiduría"],
    imgs: ["img/deseosnegros.png"]
  }
];

const $ = id => document.getElementById(id);
let actual = null;
let actualI = 0;
let tipo = "producto";
let sel = 0;

/* ---------- Selección: una vela y un diseño ---------- */
const seleccion = { producto: null, diseno: null };

/* ---------- Pintar las tarjetas ---------- */
function tarjeta(p, i, t) {
  const elegida = seleccion[t] === i;
  return '<div class="product ' + (t === "diseno" ? "tarjeta-diseno " : "") + (elegida ? "elegida" : "") + '">' +
    (elegida ? '<span class="insignia">✓ Elegido</span>' : '') +
    '<h3>' + p.nombre + '</h3>' +
    '<img src="' + p.imgs[0] + '" alt="' + p.nombre + '" class="producto" loading="lazy">' +
    '<button data-t="' + t + '" data-i="' + i + '">ver información</button>' +
    '</div>';
}
function pintarTarjetas() {
  $("productos").innerHTML = productos.map((p, i) => tarjeta(p, i, "producto")).join("");
  $("disenos").innerHTML = disenos.map((p, i) => tarjeta(p, i, "diseno")).join("");
}
function pintarPedido() {
  const v = seleccion.producto, d = seleccion.diseno;
  $("pVela").textContent = v === null ? "sin elegir" : productos[v].nombre;
  $("pDiseno").textContent = d === null ? "sin elegir" : disenos[d].nombre;
  $("pedido").hidden = v === null && d === null;
  document.body.classList.toggle("con-pedido", !$("pedido").hidden);
}
pintarTarjetas();

document.addEventListener("click", e => {
  const b = e.target.closest("button[data-t]");
  if (b) abrir(b.dataset.t, Number(b.dataset.i));
});

/* ---------- Ventana ---------- */
function abrir(t, i) {
  tipo = t;
  actualI = i;
  actual = (t === "diseno" ? disenos : productos)[i];
  sel = 0;
  $("mTitulo").textContent = actual.nombre;
  $("mDesc").innerHTML = actual.desc.map(d => "<p>" + d + "</p>").join("");
  $("mLista").innerHTML = actual.detalles.map(d => "<li>" + d + "</li>").join("");
  $("pedir").textContent = t === "diseno" ? "Elegir este diseño" : "Elegir esta vela";
  pintarFotos();
  $("modal").classList.add("abierto");
  document.body.style.overflow = "hidden";
}

function pintarFotos() {
  $("grande").src = actual.imgs[sel];
  $("grande").alt = actual.nombre;
  $("miniaturas").innerHTML = actual.imgs.map((src, k) =>
    k === sel ? "" :
    '<button data-k="' + k + '" aria-label="Ver foto ' + (k + 1) + '"><img src="' + src + '" alt=""></button>'
  ).join("");
}

$("miniaturas").addEventListener("click", e => {
  const b = e.target.closest("button[data-k]");
  if (b) { sel = Number(b.dataset.k); pintarFotos(); }
});

function cerrar() {
  $("modal").classList.remove("abierto");
  document.body.style.overflow = "";
}
$("cerrar").onclick = cerrar;
$("modal").addEventListener("click", e => { if (e.target.id === "modal") cerrar(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") cerrar(); });

/* ---------- Elegir ---------- */
$("pedir").onclick = () => {
  seleccion[tipo] = actualI;
  cerrar();
  pintarTarjetas();
  pintarPedido();
  // Si falta la otra parte del pedido, llevar a esa sección
  const falta = tipo === "producto" ? (seleccion.diseno === null ? "sec-disenos" : null)
                                    : (seleccion.producto === null ? "sec-cajas" : null);
  if (falta) $(falta).scrollIntoView({ behavior: "smooth", block: "start" });
};

$("limpiar").onclick = () => {
  seleccion.producto = null;
  seleccion.diseno = null;
  pintarTarjetas();
  pintarPedido();
};

/* ---------- WhatsApp ---------- */
$("enviar").onclick = () => {
  const v = seleccion.producto, d = seleccion.diseno;
  let msg = "Hola, me interesa:";
  if (v !== null) msg += "\n• Vela: " + productos[v].nombre;
  if (d !== null) msg += "\n• Diseño: " + disenos[d].nombre;
  window.open("https://wa.me/573054756421?text=" + encodeURIComponent(msg), "_blank");
};
