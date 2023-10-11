$(document).ready(function(){
    $('#btn1').submit(function(e){
        const DataForm = {
            curp: $('#curp').val(),
            nombre_alumno: $('#nombre_alumno').val(),
            app_alumno: $('#app_alumno').val(),
            apm_alumno: $('#apm_alumno').val(),
            edad: $('#edad').val(),
            grado: $('#grado').val(),
            direccion: $('#direccion').val(),
            dni: $('#dni').val(),
            nombre_padre: $('#nombre_padre').val(),
            app_padre: $('#app_padre').val(),
            apm_padre: $('#apm_padre').val(),
            correo: $('#correo').val()
        };
        $.post('RegistroAlumnos.php', DataForm, function(response){
            
        });
        e.preventDefault();
    })
})