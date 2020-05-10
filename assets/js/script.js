

let pos;
let map;
let bounds;
let infoWindow;
let currentInfoWindow;
let service;
let infoPane;

// Renders new map from the ID of map

function initAutocomplete() {
  var directionsService = new google.maps.DirectionsService();
  var directionsRenderer = new google.maps.DirectionsRenderer();
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: { lat: 53.4808, lng: -2.2426 },
    tilt: 45,

//I set tme map to satelite, I felt it gave a urban street view that not only looked appropriate seemed 
//easier to navigate in a city// 
    mapTypeId: 'satellite'
  });



  map.setTilt(45);

  directionsRenderer.setMap(map);
  document.getElementById("submit").addEventListener("click", function () {
    calculateAndDisplayRoute(directionsService, directionsRenderer);
  });
 }

 function calculateAndDisplayRoute(directionsService, directionsRenderer) {
  var waypts = [];
  var checkboxArray = document.getElementById("waypoints");
  for (var i = 0; i < checkboxArray.length; i++) {
    if (checkboxArray.options[i].selected) {
      waypts.push({
        location: checkboxArray[i].value,
        stopover: true,
      });
    }
  }

  directionsService.route(
    {
      origin: document.getElementById("start").value,
      destination: document.getElementById("end").value,
      waypoints: waypts,
      optimizeWaypoints: true,
      travelMode: "WALKING",
    },
    function (response, status) {
      if (status === "OK") {
        directionsRenderer.setDirections(response);
        var route = response.routes[0];
        var summaryPanel = document.getElementById("directions-panel");
        summaryPanel.innerHTML = "";
        // For each route, display summary information.
        for (var i = 0; i < route.legs.length; i++) {
          var routeSegment = i + 1;
          summaryPanel.innerHTML +=
            "<b>Route Segment: " + routeSegment + "</b><br>";
          let newLocal = (summaryPanel.innerHTML +=
            route.legs[i].start_address + " to ");
          summaryPanel.innerHTML += route.legs[i].end_address + "<br>";
          summaryPanel.innerHTML += route.legs[i].distance.text + "<br><br>";
        }
      } else {
        window.alert("Directions request failed due to " + status);
      }
    }
  );

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
}

