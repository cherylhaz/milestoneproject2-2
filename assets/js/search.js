function search(event) {
    $("#search-results").html(" ")

    var inputCountry = $("#country").val();
    var inputDistance = $("#distance").val();
    var inputStars = $("#rating").val();
    var countryLatLon = [{
        'name': 'Dublin,Ireland',
        'lat': '53.1424',
        'lon': '-6.266155'
    }, {
        'name': 'Riomaggiore,Italy',
        'lat': '44.1',
        'lon': '9.75'
    }, {
        'name': 'Lisbon,Portugal',
        'lat': '38.736946',
        'lon': '-9.142685'
    }, {
        'name': 'Amsterdam,Netherlands',
        'lat': '52.370216',
        'lon': '4.895168'
    }, {
        'name': 'Madrid,Spain',
        'lat': '40.416775',
        'lon': '-3.703790'
    }, {
        'name': 'Barcelona,Spain',
        'lat': '41.3948976',
        'lon': '2.0787279'
    }, {
        'name': 'Porto,Portugal',
        'lat': '41.1622023',
        'lon': '-8.6569731'
    }, 
    {
        'name': 'Mayo,Ireland',
        'lat': '54.2245815',
        'lon': '-9.9918944'
    },{
        'name': 'Geneva,Switzerland',
        'lat': '46.204391',
        'lon': '6.143158'
    }];
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
            }).then(
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