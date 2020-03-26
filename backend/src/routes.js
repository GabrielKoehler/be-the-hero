const express = require('express');
const connection = require('./database/connection');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//Ong Routes
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

//Incident Routes
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete)

//Profile Routes
routes.get('/profile', ProfileController.index);

//Session Routes
routes.post('/sessions', SessionController.create);

module.exports = routes;