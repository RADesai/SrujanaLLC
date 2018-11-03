const path = require('path');
const controller = require('./controllers/controller.js');

const mongoose = require('mongoose');
const db = 'mongodb://localhost/sampledb';

mongoose.connect(db, {
    useMongoClient: true
}, (error) => {
    if (error) {
        console.log(`Failed to connect to ${db}`);
    } else {
        console.log(`Connected to ${db}`);
    }
});

module.exports = function (app, express) {
    const router = express.Router();

    router.route('/events')
        .get(controller.getEvents)
        .post(controller.addModel);

    router.route('/events/:id')
        .put(controller.updateEvent)
        .delete(controller.deleteEvent);

    app.use('/api', router);

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '../../public/index.html'));
    });
}