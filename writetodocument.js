
    function getTableHeaders(obj){
        var tableHeaders = [];
        Object.keys(obj).forEach(function(key){
            tableHeaders.push(`<td>${key}</td>`);
        });
        return `<tr>${tableHeaders}</tr>`;
    }

function writeToDocument(id){
        var tableRows = [];
        var el = document.getElementById("data");
        el.innerHTML = "";

            getData(id, function(data){
                var data = data.trails;
                var tableHeaders = getTableHeaders(data[0]);

                data.forEach(function(item) {
                    var dataRow = [];

                    Object.keys(item).forEach(function(key){

                        dataRow.push(`<td>${item[key]}</td>`);
                    });
                    tableRows.push(`<tr>${dataRow}</tr>`);
                });
                el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`.replace(/,/g, "");
            });
    
         
//Code used from Google Tutorial - https://developers.google.com/maps/documentation/javascript/importing_data
      // Loop through the results array and place a marker for each
      // set of coordinates.
      window.eqfeed_callback = function(results) {
        for (var i = 0; i < results.features.length; i++) {
          var coords = results.features[i].geometry.coordinates;
          var latLng = new google.maps.LatLng(coords[1],coords[0]);
          var marker = new google.maps.Marker({
            position: latLng,
            map: map
          });
        }};
    }
//End of Google Code