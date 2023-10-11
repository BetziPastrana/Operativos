<?php
if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest'){

    include 'conexion.php';
    $mysqli->set_charset('utf8');

    $user = $mysqli->real_escape_string($_POST['user']);
    $pass = $mysqli->real_escape_string($_POST['pass']);

    if($consulta = $mysqli->prepare("SELECT * FROM usuarios WHERE usuario = ? AND pass = ?")){

        $consulta->bind_param('ss', $user, $pass);

        $consulta->execute();

        $resultado = $consulta->get_result();

        if($resultado->num_rows == 1){
            $data = $resultado->fetch_assoc();
            session_start();
		    $_SESSION['usuario'] = $data;
        echo json_encode(array('error' => false, 'tipo' => $data['tipo_usuario']));
    }else{
        echo json_encode(array('error' => true));
    }
        }
    }
    $consulta->close();

