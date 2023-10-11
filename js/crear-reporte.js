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

    $('#estado').change(function(){
        if($('#estado').val() == "En proceso"){
            document.getElementById("estado").style.color = "#c23816";
        }else if($('#estado').val() == "Pendiente"){
            document.getElementById("estado").style.color = "#cb971f";
        }else if($('#estado').val() == "Terminado"){
            document.getElementById("estado").style.color = "green";
        }
    })

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

     /* IMAGENES */
     $('#logo-img1').click(function(){
        $('#imagen1').click();
     })

     $('#logo-img2').click(function(){
        $('#imagen2').click();
     })

     $('#logo-img3').click(function(){
        $('#imagen3').click();
     })

     $('#logo-img4').click(function(){
        $('#imagen4').click();
     })

     $('#logo-img5').click(function(){
        $('#imagen5').click();
     })

     $('#logo-img6').click(function(){
        $('#imagen6').click();
     })

     /*VIDEOS*/

     $('#logo-vid1').click(function(){
        $('#video1').click();
     })

     $('#logo-vid2').click(function(){
        $('#video2').click();
     })

     $('#logo-vid3').click(function(){
        $('#video3').click();
     })

     $('#logo-vid4').click(function(){
        $('#video4').click();
     })

     $('#logo-vid5').click(function(){
        $('#video5').click();
     })

     $('#logo-vid6').click(function(){
        $('#video6').click();
     })

     //Clonar los input
     var Image1 = $('#imagen1');
     var Clon1 = Image1.clone(true);

     /*subir videos e imagenes*/

     $('#imagen1').change(function(){

        console.log(this.files);
        var files = this.files;
        var element;
        var supportImg = ["image/jpeg" , "image/png" , "image/gif"];
        var Validos = false;
        var reader = new FileReader();

        for(var i = 0; i < 6; i++){
            element = files[i];

            if(supportImg.indexOf(element.type) != -1){
                var imgCode = URL.createObjectURL(element);
                document.getElementById("divImg"+i).innerHTML='<img src="'+imgCode+'" class="evidencia-img" id="evi0">';
            }
        }
     })

     $('#imagen2').change(function(){

        console.log(this.files);
        var files = this.files;
        var element;
        var supportImg = ["image/jpeg" , "image/png" , "image/gif"];
        var a = 1;

        for(var i = 0; i < 5; i++){
            element = files[i];

            if(supportImg.indexOf(element.type) != -1){
                var imgCode = URL.createObjectURL(element);
                document.getElementById("divImg"+a).innerHTML='<img src="'+imgCode+'" class="evidencia-img">';
            }
            a++;
        }
     })

     $('#imagen3').change(function(){

        console.log(this.files);
        var files = this.files;
        var element;
        var supportImg = ["image/jpeg" , "image/png" , "image/gif"];
        var a = 2;

        for(var i = 0; i < 4; i++){
            element = files[i];

            if(supportImg.indexOf(element.type) != -1){
                var imgCode = URL.createObjectURL(element);
                document.getElementById("divImg"+a).innerHTML='<img src="'+imgCode+'" class="evidencia-img">';
            }
            a++;
        }
     })

     $('#imagen4').change(function(){

        console.log(this.files);
        var files = this.files;
        var element;
        var supportImg = ["image/jpeg" , "image/png" , "image/gif"];
        var a = 3;

        for(var i = 0; i < 3; i++){
            element = files[i];

            if(supportImg.indexOf(element.type) != -1){
                var imgCode = URL.createObjectURL(element);
                document.getElementById("divImg"+a).innerHTML='<img src="'+imgCode+'" class="evidencia-img">';
            }
            a++;
        }
     })

     $('#imagen5').change(function(){

        console.log(this.files);
        var files = this.files;
        var element;
        var supportImg = ["image/jpeg" , "image/png" , "image/gif"];
        var a = 4;

        for(var i = 0; i < 2; i++){
            element = files[i];

            if(supportImg.indexOf(element.type) != -1){
                var imgCode = URL.createObjectURL(element);
                document.getElementById("divImg"+a).innerHTML='<img src="'+imgCode+'" class="evidencia-img">';
            }
            a++;
        }
     })

     //ELIMINAR LA FOTO
     /*
     $('#divImg0').on("click", "#evi0",function(){
        var dele = confirm("DESEA ELIMINAR ESTA FOTO?");

        if(dele == true){
            $('#evi0').remove();
            $('#evi0').replaceAll('<input type="file" multiple id="imagen1" class="conten-img">')
            document.getElementById("divImg0").innerHTML='<img src="../img/iconos/imagen.png" class="logo-img" id="logo-img1">';
        }
     })

     */

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


    $('#folio').prop('disabled', 'disabled');
    $('#jefe').prop('disabled', 'disabled');
    $('#fecha').prop('disabled', 'disabled');
    $('#telefono').prop('disabled', 'disabled');
    $('#area').prop('disabled', 'disabled');

    let nombre_usuario = $('#jefe').val();

    $.ajax({
        url:'../DB/reporte.php',
        type: 'POST',
        dataType: 'json',
        data: {nombre_usuario},
        success: function(response){

        }
    })
    .done(function(respuesta){
       let folio = parseInt(respuesta.folio, 10);
       if(folio == null){
           folio = 0;
       }
       let nuevofolio = folio + 1;
        $('#folio').val(nuevofolio);
        $('#telefono').val(respuesta.telefono);
        $('#fecha').val(respuesta.fecha);
     })
     .fail(function(resp){
         console.log(resp.responseText);
     })

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
             $('#tipo-actividad').val() == "") 
             {
                 alert("LLENA TODOS LOS CAMPOS", Error);
             }else{
                 const FormConCanales = {
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
                     fecha: $('#fecha').val(),
                     nombre_usuario: $('#jefe').val()
                 };
     
                 $.post('../DB/registro-reporte.php', FormConCanales, function(response){
                     alert(response);
                     $('#reporte-form').trigger('reset');
                     $('#tipo-actividad').val(null).trigger('change');
                     $('#descripcion').val(null).trigger('change');
                     $.ajax({
                         url:'../DB/reporte.php',
                         type: 'POST',
                         dataType: 'json',
                         data: {nombre_usuario},
                         success: function(response){
                 
                         }
                     })
                     .done(function(respuesta){
                        let folio = parseInt(respuesta.folio, 10);
                        let nuevofolio = folio + 1;
                         $('#folio').val(nuevofolio);
                         $('#telefono').val(respuesta.telefono);
                         $('#fecha').val(respuesta.fecha);
                      })
                      .fail(function(resp){
                          console.log(resp.responseText);
                      })
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
                        nombre_usuario: $('#jefe').val()
                    };
        
                    $.post('../DB/registro-reporte.php', FormSinCanales, function(response){
                        alert(response);
                        $('#reporte-form').trigger('reset');
                        $('#tipo-actividad').val(null).trigger('change');
                        $('#descripcion').val(null).trigger('change');
                        $.ajax({
                            url:'../DB/reporte.php',
                            type: 'POST',
                            dataType: 'json',
                            data: {nombre_usuario},
                            success: function(response){
                    
                            }
                        })
                        .done(function(respuesta){
                           let folio = parseInt(respuesta.folio, 10);
                           let nuevofolio = folio + 1;
                            $('#folio').val(nuevofolio);
                            $('#telefono').val(respuesta.telefono);
                            $('#fecha').val(respuesta.fecha);
                         })
                         .fail(function(resp){
                             console.log(resp.responseText);
                         })
                    })

                }
            }
        
       e.preventDefault();
    })
})


