function submitForm() {
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Simple form validation
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert("Please fill in all fields.");
        return;
    }

    // Show browser alert
    alert(`Thank you, ${name}! Your message has been received.\nWe will get back to you soon.`);

    // Clear form fields
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("message").value = '';
}
