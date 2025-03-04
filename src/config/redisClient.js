import redis from "redis";

const redisClient = redis.createClient({
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
});

redisClient
  .connect()
  .then(() => console.log("Redis connected"))
  .catch(console.error);

module.exports = redisClient;
