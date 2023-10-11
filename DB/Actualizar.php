<?php
include 'conexion.php';


$accion = $_POST['accion'];

if($accion == "Reportes"){

    $tipoBrigada = $_POST['tipo_brigada'];

    if($tipoBrigada == "Con Canales"){

        $tipoActividad = $_POST['tipo_actividad'];
        $descripcion = $_POST['descripcion'];
        $ubicacion = $_POST["ubicacion"];
        $avance = $_POST['avance'];
        $ancho = $_POST['ancho'];
        $area = $_POST['area'];
        $peso = $_POST['peso'];
        $idCause = $_POST['idCause'];
        $estado = $_POST['estado'];
        $numeroBrigadistas = $_POST['numeroBrigadistas'];
        $observaciones = $_POST['observaciones'];
        $folio = $_POST['folio'];

        $updateSql = "UPDATE reportes SET tipo_actividad = '$tipoActividad', ubicacion = '$ubicacion',
        avance = $avance, ancho = $ancho, area = $area, peso = $peso, id_cause = $idCause,
        estado = '$estado', numero_brigadistas = $numeroBrigadistas, observaciones = '$observaciones',
        descripcion = '$descripcion' WHERE folio = $folio";

        $result = $mysqli->query($updateSql);
                
        if(!$result){
            echo 'ERROR AL ACTUALIZAR EL REPORTE';
        }
        else{
            echo 'REPORTE ACTUALIZADO CORRECTAMENTE';
        }
    }

    if($tipoBrigada == "Sin Canales"){

        $tipoActividad = $_POST['tipo_actividad'];
        $descripcion = $_POST['descripcion'];
        $ubicacion = $_POST["ubicacion"];
        $avance = $_POST['avance'];
        $ancho = $_POST['ancho'];
        $area = $_POST['area'];
        $peso = $_POST['peso'];
        $estado = $_POST['estado'];
        $numeroBrigadistas = $_POST['numeroBrigadistas'];
        $observaciones = $_POST['observaciones'];
        $folio = $_POST['folio'];

        $updateSql = "UPDATE reportes SET tipo_actividad = '$tipoActividad', ubicacion = '$ubicacion',
        avance = $avance, ancho = $ancho, area = $area, peso = $peso,
        estado = '$estado', numero_brigadistas = $numeroBrigadistas, observaciones = '$observaciones',
        descripcion = '$descripcion' WHERE folio = $folio";

        $result = $mysqli->query($updateSql);
                
        if(!$result){
            echo 'ERROR AL ACTUALIZAR EL REPORTE';
        }
        else{
            echo 'REPORTE ACTUALIZADO CORRECTAMENTE';
        }
    }

    
}

else if($accion == "Jefe de Brigada"){

    $id = $_POST['id'];
    $usuario = $_POST['correo'];
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $empresa = $_POST['empresa'];
    $pass = $_POST['pass'];

    if($pass == null){

        $updateSql = "UPDATE usuarios SET usuario = '$usuario',
        nombre_usuario = '$nombre', telefono = $telefono, empresa = '$empresa' 
        WHERE id_usuario = $id AND tipo_usuario = 3";

        $result = $mysqli->query($updateSql);
                
        if(!$result){
            echo 'ERROR AL ACTUALIZAR EL USUARIO';
        }
        else{
            echo 'USUARIO ACTUALIZADO CORRECTAMENTE';
        }

    }
    else if($pass != null){

        $updateSql = "UPDATE usuarios SET usuario = '$usuario', pass = '$pass',
        nombre_usuario = '$nombre', telefono = $telefono, empresa = '$empresa'
        WHERE id_usuario = $id AND tipo_usuario = 3";

        $result = $mysqli->query($updateSql);
                
        if(!$result){
            echo 'ERROR AL ACTUALIZAR EL USUARIO';
        }
        else{
            echo 'USUARIO ACTUALIZADO CORRECTAMENTE';
        }

    }


}

else if($accion == "Usuario Web"){

    $id = $_POST['id'];
    $usuario = $_POST['correo'];
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $empresa = $_POST['empresa'];
    $pass = $_POST['pass'];

    if($pass == null){

        $updateSql = "UPDATE usuarios SET usuario = '$usuario',
        nombre_usuario = '$nombre', telefono = $telefono, empresa = '$empresa' 
        WHERE id_usuario = $id AND tipo_usuario != 3";

        $result = $mysqli->query($updateSql);
                
        if(!$result){
            echo 'ERROR AL ACTUALIZAR EL USUARIO';
        }
        else{
            echo 'USUARIO ACTUALIZADO CORRECTAMENTE';
        }

    }
    else if($pass != null){

        $updateSql = "UPDATE usuarios SET usuario = '$usuario', pass = '$pass',
        nombre_usuario = '$nombre', telefono = $telefono, empresa = '$empresa'
        WHERE id_usuario = $id AND tipo_usuario != 3";

        $result = $mysqli->query($updateSql);
                
        if(!$result){
            echo 'ERROR AL ACTUALIZAR EL USUARIO';
        }
        else{
            echo 'USUARIO ACTUALIZADO CORRECTAMENTE';
        }

    }


}