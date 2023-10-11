<?php
include '../DB/conexion.php';

$usuario = $_POST['correo'];
$nombre = $_POST['nombre'];
$fecha = $_POST['fecha'];
$telefono = $_POST['telefono'];
$empresa = $_POST['empresa'];

$pass = "Operativos123";

$insertUsuario = "INSERT INTO usuarios (usuario, pass, tipo_usuario, 
nombre_usuario, telefono, empresa, fecha)
VALUES
('$usuario', '$pass', 3, '$nombre', '$telefono', '$empresa', '$fecha')";

$result = $mysqli->query($insertUsuario);
        
if(!$result){
        echo 'ERROR AL REGISTRAR EL JEFE DE BRIGADA';
    }else{
        echo 'JEFE DE BRIGADA REGISTRADO CORRECTAMENTE';
}

?>