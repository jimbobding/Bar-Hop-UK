


function initAutocomplete() {
  var map = new google.maps.Map(document.getElementById("mapTest"), {
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



     
 
        // calculate distance
        function calculateDistance() {
            var origin = cloud.val();
            var destination = shindigger.val();
            var service = new google.maps.DistanceMatrixService();
            service.getDistanceMatrix(
                {
                    origins: [origin],
                    destinations: [destination],
                    travelMode: google.maps.TravelMode.DRIVING,
                    unitSystem: google.maps.UnitSystem.IMPERIAL, // miles and feet.
                    // unitSystem: google.maps.UnitSystem.metric, // kilometers and meters.
                    avoidHighways: false,
                    avoidTolls: false
                }, callback);

            function newFunction() {
                return $('#destination');
            }
        }
        // get distance results
        function callback(response, status) {
            if (status != google.maps.DistanceMatrixStatus.OK) {
                $('#result').html(err);
            } else {
                var origin = response.originAddresses[0];
                var destination = response.destinationAddresses[0];
                if (response.rows[0].elements[0].status === "ZERO_RESULTS") {
                    $('#result').html("Better get on a plane. There are no roads between "  + origin + " and " + destination);
                } else {
                    var distance = response.rows[0].elements[0].distance;
                    var duration = response.rows[0].elements[0].duration;
                    console.log(response.rows[0].elements[0].distance);
                    var distance_in_kilo = distance.value / 1000; // the kilom
                    var distance_in_mile = distance.value / 1609.34; // the mile
                    var duration_text = duration.text;
                    var duration_value = duration.value;
                    $('#in_mile').text(distance_in_mile.toFixed(2));
                    $('#in_kilo').text(distance_in_kilo.toFixed(2));
                    $('#duration_text').text(duration_text);
                    $('#duration_value').text(duration_value);
                    $('#from').text(origin);
                    $('#to').text(destination);
                }
            }
        }
        // print results on submit the form
        $('#distance_form').submit(function(e){
            e.preventDefault();
            calculateDistance();
        });


      
    }

function newFunction_1(newFunction) {
    return newFunction();
}
