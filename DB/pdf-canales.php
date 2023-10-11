<?php 
include 'conexion.php';


    //TRAER LA DEPENDENCIA
    require_once('../vendor/autoload.php');
    //TRAER LA PLANTILLA
    require_once('../plantillas/canales.php');
    //TREAER LOS ESTILOS CSS
    $css = file_get_contents('../css/style-plantillas.css');

    /*VARIABLES POR POST*/
    $folio = $_GET['folio'];

    $mpdf = new \Mpdf\Mpdf([

    ]);

    /*CONSULTAS SQL*/


    $sqlReporte = "SELECT reportes.folio, usuarios.nombre_usuario, reportes.tipo_actividad,
    reportes.avance, reportes.ancho, reportes.area, reportes.peso, 
    reportes.estado, reportes.fecha_publicacion, reportes.numero_brigadistas,
    reportes.observaciones, reportes.descripcion, usuarios.telefono, nombre_cause.nombre   
    FROM reportes INNER JOIN usuarios ON usuarios.id_usuario = reportes.id_usuario
    INNER JOIN nombre_cause ON nombre_cause.id_cause = reportes.id_cause 
    WHERE folio = '$folio'";
    
    $resultado = $mysqli->query($sqlReporte);
    $reporte = $resultado->fetch_array();
    
       $data = array(
            'folio' => $reporte['folio'],
            'fecha' => $reporte['fecha_publicacion'],
            'tipoBrigada' => $reporte['tipo_actividad'],
            'avance' => $reporte['avance'],
            'ancho' => $reporte['ancho'],
            'area' => $reporte['area'],
            'peso' => $reporte['peso'],
            'estado' => $reporte['estado'],
            'cause' => $reporte['nombre'],
            'numeroBrigadistas' => $reporte['numero_brigadistas'],
            'observaciones' => $reporte['observaciones'],
            'idUsuario' => $reporte['id_usuario'],
            'nombreUsuario' => $reporte['nombre_usuario'],
            'descripcion' => $reporte['descripcion'],
            'telefono' => $reporte['telefono']
        );

        $plantilla = getPlantillaCanales($data);


        $mpdf->writeHtml($css, \Mpdf\HTMLParserMode::HEADER_CSS);
        $mpdf->writeHtml($plantilla, \Mpdf\HTMLParserMode::HTML_BODY);
    
        $mpdf->Output("reporte.pdf", "D");


    




?>