const express = require('express');
const router = express.Router();
const db = require('../config/db');
const redisClient = require('../config/redis');
const {checkCache, updateCache} = require('../services/cacheService');

router.get('/:id', checkCache('post'), (req, res, next) => {
    db.Post.findOne({
        where: {
            id: req.params.id
        }
    }).then((post) => {
        if (!post) {
            return res.status(404).json({NotFoundError: 'Resource not found'})
        }
        updateCache(`post:${req.params.id}`, JSON.stringify(post), (err, result) => {
            if (err) {
                throw new Error(`Failed to process cache service`)
            }
            res.json(post)
        });
    }).catch((err) => {
        res.status(400).json({err: 'Something went wrong'})
    })
});

router.get('/', checkCache('posts'), (req, res, next) => {
    db.Post.findAll().then((posts) => {
        if (!posts) {
            return res.status(404).json({NotFoundError: 'Resource not found'})
        }
        updateCache(`posts`, JSON.stringify(posts), (err, result) => {
            if (err) {
                throw new Error(`Failed to process cache service`)
            }
            res.json(posts)
        })
    }).catch((err) => {
        res.status(400).json({err: 'Something went wrong'})
    })

});

module.exports = router;
