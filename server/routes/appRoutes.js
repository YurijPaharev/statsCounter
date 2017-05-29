'use strict';
const express = require('express');
const router = express.Router();
const appCtrl = require('../controllers/appController');
const plantCtrl = require('../controllers/plantController');

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/home', appCtrl.return_view)
router.get('/results_calc', appCtrl.get_results)
router.get('/text_content', appCtrl.give_text)

router.post('/plant', plantCtrl.put_new_var);
router.get('/plant', plantCtrl.get_plants);
router.get('/plant/:id', plantCtrl.get_plant)
      .delete('/plant/:id', plantCtrl.delete_plant)
      .put('/plant/:id', plantCtrl.update_plant);

module.exports = router;