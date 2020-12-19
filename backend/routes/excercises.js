const router = require('express').Router();
let Excercise = require('../models/excercise.model');

//get request to get all excersices
router.route('/').get((req, res) => {
    Excercise.find()
    .then(excercises => res.json(excercises))
    .catch(err => res.status(400).json('Error '+ err));

});


// to add excersice
router.route('/add').post((req, res) =>{
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExcercise = new Excercise({
        username,
        description,
        duration,
        date,
    });

    newExcercise.save()
    .then(() => res.json('Excercise added!'))
    .catch(err => res.status(400).json('Error '+ err));


});

//to show excercise by ID

router.route('/:id').get((req, res)=>{
    Excercise.findById(req.params.id)
    .then(excercise => res.json(excercise))
    .catch(err => res.status(400).json('Error '+ err));

});

// to update excercise
router.route('/update/:id').post((req, res)=> {
    Excercise.findById(req.params.id)
    .then(excercise =>{
        excercise.username = req.body.username;
        excercise.description= req.body.description;
        excercise.duration = Number(req.body.duration);
        excercise.date = Date.parse(req.body.date);

        excercise.save()
        .then(()=> res.json('Excercise updated'))
        .catch(err => res.status(400).json('Error '+ err));
    })
    .catch(err => res.status(400).json('Error '+ err));
});

// to delete excercise
router.route('/delete/:id').delete((req, res)=>{
    Excercise.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Excercise deleted successfully!'))
    .catch(err => res.status(400).json('Error' +err));
});

module.exports = router;