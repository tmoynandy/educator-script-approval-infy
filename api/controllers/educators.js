const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');

const Educator = require('../models/educator');


exports.educator_get_all = (req, res, next) =>{
    Educator.find()
        .exec()
        .then(docs =>{
            console.log(docs);
            const response = {
                count : docs.length,
                educators : docs.map( doc =>{
                    return {
                        empid : doc.empid,
                        name : doc.name,
                        location : doc.location,
                        title : doc.title,
                        script : doc.script,
                        preprodstatus : doc.preprodstatus,
                        prodstatus : doc.prodstatus,
                        postpordstatus : doc.postprodstatus
                    }
                })
            }
            res.status(200).json(response)
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error : err
            });
        });
}

exports.educator_get_one = (req, res, next) =>{
    const id = req.params.empid;
    Educator.find({empid : id})
        .exec()
        .then(docs =>{
            console.log(docs);
            const response = {
                count : docs.length,
                educator_requests : docs.map( doc =>{
                    return{
                        empid : doc.empid,
                        name : doc.name,
                        location : doc.location,
                        title : doc.title,
                        script : doc.script,
                        preprodstatus : doc.preprodstatus,
                        prodstatus : doc.prodstatus,
                        postpordstatus : doc.postprodstatus   
                    }
                })
            }
            res.status(200).json(response);
        })

}
//updating entry
//pass array of json to update
//[{"propName":"preprodstatus","value":"done"}]
exports.educator_request_status_patch = (req, res, next) =>{
    const id = req.params.empid;
    const updateOps = {};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    Educator.updateOne({empid:id}, {$set : updateOps})
        .exec()
        .then(result=>{
            console.log(result);
            res.status(200).json({
                message : 'Status Updates'
            })
        })
        .catch( err=>{
            console.log(err);
            res.status(500).json({
                error : err
            });
        });

}

exports.educator_create_request = (req, res, next) =>{
    console.log(req);
    const educator = new Educator({
        empid : req.body.empid,
        name : req.body.name,
        location : req.body.location,
        title : req.body.title,
        script : req.body.script,
    });

    educator.save()
        .then( result =>{
            console.log(result);
            res.status(201).json({
                message : 'Request Submitted',
                createdRequest : {
                    empid : result.empid,
                    name : result.name,
                    location : result.location,
                    title : result.title,
                    script : result.script,
                    preprodstatus : result.preprodstatus,
                    prodstatus : result.prodstatus,
                    postpordstatus : result.postprodstatus
                }
            })
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error : err
            })
        })
}