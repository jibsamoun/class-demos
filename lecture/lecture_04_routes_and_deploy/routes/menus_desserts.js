import express from 'express';
var router = express.Router();

/* GET dessert listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a dessert resource');
});

/* GET specific dessert listings. */
router.get('/1', function(req, res, next) {
  res.send('gelato!!!!!');
});

// fake broken endpoint
router.get('/2', function(req, res, next) {

    throw(new Error("cookie monster ate this cookie"));
    
    res.send('cookies!!!!!');
});

// BETTER fake broken endpoint
router.get('/3', function(req, res, next) {
    try {

        throw(new Error("cookie monster ate this cookie"));
    
        res.send('cookies #3!!!!!');
    }
    catch (err) {
         console.log(err);
         res.status(500).send("Error loading dessert :(")
    }
});

export default router;
