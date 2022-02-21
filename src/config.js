require("dotenv/config");

module.exports = {
    database: {
        username : process.env.DATABASE_USERNAME,
        password : process.env.DATABASE_PASSWORD,
        database : process.env.DATABASE_DB,
        host : process.env.DATABASE_HOST
    },
    env : {
        xd : "xd"
    }
}