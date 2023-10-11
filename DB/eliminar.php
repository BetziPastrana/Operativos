<?php
include 'conexion.php';

if(isset($_POST['accion'])){

    $accion = $_POST['accion']; 

    //ELIMINAR REPORTES
    if($accion == "Reporte"){

        $folio = $_POST['folio']; //Folio del reporte
        
        $sqlDelete = "DELETE FROM reportes WHERE folio = '$folio'";
        $resultado = $mysqli->query($sqlDelete);

        if(!$resultado){
            echo 'ERROR AL ELIMINAR EL REPORTE';
        }
        else{
            echo 'EL REPORTE A SIDO ELIMINADO CON EXITO';
        }
    }   


    if($accion == "Usuario Web"){

        $idUserWeb = $_POST['idUserWeb']; //ID del usuario Web
        
        $sqlDelete = "DELETE FROM usuarios WHERE id_usuario = '$idUserWeb' AND tipo_usuario != 3";
        $resultado = $mysqli->query($sqlDelete);

        if(!$resultado){
            echo 'ERROR AL ELIMINAR EL USUARIO';
        }
        else{
            echo 'EL USUARIO A SIDO ELIMINADO CON EXITO';
        }
    }   


    if($accion == "Jefe de Brigada"){

        $idJefe = $_POST['idJefe']; //ID del jefe de brigada
        
        $sqlDelete = "DELETE FROM usuarios WHERE id_usuario = '$idJefe' AND tipo_usuario = 3";
        $resultado = $mysqli->query($sqlDelete);

        if(!$resultado){
            echo 'ERROR AL ELIMINAR EL JEFE DE BRIGADA';
        }
        else{
            echo 'EL JEFE DE BRIGADA A SIDO ELIMINADO CON EXITO';
        }
    }   


    if($accion == "Canales"){

        $idCause = $_POST['idCause']; //ID del canal
        
        $sqlDelete = "DELETE FROM nombre_cause WHERE id_cause = '$idCause'";
        $resultado = $mysqli->query($sqlDelete);

        if(!$resultado){
            echo 'ERROR AL ELIMINAR EL CANAL';
        }
        else{
            echo 'EL CANAL A SIDO ELIMINADO CON EXITO';
        }
    }  



}