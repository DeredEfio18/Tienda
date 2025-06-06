<?php
header("Content-Type: application/json");

// Recibir datos del pedido
$pedido = json_decode(file_get_contents("php://input"), true);

if (!$pedido || !isset($pedido["pedido"])) {
    echo json_encode(["error" => "Datos de pedido inválidos"]);
    exit;
}

// Simulación de procesamiento del pedido
$ordenID = rand(1000, 9999);

// Guardar en base de datos (opcional)
// ...

// Responder con éxito
echo json_encode(["ordenID" => $ordenID, "mensaje" => "Pedido recibido correctamente"]);
?>
