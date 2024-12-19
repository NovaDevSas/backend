const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');

// Define routes for location-related endpoints
router.get('/locations', locationController.getLocations);
router.post('/locations', locationController.addLocation);
router.put('/locations/:id', locationController.updateLocation);
router.delete('/locations/:id', locationController.deleteLocation);

module.exports = router;