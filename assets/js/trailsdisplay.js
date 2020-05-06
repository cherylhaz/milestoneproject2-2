function trailInformationHTML(returnedTrails){
    var returnedTrails = trailOptions.trails;
    for (let returnedTrail of returnedTrails) {

var myLatLng = new google.maps.LatLng(`${returnedTrail.latitude}`,`${returnedTrail.longitude}`);
   var marker = new google.maps.Marker({
    position: myLatLng,
    label: `${returnedTrails.indexOf(returnedTrail)}`,

});
marker.setMap(map);

    document.getElementById("name").innerHTML += `<span><strong>${returnedTrails.indexOf(returnedTrail)} </strong> <a href="${returnedTrail.url}" target="_blank">${returnedTrail.name}   </a></span>
                                            <span style="font-style: italic">${returnedTrail.summary} </span>
                                            <span><i class="fas fa-arrows-alt-h"></i> ${returnedTrail.length} miles  </span>
                                            <span><i class="fas fa-arrow-up"></i> ${returnedTrail.ascent} m  </span>
                                            <span><i class="fas fa-star"></i> ${returnedTrail.stars}  <br></span>`

    }}