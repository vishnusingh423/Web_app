const router = require('express').Router();

const customerController = require('../controllers/customerController');

router.get('/', customerController.list);
router.post('/add', customerController.save);
router.get('/add', function(req,res,next){
    res.render('add');
  });

  router.get('/contact', function(req,res,next){
    res.render('contact');
  });
  router.post('/contact', customerController.save);


router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);
// router.post('/update/:id', customerController.addContact);
router.get('/delete/:id', customerController.delete);


module.exports = router;

