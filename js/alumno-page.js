
$(document).ready(function(){

    $('#AlumnoBusqueda').keyup(function(e){
        if($('#AlumnoBusqueda').val()){
            let AlumnoBusqueda = $('#AlumnoBusqueda').val();
            $.ajax({
                url: 'Consultas/ConsultaAlumnos.php',
                type: 'POST',
                data: { AlumnoBusqueda },
                success: function(response){
                    let Alumno = JSON.parse(response);
                    let template = '';
                    Alumno.forEach(Alumno =>{
                        template += `
                            <tr>
                                <td>${Alumno.Curp}</td>
                                <td>${Alumno.Nombre}</td>
                                <td>${Alumno.Paterno}</td>
                                <td>${Alumno.Materno}</td>
                                <td>${Alumno.Edad}</td>
                                <td>${Alumno.Grupo}</td>
                                <td>${Alumno.Promedio}</td>
                                <td>${Alumno.Reportes}</td>
                                <td>${Alumno.Estatus}</td>
                            </tr>
                        `
                    });

                    $('#tableAlumnos').html(template);
                }
            })
         }
    })
});