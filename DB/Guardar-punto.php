<?php
include 'conexion.php';

error_reporting(0);

$folio = $_POST['folio'];
$fecha = $_POST['fecha'];
$direccion = $_POST["direccion"];
$latitud = $_POST['latitud'];
$longitud = $_POST['longitud'];

$sqlCont = $mysqli->query("SELECT folio FROM puntos_basuras WHERE latitud = $latitud AND
longitud = $longitud");

$Contfolio = $sqlCont->num_rows;

if($Contfolio == 0){
    
    $insertPunto = "INSERT INTO puntos_basura
    (folio, latitud, longitud, direccion,fecha)
    VALUES
    ($folio, $latitud, $longitud, '$direccion','$fecha')";

    $result = $mysqli->query($insertPunto);
            
        if(!$result){
            echo 'ERROR AL REGISTRAR EL PUNTO DE BASURA';
        }
        else{
            echo 'PUNTO DE BASURA REGISTRADO CORRECTAMENTE';
        }
}
else {
    echo 'ESTA UBICACIÓN YA ESTA REGISTRADA';
}


