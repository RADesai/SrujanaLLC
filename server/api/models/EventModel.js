const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: String,
    eventDate: String,
    imageURL: String,
    date: Date
});

const EventModel = mongoose.model('EventModel', eventSchema);
module.exports = EventModel;