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