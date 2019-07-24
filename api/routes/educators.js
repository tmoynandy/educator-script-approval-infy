const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');

const EducatorsController = require('../controllers/educators');
const Educator = require('../models/educator');

router.post('/', EducatorsController.educator_create_request);
router.get('/',EducatorsController.educator_get_all);
router.get('/:empid', EducatorsController.educator_get_one);
router.patch('/:empid', EducatorsController.educator_request_status_patch);

module.exports = router;
