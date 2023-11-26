function subscribeNewsletter(event) {
    event.preventDefault();

    // Get the email input value
    var emailInput = document.getElementById("emailInput");
    var email = emailInput.value;

    // Simple email validation
    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Display a thank you message
    alert("Thanks for Subscribing!");
}

function isValidEmail(email) {
    // Basic email validation using a regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}