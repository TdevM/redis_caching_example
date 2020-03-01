const express = require('express');
const router = express.Router();
const db = require('../config/db');
const redisClient = require('../config/redis');
const cacheService = require('../services/cacheService');

router.get('/:id', cacheService('user'), (req, res, next) => {
    db.User.findOne({
        where: {
            id: req.params.id
        }
    }).then((user) => {
        redisClient.set(`user:${req.params.id}`, JSON.stringify(user))
        res.json(user)
    }).catch((err) => {
        res.status(400).json({err: 'Something went wrong'})
    })
});

router.get('/', cacheService('users'), function (req, res, next) {
    db.User.findAll().then((users) => {
        redisClient.set(`users`, JSON.stringify(users))
        res.json(users)
    }).catch((err) => {
        res.status(400).json({err: 'Something went wrong'})
    })

});

module.exports = router;
