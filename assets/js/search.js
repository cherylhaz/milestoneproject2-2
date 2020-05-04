//var ireland = (lat: 53.1424, lon: 7.6921)
//var italy = (lat: 41.8719, lon: 12.5674)
//var portugal = (lat: 39.3999, lon: 8.2245)
//var switzerland = (lat: 46.8182, lon: 8.2275)
//var spain = (lat: 40.4637, lon: 3.7492)

function trailInformationHTML(trails){
    return `<span class="trail_name"><h2>${trailOptions.trails[0].name}</h2></span>
    <span class="trail_info"><p>${trailOptions.trails[0].summary}<br> ${trailOptions.trails[0].location}</p></span>`;
}

function search(event){
    var inputCountry = $("#country").val();
    if (!inputCountry){
        $("#name").html(`<h2>Please select a country</h2>`);
        return;
    } if(inputCountry = "Ireland"){
$.when(
    $.getJSON('https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200735964-55871b76fd696d0af0539bd9bc3b2dd6')
    ).then(
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
        });
}
}

