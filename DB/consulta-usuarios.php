<?php
include 'conexion.php';

if(isset(($_POST['user']))){
    
    $sqlUser = $mysqli->query("SELECT COUNT(id_usuario) FROM usuarios WHERE tipo_usuario != 3");
    $sqlReport = $mysqli->query("SELECT COUNT(folio) FROM reportes");
    $sqlJefes = $mysqli->query("SELECT COUNT(id_usuario) FROM usuarios WHERE tipo_usuario = 3");

    $user = $sqlUser->fetch_row();
    $report = $sqlReport->fetch_row();
    $jefes = $sqlJefes->fetch_row();

    
    echo json_encode(array("usuarios" => $user, "reportes" => $report, "jefes" => $jefes));

    $mysqli->close();
}