$(document).ready(function(){
    $('#fecha').prop('disabled', 'disabled');


     //Registrar Usuario
     $('#reporte-form').submit(function(e){
        
        if($('#fecha').val() == "" ||
        $('#nombre').val() == "" ||
        $('#correo').val() == "" ||
        $('#telefono').val() == "" ||
        $('#empresa').val() == ""){
            alert("LLENA TODOS LOS CAMPOS", Error);
        }
        else{
            const Datos = {
                fecha: $('#fecha').val(),
                nombre: $('#nombre').val(),
                correo: $('#correo').val(),
                telefono: $('#telefono').val(),
                empresa: $('#empresa').val(),
            };

            $.post('../DB/registro-jefe.php', Datos, function(response){
                alert(response);
                $('#reporte-form').trigger('reset');
            })
        }
        e.preventDefault();
    })
})