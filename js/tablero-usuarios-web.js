$(document).ready(function(){
    /*ACTIVAR FUNCIONES DEL TABLERO*/
    let tipoUsuario = document.getElementById('label-tipo').innerHTML;

    if(tipoUsuario == "Administrador"){
        DataReadyAdmin();
        AdminTablero();
    } else if(tipoUsuario == "Asistente"){
        DataReadyAsist();
        AsistenteTablero();
    }


     //ELIMINAR
     $('#tablax').on("click", ".icono-eliminar", function(){
        var table = $('#tablax').DataTable();
        var data = table.row($(this).parents("tr")).data();
        let idUserWeb = data.id_usuario;
        var mensaje = confirm("REALMENTE DESEA ELIMINAR ESTE USUARIO?");
        let accion = "Usuario Web";
        const datos = { idUserWeb, accion};

        if(mensaje == true){

            $.post('../DB/eliminar.php', datos, function(response){
                alert(response);
                location.reload();
            })
        }
    })


    $('#tablax').on("click", ".icono-editar", function(){

        var table = $('#tablax').DataTable();
        var data = table.row($(this).parents("tr")).data();
        let id = data.id_usuario;
        
        if(tipoUsuario == "Administrador"){
            location.href = '../Admin/Actualizar-usuario.php?id='+id;
        }
        else if(tipoUsuario == "Asistente"){
            location.href = '../Asistente/Actualizar-usuario.php?id='+id;
        }
    })

    $('#tablax').on("click", ".icono-ver", function(){

        var table = $('#tablax').DataTable();
        var data = table.row($(this).parents("tr")).data();
        let id = data.id_usuario;
        
        if(tipoUsuario == "Administrador"){
            location.href = '../Admin/Ver-usuario.php?id='+id;
        }
        else if(tipoUsuario == "Asistente"){
            location.href = '../Asistente/Ver-usuario.php?id='+id;
        }
    })



})//Funcion Ready


function AdminTablero(){

    $('#input-autor').change(function(){
        EnvioDatosAdmin();
    })

    $('#input-empresa').change(function(){
        EnvioDatosAdmin();
    })

    $('#input-fecha').change(function(){
        EnvioDatosAdmin();
    })
}

function EnvioDatosAdmin(){
    
    let autor = $('#input-autor').val();
    let fecha = $('#input-fecha').val();
    let user = document.getElementById('label-user').innerHTML;
    let empresa = $('#input-empresa').val();

    const  datos = {autor, empresa, user, fecha};
        
    var table = $('#tablax').DataTable({
        "destroy": true,
        "ajax": {
            "url": "../DB/tablero-usuarios-web.php",
            "type": "POST",
            "dataType": "json",
            "data": datos,
            "dataSrc": ""
        },
        "columns": [
            { "data": "id_usuario" },
            { "defaultContent": "<img src='../img/iconos/ver_contraseña.png' class='icono-ver'>"+
            "<img src='../img/iconos/EDITAR_TEXTO.png' class='icono-editar'>"+
            "<img src='../img/iconos/eliminar.png' class='icono-eliminar'></td>" },
           { "data": "nombre_usuario" },
           { "data": "usuario" },
           { "data": "perfil" },
           { "data": "telefono" },
           { "data": "empresa" },
           { "data": "fecha" },
        ],

        language: {
            emptyTable: "No hay registros",
            paginate: {
                first: "Primero",
                previous: "Anterior",
                next: "Siguiente",
                last: "Ultimo"
            },
            aria: false,
        },
        "paging": true,
        "pageLength": 6,
        "bLengthMenu": true,
        "bInfo": false,
        "searching": false,
        "ordering":  false,
        "lengthChange" : false,
        "select": true
        
    });           
}

function AsistenteTablero(){

    $('#input-autor').change(function(){
        EnvioDatosAsist();
    })

    $('#input-empresa').change(function(){
        EnvioDatosAsist();
    })

    $('#input-fecha').change(function(){
        EnvioDatosAsist();
    })
}

function EnvioDatosAsist(){
    
    let autor = $('#input-autor').val();
    let fecha = $('#input-fecha').val();
    let user = document.getElementById('label-user').innerHTML;
    let empresa = $('#input-empresa').val();

    const  datos = {autor, empresa, user, fecha};
        
    var table = $('#tablax').DataTable({
        "destroy": true,
        "ajax": {
            "url": "../DB/tablero-usuarios-web.php",
            "type": "POST",
            "dataType": "json",
            "data": datos,
            "dataSrc": ""
        },
        "columns": [
            { "data": "id_usuario" },
            { "defaultContent": "<img src='../img/iconos/ver_contraseña.png' class='icono-ver'>"+
            "<img src='../img/iconos/EDITAR_TEXTO.png' class='icono-editar'>"},
           { "data": "nombre_usuario" },
           { "data": "usuario" },
           { "data": "perfil" },
           { "data": "telefono" },
           { "data": "empresa" },
           { "data": "fecha" },
        ],

        language: {
            emptyTable: "No hay registros",
            paginate: {
                first: "Primero",
                previous: "Anterior",
                next: "Siguiente",
                last: "Ultimo"
            },
            aria: false,
        },
        "paging": true,
        "pageLength": 6,
        "bLengthMenu": true,
        "bInfo": false,
        "searching": false,
        "ordering":  false,
        "lengthChange" : false,
        "select": true
        
    });           
}

function DataReadyAdmin(){
    var table = $('#tablax').DataTable({
        
        "ajax": {
            "url": "../DB/tableroWebOn.php",
            "type": "POST",
            "dataType": "json",
            "dataSrc": ""
        },
        "columns": [
            { "data": "id_usuario" },
            { "defaultContent": "<img src='../img/iconos/ver_contraseña.png' class='icono-ver'>"+
            "<img src='../img/iconos/EDITAR_TEXTO.png' class='icono-editar'>"+
            "<img src='../img/iconos/eliminar.png' class='icono-eliminar'></td>" },
           { "data": "nombre_usuario" },
           { "data": "usuario" },
           { "data": "perfil" },
           { "data": "telefono" },
           { "data": "empresa" },
           { "data": "fecha" },
        ],

        language: {
            emptyTable: "No hay registros",
            paginate: {
                first: "Primero",
                previous: "Anterior",
                next: "Siguiente",
                last: "Ultimo"
            },
            aria: false,
        },
        "paging": true,
        "pageLength": 6,
        "bLengthMenu": true,
        "bInfo": false,
        "searching": false,
        "ordering":  false,
        "lengthChange" : false,
        "select": true
        
    });
}

function DataReadyAsist(){
    var table = $('#tablax').DataTable({
        
        "ajax": {
            "url": "../DB/tableroWebOn.php",
            "type": "POST",
            "dataType": "json",
            "dataSrc": ""
        },
        "columns": [
            { "data": "id_usuario" },
            { "defaultContent": "<img src='../img/iconos/ver_contraseña.png' class='icono-ver'>"+
            "<img src='../img/iconos/EDITAR_TEXTO.png' class='icono-editar'>"},
           { "data": "nombre_usuario" },
           { "data": "usuario" },
           { "data": "perfil" },
           { "data": "telefono" },
           { "data": "empresa" },
           { "data": "fecha" },
        ],
        language: {
            emptyTable: "No hay registros",
            paginate: {
                first: "Primero",
                previous: "Anterior",
                next: "Siguiente",
                last: "Ultimo"
            },
            aria: false,
        },
        "paging": true,
        "pageLength": 6,
        "bLengthMenu": true,
        "bInfo": false,
        "searching": false,
        "ordering":  false,
        "lengthChange" : false,
        "select": true
        
    });

    /*FUNCION PARA VER LOS DATOS EN LA PAGINA DETALLES*/
}

