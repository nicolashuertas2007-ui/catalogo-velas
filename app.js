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
    detalles: ["Presentación: caja x 10 velas", "Vela colombiana pastel", "$16.000"],
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
    extra: 1000,
    desc: ["Personajes del pesebre en línea dorada.",
           "Tiene un valor adicional de $1.000 porque son con relieve."],
    detalles: ["Palabras: Dinero, Abundancia, Trabajo, Bienestar, Familia, Felicidad, Bendiciones, Dios, Amor, Salud",
                "Valor adicional: $1.000 (por caja)"],
    imgs: ["img/pesebredorado.png"]
  },
  {
    nombre: "Vírgenes",
    desc: ["Advocaciones de la Virgen sobre trazos de colores."],
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
    extra: 1000,
    desc: ["Deseos en dorado con corazones y estrellas.",
           "Tiene un valor adicional de $1.000 porque son con relieve."],
    detalles: ["Palabras: Éxitos, Bendiciones, Dinero, Trabajo, Abundancia, Dios, Salud, Amor, Familia, Sabiduría",
               "Valor adicional: $1.000 (por caja)"],
    imgs: ["img/deseosdorados.png"]
  },
  {
    nombre: "Deseos negros",
    desc: ["Deseos en negro con corazones y estrellas."],
    detalles: ["Palabras: Éxitos, Bendiciones, Dinero, Trabajo, Abundancia, Dios, Salud, Amor, Familia, Sabiduría"],
    imgs: ["img/deseosnegros.png"]
  }
];

/* Precio: se toma de la línea "$9.500" dentro de detalles (si no hay, queda "por confirmar") */
productos.forEach(p => {
  const linea = p.detalles.find(d => /^\$/.test(d));
  p.precio = linea ? Number(linea.replace(/\D/g, "")) : null;
});

const $ = id => document.getElementById(id);
const pesos = new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 });
const SIN_IMAGEN = "data:image/svg+xml;utf8," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="100%" height="100%" fill="#fffaf2"/><text x="50%" y="50%" fill="#9b0d24" font-family="sans-serif" font-size="20" text-anchor="middle">Sin imagen</text></svg>'
);
// Si una foto no carga (nombre mal escrito, etc.) se muestra un cuadro de respaldo
document.addEventListener("error", e => {
  if (e.target.tagName === "IMG" && e.target.src !== SIN_IMAGEN) e.target.src = SIN_IMAGEN;
}, true);

let actual = null;
let actualI = 0;
let tipo = "producto";
let sel = 0;

/* ============================================================
   SELECCIÓN ACTUAL (una vela + un diseño) y CARRITO
   ============================================================ */
const seleccion = { producto: null, diseno: null };

function cargarCarrito() {
  try {
    const datos = JSON.parse(localStorage.getItem("carritoVelas")) || [];
    // descarta lo que ya no exista en el catálogo
    return datos.filter(it => productos.some(p => p.nombre === it.v) &&
                              (it.d === null || disenos.some(d => d.nombre === it.d)));
  } catch { return []; }
}
function guardarCarrito() {
  try { localStorage.setItem("carritoVelas", JSON.stringify(carrito)); } catch {}
}
let carrito = cargarCarrito();

const precioDe = nombre => productos.find(p => p.nombre === nombre).precio;
const extraDe = nombre => { const d = disenos.find(x => x.nombre === nombre); return (d && d.extra) || 0; };
// Precio por unidad = vela + adicional del diseño (si lo tiene)
function precioUnit(it) {
  const pr = precioDe(it.v);
  return pr === null ? null : pr + extraDe(it.d);
}
// Nombre del diseño, con el adicional si aplica
function textoDiseno(it) {
  const ex = extraDe(it.d);
  return it.d + (ex ? " (+" + pesos.format(ex) + " c/u)" : "");
}

function agregarAlCarrito() {
  const v = seleccion.producto, d = seleccion.diseno;
  if (v === null) return;
  const nv = productos[v].nombre, nd = d === null ? null : disenos[d].nombre;
  const ya = carrito.find(it => it.v === nv && it.d === nd);
  if (ya) ya.n++; else carrito.push({ v: nv, d: nd, n: 1 });
  seleccion.producto = null;
  seleccion.diseno = null;
  pintarTarjetas();
  pintarPedido();
  pintarCarrito();
  aviso("✓ Agregado al carrito");
}

function cambiarCantidad(i, cambio) {
  carrito[i].n += cambio;
  if (carrito[i].n <= 0) carrito.splice(i, 1);
  pintarCarrito();
}

function totales() {
  let total = 0, pendientes = false, cantidad = 0;
  carrito.forEach(it => {
    cantidad += it.n;
    const pr = precioUnit(it);
    if (pr === null) pendientes = true; else total += pr * it.n;
  });
  return { total, pendientes, cantidad };
}

function pintarCarrito() {
  const { total, pendientes, cantidad } = totales();
  $("contadorCarrito").textContent = cantidad;
  $("totalCarrito").textContent = pesos.format(total) + (pendientes ? " + por confirmar" : "");
  $("vaciarCarrito").disabled = $("pedirCarrito").disabled = cantidad === 0;

  $("listaCarrito").innerHTML = carrito.length === 0
    ? '<li class="carrito-vacio">Tu carrito está vacío. Elige una vela y un diseño para empezar.</li>'
    : carrito.map((it, i) => {
        const pr = precioUnit(it);
        return '<li class="item-carrito">' +
          '<div><p class="item-nombre">' + it.v + '</p>' +
          '<p class="item-diseno">Diseño: ' + (it.d ? textoDiseno(it) : "sin elegir") + '</p>' +
          '<p class="item-subtotal">' + (pr === null ? "Precio por confirmar" : pesos.format(pr * it.n)) + '</p></div>' +
          '<div class="cantidad">' +
            '<button data-c="' + i + '" data-d="-1" aria-label="Quitar una unidad">−</button>' +
            '<span>' + it.n + '</span>' +
            '<button data-c="' + i + '" data-d="1" aria-label="Agregar una unidad">+</button>' +
          '</div>' +
          '<button class="boton-quitar" data-q="' + i + '">Quitar</button>' +
          '</li>';
      }).join("");
  guardarCarrito();
}

$("listaCarrito").addEventListener("click", e => {
  const c = e.target.closest("button[data-c]");
  const q = e.target.closest("button[data-q]");
  if (c) cambiarCantidad(Number(c.dataset.c), Number(c.dataset.d));
  if (q) { carrito.splice(Number(q.dataset.q), 1); pintarCarrito(); }
});
$("vaciarCarrito").onclick = () => { carrito = []; pintarCarrito(); };

/* ---------- Panel del carrito ---------- */
function abrirCarrito() {
  $("panelCarrito").hidden = false;
  $("fondo").hidden = false;
  $("botonCarrito").setAttribute("aria-expanded", "true");
  $("cerrarCarrito").focus();
}
function cerrarCarrito() {
  $("panelCarrito").hidden = true;
  $("fondo").hidden = true;
  $("botonCarrito").setAttribute("aria-expanded", "false");
  $("botonCarrito").focus();
}
$("botonCarrito").onclick = abrirCarrito;
$("cerrarCarrito").onclick = cerrarCarrito;
$("fondo").onclick = cerrarCarrito;

/* ---------- Aviso breve ---------- */
let tAviso;
function aviso(texto) {
  const a = $("aviso");
  a.textContent = texto;
  a.classList.add("visible");
  clearTimeout(tAviso);
  tAviso = setTimeout(() => a.classList.remove("visible"), 2000);
}

/* ============================================================
   TARJETAS
   ============================================================ */
function tarjeta(p, i, t) {
  const elegida = seleccion[t] === i;
  const precio = t === "producto"
    ? '<p class="precio">' + (p.precio === null ? "Precio por confirmar" : pesos.format(p.precio)) + '</p>' : '';
  const extra = t === "diseno" && p.extra
    ? '<p class="precio">+ ' + pesos.format(p.extra) + ' adicional</p>' : '';
  return '<div class="product ' + (t === "diseno" ? "tarjeta-diseno " : "") + (elegida ? "elegida" : "") + '">' +
    (elegida ? '<span class="insignia">✓ Elegido</span>' : '') +
    '<h3>' + p.nombre + '</h3>' +
    '<img src="' + p.imgs[0] + '" alt="' + p.nombre + '" class="producto" loading="lazy">' +
    precio + extra +
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
  $("pDiseno").textContent = d === null ? "sin elegir" : disenos[d].nombre +
    (disenos[d].extra ? " (+" + pesos.format(disenos[d].extra) + ")" : "");
  $("pedido").hidden = v === null && d === null;
  $("agregar").disabled = v === null;
  document.body.classList.toggle("con-pedido", !$("pedido").hidden);
}

document.addEventListener("click", e => {
  const b = e.target.closest("button[data-t]");
  if (b) abrir(b.dataset.t, Number(b.dataset.i));
});

/* ============================================================
   VENTANA DE INFORMACIÓN
   ============================================================ */
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
document.addEventListener("keydown", e => {
  if (e.key !== "Escape") return;
  if (!$("panelCarrito").hidden) cerrarCarrito(); else cerrar();
});

/* Elegir desde la ventana */
$("pedir").onclick = () => {
  seleccion[tipo] = actualI;
  cerrar();
  pintarTarjetas();
  pintarPedido();
  const falta = tipo === "producto" ? (seleccion.diseno === null ? "sec-disenos" : null)
                                    : (seleccion.producto === null ? "sec-cajas" : null);
  if (falta) $(falta).scrollIntoView({ behavior: "smooth", block: "start" });
};
$("agregar").onclick = agregarAlCarrito;
$("limpiar").onclick = () => {
  seleccion.producto = null;
  seleccion.diseno = null;
  pintarTarjetas();
  pintarPedido();
};

/* ============================================================
   WHATSAPP: pedido completo
   ============================================================ */
$("pedirCarrito").onclick = () => {
  const { total, pendientes } = totales();
  let msg = "Hola, quiero hacer este pedido:\n";
  carrito.forEach(it => {
    const pr = precioUnit(it);
    msg += "\n• " + it.n + " x " + it.v +
           (it.d ? " — Diseño: " + textoDiseno(it) : "") +
           (pr === null ? " (precio por confirmar)" : " — " + pesos.format(pr * it.n));
  });
  msg += "\n\nTotal: " + pesos.format(total) + (pendientes ? " + productos por confirmar" : "");
  window.open("https://wa.me/573054756421?text=" + encodeURIComponent(msg), "_blank");
};

/* ---------- Inicio ---------- */
pintarTarjetas();
pintarPedido();
pintarCarrito();
