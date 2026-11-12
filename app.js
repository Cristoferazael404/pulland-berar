const PRODUCTS = [
  {
    id: "01",
    name: "CAMISETA OVERSIZE",
    description:
      "Camiseta de algodón con corte relajado, cuello redondo y acabado suave.",
    category: "Playeras",
    price: 399,
    image: "images/01.jpg",
    gender: "Unisex",
    material: "100% algodón",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "02",
    name: "JEANS RECTOS",
    description: "Denim de tiro medio con pierna recta y cinco bolsillos.",
    category: "Pantalones",
    price: 799,
    image: "images/02.jpg",
    gender: "Unisex",
    material: "98% algodón, 2% elastano",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "03",
    name: "CHAQUETA URBANA",
    description:
      "Chaqueta ligera de corte amplio con cierre frontal y bolsillos.",
    category: "Chamarras",
    price: 1199,
    image: "images/03.jpg",
    gender: "Unisex",
    material: "100% poliéster",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "04",
    name: "SUDADERA ESSENTIAL",
    description:
      "Sudadera de felpa con capucha, bolsillo canguro y puños acanalados.",
    category: "Sudaderas",
    price: 699,
    image: "images/04.jpg",
    gender: "Unisex",
    material: "80% algodón, 20% poliéster",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "05",
    name: "CAMISA RELAXED",
    description: "Camisa de manga larga con cuello clásico y silueta fluida.",
    category: "Camisas",
    price: 649,
    image: "images/05.jpg",
    gender: "Unisex",
    material: "55% lino, 45% algodón",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "06",
    name: "PANTALÓN CARGO",
    description: "Pantalón utilitario con bolsillos laterales y ajuste cómodo.",
    category: "Pantalones",
    price: 899,
    image: "images/06.jpg",
    gender: "Unisex",
    material: "100% algodón",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "07",
    name: "TOP MINIMAL",
    description:
      "Top de tirantes de tejido suave y diseño básico para combinar.",
    category: "Playeras",
    price: 299,
    image: "images/07.jpg",
    gender: "Mujer",
    material: "95% algodón, 5% elastano",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "08",
    name: "BOMBER NOIR",
    description: "Bomber de acabado mate, cuello acanalado y cierre metálico.",
    category: "Chamarras",
    price: 1399,
    image: "images/08.jpg",
    gender: "Unisex",
    material: "100% poliéster",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "09",
    name: "SUDADERA GRAPHITE",
    description: "Sudadera de cuello redondo con interior afelpado.",
    category: "Sudaderas",
    price: 749,
    image: "images/09.jpg",
    gender: "Unisex",
    material: "80% algodón, 20% poliéster",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "10",
    name: "CAMISA OXFORD",
    description: "Camisa de algodón con botonadura frontal y corte regular.",
    category: "Camisas",
    price: 749,
    image: "images/10.jpg",
    gender: "Hombre",
    material: "100% algodón",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "11",
    name: "JEANS WIDE LEG",
    description: "Jeans de pernera amplia y cintura alta con lavado clásico.",
    category: "Pantalones",
    price: 899,
    image: "images/11.jpg",
    gender: "Mujer",
    material: "100% algodón",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "12",
    name: "CAMISETA STUDIO",
    description: "Camiseta premium de punto grueso y hombro caído.",
    category: "Playeras",
    price: 449,
    image: "images/12.jpg",
    gender: "Unisex",
    material: "100% algodón",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "13",
    name: "PLAYERA GRÁFICA CORAL",
    description:
      "Playera coral con corte holgado y estampado geométrico original en el pecho.",
    category: "Playeras",
    price: 459,
    image: "images/13.jpg",
    gender: "Unisex",
    material: "100% algodón",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "14",
    name: "PANTALÓN CARGO OLIVA",
    description:
      "Pantalón verde oliva de pierna relajada, cintura ajustable y bolsillos laterales.",
    category: "Pantalones",
    price: 949,
    image: "images/14.jpg",
    gender: "Hombre",
    material: "100% algodón",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "15",
    name: "SUDADERA LILA ESTAMPADA",
    description:
      "Sudadera lila con capucha y estampado floral abstracto en el frente.",
    category: "Sudaderas",
    price: 799,
    image: "images/15.jpg",
    gender: "Mujer",
    material: "80% algodón, 20% poliéster",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "16",
    name: "SUDADERA BICOLOR NARANJA",
    description:
      "Sudadera con capucha en bloques naranja y crema, de tacto suave.",
    category: "Sudaderas",
    price: 849,
    image: "images/16.jpg",
    gender: "Unisex",
    material: "70% algodón, 30% poliéster",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "17",
    name: "CHAMARRA UNIVERSITARIA VINO",
    description:
      "Chamarra estilo universitario en vino y crema, con puños acanalados y botones.",
    category: "Chamarras",
    price: 1499,
    image: "images/17.jpg",
    gender: "Hombre",
    material: "Mezcla de algodón y poliéster",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "18",
    name: "CHAQUETA DE MEZCLILLA FLORAL",
    description:
      "Chaqueta azul de mezclilla con pequeños bordados florales y botones metálicos.",
    category: "Chamarras",
    price: 1299,
    image: "images/18.jpg",
    gender: "Mujer",
    material: "100% algodón",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "19",
    name: "CAMISA A RAYAS AZULES",
    description:
      "Camisa de manga larga con rayas verticales azules y blancas y cuello clásico.",
    category: "Camisas",
    price: 699,
    image: "images/19.jpg",
    gender: "Hombre",
    material: "100% algodón",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "20",
    name: "CAMISA TROPICAL VERDE",
    description:
      "Camisa de manga corta con estampado de hojas verdes y flores en tonos cálidos.",
    category: "Camisas",
    price: 699,
    image: "images/20.jpg",
    gender: "Unisex",
    material: "100% viscosa",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "21",
    name: "TENIS URBANOS AZULES",
    description:
      "Tenis bajos en azul intenso y blanco, de estilo urbano y suela clara.",
    category: "Tenis",
    price: 1099,
    image: "images/21.jpg",
    gender: "Hombre",
    material: "Exterior sintético y textil",
    sizes: ["23", "24", "25", "26", "27", "28"],
  },
  {
    id: "22",
    name: "TENIS CLÁSICOS VERDE CREMA",
    description:
      "Tenis bajos color crema con detalles verde bosque y suela flexible.",
    category: "Tenis",
    price: 1199,
    image: "images/22.jpg",
    gender: "Unisex",
    material: "Exterior sintético y textil",
    sizes: ["23", "24", "25", "26", "27", "28"],
  },
  {
    id: "23",
    name: "TENIS DEPORTIVOS TERRACOTA",
    description:
      "Tenis de estilo deportivo en tonos terracota y beige, con suela de goma.",
    category: "Tenis",
    price: 1299,
    image: "images/23.jpg",
    gender: "Hombre",
    material: "Exterior textil y sintético",
    sizes: ["23", "24", "25", "26", "27", "28"],
  },
  {
    id: "24",
    name: "TENIS RETRO ROSAS",
    description:
      "Tenis retro en rosa pastel y lila, con agujetas y suela acolchada.",
    category: "Tenis",
    price: 1199,
    image: "images/24.jpg",
    gender: "Mujer",
    material: "Exterior sintético y textil",
    sizes: ["23", "24", "25", "26", "27", "28"],
  },
];
const money = (n) =>
  new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(n);
const read = (k, def) => {
  try {
    return JSON.parse(localStorage.getItem(k)) ?? def;
  } catch {
    return def;
  }
};
let cart = read("pullbear_cart", []),
  favorites = read("pullbear_favorites", []),
  category = "Todos",
  department = "Todos",
  query = "",
  sort = "featured",
  detailSize = "",
  checkoutItems = [];
const $ = (s) => document.querySelector(s);
const persist = () => {
  localStorage.setItem("pullbear_cart", JSON.stringify(cart));
  localStorage.setItem("pullbear_favorites", JSON.stringify(favorites));
  updateCounts();
};
const find = (id) => PRODUCTS.find((p) => p.id === id);
const toast = (msg) => {
  let t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => t.classList.remove("show"), 2500);
};
const updateCounts = () => {
  $("#cartCount").textContent = cart.reduce((s, i) => s + i.qty, 0);
  $("#favCount").textContent = favorites.length;
};
const productCard = (p) =>
  `<article class="product"><div class="product-img" data-detail="${p.id}" role="button" tabindex="0"><img src="${p.image}" alt="${p.name}"><span class="tag">NUEVA TEMPORADA</span><button class="heart ${favorites.includes(p.id) ? "active" : ""}" data-fav="${p.id}" aria-label="Agregar o quitar de favoritos">${favorites.includes(p.id) ? "♥" : "♡"}</button></div><div class="product-info"><span>${p.name}</span><span class="price">${money(p.price)}</span></div><div class="product-meta">${p.gender} · ${p.category}</div><div class="product-actions"><button data-detail="${p.id}">VER DETALLES</button><button data-quick="${p.id}">AÑADIR +</button></div></article>`;
function render() {
  document
    .querySelectorAll("[data-department]")
    .forEach((b) =>
      b.classList.toggle("active", b.dataset.department === department),
    );
  let arr = PRODUCTS.filter(
    (p) =>
      (category === "Todos" || p.category === category) &&
      (department === "Todos" || p.gender === department) &&
      (p.name + " " + p.category + " " + p.description)
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  if (sort === "low") arr.sort((a, b) => a.price - b.price);
  if (sort === "high") arr.sort((a, b) => b.price - a.price);
  if (sort === "name") arr.sort((a, b) => a.name.localeCompare(b.name));
  $("#productGrid").innerHTML = arr.map(productCard).join("");
  $("#results").textContent = arr.length + " PRODUCTOS";
  $("#empty").classList.toggle("hidden", arr.length > 0);
  $("#categoryFilters").innerHTML = [
    "Todos",
    "Playeras",
    "Pantalones",
    "Sudaderas",
    "Chamarras",
    "Camisas",
    "Tenis",
  ]
    .map(
      (c) =>
        `<button class="${category === c ? "active" : ""}" data-category="${c}">${c.toUpperCase()}</button>`,
    )
    .join("");
}
function toggleFav(id) {
  favorites = favorites.includes(id)
    ? favorites.filter((x) => x !== id)
    : [...favorites, id];
  persist();
  render();
  if (
    $("#drawer").classList.contains("open") &&
    $("#drawerTitle").textContent === "FAVORITOS"
  )
    openFavorites();
  toast(
    favorites.includes(id) ? "Agregado a favoritos" : "Eliminado de favoritos",
  );
}
function openOverlay() {
  $("#overlay").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}
function closeAll() {
  $("#overlay").classList.add("hidden");
  $("#modal").classList.add("hidden");
  $("#drawer").classList.remove("open");
  document.body.style.overflow = "";
}
function drawer(title, body, footer = "") {
  $("#modal").classList.add("hidden");
  $("#drawerTitle").textContent = title;
  $("#drawerBody").innerHTML = body;
  $("#drawerFooter").innerHTML = footer;
  $("#drawer").classList.add("open");
  openOverlay();
}
function modal(html) {
  $("#drawer").classList.remove("open");
  $("#modalContent").innerHTML = html;
  $("#modal").classList.remove("hidden");
  openOverlay();
}
function openDetail(id, buy = false) {
  const p = find(id);
  if (!p) return;
  detailSize = "";
  modal(
    `<div class="detail"><img src="${p.image}" alt="${p.name}"><div class="detail-info"><p class="eyebrow">PULL&BEAR / ${p.category.toUpperCase()}</p><h2>${p.name}</h2><p class="price-big">${money(p.price)}</p><p>${p.description}</p><p><b>Composición:</b> ${p.material}<br><b>Corte:</b> ${p.gender}<br><b>Disponibilidad:</b> Todas las tallas indicadas</p><p><b>SELECCIONA TU TALLA *</b></p><div class="sizes">${p.sizes.map((s) => `<button data-size="${s}">${s}</button>`).join("")}</div><label class="hint" for="detailQty">CANTIDAD</label><div class="detail-quantity"><button type="button" data-detail-step="-1" aria-label="Disminuir cantidad">−</button><input id="detailQty" type="number" min="1" max="20" value="1" aria-label="Cantidad"><button type="button" data-detail-step="1" aria-label="Aumentar cantidad">+</button></div><button class="btn btn-dark" data-add="${p.id}">AGREGAR AL CARRITO</button><button class="btn btn-light" data-buy="${p.id}">COMPRAR AHORA</button><button class="btn btn-light" data-fav="${p.id}">${favorites.includes(p.id) ? "♥ QUITAR DE FAVORITOS" : "♡ GUARDAR EN FAVORITOS"}</button></div></div>`,
  );
}
function add(id, size, qty) {
  if (!size) {
    toast("Selecciona una talla para continuar");
    return false;
  }
  let item = cart.find((i) => i.id === id && i.size === size);
  if (item) item.qty += qty;
  else cart.push({ id, size, qty });
  persist();
  toast("Producto agregado al carrito");
  return true;
}
function cartTotal(items) {
  return items.reduce((s, i) => s + (find(i.id)?.price || 0) * i.qty, 0);
}
const FREE_SHIPPING_MINIMUM = 1499;
const SHIPPING_FEE = 100;
function shipping(items) {
  return cartTotal(items) >= FREE_SHIPPING_MINIMUM ? 0 : SHIPPING_FEE;
}
function openCart() {
  let body = cart.length
    ? cart
        .map((i) => {
          let p = find(i.id);
          return `<div class="cart-item"><img src="${p.image}" alt="${p.name}"><div><strong>${p.name}</strong><p>Talla ${i.size} · ${money(p.price)} c/u</p><div class="qty"><button data-qty="${i.id}|${i.size}|-1">−</button>${i.qty}<button data-qty="${i.id}|${i.size}|1">+</button></div><br><button data-remove="${i.id}|${i.size}">Eliminar</button></div><b>${money(p.price * i.qty)}</b></div>`;
        })
        .join("")
    : '<div class="empty">Tu carrito está vacío.<br>Explora nuestra colección.</div>';
  let itemsSummary = cart
    .map((i) => {
      const p = find(i.id);
      return `<div class="cart-summary-item"><span>${p.name}<small>Talla ${i.size} · Cantidad: ${i.qty}</small></span><b>${money(p.price * i.qty)}</b></div>`;
    })
    .join("");
  const cartDiscount = discount(cart, "");
  const cartSubtotal = cartTotal(cart);
  const promoMessage =
    cartSubtotal >= MINIMUM_PROMO_SUBTOTAL
      ? `<div class="line"><span>Descuento por compra de $5,000 o más (10 %)</span><b>−${money(thresholdDiscount(cart))}</b></div>`
      : `<p class="cart-promo-hint">Compra ${money(MINIMUM_PROMO_SUBTOTAL)} o más y obtén 10 % de descuento. Te faltan ${money(MINIMUM_PROMO_SUBTOTAL - cartSubtotal)}.</p>`;
  let footer = cart.length
    ? `<div class="cart-summary"><strong>RESUMEN DE PRODUCTOS</strong>${itemsSummary}</div>${promoMessage}<div class="line"><span>Subtotal</span><b>${money(cartSubtotal)}</b></div><div class="line"><span>Envío</span><b>${shipping(cart) ? money(shipping(cart)) : "GRATIS"}</b></div><div class="line"><strong>TOTAL</strong><strong>${money(cartSubtotal - cartDiscount + shipping(cart))}</strong></div><button class="btn btn-dark" data-checkout="cart">CONTINUAR AL PAGO ↗</button>`
    : '<button class="btn btn-dark" data-close>SEGUIR COMPRANDO</button>';
  drawer("TU CARRITO", body, footer);
}
function openFavorites() {
  let body = favorites.length
    ? favorites
        .map((id) => {
          let p = find(id);
          return `<div class="cart-item"><img src="${p.image}" alt="${p.name}"><div><strong>${p.name}</strong><p>${money(p.price)} · ${p.category}</p><button data-detail="${id}">VER Y ELEGIR TALLA</button><button data-fav="${id}">QUITAR ♡</button></div></div>`;
        })
        .join("")
    : '<div class="empty">Todavía no tienes favoritos.<br>Marca el corazón de una prenda.</div>';
  drawer("FAVORITOS", body);
}
const esc = (s) =>
  String(s ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
let lastOrder = null;
let retryData = null;
let customerHistory = read("pullbear_customer_history", []);
if (!Array.isArray(customerHistory)) customerHistory = [];

const normalizeEmail = (email) => String(email || "").trim().toLowerCase();
const normalizePhone = (phone) => String(phone || "").replace(/\D/g, "");
function previousPurchases(email, phone) {
  const normalizedEmail = normalizeEmail(email);
  const normalizedPhone = normalizePhone(phone);
  if (!normalizedEmail || !normalizedPhone) return 0;
  return customerHistory.filter(
    (purchase) =>
      purchase &&
      purchase.email === normalizedEmail &&
      purchase.phone === normalizedPhone,
  ).length;
}
const MINIMUM_PROMO_SUBTOTAL = 5000;
const thresholdDiscount = (items) =>
  cartTotal(items) >= MINIMUM_PROMO_SUBTOTAL
    ? Math.round(cartTotal(items) * 0.1)
    : 0;
const discount = (items, coupon) => {
  let subtotal = cartTotal(items);
  return Math.min(
    subtotal,
    thresholdDiscount(items) +
      Math.round(subtotal * (coupon === "MODA10" ? 0.1 : 0)),
  );
};

function startCheckout(items, previous = {}) {
  if (!items.length) {
    toast("Tu carrito está vacío");
    return;
  }
  checkoutItems = items.map((i) => ({ ...i }));
  modal(`<div class="checkout"><div class="checkout-heading"><p class="eyebrow">FINALIZAR COMPRA</p><h2>Completa tu pedido</h2></div>
 <div class="summary checkout-preview">${checkoutItems
   .map((i) => {
     const p = find(i.id);
     return `<div class="checkout-item"><span>${esc(p.name)}<small class="checkout-item-meta">Talla ${esc(i.size)} · Cantidad: ${i.qty}</small></span><b>${money(p.price * i.qty)}</b></div>`;
   })
   .join("")}</div>
 <form id="checkoutForm">
 <section class="checkout-panel"><h3><span class="step-number">1</span> Contacto</h3><div class="form-grid">
 <div class="field wide"><label for="buyer">Nombre completo *</label><input id="buyer" name="buyer" required maxlength="90" autocomplete="name" placeholder="Ejemplo: Andrea López" value="${esc(previous.buyer)}"></div>
 <div class="field"><label for="email">Correo electrónico *</label><input id="email" name="email" type="email" required autocomplete="email" placeholder="cliente@correo.com" value="${esc(previous.email)}"></div>
 <div class="field"><label for="phone">Teléfono *</label><input id="phone" name="phone" type="tel" pattern="[0-9]{10,18}" required placeholder="5512345678" value="${esc(previous.phone)}"></div>
 </div></section>
 <section class="checkout-panel"><h3><span class="step-number">2</span> Dirección de entrega</h3><div class="form-grid">
 <div class="field wide"><label for="street">Calle y número *</label><input id="street" name="street" required maxlength="120" autocomplete="address-line1" placeholder="Calle Principal 123" value="${esc(previous.street)}"></div>
 <div class="field"><label for="district">Colonia *</label><input id="district" name="district" required maxlength="90" value="${esc(previous.district)}"></div>
 <div class="field"><label for="zip">Código postal *</label><input id="zip" name="zip" required inputmode="numeric" pattern="[0-9]{5}" maxlength="5" placeholder="55000" value="${esc(previous.zip)}"></div>
 <div class="field"><label for="city">Municipio o alcaldía *</label><input id="city" name="city" required maxlength="90" value="${esc(previous.city)}"></div>
 <div class="field"><label for="state">Estado *</label><input id="state" name="state" required maxlength="90" value="${esc(previous.state)}"></div>
 <div class="field wide"><label for="reference">Referencias de entrega (opcional)</label><input id="reference" name="reference" maxlength="160" placeholder="Entre calles o indicaciones" value="${esc(previous.reference)}"></div>
 </div></section>
 <section class="checkout-panel"><h3><span class="step-number">3</span> Pago</h3>
 <p class="hint">Elige un método. Solo aparecerán los campos relacionados con esa opción.</p>
 <div class="payment-options" role="group" aria-label="Método de pago"><label><input type="radio" name="payment" value="Débito" checked> Tarjeta de débito</label><label><input type="radio" name="payment" value="Crédito"> Tarjeta de crédito</label><label><input type="radio" name="payment" value="PayPal"> PayPal</label></div>
 <div id="paymentFields"></div>
 <div class="field"><label for="coupon">Código promocional (opcional)</label><input id="coupon" name="coupon" placeholder="MODA10 para 10 % de descuento" maxlength="20" value="${esc(previous.coupon)}"></div>
 </section>
 <section class="checkout-panel invoice-panel"><label class="invoice-switch"><input type="checkbox" id="invoice" name="invoice"> <span><strong>Solicitar factura</strong><small>Opcional; captura tus datos fiscales.</small></span></label><div id="invoiceFields" class="hidden"><div class="form-grid">
 <div class="field"><label for="rfc">RFC *</label><input id="rfc" name="rfc" minlength="12" maxlength="13" pattern="[A-Za-zÑñ&0-9]{12,13}" placeholder="XAXX010101000" value="${esc(previous.rfc)}"></div>
 <div class="field"><label for="fiscalZip">Código postal fiscal *</label><input id="fiscalZip" name="fiscalZip" pattern="[0-9]{5}" maxlength="5" placeholder="55000" value="${esc(previous.fiscalZip)}"></div>
 <div class="field wide"><label for="razon">Nombre o razón social *</label><input id="razon" name="razon" maxlength="120" value="${esc(previous.razon)}"></div>
 </div></div></section>
 <div id="checkoutTotals" class="summary"></div><div class="checkout-actions"><button class="btn btn-dark" type="submit">CONFIRMAR PEDIDO</button><div class="autofill-options"><button type="button" class="autofill-button" id="fillApproved">Autocompletar · aprobar</button><button type="button" class="autofill-button" id="fillRejected">Autocompletar · rechazar</button></div></div>
 </form></div>`);
  const f = $("#checkoutForm");
  for (const name of ["payment"]) {
    let val = previous[name];
    if (val) {
      let radio = f.querySelector(`input[name="${name}"][value="${val}"]`);
      if (radio) radio.checked = true;
    }
  }
  if (previous.invoice === "on") f.elements.invoice.checked = true;
  renderPaymentFields(previous);
  toggleInvoice();
  updateCheckoutTotals();
}
function renderPaymentFields(previous = {}) {
  const f = $("#checkoutForm");
  if (!f) return;
  const method = new FormData(f).get("payment");
  const el = $("#paymentFields");
  if (!el) return;
  if (["Débito", "Crédito"].includes(method)) {
    el.innerHTML = `<div class="payment-detail"><div class="form-grid"><div class="field wide"><label for="cardNumber">Número de tarjeta *</label><input id="cardNumber" name="cardNumber" inputmode="numeric" minlength="16" maxlength="19" pattern="[0-9 ]{16,19}" required placeholder="0000 0000 0000 0000" value="${esc(previous.cardNumber || "")}"></div><div class="field"><label for="expiry">Vencimiento *</label><input id="expiry" name="expiry" required pattern="(0[1-9]|1[0-2])/[0-9]{2}" placeholder="MM/AA" value="${esc(previous.expiry || "")}"></div><div class="field"><label for="cvv">Código de seguridad *</label><input id="cvv" name="cvv" required inputmode="numeric" pattern="[0-9]{3,4}" maxlength="4" placeholder="000" value="${esc(previous.cvv || "")}"></div></div></div>`;
  } else if (method === "PayPal") {
    el.innerHTML =
      `<div class="payment-detail"><div class="field"><label for="paypalEmail">Correo de tu cuenta PayPal *</label><input id="paypalEmail" name="paypalEmail" type="email" required autocomplete="email" placeholder="cuenta@correo.com" value="${esc(previous.paypalEmail || "")}"></div></div>`;
  }
}
function toggleInvoice() {
  const enabled = $("#invoice")?.checked;
  if (!$("#invoiceFields")) return;
  $("#invoiceFields").classList.toggle("hidden", !enabled);
  for (const name of ["rfc", "razon", "fiscalZip"])
    $("#checkoutForm").elements[name].required = enabled;
}
function updateCheckoutTotals() {
  let f = $("#checkoutForm");
  if (!f) return;
  let coupon = f.elements.coupon.value.trim().toUpperCase(),
    sub = cartTotal(checkoutItems),
    ship = shipping(checkoutItems),
    qualifyingOff = thresholdDiscount(checkoutItems),
    promoOff = Math.round(sub * (coupon === "MODA10" ? 0.1 : 0)),
    off = discount(checkoutItems, coupon);
  $("#checkoutTotals").innerHTML =
    `<div class="line"><span>Subtotal</span><b>${money(sub)}</b></div>${sub >= MINIMUM_PROMO_SUBTOTAL ? `<div class="line"><span>Descuento por compra de $5,000 o más (10 %)</span><b>−${money(qualifyingOff)}</b></div>` : `<p class="cart-promo-hint">Compra ${money(MINIMUM_PROMO_SUBTOTAL)} o más y obtén 10 % de descuento. Te faltan ${money(MINIMUM_PROMO_SUBTOTAL - sub)}.</p>`}${coupon === "MODA10" ? `<div class="line"><span>Descuento MODA10 (10 %)</span><b>−${money(promoOff)}</b></div>` : ""}<div class="line"><span>Envío</span><b>${ship ? money(ship) : "GRATIS"}</b></div><div class="line"><strong>TOTAL A PAGAR</strong><strong>${money(sub - off + ship)}</strong></div>${coupon && coupon !== "MODA10" ? '<p class="hint">El código ingresado no aplica descuento.</p>' : ""}`;
}
function confirmPurchase(form) {
  const data = new FormData(form),
    obj = Object.fromEntries(data.entries());
  if (
    ["Débito", "Crédito"].includes(obj.payment) &&
    (obj.cardNumber || "").replace(/\D/g, "") === "4000000000000002"
  ) {
    retryData = obj;
    modal(
      `<div class="success payment-result"><div class="error-symbol">!</div><p class="eyebrow">PAGO RECHAZADO</p><h2>No pudimos confirmar el pago</h2><p>Hola, ${esc(obj.buyer)}. Tu pedido sigue intacto. Revisa los datos de pago e inténtalo de nuevo.</p><button class="btn btn-dark" id="retryPayment">VOLVER AL PAGO</button><button class="btn btn-light" data-close>CERRAR</button></div>`,
    );
    return;
  }
  const purchaseCount = previousPurchases(obj.email, obj.phone);
  let subtotal = cartTotal(checkoutItems),
    off = discount(checkoutItems, obj.coupon.trim().toUpperCase()),
    ship = shipping(checkoutItems),
    total = subtotal - off + ship,
    folio = "PB-" + Date.now().toString().slice(-9),
    purchased = checkoutItems.map((i) => ({ ...i }));
  for (const item of purchased) {
    let c = cart.find((i) => i.id === item.id && i.size === item.size);
    if (c) {
      c.qty -= item.qty;
      if (c.qty <= 0) cart = cart.filter((x) => x !== c);
    }
  }
  persist();
  customerHistory.push({
    email: normalizeEmail(obj.email),
    phone: normalizePhone(obj.phone),
    folio,
  });
  localStorage.setItem(
    "pullbear_customer_history",
    JSON.stringify(customerHistory),
  );
  const receiptCustomer = { ...obj };
  delete receiptCustomer.cardNumber;
  delete receiptCustomer.expiry;
  delete receiptCustomer.cvv;
  delete receiptCustomer.paypalEmail;
  lastOrder = {
    folio,
    total,
    subtotal,
    off,
    ship,
    purchased,
    customer: receiptCustomer,
    previousPurchases: purchaseCount,
    date: new Date(),
  };
  retryData = null;
  showPurchaseAccepted();
}
function showPurchaseAccepted() {
  const customer = lastOrder.customer;
  const invoice = customer.invoice === "on";
  const customerStatus = lastOrder.previousPurchases
    ? `Cliente recurrente · ${lastOrder.previousPurchases} compra${lastOrder.previousPurchases === 1 ? "" : "s"} anterior${lastOrder.previousPurchases === 1 ? "" : "es"}`
    : "Cliente nuevo";
  modal(`<div class="success purchase-accepted"><div class="check">✓</div><p class="eyebrow">PEDIDO CONFIRMADO</p><h2>¡Hola, ${esc(customer.buyer)}!</h2><p>Tu compra ha sido aceptada. La confirmación quedó asociada a <strong>${esc(customer.email)}</strong>.</p><p class="customer-status">${customerStatus}</p><div class="purchase-actions"><button class="btn btn-dark" data-close>CONFIRMAR</button><button class="btn btn-light" id="viewReceipt">${invoice ? "VER TICKET Y FACTURA" : "VER TICKET"}</button></div></div>`);
}
function showReceipt() {
  if (!lastOrder) return;
  const { folio, total, subtotal, off, ship, purchased, customer: obj, date } =
    lastOrder;
  modal(`<div class="success receipt"><div class="check">✓</div><p class="eyebrow">PEDIDO CONFIRMADO</p><h2>Ticket de compra</h2><p class="receipt-date">${date.toLocaleString("es-MX", { dateStyle: "long", timeStyle: "short" })}</p><div class="receipt-products">${purchased
    .map((i) => {
      const p = find(i.id);
      return `<div class="receipt-product"><img src="${p.image}" alt="${esc(p.name)}"><div><strong>${esc(p.name)}</strong><small>Talla ${esc(i.size)} · ${i.qty} unidad${i.qty === 1 ? "" : "es"}</small></div><b>${money(p.price * i.qty)}</b></div>`;
    })
    .join("")}</div><div class="summary">
 <div class="line"><span>Folio</span><strong>${folio}</strong></div><div class="line"><span>Correo de referencia</span><strong>${esc(obj.email)}</strong></div><div class="line"><span>Método</span><strong>${esc(obj.payment)}</strong></div><div class="line"><span>Entrega</span><strong>${esc(obj.city)}, ${esc(obj.state)}</strong></div><div class="line"><span>Subtotal</span><strong>${money(subtotal)}</strong></div>${subtotal >= MINIMUM_PROMO_SUBTOTAL ? `<div class="line"><span>Descuento por compra de $5,000 o más (10 %)</span><strong>−${money(thresholdDiscount(purchased))}</strong></div>` : ""}${obj.coupon.trim().toUpperCase() === "MODA10" ? `<div class="line"><span>Descuento MODA10 (10 %)</span><strong>−${money(Math.round(subtotal * 0.1))}</strong></div>` : ""}<div class="line"><span>Envío</span><strong>${money(ship)}</strong></div><div class="line"><span>TOTAL</span><strong>${money(total)}</strong></div></div>
 ${obj.invoice === "on" ? `<div class="invoice-box"><h3>Solicitud de factura</h3><p><b>RFC:</b> ${esc(obj.rfc.toUpperCase())}<br><b>Razón social:</b> ${esc(obj.razon)}<br><b>CP fiscal:</b> ${esc(obj.fiscalZip)}</p></div>` : ""}
 <button class="btn btn-dark" data-close>CONTINUAR COMPRANDO</button></div>`);
}
document.addEventListener("click", (e) => {
  const step = e.target.closest("[data-detail-step]");
  if (step) {
    const input = $("#detailQty");
    if (input)
      input.value = Math.max(
        1,
        Math.min(
          20,
          (Number(input.value) || 1) + Number(step.dataset.detailStep),
        ),
      );
    return;
  }
  let b = e.target.closest(
    "[data-close],[data-category],[data-detail],[data-fav],[data-quick],[data-size],[data-add],[data-buy],[data-qty],[data-remove],[data-checkout]",
  );
  if (!b) return;
  if (b.hasAttribute("data-close")) closeAll();
  else if (b.dataset.category) {
    category = b.dataset.category;
    render();
  } else if (b.dataset.fav) {
    e.stopPropagation();
    let id = b.dataset.fav;
    toggleFav(id);
    if (!$("#modal").classList.contains("hidden")) openDetail(id);
  } else if (b.dataset.detail) openDetail(b.dataset.detail);
  else if (b.dataset.quick) openDetail(b.dataset.quick);
  else if (b.dataset.size) {
    detailSize = b.dataset.size;
    document
      .querySelectorAll(".sizes button")
      .forEach((x) =>
        x.classList.toggle("selected", x.dataset.size === detailSize),
      );
  } else if (b.dataset.add) {
    if (
      add(
        b.dataset.add,
        detailSize,
        Math.max(1, Math.min(20, Number($("#detailQty").value) || 1)),
      )
    )
      openCart();
  } else if (b.dataset.buy) {
    if (!detailSize) {
      toast("Selecciona una talla");
      return;
    }
    startCheckout([
      {
        id: b.dataset.buy,
        size: detailSize,
        qty: Math.max(1, Math.min(20, Number($("#detailQty").value) || 1)),
      },
    ]);
  } else if (b.dataset.qty) {
    let [id, size, delta] = b.dataset.qty.split("|"),
      item = cart.find((i) => i.id === id && i.size === size);
    if (item) {
      item.qty += Number(delta);
      if (item.qty < 1) cart = cart.filter((x) => x !== item);
      persist();
      openCart();
    }
  } else if (b.dataset.remove) {
    let [id, size] = b.dataset.remove.split("|");
    cart = cart.filter((i) => !(i.id === id && i.size === size));
    persist();
    openCart();
  } else if (b.dataset.checkout) startCheckout(cart);
});
document.addEventListener("change", (e) => {
  if (e.target.id === "invoice") toggleInvoice();
  if (e.target.name === "payment") renderPaymentFields();
});
document.addEventListener("input", (e) => {
  if (
    ["coupon", "email", "phone"].includes(e.target.id) &&
    $("#checkoutForm")
  )
    updateCheckoutTotals();
});

function autofillCheckout(rejected) {
  const form = $("#checkoutForm");
  if (!form) return;
  const debit = form.querySelector('input[name="payment"][value="Débito"]');
  debit.checked = true;
  renderPaymentFields();
  const details = {
    buyer: "Andrea López",
    email: "cliente@correo.com",
    phone: "5512345678",
    street: "Calle Principal 123",
    district: "Centro",
    zip: "55000",
    city: "Ecatepec",
    state: "Estado de México",
    cardNumber: rejected ? "4000 0000 0000 0002" : "4242 4242 4242 4242",
    expiry: "12/29",
    cvv: "123",
    rfc: "XAXX010101000",
    fiscalZip: "55000",
    razon: "Andrea López",
  };
  for (const [name, value] of Object.entries(details)) {
    if (form.elements[name]) form.elements[name].value = value;
  }
  form.elements.invoice.checked = true;
  toggleInvoice();
  updateCheckoutTotals();
}

document.addEventListener("click", (e) => {
  if (e.target.id === "fillApproved" || e.target.id === "fillRejected") {
    autofillCheckout(e.target.id === "fillRejected");
    return;
  }
  if (e.target.id === "retryPayment") {
    const previous = retryData || {};
    retryData = null;
    startCheckout(checkoutItems, previous);
    return;
  }
  if (e.target.id === "viewReceipt") {
    showReceipt();
    return;
  }
  if (e.target.dataset.department) {
    department = e.target.dataset.department;
    render();
    location.hash = "#catalogo";
  }
});
document.addEventListener("submit", (e) => {
  if (e.target.id === "checkoutForm") {
    e.preventDefault();
    confirmPurchase(e.target);
  }
});
$("#overlay").addEventListener("click", closeAll);
$("#cartBtn").addEventListener("click", openCart);
$("#favBtn").addEventListener("click", openFavorites);
document.addEventListener("input", (e) => {
  if (e.target.id === "searchInput") {
    query = e.target.value.trim();
    render();
  }
});
document.addEventListener("click", (e) => {
  if (e.target.id === "showResults") {
    closeAll();
    location.hash = "#catalogo";
  }
});
$("#sort").addEventListener("change", (e) => {
  sort = e.target.value;
  render();
});
document.querySelectorAll("[data-filter]").forEach((a) =>
  a.addEventListener("click", () => {
    category = a.dataset.filter;
    department = "Todos";
    query = "";
    const input = $("#searchInput");
    if (input) input.value = "";
    render();
  }),
);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeAll();
  if ((e.key === "Enter" || e.key === " ") && e.target.matches(".product-img"))
    openDetail(e.target.dataset.detail);
});
updateCounts();
render();
