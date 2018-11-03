import eventModel from '../models/EventModel.js';
// const eventModel = require('../models/EventModel.js');

module.exports = {
    getEvents: (req, res) => {
        eventModel.find((err, events) => {
            err
                ? res.status(500).send(err)
                : res.status(200).json(events);
        });
    },
    addEvent: (req, res) => {
        let event = new eventModel();
        event = req.body;
        event.save(err => {
            err
                ? res.status(500).send(err)
                : res.json({message: `"${req.body}" Created!`})
        });
    },
    updateEvent: (req, res) => {
        eventModel.findById(req.params.id, (err, event) => {
            if (err) {
                res.status(500).send(err)
            } else {
                let previousName = event.name;
                event.name = req.body.eventName || 'Anonymous';
                event.save((error) => {
                    error
                        ? res.status(500).send(error)
                        : res.json({message: `"${previousName}" updated to "${req.body.eventName}"!`})
                });
            }
        })
    },
    deleteEvent: (req, res) => {
        eventModel.findByIdAndRemove(req.params.id, err => {
            err
                ? res.status(500).send(err)
                : res.json({message: 'Successfully Deleted!'})
        })
    }
}