const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', function (req, res, next) {
    db.User.findAll().then((users) => {
        res.json(users)
    }).catch((err) => {
        res.status(400).json({err: 'Something went wrong'})
    })

});

module.exports = router;
