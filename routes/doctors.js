var models  = require('../models');
var express = require('express');
var router  = express.Router();

var Doctors = models.Doctors;

router.get('/doctors', function(req,res){
    /*global Author*/
   /*Doctors.findAll().then(function(doctors){
        res.status(200).send(doctors);
    });
});
*/
Doctors.findAll({include: [{model: models.Blood_tests}]
        }).then(function(doctors) {
             res.status(200).send(doctors);
    });
});

router.post('/doctors', function(req,res) {
    Doctors.create(req.body).then(function(){
      res.status(201).send;
    }).catch(function(err){
      console.warn(err);
    })
});
router.delete('/doctors/:id',function(request,response) {
    Doctors
    .findById(request.params.id)
    .then(function(doctors) {
        if(doctors){
            doctors.destroy().then(function(){
                response.status(200).send('deleted');
            })
            .catch(function(error){
                console.warn(error);
                response.status(500).send('server error');
            });
        }
        else {
            response.status(404).send('nu exista');
        }
    });
    
})
module.exports = router;