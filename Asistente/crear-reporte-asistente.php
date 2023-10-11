<?php

  session_start();
  $usuario = $_SESSION['usuario']['tipo_usuario'];

  if($usuario == null || $usuario == ''){
    header("location: ../index.php");
  } else if($usuario == "1"){
    header("location: ../Admin/inicio.php");
  }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
     <!-- Bootstrap CSS -->
     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.0/css/select2.min.css">
     <link rel="stylesheet" href="../css/bootstrap.css">
    <link rel="stylesheet" href="../css/crear-reporte.css">
    <title>OPERATIVOS</title>
    <title>Document</title>
</head>
<body>
<div class="contenedor col-sm-12 col-md-12 col-lg-12">

<div class="navbarinclude">

  <?php

    include '../Vistas/navbar.php';

  ?>

</div>

<div class="sidebarinclude">
  <?php

    include '../Vistas/sidebar.php';

  ?>
</div>

<div class="crearinclude">
  <?php

    include '../Vistas/crear-reporte.php';

  ?>
</div>

</div><!--CONTENEDOR-->

<!-- jQuery first, then Tether, then Bootstrap JS. -->
<script src="../js/jquery.js"></script>
     <script src="../js/popper.min.js"></script>
     <script src="../js/bootstrap.min.js"></script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.0/js/select2.min.js"></script>
     <script src="../js/crear-reporte.js"></script>
</body>
</html>