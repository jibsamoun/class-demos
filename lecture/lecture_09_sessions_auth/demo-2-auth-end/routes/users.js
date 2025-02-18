import express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.session);
if(req.session.userid){
  res.send('here is your user information: '+ req.session.userid)
} else {
  res.send('error: you must be logged in')
}

 // res.send('respond with a resource');
});

/**
 * When publishing on the internet ( i.e. A5 ) use a database to
 * check usernames and passwords
 * 
 * When passwords are saved in the database they should be encrypted
 */
router.post('/login', function(req, res, next){
  if (req.body.username == 'jbs' && req.body.password == 'pw') {
    req.session.userid = "Jibril Samoun"
    console.log('logged in!')
    res.send('you logged in!')
  } else {
    console.log('NOT logged in')
    res.send('wrong login, try again')
  }
})

router.post('/logout', function(req, res, next){
  console.log('logging out');
  req.session.destroy();
  res.send('you are logged out');
})


export default router;
