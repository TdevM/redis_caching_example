const Redis = require("redis");

module.exports = Redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
});

