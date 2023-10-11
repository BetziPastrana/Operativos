<?php
include 'conexion.php';

$accion = $_POST['accion'];

if($accion == "Reportes"){

    $folio = $_POST['folio'];
    $tipo = $_POST['tipo'];

    if($tipo == "Con Canales"){

        $sqlReporte = "SELECT * FROM reportes INNER JOIN usuarios 
        ON usuarios.id_usuario = reportes.id_usuario
        INNER JOIN nombre_cause ON nombre_cause.id_cause = reportes.id_cause 
        WHERE folio = $folio";

        $resultado = $mysqli->query($sqlReporte);
        $reporte = $resultado->fetch_array();

        echo json_encode(array(
            'folio' => $reporte['folio'],
            'fecha' => $reporte['fecha_publicacion'],
            'actividad' => $reporte['tipo_actividad'],
            'ubicacion' => $reporte['ubicacion'],
            'avance' => $reporte['avance'],
            'ancho' => $reporte['ancho'],
            'area' => $reporte['area'],
            'peso' => $reporte['peso'],
            'estado' => $reporte['estado'],
            'cause' => $reporte['id_cause'],
            'numeroBrigadistas' => $reporte['numero_brigadistas'],
            'observaciones' => $reporte['observaciones'],
            'nombreUsuario' => $reporte['nombre_usuario'],
            'descripcion' => $reporte['descripcion'],
            'telefono' => $reporte['telefono']
        ));

    } 
    else if($tipo == "Sin Canales"){
        $sqlReporte = "SELECT * FROM reportes INNER JOIN usuarios 
        ON usuarios.id_usuario = reportes.id_usuario
        WHERE folio = $folio";

        $resultado = $mysqli->query($sqlReporte);
        $reporte = $resultado->fetch_array();

        echo json_encode(array(
            'folio' => $reporte['folio'],
            'fecha' => $reporte['fecha_publicacion'],
            'actividad' => $reporte['tipo_actividad'],
            'ubicacion' => $reporte['ubicacion'],
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
    }
    

}

else if($accion == "Tipo_actividad"){

    $folio = $_POST['folio'];

    $sqlReporte = "SELECT tipo_actividad, descripcion FROM reportes WHERE folio = $folio";

    $resultado = $mysqli->query($sqlReporte);
    $reporte = $resultado->fetch_array();

    echo json_encode(array('actividad' => $reporte['tipo_actividad'], 'descripcion' => $reporte['descripcion']));

}

else if($accion == "Jefe de Brigada"){

    $id = $_POST['id'];

    $sqlUser = "SELECT * FROM usuarios WHERE id_usuario = $id AND tipo_usuario = 3";

    $resultado = $mysqli->query($sqlUser);
    $usuario = $resultado->fetch_array();

    echo json_encode(array(
        'nombre' => $usuario['nombre_usuario'],
        'fecha' => $usuario['fecha'],
        'correo' => $usuario['usuario'],
        'telefono' => $usuario['telefono'],
        'empresa' => $usuario['empresa']
    ));

}

else if($accion == "Usuarios Web"){

    $id = $_POST['id'];

    $sqlUser = "SELECT * FROM usuarios
    INNER JOIN perfiles ON usuarios.tipo_usuario = perfiles.id_perfil
    WHERE id_usuario = $id AND tipo_usuario != 3";

    $resultado = $mysqli->query($sqlUser);
    $usuario = $resultado->fetch_array();

    echo json_encode(array(
        'nombre' => $usuario['nombre_usuario'],
        'fecha' => $usuario['fecha'],
        'correo' => $usuario['usuario'],
        'telefono' => $usuario['telefono'],
        'empresa' => $usuario['empresa'],
        'perfil' => $usuario['perfil']
    ));

}

else if($accion == "Puntos de Basura"){


    $sqlfolio = $mysqli->query("SELECT MAX(folio) AS folio FROM puntos_basura");

    $resultfolio = $sqlfolio->fetch_row();
   
    echo json_encode(array("folio" => $resultfolio));

}