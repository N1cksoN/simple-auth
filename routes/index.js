const express = require('express');
const { route } = require('./users');
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth.js")

//login page
router.get('/', (req, res) => {
    res.render('welcome');
});

//reg page
router.get('/register', (req, res) => {
    res.render('register');
});

//dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.render('dashboard',{
        user: req.user
        });
});


module.exports = router;