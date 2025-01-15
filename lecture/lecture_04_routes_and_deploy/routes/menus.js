import express from 'express';
import dessertsRouter from './menus_desserts.js';
var router = express.Router();

/* GET menus listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a menu resource');
});

/* GET a specific menu listing. */
// router.get('/1', function(req, res, next) {
//   res.send('respond with info about menu item #1');
// });

router.use('/desserts', dessertsRouter)

export default router;
