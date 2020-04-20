function initAutocomplete() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 53.4808, lng: -2.2426 },
    zoom: 13,
    mapTypeId: "roadmap",
  });
  //I set variables for each of the breweries that i will be using in my tour, 
  //so they can be re called with out typing out the co-ordinates each time//
  let cloud = { lat: 53.478028, lng: -2.220989 };
  let track = { lat: 53.47779, lng: -2.308078 };
  let pamona = { lat: 53.48892, lng: -2.25118 };
  let shindigger = { lat: 53.47789, lng: -2.220561 };

  var flightPlanCoordinates = [cloud, track, pamona, shindigger];
  var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "#FF300",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  flightPath.setMap(map);

  var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var locations = [
     cloud,
    track,
    pamona,
    shindigger,
  ];

  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
