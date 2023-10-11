<?php
include 'conexion.php';

if(isset($_GET['user'])){

    $autor = $_GET['autor'];
    $tipo = $_GET['actividades'];
    $fecha = $_GET['fecha'];
    $estado = $_GET['estado'];
    $folio = $_GET['folio'];

    //Variables Globales
    $data;
    $resultado;
    $sqlSelect;
    
    
    $date = date("Y-m-d");

    if($tipo == "Todos" && $autor == "Todos" && $estado == "Todos" && $fecha == $date && $folio == ""){
      
      $sqlSelect = "SELECT reportes.folio, usuarios.nombre_usuario, reportes.tipo_actividad, reportes.avance, 
      reportes.ancho, reportes.area, reportes.peso, reportes.ubicacion, reportes.estado, 
      reportes.fecha_publicacion, reportes.descripcion FROM reportes 
      INNER JOIN usuarios ON usuarios.id_usuario = reportes.id_usuario 
      ORDER BY fecha_publicacion DESC";
      $resultado = $mysqli->query($sqlSelect);
    }

   /*Busqueda con el tipo diferente a todos*/
    if($tipo != "Todos"){
        /*BUSCAR SOLO EL TIPO DE ACTIVIDAD*/
        if($autor == "Todos" && $estado == "Todos" && $fecha == $date && $folio == ""){
            
            $sqlSelect = "SELECT reportes.folio, usuarios.nombre_usuario, reportes.tipo_actividad, reportes.avance, 
            reportes.ancho, reportes.area, reportes.peso, reportes.ubicacion, reportes.estado, 
            reportes.fecha_publicacion, reportes.descripcion FROM reportes 
            INNER JOIN usuarios ON usuarios.id_usuario = reportes.id_usuario
            WHERE tipo_actividad LIKE '$tipo%'
            ORDER BY fecha_publicacion DESC";

            $resultado = $mysqli->query($sqlSelect);
         }

         /*BUSCAR SOLO EL AUTOR*/
        if($autor != "Todos" && $estado == "Todos" && $fecha == $date && $folio == ""){
            
            $sqlSelect = "SELECT reportes.folio, usuarios.nombre_usuario, reportes.tipo_actividad, 
            reportes.avance, reportes.ancho, reportes.area, reportes.peso, reportes.ubicacion, 
            reportes.estado, reportes.fecha_publicacion, reportes.descripcion FROM reportes
            INNER JOIN usuarios ON usuarios.id_usuario = reportes.id_usuario
            WHERE tipo_actividad LIKE '$tipo%'
            AND reportes.id_usuario LIKE $autor ORDER BY fecha_publicacion DESC";

            $resultado = $mysqli->query($sqlSelect);
        }

        /*BUSCAR SOLO EL ESTADO*/
        if($autor == "Todos" && $estado != "Todos" && $fecha == $date && $folio == ""){

            $sqlSelect = "SELECT reportes.folio, usuarios.nombre_usuario, reportes.tipo_actividad, reportes.avance, 
            reportes.ancho, reportes.area, reportes.peso, reportes.ubicacion, reportes.estado, 
            reportes.fecha_publicacion, reportes.descripcion FROM reportes 
            INNER JOIN usuarios ON usuarios.id_usuario = reportes.id_usuario
            WHERE tipo_actividad LIKE '$tipo%'
            AND estado LIKE '$estado' ORDER BY fecha_publicacion DESC";

            $resultado = $mysqli->query($sqlSelect);
        }

        /*BUSCAR SOLO CON LA FECHA*/
        if($autor == "Todos" && $estado == "Todos" && $fecha != $date && $folio == ""){

            $sqlSelect = "SELECT reportes.folio, usuarios.nombre_usuario, reportes.tipo_actividad, reportes.avance, 
            reportes.ancho, reportes.area, reportes.peso, reportes.ubicacion, reportes.estado, 
            reportes.fecha_publicacion, reportes.descripcion FROM reportes 
            INNER JOIN usuarios ON usuarios.id_usuario = reportes.id_usuario
            WHERE tipo_actividad LIKE '$tipo%'
            AND fecha_publicacion LIKE '$fecha'";

            $resultado = $mysqli->query($sqlSelect);
        }

        /*BUSCAR SOLO CON LA FOLIO*/
        if($autor == "Todos" && $estado == "Todos" && $fecha == $date && $folio != ""){

            $sqlSelect = "SELECT reportes.folio, usuarios.nombre_usuario, reportes.tipo_actividad, reportes.avance, 
            reportes.ancho, reportes.area, reportes.peso, reportes.ubicacion, reportes.estado, 
            reportes.fecha_publicacion, reportes.descripcion FROM reportes 
            INNER JOIN usuarios ON usuarios.id_usuario = reportes.id_usuario
            WHERE tipo_actividad LIKE '$tipo%'
            AND folio LIKE '$folio%' ORDER BY fecha_publicacion DESC";

            $resultado = $mysqli->query($sqlSelect);
        }

        /*BUSQUEDA DE DOS O MAS REGISTRO CUANDO EL TIPO SEA DIFERENTE DE TODOS*/
         /*BUSCAR AUTOR Y ESTADO*/
         if($autor != "Todos" && $estado != "Todos" && $fecha == $date && $folio == ""){
            
            $sqlSelect = "SELECT reportes.folio, usuarios.nombre_usuario, reportes.tipo_actividad, reportes.avance, 
            reportes.ancho, reportes.area, reportes.peso, reportes.ubicacion, reportes.estado, 
            reportes.fecha_publicacion, reportes.descripcion FROM reportes 
            INNER JOIN usuarios ON usuarios.id_usuario = reportes.id_usuario
            WHERE tipo_actividad LIKE '$tipo%'
            AND reportes.id_usuario LIKE '$autor' AND estado LIKE '$estado' ORDER BY fecha_publicacion DESC";

            $resultado = $mysqli->query($sqlSelect);
         }

         /*BUSCAR AUTOR, ESTADO Y FECHA*/
         if($autor != "Todos" && $estado != "Todos" && $fecha != $date && $folio == ""){
            
            $sqlSelect = "SELECT reportes.folio, usuarios.nombre_usuario, reportes.tipo_actividad, reportes.avance, 
            reportes.ancho, reportes.area, reportes.peso, reportes.ubicacion, reportes.estado, 
            reportes.fecha_publicacion, reportes.descripcion FROM reportes 
            INNER JOIN usuarios ON usuarios.id_usuario = reportes.id_usuario
            WHERE tipo_actividad LIKE '$tipo%'
            AND reportes.id_usuario LIKE '$autor' AND estado LIKE '$estado'AND fecha_publicacion LIKE '$fecha'";

            $resultado = $mysqli->query($sqlSelect);
         }

          /*BUSCAR AUTOR, ESTADO, FECHA Y FOLIO*/
          if($autor != "Todos" && $estado != "Todos" && $fecha != $date && $folio != ""){
            
            $sqlSelect = "SELECT reportes.folio, usuarios.nombre_usuario, reportes.tipo_actividad, reportes.avance, 
            reportes.ancho, reportes.area, reportes.peso, reportes.ubicacion, reportes.estado, 
            reportes.fecha_publicacion, reportes.descripcion FROM reportes 
            INNER JOIN usuarios ON usuarios.id_usuario = reportes.id_usuario
            WHERE tipo_actividad LIKE '$tipo%'
            AND reportes.id_usuario LIKE '$autor' AND estado LIKE '$estado' AND 
            fecha_publicacion LIKE '$fecha' AND folio LIKE '$folio'";

            $resultado = $mysqli->query($sqlSelect);
         }

          /*BUSCAR ESTADO Y FECHA*/
          if($autor == "Todos" && $estado != "Todos" && $fecha != $date && $folio == ""){
            
            $sqlSelect = "SELECT reportes.folio, usuarios.nombre_usuario, reportes.tipo_actividad, reportes.avance, 
            reportes.ancho, reportes.area, reportes.peso, reportes.ubicacion, reportes.estado, 
            reportes.fecha_publicacion, reportes.descripcion FROM reportes 
            INNER JOIN usuarios ON usuarios.id_usuario = reportes.id_usuario
            WHERE tipo_actividad LIKE '$tipo%'
            AND estado LIKE '$estado'AND fecha_publicacion LIKE '$fecha'";

            $resultado = $mysqli->query($sqlSelect);
         }

         /*BUSCAR ESTADO, FECHA Y FOLIO*/
         if($autor == "Todos" && $estado != "Todos" && $fecha != $date && $folio != ""){
            
            $sqlSelect = "SELECT reportes.folio, usuarios.nombre_usuario, reportes.tipo_actividad, reportes.avance, 
            reportes.ancho, reportes.area, reportes.peso, reportes.ubicacion, reportes.estado, 
            reportes.fecha_publicacion, reportes.descripcion FROM reportes 
            INNER JOIN usuarios ON usuarios.id_usuario = reportes.id_usuario
            WHERE tipo_actividad LIKE '$tipo%'
            AND estado LIKE '$estado' AND fecha_publicacion LIKE '$fecha' AND folio LIKE '$folio'";

            $resultado = $mysqli->query($sqlSelect);
         }

          /*BUSCAR FECHA Y FOLIO*/
          if($autor == "Todos" && $estado == "Todos" && $fecha != $date && $folio != ""){
            
            $sqlSelect = "SELECT reportes.folio, usuarios.nombre_usuario, reportes.tipo_actividad, reportes.avance, 
            reportes.ancho, reportes.area, reportes.peso, reportes.ubicacion, reportes.estado, 
            reportes.fecha_publicacion, reportes.descripcion FROM reportes 
            INNER JOIN usuarios ON usuarios.id_usuario = reportes.id_usuario
            WHERE tipo_actividad LIKE '$tipo%'
            AND fecha_publicacion LIKE '$fecha' AND folio LIKE '$folio'";

            $resultado = $mysqli->query($sqlSelect);
         }

          /*BUSCAR FOLIO Y ESTADO*/
          if($autor == "Todos" && $estado != "Todos" && $fecha == $date && $folio != ""){
            
            $sqlSelect = "SELECT reportes.folio, usuarios.nombre_usuario, reportes.tipo_actividad, reportes.avance, 
            reportes.ancho, reportes.area, reportes.peso, reportes.ubicacion, reportes.estado, 
            reportes.fecha_publicacion, reportes.descripcion FROM reportes 
            INNER JOIN usuarios ON usuarios.id_usuario = reportes.id_usuario
            WHERE tipo_actividad LIKE '$tipo%'
            AND folio LIKE '$folio' AND estado LIKE '$estado' ORDER BY fecha_publicacion DESC";

            $resultado = $mysqli->query($sqlSelect);
         }

         /*BUSCAR FOLIO Y AUTOR*/
         if($autor != "Todos" && $estado == "Todos" && $fecha == $date && $folio != ""){
            
            $sqlSelect = "SELECT reportes.folio, usuarios.nombre_usuario, reportes.tipo_actividad, reportes.avance, 
            reportes.ancho, reportes.area, reportes.peso, reportes.ubicacion, reportes.estado, 
            reportes.fecha_publicacion, reportes.descripcion FROM reportes 
            INNER JOIN usuarios ON usuarios.id_usuario = reportes.id_usuario
            WHERE tipo_actividad LIKE '$tipo%'
            AND folio LIKE '$folio' AND reportes.id_usuario LIKE '$autor' ORDER BY fecha_publicacion DESC";

            $resultado = $mysqli->query($sqlSelect);
         }

         /*BUSCAR FOLIO, AUTOR, ESTADO*/
         if($autor != "Todos" && $estado != "Todos" && $fecha == $date && $folio != ""){
            
            $sqlSelect = "SELECT reportes.folio, usuarios.nombre_usuario, reportes.tipo_actividad, reportes.avance, 
            reportes.ancho, reportes.area, reportes.peso, reportes.ubicacion, reportes.estado, 
            reportes.fecha_publicacion, reportes.descripcion FROM reportes 
            INNER JOIN usuarios ON usuarios.id_usuario = reportes.id_usuario
            WHERE tipo_actividad LIKE '$tipo%'
            AND folio LIKE '$folio' AND reportes.id_usuario LIKE '$autor' 
            AND estado LIKE '$estado' ORDER BY fecha_publicacion DESC";

            $resultado = $mysqli->query($sqlSelect);
         }
  
    }
    else if($tipo == "Todos"){
        
         /*BUSCAR SOLO EL AUTOR*/
        if($autor != "Todos" && $estado == "Todos" && $fecha == $date && $folio == ""){
            
            $sqlSelect = "SELECT reportes.folio, usuarios.nombre_usuario, reportes.tipo_actividad, reportes.avance, 
            reportes.ancho, reportes.area, reportes.peso, reportes.ubicacion, reportes.estado, 
            reportes.fecha_publicacion, reportes.descripcion FROM reportes 
            INNER JOIN usuarios ON usuarios.id_usuario = reportes.id_usuario
            WHERE reportes.id_usuario LIKE '$autor' ORDER BY fecha_publicacion DESC";

            $resultado = $mysqli->query($sqlSelect);
        }

        /*BUSCAR SOLO EL ESTADO*/
        if($autor == "Todos" && $estado != "Todos" && $fecha == $date && $folio == ""){

            $sqlSelect = "SELECT reportes.folio, usuarios.nombre_usuario, reportes.tipo_actividad, reportes.avance, 
            reportes.ancho, reportes.area, reportes.peso, reportes.ubicacion, reportes.estado, 
            reportes.fecha_publicacion, reportes.descripcion FROM reportes 
            INNER JOIN usuarios ON usuarios.id_usuario = reportes.id_usuario
            WHERE
            estado LIKE '$estado' ORDER BY fecha_publicacion DESC";

            $resultado = $mysqli->query($sqlSelect);
        }

        /*BUSCAR SOLO CON LA FECHA*/
        if($autor == "Todos" && $estado == "Todos" && $fecha != $date && $folio == ""){

            $sqlSelect = "SELECT reportes.folio, usuarios.nombre_usuario, reportes.tipo_actividad, reportes.avance, 
            reportes.ancho, reportes.area, reportes.peso, reportes.ubicacion, reportes.estado, 
            reportes.fecha_publicacion, reportes.descripcion FROM reportes 
            INNER JOIN usuarios ON usuarios.id_usuario = reportes.id_usuario
            WHERE
            fecha_publicacion LIKE '$fecha'";

            $resultado = $mysqli->query($sqlSelect);
        }

        /*BUSCAR SOLO CON LA FOLIO*/
        if($autor == "Todos" && $estado == "Todos" && $fecha == $date && $folio != ""){

            $sqlSelect = "SELECT reportes.folio, usuarios.nombre_usuario, reportes.tipo_actividad, reportes.avance, 
            reportes.ancho, reportes.area, reportes.peso, reportes.ubicacion, reportes.estado, 
            reportes.fecha_publicacion, reportes.descripcion FROM reportes 
            INNER JOIN usuarios ON usuarios.id_usuario = reportes.id_usuario
            WHERE 
            folio LIKE '$folio%' ORDER BY fecha_publicacion DESC";

            $resultado = $mysqli->query($sqlSelect);
        }

        /*BUSQUEDA DE DOS O MAS REGISTRO CUANDO EL TIPO SEA DIFERENTE DE TODOS*/
         /*BUSCAR AUTOR Y ESTADO*/
         if($autor != "Todos" && $estado != "Todos" && $fecha == $date && $folio == ""){
            
            $sqlSelect = "SELECT reportes.folio, usuarios.nombre_usuario, reportes.tipo_actividad, reportes.avance, 
            reportes.ancho, reportes.area, reportes.peso, reportes.ubicacion, reportes.estado, 
            reportes.fecha_publicacion, reportes.descripcion FROM reportes 
            INNER JOIN usuarios ON usuarios.id_usuario = reportes.id_usuario
            WHERE 
            reportes.id_usuario LIKE '$autor' AND estado LIKE '$estado' ORDER BY fecha_publicacion DESC";

            $resultado = $mysqli->query($sqlSelect);
         }

         /*BUSCAR AUTOR, ESTADO Y FECHA*/
         if($autor != "Todos" && $estado != "Todos" && $fecha != $date && $folio == ""){
            
            $sqlSelect = "SELECT reportes.folio, usuarios.nombre_usuario, reportes.tipo_actividad, reportes.avance, 
            reportes.ancho, reportes.area, reportes.peso, reportes.ubicacion, reportes.estado, 
            reportes.fecha_publicacion, reportes.descripcion FROM reportes 
            INNER JOIN usuarios ON usuarios.id_usuario = reportes.id_usuario
            WHERE
            reportes.id_usuario LIKE '$autor' AND estado LIKE '$estado'AND fecha_publicacion LIKE '$fecha'";

            $resultado = $mysqli->query($sqlSelect);
         }

          /*BUSCAR AUTOR, ESTADO, FECHA Y FOLIO*/
          if($autor != "Todos" && $estado != "Todos" && $fecha != $date && $folio != ""){
            
            $sqlSelect = "SELECT reportes.folio, usuarios.nombre_usuario, reportes.tipo_actividad, reportes.avance, 
            reportes.ancho, reportes.area, reportes.peso, reportes.ubicacion, reportes.estado, 
            reportes.fecha_publicacion, reportes.descripcion FROM reportes 
            INNER JOIN usuarios ON usuarios.id_usuario = reportes.id_usuario
            WHERE
            reportes.id_usuario LIKE '$autor' AND estado LIKE '$estado' AND 
            fecha_publicacion LIKE '$fecha' AND folio LIKE '$folio'";

            $resultado = $mysqli->query($sqlSelect);
         }

          /*BUSCAR ESTADO Y FECHA*/
          if($autor == "Todos" && $estado != "Todos" && $fecha != $date && $folio == ""){
            
            $sqlSelect = "SELECT reportes.folio, usuarios.nombre_usuario, reportes.tipo_actividad, reportes.avance, 
            reportes.ancho, reportes.area, reportes.peso, reportes.ubicacion, reportes.estado, 
            reportes.fecha_publicacion, reportes.descripcion FROM reportes 
            INNER JOIN usuarios ON usuarios.id_usuario = reportes.id_usuario
            WHERE 
            estado LIKE '$estado'AND fecha_publicacion LIKE '$fecha'";

            $resultado = $mysqli->query($sqlSelect);
         }

         /*BUSCAR ESTADO, FECHA Y FOLIO*/
         if($autor == "Todos" && $estado != "Todos" && $fecha != $date && $folio != ""){
            
            $sqlSelect = "SELECT reportes.folio, usuarios.nombre_usuario, reportes.tipo_actividad, reportes.avance, 
            reportes.ancho, reportes.area, reportes.peso, reportes.ubicacion, reportes.estado, 
            reportes.fecha_publicacion, reportes.descripcion FROM reportes 
            INNER JOIN usuarios ON usuarios.id_usuario = reportes.id_usuario
            WHERE 
            estado LIKE '$estado' AND fecha_publicacion LIKE '$fecha' AND folio LIKE '$folio'";

            $resultado = $mysqli->query($sqlSelect);
         }

          /*BUSCAR FECHA Y FOLIO*/
          if($autor == "Todos" && $estado == "Todos" && $fecha != $date && $folio != ""){
            
            $sqlSelect = "SELECT reportes.folio, usuarios.nombre_usuario, reportes.tipo_actividad, reportes.avance, 
            reportes.ancho, reportes.area, reportes.peso, reportes.ubicacion, reportes.estado, 
            reportes.fecha_publicacion, reportes.descripcion FROM reportes 
            INNER JOIN usuarios ON usuarios.id_usuario = reportes.id_usuario
            WHERE 
            fecha_publicacion LIKE '$fecha' AND folio LIKE '$folio'";

            $resultado = $mysqli->query($sqlSelect);
         }

          /*BUSCAR FOLIO Y ESTADO*/
          if($autor == "Todos" && $estado != "Todos" && $fecha == $date && $folio != ""){
            
            $sqlSelect = "SELECT reportes.folio, usuarios.nombre_usuario, reportes.tipo_actividad, reportes.avance, 
            reportes.ancho, reportes.area, reportes.peso, reportes.ubicacion, reportes.estado, 
            reportes.fecha_publicacion, reportes.descripcion FROM reportes 
            INNER JOIN usuarios ON usuarios.id_usuario = reportes.id_usuario
            WHERE 
            folio LIKE '$folio' AND estado LIKE '$estado' ORDER BY fecha_publicacion DESC";

            $resultado = $mysqli->query($sqlSelect);
         }

         /*BUSCAR FOLIO Y AUTOR*/
         if($autor != "Todos" && $estado == "Todos" && $fecha == $date && $folio != ""){
            
            $sqlSelect = "SELECT reportes.folio, usuarios.nombre_usuario, reportes.tipo_actividad, reportes.avance, 
            reportes.ancho, reportes.area, reportes.peso, reportes.ubicacion, reportes.estado, 
            reportes.fecha_publicacion, reportes.descripcion FROM reportes 
            INNER JOIN usuarios ON usuarios.id_usuario = reportes.id_usuario
            WHERE 
            folio LIKE '$folio' AND reportes.id_usuario LIKE '$autor' ORDER BY fecha_publicacion DESC";

            $resultado = $mysqli->query($sqlSelect);
         }

         /*BUSCAR FOLIO, AUTOR, ESTADO*/
         if($autor != "Todos" && $estado != "Todos" && $fecha == $date && $folio != ""){
            
            $sqlSelect = "SELECT reportes.folio, usuarios.nombre_usuario, reportes.tipo_actividad, reportes.avance, 
            reportes.ancho, reportes.area, reportes.peso, reportes.ubicacion, reportes.estado, 
            reportes.fecha_publicacion, reportes.descripcion FROM reportes 
            INNER JOIN usuarios ON usuarios.id_usuario = reportes.id_usuario
            WHERE
            folio LIKE '$folio' AND reportes.id_usuario LIKE '$autor' 
            AND estado LIKE '$estado' ORDER BY fecha_publicacion DESC";

            $resultado = $mysqli->query($sqlSelect);
         }

         
    }
    
    require_once '../PHPExcel/Classes/PHPExcel.php'; 
   

    $objPHPExcel = new PHPExcel();
    
    $objReader = PHPExcel_IOFactory::createReader('Excel2007');
    $objPHPExcel = $objReader->load('../PHPExcel/Reportes.xlsx');

    $objPHPExcel->setActiveSheetIndex(0);

    $fila = 2;
    $folio2;
    $creador;

    while ($data = $resultado->fetch_array()){
        $objPHPExcel->getActiveSheet()->setCellValue('A'.$fila, $data['folio']);
        $objPHPExcel->getActiveSheet()->setCellValue('B'.$fila, $data['nombre_usuario']);
        $objPHPExcel->getActiveSheet()->setCellValue('C'.$fila, $data['tipo_actividad']);
        $objPHPExcel->getActiveSheet()->setCellValue('D'.$fila, $data['avance']);
        $objPHPExcel->getActiveSheet()->setCellValue('E'.$fila, $data['ancho']);
        $objPHPExcel->getActiveSheet()->setCellValue('F'.$fila, $data['area']);
        $objPHPExcel->getActiveSheet()->setCellValue('G'.$fila, $data['peso']);
        $objPHPExcel->getActiveSheet()->setCellValue('H'.$fila, $data['descripcion']);
        $objPHPExcel->getActiveSheet()->setCellValue('I'.$fila, $data['ubicacion']);
        $objPHPExcel->getActiveSheet()->setCellValue('J'.$fila, $data['estado']);
        $objPHPExcel->getActiveSheet()->setCellValue('K'.$fila, $data['fecha_publicacion']);
        $fila++;
        $folio2 = $data['folio'];
        $creador = $data['nombre_usuario'];
    }
    $mysqli->close(); 

    
    $objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007'); 
    ob_end_clean(); 
    
    header('Content-type: application/vnd.ms-excel'); 
    header('Content-Disposition: attachment; filename="lista de reportes.xlsx"');
    $objWriter->save('php://output'); 

    exit;


}