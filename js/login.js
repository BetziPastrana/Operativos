$(document).on('submit', '#formulario',function(){

    event.preventDefault();
        
    $.ajax({
        url:'DB/login.php',
        type: 'POST',
        dataType: 'json',
        data: $(this).serialize(),
        success: function(response){
            
            }
        })
        .done(function(respuesta){
           if(!respuesta.error){
               if(respuesta.tipo == '1'){
                   location.href = 'Admin/inicio.php';
               } 
               else if(respuesta.tipo = '2'){
                    location.href = 'Asistente/home.php';
               } 
               else if(respuesta.tipo = 3){
                    $('.negado').slideDown('slow');
                    setTimeout(function(){
                        $('.negado').slideUp('slow');
                    },3000);
               }
           }else{
               $('.error').slideDown('slow');
               setTimeout(function(){
                   $('.error').slideUp('slow');
               },3000);
           }
        })
        .fail(function(resp){
            console.log(resp.responseText);
        })
        
 });

