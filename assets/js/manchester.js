function initAutocomplete() {
  var map = new google.maps.Map(document.getElementById("mapManchester"), {
    center: { lat: 53.4808, lng: -2.2426 },
    zoom: 13,
    mapTypeId: "terrain",
  });
  //I set variables for each of the breweries that i will be using in my tour,
  //so they can be re-called with out typing out the co-ordinates each time//
  let cloud = { lat: 53.478026, lng: -2.221592 };
  let track = { lat: 53.477921, lng: -2.221168 };
  let pamona = { lat: 53.48892, lng: -2.25118 };
  let shindigger = { lat: 53.47779, lng: -2.308078 };

      var lineSymbol = {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 8,
          strokeColor: '#393'
        };


  var line = new google.maps.Polyline({
    path: [cloud, track, pamona, shindigger],
    icons: [
      {
        icon: lineSymbol,
        offset: "100%",
      },
    ],
    map: map,
  });

  animateCircle(line);

       function animateCircle(line) {
          var count = 0;
          window.setInterval(function() {
            count = (count + .5) % 200;

            var icons = line.get('icons');
            icons[0].offset = (count / 2) + '%';
            line.set('icons', icons);
        }, 20);
      }

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