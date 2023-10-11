<?php
include 'conexion.php';

if(isset($_POST['user'])){

    $cause = $_POST['cause'];

    if($cause == "Todos"){
      
        $sql = "SELECT id_cause, ubicacion, nombre FROM nombre_cause ORDER BY id_cause DESC";
        $resultado = $mysqli->query($sql);

        $data = $resultado->fetch_all(MYSQLI_ASSOC);
        echo json_encode($data);
         
    }

    if($cause != "Todos"){
      
        $sql = "SELECT id_cause, ubicacion, nombre FROM nombre_cause WHERE id_cause = $cause";
        $resultado = $mysqli->query($sql);

        $data = $resultado->fetch_all(MYSQLI_ASSOC);
        echo json_encode($data);
         
    }

}