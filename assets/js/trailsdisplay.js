var markers = [];
function trailInformationHTML(returnedTrails){
    var returnedTrails = trailOptions.trails;
        
    for (let returnedTrail of returnedTrails) {

        var myLatLng = new google.maps.LatLng(`${returnedTrail.latitude}`,`${returnedTrail.longitude}`);
        var contentString = `<div id="content">${returnedTrail.name}</div>`;
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            label: `${returnedTrails.indexOf(returnedTrail)}`,
        });
        markers.push(marker);


    marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
    document.getElementById("search-results").innerHTML += `<span id ="number">${returnedTrails.indexOf(returnedTrail)} <a href="${returnedTrail.url}" target="_blank">${returnedTrail.name}   </a></span>
                                            <span id="summary">${returnedTrail.summary} </span>
                                            <span><i class="fas fa-arrows-alt-h"></i> ${returnedTrail.length} miles  </span>
                                            <span><i class="fas fa-arrow-up"></i> ${returnedTrail.ascent} m  </span>
                                            <span><i class="fas fa-star"></i> ${returnedTrail.stars}  <br></span>`


                                        }
}


function setMapOnAll(map) {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
        }
      }
function clearMarkers() {
        setMapOnAll(null);
      }
function deleteMarkers(){
        clearMarkers();
        markers = [];
      }

function clearMarkers() {
        setMapOnAll(null);
      }
