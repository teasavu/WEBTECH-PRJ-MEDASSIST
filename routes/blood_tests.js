var models  = require('../models');
var express = require('express');
var router  = express.Router();

var Blood_tests = models.Blood_tests;

// returns all articles
/*router.get('/blood-tests', function(req,res){
    Blood_test.findAll().then(function(blood_tests){
        res.status(200).send(blood_tests);
    });
});*/
router.post('/tests', function(req,res) {
    Blood_tests.create(req.body).then(function(){
      res.status(201).send;
    }).catch(function(err){
      console.warn(err);
    })
});
router.get('/tests', function(req,res){
   Blood_tests.findAll().then(function(blood_tests){
        res.status(200).send(blood_tests);
    });
});

router.delete('/tests/:id', function(req,res){
       Blood_tests
        .find({where : {id : req.params.id}})
        .then(function(blood_tests){
            return blood_tests.destroy();
        })
        .then(function(){
            res.status(201).send('deleted');
        })
        .catch(function(error){
            console.warn(error);
            res.status(400).send('not found');
        });
});

// returns a blood test by id
router.get('/tests/:id', function(request,response){
    Blood_tests.findById(request.params.id).then(function(blood_tests){
        if(blood_tests) {
            response.status(200).send(blood_tests);
        } else {
            response.status(404).send();
        }
    });
});
    

// update a specific article by id
router.put('/tests/:id', function(request,response){
    Blood_tests
        .findById(request.params.id)
        .then(function(blood_tests){
            if(blood_tests) {
                blood_tests
                    .updateAttributes(request.body)
                    .then(function(){
                        response.status(202).send('updated');
                    })
                    .catch(function(error){
                        console.warn(error);
                        response.status(400).send('server error');
                    });
            } else {
                response.status(404).send();
            }
        });
});

module.exports = router;
