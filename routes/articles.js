const express = require('express');
const router = express.Router();
const db = require('../config/db');
const redisClient = require('../config/redis');
const {checkCache, updateCache} = require('../services/cacheService');

router.get('/:id', checkCache('article'), (req, res, next) => {
    db.Article.findOne({
        where: {
            id: req.params.id
        }
    }).then((article) => {
        if (!article) {
            return res.status(404).json({NotFoundError: 'Resource not found'})
        }
        updateCache(`article:${req.params.id}`, JSON.stringify(article), (err, result) => {
            if (err) {
                throw new Error(`Failed to process cache service`)
            }
            res.json(article)
        });
    }).catch((err) => {
        res.status(400).json({err: 'Something went wrong'})
    })
});

router.get('/', checkCache('articles'), (req, res, next) => {
    db.Article.findAll().then((articles) => {
        if (!articles) {
            return res.status(404).json({NotFoundError: 'Resource not found'})
        }
        updateCache(`articles`, JSON.stringify(articles), (err, result) => {
            if (err) {
                throw new Error(`Failed to process cache service`)
            }
            res.json(articles)
        })
    }).catch((err) => {
        res.status(400).json({err: 'Something went wrong'})
    })

});

module.exports = router;
