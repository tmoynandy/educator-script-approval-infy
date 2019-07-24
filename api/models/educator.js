const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const educatorSchema = {
    empid : {type: Number, required : true},
    name : {type : String, required : true},
    location : {type : String, required : true},
    title : {type : String, required : true},
    script : {type : String, required : true},
    preprodstatus : {type : String, default : 'Working'},
    prodstatus : {type : String, default : 'Working'},
    postprodstatus : {type : String, default : 'Working'}
}

module.exports = mongoose.model('Educator', educatorSchema);