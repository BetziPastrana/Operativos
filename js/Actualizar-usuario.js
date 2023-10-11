$(document).ready(function(){

    $('#fecha').prop('disabled', 'disabled');
    $('#perfil').prop('disabled', 'disabled');

    var id = $('#nombre').val();
    $('#nombre').val("");

    //Peticion de los datos

    var accion = "Usuarios Web";
    const datos = { id, accion};

    $.post('../DB/Datos.php', datos, function(response){

        let data = JSON.parse(response);

        $('#fecha').val(data.fecha);
        $('#nombre').val(data.nombre);
        $('#correo').val(data.correo);
        $('#telefono').val(data.telefono);
        $('#empresa').val(data.empresa);
        $('#perfil').val(data.perfil);
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
            let tipoUsuario = document.getElementById('label-tipo').innerHTML;
            let user = $('#perfil').val();
            
            if(tipoUsuario == "Asistente" && user == "Administrador"){
                alert("NO TIENE PRIVILEGIOS DE ADMINISTRADOR");
            }
            else{

                const Datos = {
                    accion: "Usuario Web",
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
                                location.href = '../Admin/usuarios-web.php';
                            }
                            else if(tipoUsuario == "Asistente"){
                                location.href = '../Asistente/usuarios-web.php';
                            }
                    
                })
            }
        }




        e.preventDefault();
    })



})