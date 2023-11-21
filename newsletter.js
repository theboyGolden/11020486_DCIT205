document.addEventListener("DOMContentLoaded", function() {
    // Get the form element by its id
    var newsletterForm = document.getElementById("newsletterForm");

    // Add a submit event listener to the form
    newsletterForm.addEventListener("submit", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the email input value
        var emailInput = document.getElementById("email");
        var emailValue = emailInput.value;

        // Validate the email (you might want to use a more robust validation)
        if (validateEmail(emailValue)) {
            // Process the subscription (you might send the email to a server, for example)
            alert("Thank you for subscribing!");
    
        } else {
            alert("Please enter a valid email address.");
        }
    });

    // Function to validate email format
    function validateEmail(email) {
        // The function is a simple email validator.
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});