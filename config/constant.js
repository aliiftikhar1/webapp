require('dotenv').config();
const credentials = require('../credential.json');

module.exports = {
  //Collections Names
  COLLECTIONS: {
    USER_COLLECTION_NAME: "users",
    STORE_COLLECTION_NAME: "stores",
    CITY_COLLECTION_NAME: "cities",
    CATEGORIES_COLLECTION_NAME: "categories",
    TYPE_COLLECTION_NAME: "types",
    MEDICINE_COLLECTION_NAME: "medicines",
  },

  PROJECT_NAME: credentials.projectName,
  MONGO_DB_URL: credentials.database,
  JWT_PRIVATE_KEY: credentials.jwt.privateKey,
  JWT_REFRESH_KEY: credentials.jwt.refreshKey,
  JWT_REFRESH_EXPIRY: credentials.jwt.refreshExpiry,
  ADMIN_MAIL: credentials.adminMail,
};
