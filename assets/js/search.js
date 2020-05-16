function search() {
    $("#search-results").html(" ");
    $(".message").html(" ");
    var inputCountry = $("#country").val();
    var inputDistance = $("#distance").val();
    var inputStars = $("#rating").val();
    var countryLatLon = countries;
    var CountryLat = countryLatLon.find(CountryLat => CountryLat.name === inputCountry); //finds latitude for selected country from existing data. 
    var CountryLon = countryLatLon.find(CountryLon => CountryLon.name === inputCountry); //finds longitude for selected country from existing data. 
    //produces error if no country is entered and submit button is selected
    if (!inputCountry) {
        $(".message").html(`<h3>Please select a country</h3>`);
        return;
    } else {
                        $(".search-results").html(`<div id="loader"><img src="assets/images/loading_image.gif" alt="loading..."></div>`)
        //sends data request to API
        $.when(
            $.getJSON('https://www.hikingproject.com/data/get-trails', {
                    key: "200735964-55871b76fd696d0af0539bd9bc3b2dd6",
                    lat: CountryLat.lat,
                    lon: CountryLon.lon,
                    minLength: inputDistance,
                    minStars: inputStars
                },

            ).then(
                //based on response starts function to display results or produces an error message
                function(response, errorResponse) {
                     trailOptions = response;
                    if (trailOptions.trails.length === 0) {
                        $(".message").html(`<h4>Sorry, nothing was found based on your parameters.  Please choose less options and try again.</h4>`);
                        console.log(errorResponse)
                    } else {

                    $("search-results").html(trailInformationHTML(trailOptions));
                    console.log(response);
                    }
                }));
    }
}
