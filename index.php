<?php
    session_start();
    if(isset($_SESSION['usuario'])){
        if($_SESSION['usuario']['tipo_usuario'] == "Admin"){
            header('location: Admin/inicio.php');
        } else if($_SESSION['usuario']['tipo_usuario'] == "Asistente"){
            header('location: Asistente/home.php');
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/estilos.css">
    <title>OPERATIVOS</title>
</head>
<body>

    <div class="error">
        <span>Usuario y Contraseña no Validos</span>
    </div>

    <div class="nedado">
        <span>No tiene autorización para entrar al sistema</span>
    </div>
    
    <div class="contenedor col-8">
        <div class="imagen col-6">
            <img class="img col-12" src="img/canalesf.png">
        </div>
        <div class="login col-md-6">
            <div id="titulo">
                <h3 class="texto-iniciar">INICIAR SESIÓN</h3>
                <br>
                <br>
                <form id="formulario">
                    <div class="form-group col-10">
                      <label for="usuario">USUARIO</label>
                      <input type="text" class="form-control" id="user" name="user" required>
                      <img src="img/iconos/EMAIL.png" class="icono-correo">
                    </div>
                    <div class="form-group col-10">
                      <label for="password">CONTRASEÑA</label>
                      <input type="password" class="form-control" id="pass" name="pass" pattern="[A-Za-z0-9_-]{1,17}" required>
                      <img src="img/iconos/politica de privacidad.png" class="icono-pass">
                    </div>
                    <br>
                    <div class="label-check">
                        <input type="checkbox">
                        <label for="text">Mantener sesión activa</label>
                        <br>
                        <label id="recuperar" for="text">Recuperar cuenta</label>
                    </div>
                    <button id="iniciar-sesion" type="submit" class="btn btn-dark col-5">ACEPTAR</button>
                </form>
                
            </div>
        </div>
    </div>



     <!-- jQuery first, then Tether, then Bootstrap JS. -->
     <script src="js/jquery.js"></script>
     <script src="js/bootstrap.min.js"></script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
     <script src="js/login.js"></script>
</body>
</html>