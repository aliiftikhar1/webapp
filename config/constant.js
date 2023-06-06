require('dotenv').config();
const credentials = require('../credential.json');

module.exports = {
    //Collections Names
    COLLECTIONS: {
        USER_COLLECTION_NAME: 'users',
    },

    PROJECT_NAME:credentials.projectName,
    MONGO_DB_URL: credentials.database,
    JWT_PRIVATE_KEY: credentials.jwt.privateKey,
    JWT_REFRESH_KEY: credentials.jwt.refreshKey,
    JWT_REFRESH_EXPIRY: credentials.jwt.refreshExpiry,
    ADMIN_MAIL: credentials.adminMail,
};
