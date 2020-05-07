
function getCountryCoordinates(selectedCountryLat){
        
    }


function search(event, selectedCountryLat){
    var inputCountry = $("#country").val();
    var inputDistance = $("#distance").val();
    var inputStars = $("#rating").val();
    var countryLatLon = [{'name': 'Ireland', 'lat': '53.1424','lon': '-6.266155'},{'name': 'Italy', 'lat': '41.8719', 'lon': '12.5674'},{'name': 'Portugal', 'lat': '38.736946', 'lon': '-9.142685'},{'name': 'Portugal', 'lat': '38.736946', 'lon': '-9.142685'},{'name': 'Spain', 'lat': '40.416775', 'lon': '-3.703790'},{'name': 'Switzerland', 'lat': '46.204391', 'lon': '6.143158'}];
    var selectedCountryLat = countryLatLon.find(selectedCountryLat => selectedCountryLat.name === inputCountry);
    var selectedCountryLon = countryLatLon.find(selectedCountryLon => selectedCountryLon.name === inputCountry);
    if (!inputCountry){
        $("#name").html(`<h2>Please select a country</h2>`);
        return;
    } else {
    
$.when (
   $.getJSON('https://www.hikingproject.com/data/get-trails',
        {key: "200735964-55871b76fd696d0af0539bd9bc3b2dd6",
        lat: selectedCountryLat.lat,
        lon: selectedCountryLon.lon,
        minLength: inputDistance,
        minStars: inputStars
        }).then(
        function(response){
             trailOptions = response;
             console.log(response);
            $("#name").html(trailInformationHTML(trailOptions));
        }, function(errorResponse){
            if (errorResponse.status === 404){
                $("#name").html(`<h2>Nothing was found for ${inputCountry}</h2>`);
            } else {
                console.log(errorResponse);
                $("#name").html(`<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
            }
        }))}}