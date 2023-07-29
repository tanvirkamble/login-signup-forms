const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');

router.get('/', controllers.home);

router.get('/login', controllers.loginGET);

router.get('/register', controllers.registerGET);

router.post('/register', controllers.registerPOST);

router.post('/login', controllers.loginPOST);

module.exports = router;
