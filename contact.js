// script.js

document.getElementById('contact-airline-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const airline = document.getElementById('airline').value;
    const message = document.getElementById('message').value;

    // Simulate sending message
    console.log("Message Sent to:", airline);
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Display confirmation message
    const confirmation = document.getElementById('confirmation');
    confirmation.style.display = 'block';

    // Clear the form
    e.target.reset();
});
