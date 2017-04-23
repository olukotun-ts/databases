var controller = require('./controllers');
var router = require('express').Router();
var newRouter = require('../orm-resources/orm-router');

//Connect controller methods to their corresponding routes
// router.get('/messages', controller.messages.get);

// router.post('/messages', controller.messages.post);

// router.get('/users', controller.users.get);

// router.post('/users', controller.users.post);


// module.exports = router;

router.get('/messages', newRouter.messages.get);

router.post('/messages', newRouter.messages.post);

router.get('/users', newRouter.users.get);

router.post('/users', newRouter.users.post);


module.exports = router;

