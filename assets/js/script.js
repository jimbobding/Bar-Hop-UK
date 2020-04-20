


function initAutocomplete() {
  var map = new google.maps.Map(document.getElementById("mapManchester"), {
    center: { lat: 53.4808, lng: -2.2426 },
    zoom: 13,
    mapTypeId: "roadmap",
  });
  //I set variables for each of the breweries that i will be using in my tour,
  //so they can be re-called with out typing out the co-ordinates each time//
  let cloud = { lat: 53.478026, lng: -2.221592 };
  let track = { lat: 53.477921, lng: -2.221168 };
  let pamona = { lat: 53.48892, lng: -2.25118 };
  let shindigger = { lat: 53.47779, lng: -2.308078 };

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

  var locations = [cloud, track, pamona, shindigger];

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


  //This code is from google places, it will give information regarding the name and address of the markers
  var request = {
    placeId: "ChIJ8--qgZixe0gRMALF5w3k-Ko", 
    fields: ["name", "formatted_address",  "geometry"],
     placeId: " ChIJOUwr4m2xe0gRv5KHnmiJn2M", 
    fields: ["name", "formatted_address", "place_id", "geometry"],

  };

  var infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);

  service.getDetails(request, function (place, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
      });
      google.maps.event.addListener(marker, "click", function () {
        infowindow.setContent(
          "<div><strong>" +
            place.name +
            "</strong><br>" +
            "Place ID: " +
            place.place_id +
            "<br>" +
            place.formatted_address +
            "</div>"
        );
        infowindow.open(map, this);
      });
    }
  });
}


