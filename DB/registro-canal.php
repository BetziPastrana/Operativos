<?php
include '../DB/conexion.php';

$ubicacion = $_POST['ubicacion'];
$nombre = $_POST['nombre'];

$insertCanal = "INSERT INTO nombre_cause (nombre, ubicacion)
VALUES
('$nombre', '$ubicacion')";

$result = $mysqli->query($insertCanal);
        
if(!$result){
        echo 'ERROR AL REGISTRAR EL CAUSE';
    }else{
        echo 'CAUSE REGISTRADO CORRECTAMENTE';
}

?>