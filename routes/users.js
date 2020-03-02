const express = require('express');
const router = express.Router();
const db = require('../config/db');
const redisClient = require('../config/redis');
const {checkCache, updateCache} = require('../services/cacheService');

router.get('/:id', checkCache('user'), (req, res, next) => {
    db.User.findOne({
        where: {
            id: req.params.id
        }
    }).then((user) => {
        if (!user) {
            return res.status(404).json({NotFoundError: 'Resource not found'})
        }
        updateCache(`user:${req.params.id}`, JSON.stringify(user), (err, result) => {
            if (err) {
                throw new Error(`Failed to process cache service`)
            }
            res.json(user)
        });
    }).catch((err) => {
        res.status(400).json({err: 'Something went wrong'})
    })
});

router.get('/', checkCache('users'), (req, res, next) => {
    db.User.findAll().then((users) => {
        if (!users) {
            return res.status(404).json({NotFoundError: 'Resource not found'})
        }
        updateCache(`users`, JSON.stringify(users), (err, result) => {
            if (err) {
                throw new Error(`Failed to process cache service`)
            }
            res.json(users)
        })
    }).catch((err) => {
        res.status(400).json({err: 'Something went wrong'})
    })

});

module.exports = router;
