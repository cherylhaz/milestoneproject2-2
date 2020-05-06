
const irelandLon = -6.266155;
//var italy = (lat: , lon: 12.5674)
//var portugal = (lat: , lon: 8.2245)
//var switzerland = (lat: , lon: 8.2275)
//var spain = (lat: , lon: 3.7492)
function getCountryCoordinates(selectedCountryLat){
        
    }


function search(event, selectedCountryLat){
    var inputCountry = $("#country").val();
    var inputDistance = $("#distance").val();
    var inputStars = $("#rating").val();
    var countryLat = [{'name': 'ireland', 'lat': '53.1424'},{'name': 'italy', 'lat': '41.8719'}];
    var selectedCountryLat = $(countryLat).find(name => name === 'ireland').lat;
    
    if (!inputCountry){
        $("#name").html(`<h2>Please select a country</h2>`);
        return;
    } else {
    
$.when (
   $.getJSON('https://www.hikingproject.com/data/get-trails',
        {key: "200735964-55871b76fd696d0af0539bd9bc3b2dd6",
        lat: selectedCountryLat,
        lon: -6.266155,
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