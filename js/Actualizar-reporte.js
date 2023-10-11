$(document).ready(function(){

    
    $("#tipo-actividad").select2({
        placeholder: "Selecciona los tipos actividad", //placeholder
        tags: true,
        tokenSeparators: ['/',',',';'," "],
        width: "100%",
    });

    $("#descripcion").select2({
        placeholder: "Selecciona las actividades", //placeholder
        tags: true,
        tokenSeparators: ['/',',',';'," "],
        width: "100%",
    });

    /*HABILITAR EL CAUSE CUANDO ESTE SELECCIONADO LIMPIEZA DE CANALES*/

    $('#nombre-cause').prop('disabled', 'disabled');
    
    $('#tipo-actividad').change(function(){
        actividad = $('#tipo-actividad').val();

        if(actividad.includes("Limpieza de Canales") == true){
            $('#nombre-cause').prop('disabled', false);
        }

        else if(actividad.includes("Limpieza de Canales") == false){
            $('#nombre-cause').prop('disabled', 'disabled');
            $('#nombre-cause').val("");
        }
    })

    /*PONER COLORES EN EL COMBO ESTADO*/

    $('#estado').change(function(){
        if($('#estado').val() == "En proceso"){
            document.getElementById("estado").style.color = "#c23816";
        }else if($('#estado').val() == "Pendiente"){
            document.getElementById("estado").style.color = "#cb971f";
        }else if($('#estado').val() == "Terminado"){
            document.getElementById("estado").style.color = "green";
        }
    })

    /*CALCULO DEL AREA*/

    $('#ancho').on("keyup", function(){
        var avance = $('#avance').val();
        var ancho = $(this).val();
    
        var area = parseFloat(avance, 10) * parseFloat(ancho, 10);

        if($('#avance').val() == "" || $('#ancho').val() == ""){
            area = 0;
            document.getElementById('area').value = area;
        } else{
                 document.getElementById('area').value = area;
            }
     })

     $('#avance').on("keyup", function(){
        var avance = $(this).val();
        var ancho = $('#ancho').val();
    
        var area = parseFloat(avance, 10) * parseFloat(ancho, 10);

        if($('#avance').val() == "" || $('#ancho').val() == ""){
            area = 0;
            document.getElementById('area').value = area;
        } else{
                 document.getElementById('area').value = area;
            }
     })

     /*DESHABILITAR LATERAL*/
    $('#folio').prop('disabled', 'disabled');
    $('#jefe').prop('disabled', 'disabled');
    $('#fecha').prop('disabled', 'disabled');
    $('#telefono').prop('disabled', 'disabled');
    $('#area').prop('disabled', 'disabled');

    /*Peticion de los datos*/
    let folio = $('#folio').val();
    var accion = "Tipo_actividad";
    const datos = { folio, accion};
    let tipo_actividad;

    $.post('../DB/Datos.php', datos, function(respuesta){
        let data = JSON.parse(respuesta);
        let tipo = data.actividad;
        let actividades = tipo.split(", ");
        $('#tipo-actividad').select2("val",actividades);

        let descrip = data.descripcion;
        let description = descrip.split(", ");
        $('#descripcion').select2("val",description);

        //Saber si la actividad es de limpieza de canales

        tipo_actividad = actividades;
        if(tipo_actividad.includes("Limpieza de Canales") == true){
            DatosCanales();
        }
        else if(tipo_actividad.includes("Limpieza de Canales") == false){
            DatosSinCanales();
        }
    })



    //Submit Actualizar

    $('#reporte-form').submit(function(e){

        tipo = $('#tipo-actividad').val();
        description = $('#descripcion').val();
        actividades = tipo.join(", ");
        descripcion = description.join(", ");

        /*CON ACTIVIDAD LIMPIEZA DE CANALES*/
        if(tipo.includes("Limpieza de Canales") == true){
            
             /*RESTRICCIONES DE NULOS*/
             if($('#descripcion').val() == "" ||
             $('#ubicacion').val()== "" ||
             $('#avance').val()== "" ||
             $('#ancho').val()== "" ||
             $('#area').val()== "" ||
             $('#peso').val()== "" ||
             $('#nombre-cause').val()== "" ||
             $('#estado').val()== "" ||
             $('#numero-brigadas').val() == "" ||
             $('#observaciones').val() == "" ||
             $('#folio').val() == "" ||
             $('#fecha').val() == "" ||
             $('#jefe').val() == "" || 
             $('#tipo-actividad').val() == "") {
                 alert("LLENA TODOS LOS CAMPOS", Error);
             }
             else{
                    const FormConCanales = {
                        accion: "Reportes",
                        tipo_brigada: "Con Canales",
                        tipo_actividad: actividades,
                        descripcion: descripcion,
                        ubicacion: $('#ubicacion').val(),
                        avance: $('#avance').val(),
                        ancho: $('#ancho').val(),
                        area: $('#area').val(),
                        peso: $('#peso').val(),
                        idCause: $('#nombre-cause').val(),
                        estado: $('#estado').val(),
                        numeroBrigadistas: $('#numero-brigadas').val(),
                        observaciones: $('#observaciones').val(),
                        folio: $('#folio').val(),
                    };
     
                    $.post('../DB/Actualizar.php', FormConCanales, function(response){
                        alert(response);

                        let tipoUsuario = document.getElementById('label-tipo').innerHTML;

                        if(tipoUsuario == "Administrador"){
                            location.href = '../Admin/reportes.php';
                        }
                        else if(tipoUsuario == "Asistente"){
                            location.href = '../Asistente/reportes.php';
                        }
                    })
                }
            }

             /*SIN ACTIVIDAD LIMPIEZA DE CANALES*/
        else if(tipo.includes("Limpieza de Canales") == false){
            
            /*RESTRICCIONES DE NULOS*/
            if($('#descripcion').val() == "" ||
                $('#ubicacion').val()== "" ||
                $('#avance').val()== "" ||
                $('#ancho').val()== "" ||
                $('#area').val()== "" ||
                $('#peso').val()== "" ||
                $('#estado').val()== "" ||
                $('#numero-brigadas').val() == "" ||
                $('#observaciones').val() == "" ||
                $('#folio').val() == "" ||
                $('#fecha').val() == "" ||
                $('#jefe').val() == "" || 
                $('#tipo-actividad').val() == "") 
                {
                    alert("LLENA TODOS LOS CAMPOS", Error);
                }else{
                    const FormSinCanales = {
                        accion: "Reportes",
                        tipo_brigada: "Sin Canales",
                        tipo_actividad: actividades,
                        descripcion: descripcion,
                        ubicacion: $('#ubicacion').val(),
                        avance: $('#avance').val(),
                        ancho: $('#ancho').val(),
                        area: $('#area').val(),
                        peso: $('#peso').val(),
                        estado: $('#estado').val(),
                        numeroBrigadistas: $('#numero-brigadas').val(),
                        observaciones: $('#observaciones').val(),
                        folio: $('#folio').val(),
                        fecha: $('#fecha').val(),
                    };
        
                    $.post('../DB/Actualizar.php', FormSinCanales, function(response){
                        alert(response);
                        let tipoUsuario = document.getElementById('label-tipo').innerHTML;

                        if(tipoUsuario == "Administrador"){
                            location.href = '../Admin/reportes.php';
                        }
                        else if(tipoUsuario == "Asistente"){
                            location.href = '../Asistente/reportes.php';
                        }
                    })
                }
            }

        e.preventDefault();
    })

})//Ready

function DatosCanales(){

    let folio = $('#folio').val();
    var accion = "Reportes";
    var tipo = "Con Canales";
    const data = { folio, accion, tipo};
    
    $.post('../DB/Datos.php', data, function(response){
        let data = JSON.parse(response);
        //Lateral
        $('#fecha').val(data.fecha);
        $('#jefe').val(data.nombreUsuario);
        $('#telefono').val(data.telefono);

        //Centro

        $('#ubicacion').val(data.ubicacion);
        $('#avance').val(data.avance);
        $('#ancho').val(data.ancho);
        $('#area').val(data.area);
        $('#peso').val(data.peso);
        $('#nombre-cause').val(data.cause);
        
        $('#estado').val(data.estado);
        if($('#estado').val() == "En proceso"){
            document.getElementById("estado").style.color = "#c23816";
        }else if($('#estado').val() == "Pendiente"){
            document.getElementById("estado").style.color = "#cb971f";
        }else if($('#estado').val() == "Terminado"){
            document.getElementById("estado").style.color = "green";
        }

        $('#numero-brigadas').val(data.numeroBrigadistas);
        $('#observaciones').val(data.observaciones);

    })
}

function DatosSinCanales(){

    let folio = $('#folio').val();
    var accion = "Reportes";
    var tipo = "Sin Canales";
    const data = { folio, accion, tipo};
    
    $.post('../DB/Datos.php', data, function(response){
        let data = JSON.parse(response);
        //Lateral
        $('#fecha').val(data.fecha);
        $('#jefe').val(data.nombreUsuario);
        $('#telefono').val(data.telefono);

        //Centro

        $('#ubicacion').val(data.ubicacion);
        $('#avance').val(data.avance);
        $('#ancho').val(data.ancho);
        $('#area').val(data.area);
        $('#peso').val(data.peso);
        
        $('#estado').val(data.estado);
        if($('#estado').val() == "En proceso"){
            document.getElementById("estado").style.color = "#c23816";
        }else if($('#estado').val() == "Pendiente"){
            document.getElementById("estado").style.color = "#cb971f";
        }else if($('#estado').val() == "Terminado"){
            document.getElementById("estado").style.color = "green";
        }

        $('#numero-brigadas').val(data.numeroBrigadistas);
        $('#observaciones').val(data.observaciones);

    })
}
