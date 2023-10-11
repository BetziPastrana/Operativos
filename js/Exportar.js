$(document).ready(function(){

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

     
    var folio = document.getElementById("folio").innerHTML,
    tipoActividad = document.getElementById("tipoActividad").innerHTML;
    
    let actividad = tipoActividad.split(", "); //DESCONCATENADOR
    
        if(actividad.includes("Limpieza de Canales") == false){
            //VARIABLES
            let identificador = "Sin Canales";
            const datos = {folio,identificador};
            $.post('../DB/detalles.php', datos, function(response){
                let data = JSON.parse(response);
                document.getElementById("estado").innerHTML = data.estado;
                document.getElementById("fecha").innerHTML = data.fecha;
                document.getElementById("NumBrigadistas").innerHTML = data.numeroBrigadistas;
                document.getElementById("autor").innerHTML = data.nombreUsuario;
                document.getElementById("telefono").innerHTML = data.telefono;
                document.getElementById("desc").innerHTML = data.descripcion;
                document.getElementById("avance").innerHTML = data.avance;
                document.getElementById("ancho").innerHTML = data.ancho;
                document.getElementById("area").innerHTML = data.area;
                document.getElementById("peso").innerHTML = data.peso;
                document.getElementById("observaciones").innerHTML = data.observaciones;
    
            })
        }else if(actividad.includes("Limpieza de Canales") == true){
             //VARIABLES
             let identificador = "Con Canales";
             const datos = {folio,identificador};
            $.post('../DB/detalles.php', datos, function(response){
                let data = JSON.parse(response);
                document.getElementById("estado").innerHTML = data.estado;
                document.getElementById("fecha").innerHTML = data.fecha;
                document.getElementById("NumBrigadistas").innerHTML = data.numeroBrigadistas;
                document.getElementById("autor").innerHTML = data.nombreUsuario;
                document.getElementById("telefono").innerHTML = data.telefono;
                document.getElementById("desc").innerHTML = data.descripcion;
                document.getElementById("avance").innerHTML = data.avance;
                document.getElementById("ancho").innerHTML = data.ancho;
                document.getElementById("area").innerHTML = data.area;
                document.getElementById("peso").innerHTML = data.peso;
                document.getElementById("observaciones").innerHTML = data.observaciones;
                document.getElementById("cause").innerHTML = data.cause;

            })
        }
    


    $('.icono-pdf').click(function(){
        if(actividad.includes("Limpieza de Canales") == true){ //INCLUDES PERMITE SABER SI EXISTE UN ELEMENO EN UN ARRAY
            location.href = '../DB/pdf-canales.php?folio='+folio;
        }
        else if(actividad.includes("Limpieza de Canales") == false){
            location.href = '../DB/pdf-general.php?folio='+folio;
        }
    })

   
    
})