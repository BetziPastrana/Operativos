$(document).ready(function(){
    $('#fecha').prop('disabled', 'disabled');

    
    //Cambio del checkbox
    $("input:checkbox").on('click', function() {
        var $box = $(this);
        if ($box.is(":checked")) {
            var group = "input:checkbox[name='" + $box.attr("name") + "']";
            $(group).prop("checked", false);
            $box.prop("checked", true);
        } else {
            $box.prop("checked", false);
        }
    })
    
    
    //Registrar Usuario
    $('#reporte-form').submit(function(e){

        //Variable del tipo
        let tipo;
        
        if($('#fecha').val() == "" ||
        $('#nombre').val() == "" ||
        $('#correo').val() == "" ||
        $('#telefono').val() == "" ||
        $('#empresa').val() == ""){
            alert("LLENA TODOS LOS CAMPOS", Error);
        }
        else if($('#check1').prop("checked") == false && $('#check2').prop("checked") == false){
            alert("SELECCIONA EL PERFIL DEL USUARIO", Error);
        }
        else {
            if($('#check1').prop("checked") == true){
                tipo = $('#check1').val();
            }
            else if($('#check2').prop("checked") == true){
                tipo = $('#check2').val();
            }
            const Datos = {
                fecha: $('#fecha').val(),
                nombre: $('#nombre').val(),
                correo: $('#correo').val(),
                telefono: $('#telefono').val(),
                empresa: $('#empresa').val(),
                tipoUsuario: tipo
            };

            $.post('../DB/registro-usuario-web.php', Datos, function(response){
                alert(response);
                $('#reporte-form').trigger('reset');
            })
            
        }
        
        e.preventDefault();
    })
})