// Archivo: usuarios.js

// Datos de ejemplo con un administrador por defecto
if (!localStorage.getItem("usuarios")) {
    const admin = [{ correo: "admin@tecnova.com", contrasena: "admin123", rol: "admin" }];
    localStorage.setItem("usuarios", JSON.stringify(admin));
}


function registrarUsuario(nombre, correo, contrasena) {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.push({ nombre, correo, contrasena, rol: "cliente" });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    window.location.href = "login.html";
}

function iniciarSesion(correo, contrasena) {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuario = usuarios.find(u => u.correo === correo && u.contrasena === contrasena);

    if (usuario) {
        sessionStorage.setItem("usuario", JSON.stringify(usuario));
        alert("Inicio de sesión exitoso");

        if (usuario.rol === "admin") {
            window.location.href = "admin.html";
        } else {
            window.location.href = "cliente.html";
        }
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}
