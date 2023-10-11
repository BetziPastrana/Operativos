<?php
include 'conexion.php';

 $sql = "SELECT id_cause, ubicacion, nombre FROM nombre_cause ORDER BY id_cause DESC";
        $resultado = $mysqli->query($sql);

        $data = $resultado->fetch_all(MYSQLI_ASSOC);
        echo json_encode($data);