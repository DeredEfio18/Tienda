document.addEventListener("DOMContentLoaded", function () {
    const productos = [
        { id: 1, nombre: "Laptop Gamer Asus", precio: 1200, imagen: "mult/LaptopGamer.jpg", descripcion: "Potente laptop para gaming con procesador de última generación y tarjeta gráfica dedicada." },
        { id: 2, nombre: "Celular Moto G85 5G", precio: 800, imagen: "mult/smartphone5g.jpg", descripcion: "Teléfono marca: Moto G85 con conectividad 5G, cámara de alta resolución y gran rendimiento." },
        { id: 3, nombre: "Auriculares Inalámbricos REDD", precio: 150, imagen: "mult/audiculares.jpg", descripcion: "Auriculares Bluetooth con cancelación de ruido y batería de larga duración." },
        { id: 4, nombre: "Smartwatch Deportivo", precio: 200, imagen: "mult/smartwatch.jpg", descripcion: "Reloj inteligente resistente al agua con múltiples funciones deportivas y monitoreo de salud." },
        { id: 5, nombre: "Teclado Mecánico RGB Halion", precio: 200, imagen: "mult/teclado_mecanico.jpeg", descripcion: "Teclado mecánico retroiluminado con teclas programables y switches de alta precisión." },
        { id: 6, nombre: "Tarjeta Grafica Nvidia RTX 3060", precio: 1800, imagen: "mult/TarjetaGrafica.jpg", descripcion: "La tarjeta gráfica RTX 3060 es una potente opción para los entusiastas de los videojuegos y creadores de contenido que buscan un rendimiento excepcional." },
        { id: 7, nombre: "Disco Duro SSD Kingston M2 Sata III 240gb" , precio: 120, imagen: "mult/DiscoSSD.jpg", descripcion: "Disco Duro solido SSD Kingston M2 Sata III  Capacidad: 240gb"},
        { id: 8, nombre: "Kit De 4 Tintas de Impresora Epson Modelo: L3150", precio: 150, imagen: "mult/Tintas.jpg", descripcion: "Kit de Tintas Epson T544, 4 botellas P/impresora L3150, L3110 tinta Negra/Cyan/Magenta/Amarillo"},
        { id: 9, nombre: "MONITOR TEROS TE-2910G, 29″ IPS", precio: 900, imagen: "mult/MONITOR-GAMING.jpg", descripcion: "Monitor Teros de 29″ con pantalla plana WFHD (2560x1080), panel IPS, 1 ms de respuesta y 100 Hz de refresco. Brillo de 250 cd/m², contraste 5,000,000:1, ángulo de visión 178° y tecnología FreeSync."},
        { id: 10, nombre: "Audífonos Gamer Led Con Micrófono G9000 Para Pc, Laptop, ps4", precio: 68, imagen: "mult/audicularesGamer.jpg", descripcion: "🎧 Audífonos Gamer G9000 con LED, sonido envolvente, micrófono con cancelación de ruido y compatibilidad multiplataforma."},
        { id: 11, nombre: "Case Gamer Micronics Corsario MIC GC802 Tira Led RGB 1 FAN", precio: 200, imagen: "mult/Case-gamer.jpg", descripcion: "🖥️ Case Micronics Corsario GC802 RGB, vidrio templado, 20 modos de iluminación, buena ventilación, ATX/Micro ATX/Mini ITX, USB 3.0, y soporte para GPU de hasta 30 cm."},
        { id: 12, nombre: "Mouse inalámbrico NX-7000 negro Genius", precio: 40, imagen: "mult/mouse-genius.jpg", descripcion: "Este innovador Mouse Inalámbrico NX7000 Negro Genius ofrece una experiencia líder del mercado, gracias a su tecnología de conexión 2.4GHz y su cómodo diseño."},
        { id: 13, nombre: "Mouse gamer T4G Kfir RGB alámbrico, conexión USB, 6 botones, 3600 dpi, negro", precio: 50, imagen: "mult/mouse-gamer.jpg", descripcion: "🖱️ Mouse Gamer T4G Kfir RGB, alámbrico USB, 6 botones, 3600 DPI, iluminación RGB y diseño ergonómico para mayor precisión y confort."},
        { id: 14, nombre: "Combo gamer rgb 4en1 teclado, mouse, mousepad, audífono twolf-tf800", precio: 100, imagen: "mult/Combo-Gamer.jpg", descripcion: "🔥 Kit Gamer T-WOLF 4 en 1, Incluye teclado RGB, mouse con luces LED, audífonos con micrófono y pad antideslizante. ¡Listo para jugar con estilo y precisión!"},
        { id: 15, nombre: "Silla Gamer Lumbar Neo", precio: 350, imagen: "mult/SillaGamer.jpg", descripcion: "Diseño deportivo, cojines lumbar y cervical, reclinable, giratoria y con ruedas. Ideal para largas sesiones de juego o trabajo."},
        { id: 16, nombre: "MOUSE PAD GAMER CON LUCES GAMER RGB RETRO ILUMINADA 30X80", precio: 60, imagen: "mult/Mousepad.jpg", descripcion: "Mousepad gamer RGB con iluminación LED multicolor, superficie suave para deslizamiento preciso y base antideslizante. Ideal para escritorios gamer o de oficina."},
        { id: 17, nombre: "ThinkCentre Neo 50a 27¨ 5ta Gen - Grey", precio: 5200, imagen: "mult/Computadora.jpg", descripcion: "Intel® Core™ i7-13620H de 13ᵃ Gen, 16 GB RAM DDR5, SSD de 512 GB, pantalla IPS FHD de 27 (100 Hz), gráficos Intel UHD, cámara 5 MP, Windows 11 Pro y conectividad Wi-Fi 6 y Bluetooth 5.1. Incluye teclado y mouse USB."},
        { id: 18, nombre: "Cable de Red Utp Cat 6 Testeado Rj45 20 Metros", precio: 50, imagen: "mult/CableUTP.jpg", descripcion: "Cable de red azul STP de 20 m, con conectores RJ45 chapados en oro, 24 AWG, PVC, 1000 MHz, cumple normas RoHS y ISO."},
    ];

    let carrito = [];
    let cliente = {};

    const contenedor = document.getElementById("productos");
    const listaCarrito = document.getElementById("listaCarrito");
    const totalCarrito = document.getElementById("totalCarrito");
    const contadorCarrito = document.getElementById("contadorCarrito");
    const modalCarrito = document.getElementById("modalCarrito");
    const modalDatosCliente = document.getElementById("modalDatosCliente");

    modalCarrito.style.display = "none";
    modalDatosCliente.style.display = "none";

    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        const precioConComision = producto.precio * 1.20;
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h2>${producto.nombre}</h2>
            <p>${producto.descripcion}</p>
            <p>Precio: $${precioConComision.toFixed(2)}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
        `;
        contenedor.appendChild(div);
    });

    window.agregarAlCarrito = function (id) {
        const producto = productos.find(p => p.id === id);
        const itemEnCarrito = carrito.find(item => item.id === id);

        if (itemEnCarrito) {
            itemEnCarrito.cantidad++;
        } else {
            carrito.push({ ...producto, cantidad: 1 });
        }
        actualizarCarrito();
    };

    function actualizarCarrito() {
        listaCarrito.innerHTML = "";
        let total = 0;

        carrito.forEach((producto, index) => {
            const precioConComision = producto.precio * 1.20;
            total += precioConComision * producto.cantidad;

            const li = document.createElement("li");
            li.classList.add("carrito-item");
            li.innerHTML = `
                <span>${producto.nombre} - $${precioConComision.toFixed(2)} x ${producto.cantidad}</span>
                <button class="eliminar-btn" onclick="eliminarDelCarrito(${index})">X</button>
            `;
            listaCarrito.appendChild(li);
        });

        totalCarrito.textContent = total.toFixed(2);
        contadorCarrito.textContent = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    }

    window.eliminarDelCarrito = function (index) {
        carrito.splice(index, 1);
        actualizarCarrito();
    };

    document.getElementById("verCarrito").addEventListener("click", function () {
        modalCarrito.style.display = "flex";
    });

    window.cerrarCarrito = function () {
        modalCarrito.style.display = "none";
    };

    document.getElementById("pagar").addEventListener("click", function () {
        if (carrito.length === 0) {
            alert("Tu carrito está vacío.");
            return;
        }
        modalCarrito.style.display = "none";
        modalDatosCliente.style.display = "flex";
    });

    document.getElementById("formCliente").addEventListener("submit", function (e) {
        e.preventDefault();

        cliente = {
            nombre: document.getElementById("nombre").value,
            email: document.getElementById("email").value,
            direccion: document.getElementById("direccion").value,
            pago: document.querySelector('input[name="pago"]:checked').value
        };

        fetch("guardar_cliente.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                cliente: cliente,
                carrito: carrito
            })
        })
        .then(res => res.text())
        .then(data => {
            console.log("Respuesta del servidor:", data);
            generarComprobante(cliente);
            modalDatosCliente.style.display = "none";
            alert("¡Compra realizada con éxito!");
            carrito = [];
            actualizarCarrito();
        })
        .catch(err => {
            console.error("Error al enviar al servidor:", err);
            alert("Ocurrió un error al procesar tu compra.");
        });
    });

    window.cerrarDatosCliente = function () {
        modalDatosCliente.style.display = "none";
    };

    function generarComprobante(cliente) {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        doc.setFillColor(200, 200, 200);
        doc.rect(10, 10, 190, 30, "F");
        doc.setFont("helvetica", "bold");
        doc.setFontSize(18);
        doc.setTextColor(0, 0, 0);
        doc.text("TechNova - Comprobante de Pago", 20, 25);

        let y = 50;
        doc.setFontSize(12);
        doc.setTextColor(50, 50, 50);
        doc.text("Cliente: " + cliente.nombre, 20, y);
        y += 10;
        doc.text("Dirección: " + cliente.direccion, 20, y);
        y += 10;
        doc.text("Método de Pago: " + cliente.pago, 20, y);
        y += 10;
        doc.text("Detalles del pedido:", 20, y);
        y += 10;

        let total = 0;
        carrito.forEach(producto => {
            const precioConComision = producto.precio * 1.20;
            doc.setFont("helvetica", "normal");
            doc.text(`${producto.nombre} - $${precioConComision.toFixed(2)} x ${producto.cantidad}`, 20, y);
            total += producto.precio * producto.cantidad;
            y += 10;
        });

        doc.setFont("helvetica", "bold");
        y += 10;
        doc.text(`Total: $${total.toFixed(2)}`, 20, y);
        doc.save(`Comprobante_${cliente.nombre}.pdf`);
    }
});

const botonCarrito = document.getElementById("verCarrito");
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        botonCarrito.classList.add("flotante");
        botonCarrito.innerHTML = `🛒<span id="contadorCarrito" class="contador-burbuja">${contadorCarrito.textContent}</span>`;
    } else {
        botonCarrito.classList.remove("flotante");
        botonCarrito.innerHTML = `🛒 Ver Carrito (<span id="contadorCarrito">${contadorCarrito.textContent}</span>)`;
    }
});
function mostrarProductos() {
  window.scrollTo({ top: 500, behavior: "smooth" }); // Puedes ajustar la posición
}

function mostrarCategorias() {
  const categorias = document.getElementById("categorias");
  categorias.style.display = categorias.style.display === "block" ? "none" : "block";
}

const carrusel = document.querySelector('.carrusel');
let index = 0;
const totalProductos = document.querySelectorAll('.producto').length;

function siguienteProducto() {
  index = (index + 1) % totalProductos;
  carrusel.style.transform = `translateX(${-index * 195}px)`; // 180px ancho + 15px margen
}

setInterval(siguienteProducto, 3000);

