// Get the button element by its id
var sendButton = document.getElementById('sendButton');

// Add a click event listener to the button
sendButton.addEventListener('click', function() {
    // Get the values of the name and email input fields
    var userName = document.getElementById('name').value;
    var userEmail = document.getElementById('email').value;

    // Create an object with the data to be sent
    var postData = {
        name: userName,
        email: userEmail
        // Add more fields as needed
    };

    fetch('http://localhost:3000/api/items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData), // Send the actual data here
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

    // Print the values in the console
    console.log('name', userName);
    console.log('email', userEmail);

    alert('DATA SENT!'); // Replace this with your desired functionality
    console.log('Button clicked');
});



