document.addEventListener('DOMContentLoaded', function () {
    // Get the button element by its class
    var bookButton = document.querySelector('.book');

    // Add a click event listener to the button
    bookButton.addEventListener('click', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get the values of the destination and date input fields
        var destination = document.querySelector('input[list="mylist"]').value;
        var travelDate = document.getElementById('date').value;

        // Create an object with the data to be sent
        var postData = {
            destination: destination,
            date: travelDate
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
        console.log('destination', destination);
        console.log('date', travelDate);

        alert('Booking Successful!'); // Replace this with your desired functionality
        console.log('Book button clicked');
    });
});
