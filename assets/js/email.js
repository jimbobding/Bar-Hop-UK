
//Calls the function that uses the emailjs in my newsletter section / using my modal.

function sendMail(contactForm) {
    emailjs.send("gmail", "bar_hop_uk", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
       
    })


    .then(
        function(response) {
            console.log("SUCCESS", response); // Reports in teh console if succesful and sends the request
        },
        function(error) {
            console.log("FAILED", error); //Reports in the log if it fails (encounters a problem and cannot send)
        }

    );
    return false;  // Stops a new page from loading

    
    }

// Closes modal after name and email have been submitted

    $(document).ready(function () {
    $("#onSubmit").on('submit', function (e) {
        e.preventDefault();
        $('#myModal').modal('hide'); //Hides modal
    });
});

      $('.modal').on('hidden.bs.modal', function(e)
    { 
        $(this).removeData();
    });

//To clear input fields on madal ave information has been sent

    $('#myModal').on('hidden.bs.modal', function (e) {
  var modal = $(this);//The modal which is opened
  modal.find("input").val("");//Clear all the input fileds inside that modal.
});