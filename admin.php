<?php
session_start();
if (!isset($_SESSION['tipo']) || $_SESSION['tipo'] !== 'admin') {
    die("Acceso denegado.");
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Panel Administrador - TechNova</title>
</head>
<body>
    <h2>Agregar Producto</h2>
    <form action="agregar_producto.php" method="POST" enctype="multipart/form-data">
        <label>Nombre:</label><input type="text" name="nombre" required><br>
        <label>Descripción:</label><textarea name="descripcion" required></textarea><br>
        <label>Precio:</label><input type="number" step="0.01" name="precio" required><br>
        <label>Imagen:</label><input type="file" name="imagen" accept="image/*" required><br>
        <button type="submit">Guardar</button>
    </form>
</body>
</html>
    