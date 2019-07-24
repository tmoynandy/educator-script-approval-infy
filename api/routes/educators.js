const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');

const EducatorsController = require('../controllers/educators');
const Educator = require('../models/educator');

const storage = multer.diskStorage({
    destination : function (req, file, cb){
        cb(null, './uploads/');
    },
    filename : function (req, file, cb){
        cb(null, new Date().toISOString()+file.originalname);
    }
});
const fileFilter = (req, file, cb) =>{
    if( file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    }
    else{
        cb(null, false);
    }
};

const upload = multer({
    storage : storage, 
    limits : {
    fileSize : 1024 * 1024 * 5
    },
    fileFilter : fileFilter
});

router.post('/', upload.single('script'), EducatorsController.educator_create_request);
router.get('/',EducatorsController.educator_get_all);
router.get('/:empid', EducatorsController.educator_get_one);
router.patch('/:empid', EducatorsController.educator_request_status_patch);

module.exports = router;
