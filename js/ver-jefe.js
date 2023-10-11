$(document).ready(function(){

    let id = document.getElementById('nombre').innerHTML;
    document.getElementById("nombre").innerHTML = '';

    var accion = "Jefe de Brigada";
    const datos = { id, accion};

    $.post('../DB/Datos.php', datos, function(response){

        let data = JSON.parse(response);

        document.getElementById("fecha").innerHTML = data.fecha;
        document.getElementById("nombre").innerHTML = data.nombre;
        document.getElementById("empresa").innerHTML = data.empresa;
        document.getElementById("numero-telefono").innerHTML = data.telefono;
        document.getElementById("correo-usuario").innerHTML = data.correo;
    })

    $('#guardar').click(function(e){
        let tipoUsuario = document.getElementById('label-tipo').innerHTML;
        if(tipoUsuario == "Administrador"){
            location.href = '../Admin/Actualizar-usuario.php?id='+id;
        }
        else if(tipoUsuario == "Asistente"){
            location.href = '../Asistente/Actualizar-usuario.php?id='+id;
        }
    })

    $('#guardar').click(function(e){
        let tipoUsuario = document.getElementById('label-tipo').innerHTML;
        if(tipoUsuario == "Administrador"){
            location.href = '../Admin/Actualizar-jefe.php?id='+id;
        }
        else if(tipoUsuario == "Asistente"){
            location.href = '../Asistente/Actualizar-jefe.php?id='+id;
        }
    })

})