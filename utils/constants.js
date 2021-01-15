const environment = require("./environment")


module.exports = {
    database: {
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        timezone: "UTC", // or "00:00"
        dialectOptions: {
            useUTC: true,
            ...(!environment.database.useSsl ? {} : !environment.database.sslCert ? { ssl: true } : { ssl: { ca: environment.database.sslCert } })
        },
    },
    user:{
        roles: ["Admin", "User"]
    },
    roles:{
        admin: 'Admin',
        user: 'User',
    }
}