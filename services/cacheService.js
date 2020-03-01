const redisClient = require('../config/redis');

function checkRedis(key, res, next) {
    redisClient.get(key, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        if (data) {
            res.send(data);
        } else {
            next();
        }
    })
}

module.exports = (resource) => {
    return function (req, res, next) {
        if (req.params.id) {
            checkRedis(`${resource}:${req.params.id}`, res, next)
        } else {
            checkRedis(`${resource}`, res, next)
        }
    }
};
