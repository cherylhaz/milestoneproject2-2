var markers = [];

function trailInformationHTML(returnedTrails) {
    var returnedTrails = trailOptions.trails;

    for (let returnedTrail of returnedTrails) {

        var myLatLng = new google.maps.LatLng(`${returnedTrail.latitude}`, `${returnedTrail.longitude}`);
        var label = returnedTrails.indexOf(returnedTrail) + 1;

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            label: `${label}`,
        });
        markers.push(marker);
        //Code used from W3Schools https://www.w3schools.com/graphics/google_maps_events.asp
        google.maps.event.addListener(marker, 'click', function() {
            map.setZoom(9);
            map.setCenter(marker.getPosition());
        });
        //end of Code
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
        var contentString = `<div id="content">${returnedTrail.name}</div>`;
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        document.getElementById("search-results").innerHTML += `<span id ="number">${label} <a href="${returnedTrail.url}" target="_blank">${returnedTrail.name}   </a></span>
                                            <span id="summary">${returnedTrail.summary} </span>
                                            <span><i class="fas fa-arrows-alt-h"></i> ${returnedTrail.length} miles  </span>
                                            <span><i class="fas fa-arrow-up"></i> ${returnedTrail.ascent} m  </span>
                                            <span><i class="fas fa-star"></i> ${returnedTrail.stars}  <br></span>`


    }
}

//Code from Google maps documentation https://developers.google.com/maps/documentation/javascript/examples/marker-remove
function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

function clearMarkers() {
    setMapOnAll(null);
}

function deleteMarkers() {
    clearMarkers();
    markers = [];
}

function clearMarkers() {
    setMapOnAll(null);
}
//End of Google Code