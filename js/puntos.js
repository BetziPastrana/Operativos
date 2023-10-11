
function iniciarMap(){
    var coord = {lat:16.852799339174283 ,lng: -99.84589581222443};
    map = new google.maps.Map(document.getElementById('map'),{
      zoom: 17,
      center: coord
    });

    //Agregar Marcador
    map.addListener('click', function(event){
        agregarMarcador(event.latLng);
    })

}

//arreglo de marcadores
var ArregloMarcadores = [];

//Variables de la lat y lng
var lat;
var lng; 

function agregarMarcador( location ){
    
    var pin = new google.maps.Marker({

        position: location,
        map: map,
        animation: google.maps.Animation.DROP
    });

    for(var i in ArregloMarcadores ){

        ArregloMarcadores[i].setMap(null);
    }

    ArregloMarcadores.push(pin);

 lat = location.lat();
 lng = location.lng();

    $.ajax({
        url:'https://www.mapquestapi.com/geocoding/v1/reverse?key=EKiFGv2lf3t7RK03R6IbWH3SoqEBgA0G&location=' + lat + ',' + lng + '&includeRoadMetadata=true&includeNearestIntersection=true',
        type: 'GET',
        dataType: 'json',
        success: function(response){
            
            var location = JSON.stringify(response.results);

            let direccion = JSON.parse(location);


            var calle = direccion[0].locations[0].street;
            var codigoPost = direccion[0].locations[0].postalCode;
            ubicacion = calle + " Código Postal: " + codigoPost;
        
            $('#direccion').val(ubicacion);
        }
    })
           
}

$(document).ready(function(){

    $('#direccion').prop('disabled', 'disabled');
    $('#input-folio').prop('disabled', 'disabled');
    $('#input-fecha').prop('disabled', 'disabled');

    let accion = "Puntos de Basura";

    $.ajax({
        url:'../DB/Datos.php',
        type: 'POST',
        dataType: 'json',
        data: {accion},
        success: function(response){

            

            let folio = parseInt(response.folio[0], 10);
            if(folio == null){
                folio = 0;
            }
            let nuevofolio = folio + 1;
            $('#input-folio').val(nuevofolio);
        }
    })

    //Guardar Punto de Basura

    $('#guardar-punto').click(function(e){

        if($('#direccion').val()== ""){
            alert("SELECCIONA UNA UBICACIÓN EN EL MAPA");
        }
        else{
            //Datos
            let folio = $('#input-folio').val();
            let fecha = $('#input-fecha').val();
            let direccion = $('#direccion').val();
            let latitud = lat;
            let longitud = lng;
            const datos = {
                folio, 
                fecha,
                direccion,
                latitud,
                longitud
            };

            $.post('../DB/Guardar-punto.php', datos, function(response){

                alert(response);
                location.reload();
            })
        }

        e.preventDefault();
    })

      

})