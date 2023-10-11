$(document).ready(function(){
    
    let user = document.getElementById('label-user').innerHTML; /*OBTENER VALORES DE UN LABEL*/

    /*USAR EL SELECT2*/
    $("#combo-actividad").select2({
        placeholder: "Selecciona los tipos actividad", //placeholder
        tags: true,
        tokenSeparators: ['/',',',';'," "],
        width: "100%",
    });

    /*PETICION PARA CONSULTA DE USUARIOS Y REPORTES*/
    $.ajax({
        url:'../DB/consulta-usuarios.php',
        type: 'POST',
        dataType: 'json',
        data: {user},
        success: function(response){
            $('#label-usuarios').html(response.usuarios);/*PONER VALORES DE UN LABEL*/
            $('#label-reportes').html(response.reportes);
            $('#label-brigada').html(response.jefes);
        }
    })

    /*PONER OTROS COLORES EN EL COMBO ESTADO*/
    $('#combo-estado').change(function(){
        if($('#combo-estado').val() == "En proceso"){
            document.getElementById("combo-estado").style.color = "#c23816";
        }else if($('#combo-estado').val() == "Pendiente"){
            document.getElementById("combo-estado").style.color = "#cb971f";
        }else if($('#combo-estado').val() == "Terminado"){
            document.getElementById("combo-estado").style.color = "green";
        }else{
            document.getElementById("combo-estado").style.color = "Black";
        }
    })
   
    /*ACTIVAR FUNCIONES DEL TABLERO*/
    let tipoUsuario = document.getElementById('label-tipo').innerHTML;

    if(tipoUsuario == "Administrador"){
        DataReadyAdmin();
        AdminTablero();
    } else if(tipoUsuario == "Asistente"){
        DataReadyAsist();
        AsistenteTablero();
    }

    $('#tablax').on("click", "img.icono-ver", function(){
        var table = $('#tablax').DataTable();
        var data = table.row($(this).parents("tr")).data();
        let tipoUsuario = document.getElementById('label-tipo').innerHTML;
        let tipo = data.tipo_actividad;
        let folio = data.folio;
        let actividad = tipo.split(", "); //DESCONCATENADOR

        if(tipoUsuario == "Administrador"){

            if(actividad.includes("Limpieza de Canales") == true){
                location.href = '../Admin/detalles-canal.php?folio='+folio+'&actividad='+tipo;
            }
            else if(actividad.includes("Limpieza de Canales") == false){
                location.href = '../Admin/detalles-limpieza.php?folio='+folio+'&actividad='+tipo;
            }
        }
        else if(tipoUsuario == "Asistente"){
            
            if(actividad.includes("Limpieza de Canales") == true){
                location.href = '../Asistente/detalles-canal.php?folio='+folio+'&actividad='+tipo;
            }
            else if(actividad.includes("Limpieza de Canales") == false){
                location.href = '../Asistente/detalles-limpieza.php?folio='+folio+'&actividad='+tipo;
            }
        }

    })

    //ELIMINAR
    $('#tablax').on("click", ".icono-eliminar", function(){
        var table = $('#tablax').DataTable();
        var data = table.row($(this).parents("tr")).data();
        let folio = data.folio;
        var mensaje = confirm("REALMENTE DESEA ELIMINAR ESTE REPORTE?");
        let accion = "Reporte";
        const datos = { folio, accion};

        if(mensaje == true){

            $.post('../DB/eliminar.php', datos, function(response){
                alert(response);
                location.reload();
            })
        }
    })

    //Actualizar
    $('#tablax').on("click", ".icono-editar", function(){

        var table = $('#tablax').DataTable();
        var data = table.row($(this).parents("tr")).data();
        let folio = data.folio;
        let tipo = data.tipo_actividad;
        let actividad = tipo.split(", ");
        
        if(tipoUsuario == "Administrador"){
            location.href = '../Admin/Actualizar-reporte.php?folio='+folio+'&actividad='+actividad;
        }
        else if(tipoUsuario == "Asistente"){
            location.href = '../Asistente/Actualizar-reporte.php?folio='+folio+'&actividad='+actividad;
        }
    })


    $('.icono-excel').click(function(){
        let autor = $('#input-autor').val();
        let tipo = $('#combo-actividad').val();
        let actividades;
            if(tipo == ""){
                actividades = "Todos"
            }else if(tipo != ""){
                actividades = tipo.join(", ");
            }
        let fecha = $('#input-fecha').val();
        let user = document.getElementById('label-user').innerHTML;
        let estado = $('#combo-estado').val();
        let folio = $('#input-folio').val();

        window.open('../DB/excel.php?folio='+folio+'&actividades='+actividades+
        '&autor='+autor+'&fecha='+fecha+'&user='+user+'&estado='+estado);
   })
    
})//FUNCION READY


function DataReadyAdmin(){
    var table = $('#tablax').DataTable({
        
        "ajax": {
            "url": "../DB/tableroOn.php",
            "type": "POST",
            "dataType": "json",
            "dataSrc": ""
        },
        "columns": [
            { "defaultContent": "<img src='../img/iconos/ver_contraseña.png' class='icono-ver'>"+
            "<img src='../img/iconos/EDITAR_TEXTO.png' class='icono-editar'>"+
            "<img src='../img/iconos/eliminar.png' class='icono-eliminar'></td>" },
           { "data": "folio" },
           { "data": "nombre_usuario" },//SE PONE COMO VIENEN DE LA BASE DE DATOS
           { "data": "tipo_actividad" },
           { "data": "avance" },
           { "data": "ancho" },
           { "data": "area" },
           { "data": "peso" },
           { "data": "ubicacion" },
           { "data": "estado" },
           { "data": "fecha_publicacion" }
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
            "url": "../DB/tableroOn.php",
            "type": "POST",
            "dataType": "json",
            "dataSrc": ""
        },
        "columns": [
            { "defaultContent": "<img src='../img/iconos/ver_contraseña.png' class='icono-ver'>"+
            "<img src='../img/iconos/EDITAR_TEXTO.png' class='icono-editar'>"},
           { "data": "folio" },
           { "data": "nombre_usuario" },//SE PONE COMO VIENEN DE LA BASE DE DATOS
           { "data": "tipo_actividad" },
           { "data": "avance" },
           { "data": "ancho" },
           { "data": "area" },
           { "data": "peso" },
           { "data": "ubicacion" },
           { "data": "estado" },
           { "data": "fecha_publicacion" }
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

function EnvioDatosAdmin(){
    
    let autor = $('#input-autor').val();
    let tipo = $('#combo-actividad').val();
    let actividades;
        if(tipo == ""){
            actividades = "Todos"
        }else if(tipo != ""){
            actividades = tipo.join(", ");
        }
    let fecha = $('#input-fecha').val();
    let user = document.getElementById('label-user').innerHTML;
    let estado = $('#combo-estado').val();
    let folio = $('#input-folio').val();

    const  datos = {autor, actividades, user, fecha, estado, folio};
        
    var table = $('#tablax').DataTable({
        "destroy": true,
        "ajax": {
            "url": "../DB/tablero.php",
            "type": "POST",
            "dataType": "json",
            "data": datos,
            "dataSrc": ""
        },
        "columns": [
            { "defaultContent": "<img src='../img/iconos/ver_contraseña.png' class='icono-ver'>"+
            "<img src='../img/iconos/EDITAR_TEXTO.png' class='icono-editar'>"+
            "<img src='../img/iconos/eliminar.png' class='icono-eliminar'></td>" },
           { "data": "folio" },
           { "data": "nombre_usuario" },//SE PONE COMO VIENEN DE LA BASE DE DATOS
           { "data": "tipo_actividad" },
           { "data": "avance" },
           { "data": "ancho" },
           { "data": "area" },
           { "data": "peso" },
           { "data": "ubicacion" },
           { "data": "estado" },
           { "data": "fecha_publicacion" }
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

function EnvioDatosAsistente(){
    let autor = $('#input-autor').val();
    let tipo = $('#combo-actividad').val();
    let actividades;
    if(tipo == ""){
        actividades = "Todos"
    }else if(tipo != ""){
        actividades = tipo.join(", ");
    }
    let fecha = $('#input-fecha').val();
    let user = document.getElementById('label-user').innerHTML;
    let estado = $('#combo-estado').val();
    let folio = $('#input-folio').val();

    const  datos = {autor, actividades, user, fecha, estado, folio};
        
    var table = $('#tablax').DataTable({
        "destroy": true,
        "ajax": {
            "url": "../DB/tablero.php",
            "type": "POST",
            "dataType": "json",
            "data": datos,
            "dataSrc": ""
        },
        "columns": [
            { "defaultContent": "<img src='../img/iconos/ver_contraseña.png' class='icono-ver'>"+
            "<img src='../img/iconos/EDITAR_TEXTO.png' class='icono-editar'>"},
           { "data": "folio" },
           { "data": "nombre_usuario" },//SE PONE COMO VIENEN DE LA BASE DE DATOS
           { "data": "tipo_actividad" },
           { "data": "avance" },
           { "data": "ancho" },
           { "data": "area" },
           { "data": "peso" },
           { "data": "ubicacion" },
           { "data": "estado" },
           { "data": "fecha_publicacion" }
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
     /* FUNCIONES PARA PEDIR DATOS AL TABLERO*/
   $('#combo-actividad').change(function(){
    EnvioDatosAdmin();

    })

    $('#input-autor').change(function(){
        EnvioDatosAdmin();
    })

    $('#combo-estado').change(function(){
        EnvioDatosAdmin();

    })

    $('#input-folio').keyup(function(){
        EnvioDatosAdmin();
    })


    $('#input-fecha').change(function(){
        EnvioDatosAdmin();
    })
}

function AsistenteTablero(){
    /* FUNCIONES PARA PEDIR DATOS AL TABLERO*/
    $('#combo-actividad').change(function(){
        EnvioDatosAsistente();
    
        })
    
        $('#input-autor').change(function(){
            EnvioDatosAsistente();
        })
    
        $('#combo-estado').change(function(){
            EnvioDatosAsistente();
    
        })
    
        $('#input-folio').keyup(function(){
            EnvioDatosAsistente();
        })
    
    
        $('#input-fecha').change(function(){
            EnvioDatosAsistente();
        })
}

