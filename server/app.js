const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
const db = require('../config/db');
const routes = require('../routes/routes');

db.authenticate()
    .then(() => {
        console.log('Connected to db...');
        db.sync();
    })
    .catch(err => console.log('ERROR:', err));

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('dist'));

const PORT = process.env.PORT || 3000;

routes(app, express);

app.listen(PORT, console.log(`Server started on port ${PORT}`));
