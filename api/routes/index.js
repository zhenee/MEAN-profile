const ctrlAuth = require('../controllers/authentication');
const ctrlProfile = require('../controllers/profile');
const jwt = require('express-jwt');

const express = require('express');
const router = express.Router();

const auth = jwt({
    secret: 'MY_SECRET',
    algorithms: ['HS256'],
    userProperty: 'payload'
});

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;