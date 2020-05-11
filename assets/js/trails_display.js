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

        var contentString = `<div id="content">${returnedTrail.name}</div>`;
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
            marker.addListener('click', function() {
            infowindow.open(map, marker);
        map.setZoom(9);
            map.setCenter(marker.getPosition());
         });
        document.getElementById("search-results").innerHTML += `<div class="card"><img src="${returnedTrail.imgSmall}" alt="Hike Photo" style="width:100%"> 
        <div class="container" style="width:100%"><h4>${label} <a href="${returnedTrail.url}" target="_blank">${returnedTrail.name}</a></h4>
                                          <p id="summary"> ${returnedTrail.summary}</p>
                                           <p> <i class="fas fa-arrows-alt-h"></i> ${returnedTrail.length} miles
                                            <i class="fas fa-arrow-up"></i> ${returnedTrail.ascent} m  
                                            <i class="fas fa-star"></i> ${returnedTrail.stars} </p></div></div>`


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