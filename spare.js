function initAutocomplete() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 53.4808, lng: -2.2426 },
    zoom: 13,
    mapTypeId: 'roadmap',
  });
}


function sendMail(contactForm) {
    emailjs.send("gmail", "bar_hop_uk", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "news_letter_request": contactForm.newsletter.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  
    }

    function sendMail(contactForm) {
    emailjs.send("gmail", "rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  
}


 <section class="container-fluid">
      <div class="row-bg-color-contact">
        <div class="col">
          <h3 class="contact-heading uppercase text-center">
            Sign up for our monthly newsletter!
          </h3>
          <h5 class="uppercase text-center">Lets drink together!</h5>
          <div class="center-form">
            <form onsubmit="return sendMail(this);">
              <input
                type="text"
                name="name"
                id="fullname"
                class="form-control"
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                id="emailaddress"
                class="form-control"
                placeholder="Email"
                required
              />
              <textarea
                type="newsletter"
                name="newsletter"
                id="newsletter"
                class="form-control"
                placeholder="BEER"
                required
              ></textarea>
              <div class="form-row text-center">
                <div class="col">
                  <button type="submit" class="btn btn-secondary">
                    Send Project Request
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>


      <div class="card" style="width: 18rem;">
                <img
                  src="assets/images/manchester.jpeg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <p class="card-text">
                    <a href="manchester.html"> Manchester</a>
                  </p>
                </div>
              </div>



var marker = new google.maps.Marker({
    position: document.getElementById("start"),  
    map: mapWaypoint,
    title: 'Hello World!'
  });


   let cloud = { lat: 53.478026, lng: -2.221592 };
    let track = { lat: 53.477921, lng: -2.221168 };
    let pamona = { lat: 53.48892, lng: -2.25118 };
    let shindigger = { lat: 53.47779, lng: -2.308078 };


let pos;
let map;
let bounds;
let infoWindow;
let currentInfoWindow;
let service;
let infoPane;


function initAutocomplete() {
  var directionsService = new google.maps.DirectionsService();
  var directionsRenderer = new google.maps.DirectionsRenderer();
  var map = new google.maps.Map(document.getElementById("mapWaypoint"), {
    zoom: 11,
    center: { lat: 53.4808, lng: -2.2426},
  });
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
          let newLocal = summaryPanel.innerHTML += route.legs[i].start_address + " to ";
          summaryPanel.innerHTML += route.legs[i].end_address + "<br>";
          summaryPanel.innerHTML += route.legs[i].distance.text + "<br><br>";
        }
      } else {
        window.alert("Directions request failed due to " + status);
      }
    },




  );
}