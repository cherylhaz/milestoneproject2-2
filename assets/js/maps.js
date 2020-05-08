//Code provide by Google Maps Platform to display map https://developers.google.com/maps/documentation/javascript/importing_data

var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 2,
          center: new google.maps.LatLng(53.350140,-6.266155),
          mapTypeId: 'terrain'
        });
        }
//End of Google Code
function setMapOnAll(map) {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
        }
      }
function deleteMarkers(){
        clearMarkers();
        markers = [];
      }

      function clearMarkers() {
        setMapOnAll(null);
      }