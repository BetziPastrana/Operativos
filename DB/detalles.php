<?php
include 'conexion.php';

$folio = $_POST['folio'];
$identificador = $_POST['identificador'];

if($identificador == "Sin Canales"){

    $sqlReporte = "SELECT reportes.folio, usuarios.nombre_usuario, 
    reportes.avance, reportes.ancho, reportes.area, reportes.peso, 
    reportes.estado, reportes.fecha_publicacion, reportes.numero_brigadistas,
    reportes.observaciones, reportes.descripcion, usuarios.telefono  
    FROM reportes INNER JOIN usuarios ON usuarios.id_usuario = reportes.id_usuario 
    WHERE folio = '$folio'";
    
    $resultado = $mysqli->query($sqlReporte);
    $reporte = $resultado->fetch_array();

    echo json_encode(array(
        'folio' => $reporte['folio'],
        'fecha' => $reporte['fecha_publicacion'],
        'avance' => $reporte['avance'],
        'ancho' => $reporte['ancho'],
        'area' => $reporte['area'],
        'peso' => $reporte['peso'],
        'estado' => $reporte['estado'],
        'numeroBrigadistas' => $reporte['numero_brigadistas'],
        'observaciones' => $reporte['observaciones'],
        'nombreUsuario' => $reporte['nombre_usuario'],
        'descripcion' => $reporte['descripcion'],
        'telefono' => $reporte['telefono']
    ));
} else if($identificador == "Con Canales"){

    $sqlReporte = "SELECT reportes.folio, usuarios.nombre_usuario, 
    reportes.avance, reportes.ancho, reportes.area, reportes.peso, 
    reportes.estado, reportes.fecha_publicacion, reportes.numero_brigadistas,
    reportes.observaciones, reportes.descripcion, usuarios.telefono, nombre_cause.nombre   
    FROM reportes INNER JOIN usuarios ON usuarios.id_usuario = reportes.id_usuario
    INNER JOIN nombre_cause ON nombre_cause.id_cause = reportes.id_cause 
    WHERE folio = '$folio'";
    
    $resultado = $mysqli->query($sqlReporte);
    $reporte = $resultado->fetch_array();

    echo json_encode(array(
        'folio' => $reporte['folio'],
        'fecha' => $reporte['fecha_publicacion'],
        'avance' => $reporte['avance'],
        'ancho' => $reporte['ancho'],
        'area' => $reporte['area'],
        'peso' => $reporte['peso'],
        'estado' => $reporte['estado'],
        'cause' => $reporte['nombre'],
        'numeroBrigadistas' => $reporte['numero_brigadistas'],
        'observaciones' => $reporte['observaciones'],
        'nombreUsuario' => $reporte['nombre_usuario'],
        'descripcion' => $reporte['descripcion'],
        'telefono' => $reporte['telefono']
    ));
}


?>