module.exports = {
    "development": {
        "username": process.env.USERNAME,
        "host": process.env.HOST,
        "database": process.env.DATABASE,
        "dialect": process.env.DIALECT,
        "define": {
            "timestamps": true,
            "underscored": true,
        }
    },
    "test": {
        "username": process.env.USERNAME,
        "host": process.env.HOST,
        "dialect": process.env.DIALECT,
        "define": {
            "timestamps": true,
            "underscored": true,
        }
    },
    "production": {
        "username": process.env.USERNAME,
        "host": process.env.HOST,
        "dialect": process.env.DIALECT,
        "define": {
            "timestamps": true,
            "underscored": true,
        }
    },
    "redis": {
        "host": process.env.REDIS_HOST
    }
};

