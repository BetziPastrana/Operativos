<?php

  session_start();
  $usuario = $_SESSION['usuario']['tipo_usuario'];

  if($usuario == null || $usuario == '' || $usuario == '3'){
    header("location: ../index.php");
  } else if($usuario == "1"){
    header("location: ../Admin/inicio.php");
  }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <!-- DATATABLES -->
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css">
     <!-- Bootstrap CSS -->
     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/bootstrap.css">
    <link rel="stylesheet" href="../css/usuarios-web.css">
    <title>OPERATIVOS</title>
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


<div class="tableroinclude">
  <?php

    include '../Vistas/jefes-brigada.php';

  ?>  
</div>



</div><!--CONTENEDOR-->




<!-- jQuery first, then Tether, then Bootstrap JS. -->
<script src="../js/jquery.js"></script>
<script src="../js/bootstrap.min.js"></script>
<!-- DATATABLES -->
<script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
<script src="../js/tablero-jefe.js"></script>
</body>
</html>