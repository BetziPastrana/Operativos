$(document).ready(function(){

    $('#fecha').prop('disabled', 'disabled');

    var id = $('#nombre').val();
    $('#nombre').val("");

    //Peticion de los datos

    var accion = "Jefe de Brigada";
    const datos = { id, accion};

    $.post('../DB/Datos.php', datos, function(response){

        let data = JSON.parse(response);

        $('#fecha').val(data.fecha);
        $('#nombre').val(data.nombre);
        $('#correo').val(data.correo);
        $('#telefono').val(data.telefono);
        $('#empresa').val(data.empresa);
    })

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
                accion: "Jefe de Brigada",
                nombre: $('#nombre').val(),
                correo: $('#correo').val(),
                telefono: $('#telefono').val(),
                empresa: $('#empresa').val(),
                pass: $('#pass').val(),
                id
            };

            $.post('../DB/Actualizar.php', Datos, function(response){
                alert(response);

                let tipoUsuario = document.getElementById('label-tipo').innerHTML;

                        if(tipoUsuario == "Administrador"){
                            location.href = '../Admin/jefes-brigada.php';
                        }
                        else if(tipoUsuario == "Asistente"){
                            location.href = '../Asistente/jefes-brigada.php';
                        }
                
            })
        }
        e.preventDefault();
    })

})