//var ireland = (lat: 53.1424, lon: 7.6921)
//var italy = (lat: 41.8719, lon: 12.5674)
//var portugal = (lat: 39.3999, lon: 8.2245)
//var switzerland = (lat: 46.8182, lon: 8.2275)
//var spain = (lat: 40.4637, lon: 3.7492)

function search(event){
    
    var choosenCountry = $("#country").val();
    if (!choosenCountry){
        $("#data").html(`<p>Please select a country.</p>`);
        return;
    };
    $.when.call(getData).then(
        function(response) {
            var userData = response;
            $("#data").html(writeToDocument(userData));
        },
        function(errorResponse) {
            if (errorResponse.status === 404) {
                $("#data").html(
                    `<h2>No info found for country</h2>`);
            } else {
                console.log(errorResponse);
                $("data").html(
                    `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
            }
        });
}

    function getData(id,cb){

        var xhr = new XMLHttpRequest();
        var choosenCountry = $("#country").val();
    if(choosenCountry == "Ireland"){
        xhr.open("GET", "https://www.hikingproject.com/data/get-trails-by-id?ids=7047180,7035642,7078363,7091282,7029957,7063360,7019238&key=200735964-55871b76fd696d0af0539bd9bc3b2dd6");
        xhr.send();

        xhr.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
              cb(JSON.parse(this.responseText));
        }}
    }
    
    else {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200735964-55871b76fd696d0af0539bd9bc3b2dd6");
        xhr.send();

        xhr.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
              cb(JSON.parse(this.responseText));
            }
    };
}}
