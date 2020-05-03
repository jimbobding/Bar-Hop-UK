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


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="assets/css/style.css" />
    <script src="assets/js/manchester.js"></script>

    <title>Document</title>
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar w/ text</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="index.html"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="cities.html">Cities</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
        </ul>
        <span class="navbar-text">
          Navbar text with an inline element
        </span>
      </div>
    </nav>
    <h1 id="tours">Tours</h1>
    <div class="container">
      <div class="col">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          cumque odit, libero ratione, veniam in similique, reiciendis accusamus
          non minima nostrum rerum eveniet dolorem atque soluta ex porro
          eligendi aperiam.
        </p>
      </div>
    </div>
    <h2>Manchester</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
      recusandae dicta temporibus tempora libero. Rem iure laborum ratione
      pariatur dolores dicta nesciunt enim! Harum sit voluptatum officiis autem
      magnam eum? Voluptatibus earum debitis obcaecati expedita accusantium,
      fuga perferendis temporibus possimus amet illo. Officiis sequi doloribus
      ab repellat necessitatibus harum ipsa id dolorem repudiandae. Ad
      dignissimos perferendis nam, iste laboriosam consectetur. Exercitationem
      illum perspiciatis alias quia aliquid optio molestias sapiente recusandae
      laboriosam beatae veritatis mollitia, asperiores numquam ex quos ipsum
      similique consequuntur nesciunt minus magni nisi enim omnis. Sequi, hic
      placeat. Sunt maiores quibusdam nesciunt similique, recusandae commodi
      quod, laborum ipsum, error ab distinctio possimus? Deleniti pariatur
      officia eligendi quia. Tempora voluptas ab quos nemo, temporibus alias
      perspiciatis sed sint deleniti. Ab ut earum at molestias ea, rem aut
      obcaecati, sapiente vitae facere repudiandae perferendis distinctio
      architecto dolorum quo? Voluptates incidunt excepturi accusamus. Velit in
      enim iusto est cumque, provident sit.
    </p>

    <div id="map-box">
      <div id="mapManchester"></div>
    </div>

    
<script
  src="https://code.jquery.com/jquery-3.5.0.js"
  integrity="sha256-r/AaFHrszJtwpe+tHyNi/XCfMxYpbsRg2Uqn0x3s2zc="
  crossorigin="anonymous"></script>
    <script src="https://unpkg.com/@google/markerclustererplus@4.0.1/dist/markerclustererplus.min.js"></script>
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCEHs3x97gngwVn1vWAHuRHfYbZVf0scUs&libraries=places&callback=initAutocomplete"
      async
      defer
    ></script>
  </body>
</html>

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
        window.setInterval(function () {
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
        imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
</

#right-panel {
  margin: 20px;
  border-width: 2px;
  width: 20%;
  height: 400px;
  float: left;
  text-align: left;
  padding-top: 0;
}

<div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">hhwkqwkldnqklwdnkq</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true"><i class="fas fa-beer"></i></span>
            </button>
          </div>
          <div class="modal-body">
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
                     
                      <div class="form-row text-center">
                        <div class="col">
                          <button type="submit" class="btn btn-secondary">
                            Sign Up!
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
           
          </div>
        </div>
      </div>
    </div>

     <div class="container newsletter-container">
      <a href="#signUpModal" data-toggle="modal"
        ><h3 class="newsletter">
          <i class="fas fa-newspaper"></i>Newsletter<i
            class="fas fa-newspaper"
          ></i></h3
      ></a>
    </div>

    <div
      class="modal fade"
      id="signUpModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="signUpModalLabel"
      aria-hidden="true"
    >
      <!-- /.Modal-Header ----------------------------------->

      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">hhwkqwkldnqklwdnkq</h5>

            <!-- /.Modal-Corner-Close-Button ----------------------------------->

          
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true"><i class="fas fa-beer"></i></span>
            </button>
          </div>

          <!-- /.Modal-Body ----------------------------------->

          <div class="modal-body">
            <section class="container-fluid">
              <div class="row-bg-color-contact">
                <div class="col col-md-12">
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

                      <div class="form-row text-center">
                        <div class="col">
                          <button type="submit" class="btn btn-secondary">
                            Sign Up!
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>



    	<div class="header">
		<div class="logo">
			<a href="index.html">Blinker</a>
		</div>
		<input type="checkbox" id="chk">
		<label for="chk" class="show-menu-btn">
            <i class=" burger fas fa-hamburger"></i>
        </label>
		<ul class="menu">
        <li><a href="drinks.html">Drinks</a></li>
			
		<li><a href="music.html">Music</a></li>	
		<li><a href="goodtimes.html">Good Times</a></li>	


			<label for="chk" class="hide-menu-btn">
                <i class="fas fa-times"></i>
            </label>
		</ul>

	</div>


        <nav class="navbar navbar-expand-md nav-hop">
      <!------------------------Logo----------------------------->

      <a  href="index.html">
        <div class="nav-bar-logo">
          <div id="BarHop-logo">
            <img
              src="assets/images/Bar Hop UK (1).png"
              class="logo"
              alt="Bar-Hop-UK"
            />
          </div>
      </div></a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#cities">Cities</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="test.html">Test</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#newsletter">Newsletter</a>
          </li>
        </ul>
        <span class="navbar-text">
          Navbar text with an inline element
        </span>
      </div>
    </nav>