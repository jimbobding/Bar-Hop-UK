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