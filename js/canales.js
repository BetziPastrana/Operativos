$(document).ready(function(){

    let tipoUsuario = document.getElementById('label-tipo').innerHTML;

    if(tipoUsuario == "Administrador"){
        DataReadyAdmin();
        AdminTablero();
    } else if(tipoUsuario == "Asistente"){
        DataReadyAsist();
        AsistenteTablero();
    }


    /*REGISTRO DE CANALES*/
    $('#reporte-form').submit(function(e){

        let nombre = $('#nombre').val();
        let ubicacion = $('#ubicacion').val();

        const datos = {nombre, ubicacion};

        $.post('../DB/registro-canal.php', datos, function(response){
                alert(response);
                location.reload();

            })

        e.preventDefault();
    })

    //ELIMINAR
    $('#tablax').on("click", ".icono-eliminar", function(){
        var table = $('#tablax').DataTable();
        var data = table.row($(this).parents("tr")).data();
        let idCause = data.id_cause;
        var mensaje = confirm("REALMENTE DESEA ELIMINAR ESTE CANAL?");
        let accion = "Canales";
        const datos = { idCause, accion};

        if(mensaje == true){

            $.post('../DB/eliminar.php', datos, function(response){
                alert(response);
                location.reload();
            })
        }
    })





})//FUNCION READY


function DataReadyAdmin(){
    
    var table = $('#tablax').DataTable({
        
        "ajax": {
            "url": "../DB/canalesOn.php",
            "type": "POST",
            "dataType": "json",
            "dataSrc": ""
        },
        "columns": [
            { "data": "id_cause" },
            { "defaultContent": "<img src='../img/iconos/ver_contraseña.png' class='icono-ver'>"+
            "<img src='../img/iconos/EDITAR_TEXTO.png' class='icono-editar'>"+
            "<img src='../img/iconos/eliminar.png' class='icono-eliminar'></td>" },
           { "data": "nombre" },
           { "data": "ubicacion" }
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

function AdminTablero(){

    $('#nombre-cause').change(function(){
        EnvioDatosAdmin();
    })
}

function EnvioDatosAdmin(){

    let cause = $('#nombre-cause').val();
    
    let user = document.getElementById('label-user').innerHTML;
    

    const  datos = {cause, user};
        
    var table = $('#tablax').DataTable({
        "destroy": true,
        "ajax": {
            "url": "../DB/canales.php",
            "type": "POST",
            "dataType": "json",
            "data": datos,
            "dataSrc": ""
        },
        "columns": [
            { "data": "id_cause" },
            { "defaultContent": "<img src='../img/iconos/ver_contraseña.png' class='icono-ver'>"+
            "<img src='../img/iconos/EDITAR_TEXTO.png' class='icono-editar'>"+
            "<img src='../img/iconos/eliminar.png' class='icono-eliminar'></td>" },
           { "data": "nombre" },
           { "data": "ubicacion" }
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
            "url": "../DB/canalesOn.php",
            "type": "POST",
            "dataType": "json",
            "dataSrc": ""
        },
        "columns": [
            { "data": "id_cause" },
            { "defaultContent": "<img src='../img/iconos/ver_contraseña.png' class='icono-ver'>"+
            "<img src='../img/iconos/EDITAR_TEXTO.png' class='icono-editar'>"},
           { "data": "nombre" },
           { "data": "ubicacion" }
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
    
    $('#nombre-cause').change(function(){
        EnvioDatosAsist();
    })
}

function EnvioDatosAsist(){

    let cause = $('#nombre-cause').val();
    
    let user = document.getElementById('label-user').innerHTML;
    

    const  datos = {cause, user};
        
    var table = $('#tablax').DataTable({
        "destroy": true,
        "ajax": {
            "url": "../DB/canales.php",
            "type": "POST",
            "dataType": "json",
            "data": datos,
            "dataSrc": ""
        },
        "columns": [
            { "data": "id_cause" },
            { "defaultContent": "<img src='../img/iconos/ver_contraseña.png' class='icono-ver'>"+
            "<img src='../img/iconos/EDITAR_TEXTO.png' class='icono-editar'>"},
           { "data": "nombre" },
           { "data": "ubicacion" }
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