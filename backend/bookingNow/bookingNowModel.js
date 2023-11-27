const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    destination: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
