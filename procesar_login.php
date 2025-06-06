<?php
session_start();

$usuario = $_POST['usuario'];
$contrasena = $_POST['contraseña'];

// Cuentas fijas
$usuarios = [
    "cliente" => [
        "password" => "cliente123",
        "rol" => "cliente"
    ],
    "admin" => [
        "password" => "admin123",
        "rol" => "admin"
    ]
];

// Validar usuario y contraseña
if (isset($usuarios[$usuario]) && $usuarios[$usuario]['password'] === $contrasena) {
    $_SESSION['usuario'] = $usuario;
    $_SESSION['rol'] = $usuarios[$usuario]['rol'];

    header("Location: paginasafilidas.html");
    exit();
} else {
    echo "Usuario o contraseña incorrectos.";
}
?>
