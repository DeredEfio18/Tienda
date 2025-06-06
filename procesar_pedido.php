<?php
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);
if (!$data) {
    echo json_encode(["error" => "Datos inválidos"]);
    exit;
}

$cliente = $data['cliente'];
$pedido = $data['pedido'];

$conn = new mysqli("localhost", "root", "", "technova");

if ($conn->connect_error) {
    echo json_encode(["error" => "Fallo conexión"]);
    exit;
}

// Insertar cliente
$stmt = $conn->prepare("INSERT INTO clientes (nombre, email, direccion, metodo_pago) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $cliente['nombre'], $cliente['email'], $cliente['direccion'], $cliente['pago']);
$stmt->execute();
$cliente_id = $stmt->insert_id;
$stmt->close();

// Insertar pedido
$stmt = $conn->prepare("INSERT INTO pedidos (cliente_id, fecha) VALUES (?, NOW())");
$stmt->bind_param("i", $cliente_id);
$stmt->execute();
$pedido_id = $stmt->insert_id;
$stmt->close();

// Insertar productos del pedido
$stmt = $conn->prepare("INSERT INTO productos_pedido (pedido_id, nombre, precio_unitario, cantidad) VALUES (?, ?, ?, ?)");
foreach ($pedido as $item) {
    $nombre = $item['nombre'];
    $precio = $item['precio'] * 1.20;
    $cantidad = $item['cantidad'];
    $stmt->bind_param("isdi", $pedido_id, $nombre, $precio, $cantidad);
    $stmt->execute();
}
$stmt->close();

$conn->close();

echo json_encode(["ordenID" => $pedido_id]);
?>

