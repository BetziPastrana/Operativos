$(document).ready(function(){

    let id = document.getElementById('perfil').innerHTML;
    console.log(id);
    document.getElementById("perfil").innerHTML = '';

    var accion = "Usuarios Web";
    const datos = { id, accion};

    $.post('../DB/Datos.php', datos, function(response){

        let data = JSON.parse(response);

        document.getElementById("perfil").innerHTML = data.perfil;
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

})