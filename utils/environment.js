require("dotenv").config();

module.exports = {
    port: process.env.PORT,
    database: {
        uri: process.env.DB_URI,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        dialect: process.env.DB_DIALECT,
        useSsl: process.env.DB_USE_SSL,
        sslCert: process.env.DB_SSL_CERT,
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        expiredIn: process.env.JWT_EXPIRED_IN
    }
}