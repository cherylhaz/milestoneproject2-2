var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 5,
          center: new google.maps.LatLng(53.350140,-6.266155),
          mapTypeId: 'terrain'
        });
    
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var locations = [
                {lat: 39.9388, lng: -105.2582},
                {lat: 41.084045, lng: -73.874245},
                {lat: 40.754932, lng: -73.984016}
            ];

            var markers = locations.map(function(location, i){
                return new google.maps.Marker({
                    position: location, 
                    label: labels[i % labels.length]
                });
            });

            var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
        }