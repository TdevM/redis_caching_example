const redisClient = require('../config/redis');

function checkRedis(key, res, next) {
    redisClient.get(key, (err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        if (data) {
            res.send(data);
        } else {
            next();
        }
    })
}

const checkCache = (resource) => {
    return function (req, res, next) {
        if (req.params.id) {
            checkRedis(`${resource}:${req.params.id}`, res, next)
        } else {
            checkRedis(`${resource}`, res, next)
        }
    }
};

const updateCache = (key, resource, callback) => {
    redisClient.set(key, resource, (err, result) => {
        if (err) {
            callback(err, null)
        } else {
            callback(null, result)
        }
    })

};

module.exports = {
    checkCache, updateCache
};
