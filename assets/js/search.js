function search(event) {
    $("#search-results").html(" ");

    var inputCountry = $("#country").val();
    var inputDistance = $("#distance").val();
    var inputStars = $("#rating").val();
    var countryLatLon = countries;
    var CountryLat = countryLatLon.find(CountryLat => CountryLat.name === inputCountry); //finds latitude for selected country from existing data. 
    var CountryLon = countryLatLon.find(CountryLon => CountryLon.name === inputCountry); //finds longitude for selected country from existing data. 
    //produces error if no country is entered and submit button is selected
    if (!inputCountry) {
        $("#search-results").html(`<h2>Please select a country</h2>`);
        return;
    } else {
        //sends data request to API
        $.when(
            $.getJSON('https://www.hikingproject.com/data/get-trails', {
                    key: "200735964-55871b76fd696d0af0539bd9bc3b2dd6",
                    lat: CountryLat.lat,
                    lon: CountryLon.lon,
                    minLength: inputDistance,
                    minStars: inputStars
                },
                $(".search-results").html(`<div id="loader"><img src="assets/images/loading_image.gif" alt="loading..."></div>`)
            ).then(
                //based on response starts function to display results or produces an error message
                function(response) {
                    trailOptions = response;
                    $("search-results").html(trailInformationHTML(trailOptions));
                },
                function(errorResponse) {
                    if (errorResponse.status === 404) {
                        $("search-results").html(`<h2>I am sorry, nothing was found for ${inputCountry}</h2>`);
                    } else {
                        console.log(errorResponse);
                        $("#search-results").html(`<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
                    }
                }))
    }
}