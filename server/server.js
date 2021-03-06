const port = process.env.PORT || 3001;

const express = require('express');
const bodyParser = require('body-parser');
const cors  = require('cors');

// create express app
const app = express();
app.use(cors());

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

var router = require('./app/routes/index');



// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Shopping List application. Take Lists quickly. Organize and keep track of all your Shopping Lists."});
});

app.use('/api', router);
// listen for requests
app.listen(port, () => {
    console.log("Server is listening on port 3001");
});