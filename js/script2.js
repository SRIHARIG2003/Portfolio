document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contactForm").addEventListener("submit", function(event) {
      event.preventDefault();
    
      var fname = document.getElementById("fname").value;
      var email = document.getElementById("email").value;
      var mbnumber = document.getElementById("mbnumber").value;
      var emailsub = document.getElementById("emailsub").value;
      var message = document.getElementById("message").value;
    
      // Formspree endpoint for your form
      var formspreeEndpoint = "https://formspree.io/f/xleqgobd";
    
      // Submit the form data to Formspree
      axios.post(formspreeEndpoint, { fname, email, mbnumber, emailsub, message })
        .then(function(response) {
          // Handle the success response, you can display a success message or redirect the user
          console.log(response.data);
        })
        .catch(function(error) {
          // Handle errors, you can display an error message
          console.error(error);
        });
    });
});
    