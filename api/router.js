const express = require('express')
const router = express.Router();
const Controller = require('./controller')

router.post('/signup', Controller.signup)
router.post('/login', Controller.login)
router.post('/getUsers', Controller.getUsers)

module.exports = router;