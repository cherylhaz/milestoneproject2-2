var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 5,
          center: new google.maps.LatLng(53.350140,-6.266155),
          mapTypeId: 'terrain'
        });
  
        }