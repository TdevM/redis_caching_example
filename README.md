## REDIS API response caching

Basic example of caching API responses using redis.

## Local setup
Assuming you already have Node & npm installed locally,

1 Clone repository.

 ``git clone https://github.com/TdevM/redis_caching_example.git``

2 Install Dependencies.

``cd redis_caching_example && npm install``

3 Install mysql, create database.
```
mysql> create database fany;
```

4 Create enviroment variables file.

```
touch .env
```

5 Paste following to `.env`
````
export DATABASE=fany
export USERNAME=root
export HOST=localhost
export DIALECT=mysql
export REDIS_HOST=localhost
export REDIS_PORT=6379

````

4 Setup db with sequelize migrations & seeders.

````
npm run setup
````

5 Start server.
```
npm run start
```
