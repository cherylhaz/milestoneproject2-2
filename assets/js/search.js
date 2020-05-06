const irelandLat = 53.1424;
const irelandLon = -6.266155;
//var italy = (lat: 41.8719, lon: 12.5674)
//var portugal = (lat: 39.3999, lon: 8.2245)
//var switzerland = (lat: 46.8182, lon: 8.2275)
//var spain = (lat: 40.4637, lon: 3.7492)

function search(event){
    var inputCountry = $("#country").val();
    var inputDistance = $("#distance").val();
    var inputStars = $("#rating").val();
    if (!inputCountry){
        $("#name").html(`<h2>Please select a country</h2>`);
        return;
    } if(inputCountry = "Ireland"){
$.when(
   
    $.getJSON('https://www.hikingproject.com/data/get-trails',
        {key: "200735964-55871b76fd696d0af0539bd9bc3b2dd6",
        lat: 53.1424,
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