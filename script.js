// @ts-nocheck
// ===== CARRUSEL SCROLL =====
function scrollLeftBtn(id) {
  document.getElementById(id).scrollBy({ left: -343, behavior: "smooth" });
}
function scrollRightBtn(id) {
  document.getElementById(id).scrollBy({ left: 343, behavior: "smooth" });
}

// ===== MENÚ HAMBURGUESA =====
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ===== BUSCADOR MEJORADO (CON IMÁGEN Y MODAL) =====
const searchInput = document.getElementById("searchInput");
const suggestionsBox = document.getElementById("suggestions");

// 🔹 Catálogo general (puedes agregar más productos de otras páginas también)
const products = [
 // 🧢 CAMISETAS
  { nombre: "Teddy Bear Tee Navy", img: "https://nude-project.com/cdn/shop/files/TEDDY_BEAR_TEE_NAVY_front_f6bf8647-0a5b-4aa8-b871-600e2d5182dd_800x.jpg?v=1756285314", precio: 320 },
  { nombre: "Fuck Normal Tee Ash", img: "https://nude-project.com/cdn/shop/files/FUCK_NORMAL_TEE_ASH_front_800x.jpg?v=1756285517", precio: 310 },
  { nombre: "Xoxo Tee Marshmallow", img: "https://nude-project.com/cdn/shop/files/Xoxo_Tee_Marshmallow_front_800x.jpg?v=1756284094", precio: 300 },
  { nombre: "Dreamscape Tee Beige", img: "https://nude-project.com/cdn/shop/files/3_401a9835-457e-4815-8a6e-08422a4e50e5_800x.jpg?v=1760084422", precio: 320 },
  { nombre: "Dreamscape Tee White", img: "https://nude-project.com/cdn/shop/files/5_81e812b4-a530-442d-8e60-ea91d019faf3_800x.jpg?v=1760099711", precio: 310 },
  { nombre: "Casanova Tee White", img: "https://nude-project.com/cdn/shop/files/CASSANOVA_TEE_WHITE_WHITE_700x.jpg?v=1756984443", precio: 320 },
  { nombre: "Casanova Tee Navy", img: "https://nude-project.com/cdn/shop/files/CASSANOVATEENAVY_800x.jpg?v=1756984577", precio: 320 },
  { nombre: "Margarita Tee White", img: "https://nude-project.com/cdn/shop/files/MargaritaTeeWhite_329e23e1-b9bf-4455-93ee-47a242b8a0f1_800x.jpg?v=1757001347", precio: 300 },
  { nombre: "Play With Logo Tee Deep Ultramarine", img: "https://nude-project.com/cdn/shop/files/PlayWithLogoTeeDeepUltramarine_front_800x.jpg?v=1757437114", precio: 310 },
  { nombre: "Motto Tee Washed Black", img: "https://nude-project.com/cdn/shop/files/MOTTO_TEE_WASHED_BLACK_back_800x.jpg?v=1756283669", precio: 305 },
  { nombre: "Global Tee Grey Melange", img: "https://nude-project.com/cdn/shop/files/GLOBAL_GREY_MELANGE_700x.jpg?v=1756314983", precio: 310 },
  { nombre: "Global Soon Tee Ash", img: "https://nude-project.com/cdn/shop/files/GlobalSoonTeeAsh_back_800x.jpg?v=1756314978", precio: 310 },
  { nombre: "Julieta Tee", img: "https://nude-project.com/cdn/shop/files/JULIETA_Tee_1_800x.jpg?v=1756980013", precio: 330 },
  { nombre: "Metal Cherry Tee Grey", img: "https://nude-project.com/cdn/shop/files/MEtal_cherry_tee_grey_front_800x.jpg?v=1754916147", precio: 310 },
  { nombre: "Juicy Cherry Tee White", img: "https://nude-project.com/cdn/shop/files/Juicy_Cherry_TEE_White_front_eaf11b8d-ea58-405c-84cb-d1acbdd79459_800x.jpg?v=1754915462", precio: 290 },
  { nombre: "TikTok Tee White", img: "https://nude-project.com/cdn/shop/files/TIkTOK_TEE_white_front_800x.jpg?v=1756974673", precio: 300 },
  { nombre: "Amor de Verano Tee White", img: "https://nude-project.com/cdn/shop/files/AMOR_DE_VERANO_TEE_WHITE_FRONT_800x.jpg?v=1745922122", precio: 300 },
  { nombre: "Corazoncitos Tee White", img: "https://nude-project.com/cdn/shop/files/CORAZONCITOSTEEWHITE_front_800x.jpg?v=1745922140", precio: 280 },

  // 👚 TOPS
  { nombre: "Logo Top Marshmallow", img: "https://nude-project.com/cdn/shop/files/LOGOTOPMARSH_front_800x.jpg?v=1744383393", precio: 250 },
  { nombre: "Logo Top Black", img: "https://nude-project.com/cdn/shop/files/LOGOTOPBLACK_front_76c35ced-7254-45d9-a9d8-e32b01579ec2_800x.jpg?v=1744383394", precio: 250 },
  { nombre: "Logo Top Blue", img: "https://nude-project.com/cdn/shop/files/LOGOTOPBLUE_front_700x.jpg?v=1744383394", precio: 250 },
  { nombre: "Bassa Top Ash", img: "https://nude-project.com/cdn/shop/files/Bassa_Top_Ash_front_700x.jpg?v=1748265315", precio: 270 },
  { nombre: "Bassa Top White", img: "https://nude-project.com/cdn/shop/files/Bassa_Top_White_front_800x.jpg?v=1754387881", precio: 270 },
  { nombre: "Hot Top Navy", img: "https://nude-project.com/cdn/shop/files/HOT_TOP_NAVY_front_700x.jpg?v=1744384326", precio: 240 },
  { nombre: "Liberté Top Navy", img: "https://nude-project.com/cdn/shop/files/LIBERTETOPNAVYfront_a616e26a-3409-4da9-ae19-53e3ac79d804_front_800x.jpg?v=1744384326", precio: 250 },
  { nombre: "Liberté Top White", img: "https://nude-project.com/cdn/shop/files/LIBERTETOPWHITE_front_800x.jpg?v=1744384326", precio: 250 },
  { nombre: "Miu Miu Tank Top", img: "https://nude-project.com/cdn/shop/files/MiuMiuTankTop_front_800x.jpg?v=1755506622", precio: 260 },
  { nombre: "Miu Miu Tank Top Blue", img: "https://nude-project.com/cdn/shop/files/MiuMiuTankTopBlue_front_800x.jpg?v=1755506535", precio: 260 },

  // 👖 PANTALONES Y JEANS
  { nombre: "Basic Jeans Light Wash", img: "https://nude-project.com/cdn/shop/files/Basic_Jeans_Light_Wash_front_800x.jpg?v=1756992680", precio: 420 },
  { nombre: "Basic Jeans Metal Wash", img: "https://nude-project.com/cdn/shop/files/Basic_Jeans_Metal_Wash_front_800x.jpg?v=1756993265", precio: 430 },
  { nombre: "Basic Jeans Black Wash", img: "https://nude-project.com/cdn/shop/files/BasicJeansBlackWash_front_800x.jpg?v=1756993176", precio: 440 },
  { nombre: "Fantasy Long Pants Washed Green", img: "https://nude-project.com/cdn/shop/files/BADEPA_FANTASY_LONGPANTS_WASTED_WASHED_GREEN_front_800x.jpg?v=1744383505", precio: 460 },
  { nombre: "Old Baggy Denim Light Wash", img: "https://nude-project.com/cdn/shop/files/OLDBAGGYDENIMLIGHTWASH_front_800x.jpg?v=1756991902", precio: 400 },
  { nombre: "Old Baggy Denim Indigo", img: "https://nude-project.com/cdn/shop/files/OLDBAGGYDENIMINDIGO_front_700x.jpg?v=1756991914", precio: 420 },
  { nombre: "Old Baggy Denim Black", img: "https://nude-project.com/cdn/shop/files/OLDBAGGYDENIMBLACK_front_800x.jpg?v=1756991905", precio: 430 },
  { nombre: "Washed Denim Jeans", img: "https://nude-project.com/cdn/shop/files/2_27f6907a-0735-477b-b0d5-c89e65600d35_800x.jpg?v=1744383585", precio: 450 },
  { nombre: "Basic Straight Jeans Fantasy Wash", img: "https://nude-project.com/cdn/shop/files/BasicStraightJeansFantasyWash_1_800x.jpg?v=1757342094", precio: 340 },
  { nombre: "Woman Badepa Black", img: "https://nude-project.com/cdn/shop/files/WomanBadepaBlack_front_800x.jpg?v=1755508714", precio: 330 },
  { nombre: "Woman Badepa Blue", img: "https://nude-project.com/cdn/shop/files/WomanBadepaBlue_front_800x.jpg?v=1755508635", precio: 330 },
  { nombre: "Bootcut Bufalo Pants Indigo", img: "https://nude-project.com/cdn/shop/files/BOOTCUT_BUFALO_PANTS_INDIGO_front_800x.jpg?v=1756906970", precio: 360 },
  { nombre: "Flowers Basic Denim Shorts", img: "https://nude-project.com/cdn/shop/files/FLOWERS_BASIC_DENIM_SHORTS_front_800x.jpg?v=1745922551", precio: 280 },
  { nombre: "Updown Shorts", img: "https://nude-project.com/cdn/shop/files/Updown_Shorts_Front_2b01448c-51e1-4c55-bfe9-ee907f17cd1e_800x.jpg?v=1755776593", precio: 270 },
  { nombre: "Raw Basic Denim Shorts", img: "https://nude-project.com/cdn/shop/files/RAWBASICDENIMSHORTS_front_800x.jpg?v=1756971185", precio: 280 },
  { nombre: "Old Baggy Flower Embossed", img: "https://nude-project.com/cdn/shop/files/OLD_BAGGY_FLOWER_EMBOSSED6_6c57eeb2-f5a7-4a69-b007-63a64bd6bf21_800x.jpg?v=1750852223", precio: 350 },
  { nombre: "Old Baggy Denim Fantasy Jewel Flowers", img: "https://nude-project.com/cdn/shop/files/OldBaggyDenimFantasyJewelFlowers_1_800x.jpg?v=1759826449", precio: 360 },
  { nombre: "Carpenter Pants Single Knee Brown", img: "https://nude-project.com/cdn/shop/files/CarpenterPantsSingleKneeBrown_front_1_800x.jpg?v=1755525692", precio: 420 },
  { nombre: "City Carpenter Long Pants", img: "https://nude-project.com/cdn/shop/files/CITY_CARPENTER_LONG_PANTS_800x.jpg?v=1755776637", precio: 480 },
  { nombre: "Flap Chino Pants Navy", img: "https://nude-project.com/cdn/shop/files/Flap_Chino_Pants_Navy_front_800x.jpg?v=1755509288", precio: 460 },
  { nombre: "Flap Chino Pants Beige", img: "https://nude-project.com/cdn/shop/files/FlapChinoPantsBeige_front_800x.jpg?v=1755509163", precio: 450 },
  { nombre: "Tachi Velvet Carpenter Pants", img: "https://nude-project.com/cdn/shop/files/TACHI_VELVET_CARPENTER_PANTS_front_800x.jpg?v=1756970219", precio: 490 },
  { nombre: "Carpenter Pants Off-White", img: "https://nude-project.com/cdn/shop/files/CARPENTERPANTSOFF-WHITEfront_c13127a7-3e56-4dad-a367-07c3d51b06b1_front_800x.jpg?v=1744301037", precio: 470 },
  { nombre: "Army Cargo Pants Ash", img: "https://nude-project.com/cdn/shop/files/ARMY_CARGO_PANTS_ASH_front_700x.jpg?v=1725615113", precio: 440 },
  { nombre: "Lebrel Legging Black", img: "https://nude-project.com/cdn/shop/files/Lebrel_Legging_Black_1_700x.jpg?v=1756995733", precio: 290 },
  { nombre: "Essentials Pant Brown", img: "https://nude-project.com/cdn/shop/files/ESSENTIALS_PANT_BROWN_front_800x.jpg?v=1756739600", precio: 310 },
  { nombre: "Essentials Sweatpants Grey", img: "https://nude-project.com/cdn/shop/files/ESSENTIALS_SWEATPANTS_GREY_MELANGE_front_6c9d9430-f952-4404-be5b-2b10cd3d40b7_800x.jpg?v=1756309001", precio: 320 },
  { nombre: "Essentials Sweatpants Black", img: "https://nude-project.com/cdn/shop/files/ESSENTIALS_SWEATPANTS_BLACK_front_08f91886-0e8c-43fb-9e43-8a9bea8d0d73_800x.jpg?v=1756309008", precio: 320 },
  { nombre: "Soft Pants Grey", img: "https://nude-project.com/cdn/shop/files/13_2a772821-901b-4c84-8616-9453f580b40a_800x.jpg?v=1757434141", precio: 300 },

];


// 🔍 Evento al escribir
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase().trim();
  suggestionsBox.innerHTML = "";

  if (query === "") {
    suggestionsBox.style.display = "none";
    return;
  }

  const filtered = products.filter((p) =>
    p.nombre.toLowerCase().includes(query)
  );

  if (filtered.length > 0) {
    filtered.forEach((prod) => {
      const div = document.createElement("div");
      div.classList.add("suggestion-item");
      div.innerHTML = `
        <img src="${prod.img}" alt="${prod.nombre}">
        <div>
          <p class="nombre">${prod.nombre}</p>
          <p class="precio">Bs. ${prod.precio}</p>
        </div>
      `;

      div.addEventListener("click", () => {
        mostrarProducto(prod.nombre, prod.img, prod.imgBack, prod.precio);
        suggestionsBox.style.display = "none";
        searchInput.value = "";
      });

      suggestionsBox.appendChild(div);
    });
    suggestionsBox.style.display = "block";
  } else {
    suggestionsBox.style.display = "none";
  }
});

// 🔹 Cerrar sugerencias al hacer clic fuera
document.addEventListener("click", (e) => {
  if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
    suggestionsBox.style.display = "none";
  }
});

// ===== MODAL DE PRODUCTO =====
const modal = document.getElementById("modalProducto");
const modalImg = document.getElementById("modalImg");
const modalImgBack = document.getElementById("modalImgBack");
const modalNombre = document.getElementById("modalNombre");
const modalPrecio = document.getElementById("modalPrecio");
const cerrar = document.querySelector(".cerrar");

// Mostrar modal con doble imagen
function mostrarProducto(nombre, imagenFrontal, imagenTrasera, precio) {
  modal.style.display = "flex";
  modalImg.src = imagenFrontal;
  modalImgBack.src = imagenTrasera || imagenFrontal;
  modalNombre.textContent = nombre;
  modalPrecio.textContent = "Bs. " + precio;

  document.getElementById("talla").value = "";
  document.getElementById("cantidad").value = 1;

  const botonCarrito = document.querySelector(".btn-carrito");
  botonCarrito.onclick = function () {
    const talla = document.getElementById("talla").value;
    const cantidad = parseInt(document.getElementById("cantidad").value, 10);

    if (!talla) {
      Swal.fire({
        icon: "warning",
        title: "Selecciona una talla 👕",
        text: "Debes elegir una talla antes de agregar el producto al carrito.",
        confirmButtonColor: "#000",
      });
      return;
    }

    if (isNaN(cantidad) || cantidad < 1) {
      Swal.fire({
        icon: "warning",
        title: "Cantidad inválida ⚠",
        text: "Por favor ingresa una cantidad válida (mínimo 1).",
        confirmButtonColor: "#000",
      });
      return;
    }

    agregarAlCarrito(nombre, talla, cantidad, precio, imagenFrontal);

    Swal.fire({
      icon: "success",
      title: "Producto agregado 🛒",
      html:
        "<b>" +
        nombre +
        "</b><br>Talla: " +
        talla +
        "<br>Cantidad: " +
        cantidad,
      showConfirmButton: false,
      timer: 1800,
    });

    cerrarModal();
  };
}

// Cerrar modal
cerrar.addEventListener("click", cerrarModal);
window.addEventListener("click", (e) => {
  if (e.target === modal) cerrarModal();
});
function cerrarModal() {
  modal.style.display = "none";
}

// ===== CARRITO =====
let carrito = [];
const contadorCarrito = document.getElementById("contadorCarrito");
const carritoPanel = document.getElementById("carritoPanel");
const overlayCarrito = document.getElementById("overlayCarrito");
const carritoItems = document.getElementById("carritoItems");
const carritoTotal = document.getElementById("carritoTotal");

// ✅ Cargar carrito guardado al iniciar la página
window.addEventListener("DOMContentLoaded", () => {
  const carritoGuardado = localStorage.getItem("carritoChamoys");
  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
    actualizarCarrito();
  }
});

// Agregar producto
function agregarAlCarrito(nombre, talla, cantidad, precio, imagen) {
  const existente = carrito.find(
    (item) => item.nombre === nombre && item.talla === talla
  );
  if (existente) {
    existente.cantidad += cantidad;
  } else {
    carrito.push({ nombre, talla, cantidad, precio, imagen });
  }
  actualizarCarrito();
}

// Actualizar vista del carrito
function actualizarCarrito() {
  carritoItems.innerHTML = "";
  let total = 0;

  if (carrito.length === 0) {
    carritoItems.innerHTML = '<p class="carrito-vacio">Tu carrito está vacío.</p>';
  } else {
    carrito.forEach((prod, index) => {
      const item = document.createElement("div");
      item.classList.add("carrito-item");
      item.innerHTML = `
        <img src="${prod.imagen}" alt="${prod.nombre}">
        <div class="carrito-item-info">
          <h4>${prod.nombre}</h4>
          <p>Talla: ${prod.talla}</p>
          <p>Cantidad: ${prod.cantidad}</p>
          <p>Bs. ${(prod.precio * prod.cantidad).toFixed(2)}</p>
        </div>
        <button class="eliminar-item" data-index="${index}">✖</button>
      `;
      carritoItems.appendChild(item);
      total += prod.precio * prod.cantidad;
    });
  }

  carritoTotal.textContent = "Bs. " + total.toFixed(2);
  contadorCarrito.textContent = carrito.length;

  // Botones eliminar
  document.querySelectorAll(".eliminar-item").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index");
      eliminarDelCarrito(index);
    });
  });

  // ✅ Guardar el carrito actualizado en localStorage
  localStorage.setItem("carritoChamoys", JSON.stringify(carrito));
}

// Eliminar producto del carrito
function eliminarDelCarrito(index) {
  const prod = carrito[index];
  const carritoItems = document.getElementById("carritoItems");
  const itemElement = carritoItems.children[index];
  if (!itemElement) return;

  const confirmBox = document.createElement("div");
  confirmBox.classList.add("confirm-box");
  confirmBox.innerHTML = `
    <p><strong>¿Eliminar este producto?</strong></p>
    <p>${prod.nombre} (${prod.talla})</p>
    <div class="confirm-buttons">
      <button class="btn-confirmar">Sí, eliminar</button>
      <button class="btn-cancelar">Cancelar</button>
    </div>
  `;

  itemElement.insertAdjacentElement("afterend", confirmBox);

  confirmBox.querySelector(".btn-confirmar").addEventListener("click", () => {
    carrito.splice(index, 1);
    actualizarCarrito();
    mostrarMensajeCarrito("Producto eliminado 🗑", "#d33");
  });

  confirmBox.querySelector(".btn-cancelar").addEventListener("click", () => {
    confirmBox.remove();
  });
}

// ===== MOSTRAR / CERRAR CARRITO =====
document.getElementById("iconoCarrito").addEventListener("click", () => {
  carritoPanel.classList.add("activo");
  overlayCarrito.classList.add("activo");
});
document.getElementById("cerrarCarrito").addEventListener("click", cerrarCarrito);
overlayCarrito.addEventListener("click", cerrarCarrito);

function cerrarCarrito() {
  carritoPanel.classList.remove("activo");
  overlayCarrito.classList.remove("activo");
}

// ===== VACIAR CARRITO =====
function vaciarCarrito() {
  carrito = [];
  localStorage.removeItem("carritoChamoys");
  actualizarCarrito();
  mostrarMensajeCarrito("Carrito vaciado 🧹", "#444");
}

// Agregar botón de “Vaciar Carrito”
const carritoFooter = document.querySelector(".carrito-footer");
if (carritoFooter) {
  const btnVaciar = document.createElement("button");
  btnVaciar.textContent = "🗑 Vaciar Carrito";
  btnVaciar.classList.add("btn-vaciar");
  btnVaciar.addEventListener("click", vaciarCarrito);
  carritoFooter.appendChild(btnVaciar);
}

// ===== MINI MENSAJE DENTRO DEL CARRITO =====
function mostrarMensajeCarrito(texto, color = "#000") {
  const msg = document.createElement("div");
  msg.classList.add("mensaje-carrito");
  msg.textContent = texto;
  msg.style.background = color;
  msg.style.color = "#fff";
  msg.style.padding = "8px";
  msg.style.margin = "10px";
  msg.style.borderRadius = "8px";
  msg.style.textAlign = "center";
  msg.style.fontWeight = "600";
  msg.style.animation = "fadeInOut 2s ease forwards";

  const carritoItems = document.getElementById("carritoItems");
  carritoItems.prepend(msg);

  setTimeout(() => msg.remove(), 2000);
}

// ===== REDIRECCIÓN A LA PÁGINA DE PAGO =====
document.addEventListener("DOMContentLoaded", () => {
  const btnPagar = document.getElementById("btnPagar");
  if (btnPagar) {
    btnPagar.addEventListener("click", () => {
      // Si el carrito está vacío, no deja pasar
      const carrito = JSON.parse(localStorage.getItem("carritoChamoys")) || [];
      if (carrito.length === 0) {
        Swal.fire({
          icon: "warning",
          title: "Carrito vacío 🛒",
          text: "Agrega productos antes de proceder al pago.",
          confirmButtonColor: "#000",
        });
        return;
      }

      // Redirige a pagar.html
      window.location.href = "pagar.html";
    });
  }
});