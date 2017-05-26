'use strict';
const express = require('express');
const router = express.Router();
const appCtrl = require('../controllers/appController');

router.get('/home', appCtrl.return_view)
router.get('/results_calc', appCtrl.get_results)
router.get('/text_content', appCtrl.give_text)

module.exports = router;