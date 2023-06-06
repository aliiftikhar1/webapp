const mongoose = require('mongoose');
const { UserModel } = require('../../schema/user');
// const console = require('../logger');
const { COLLECTIONS } = require('../../config/constant');
const messages = require('../../config/messages');
const constant = require('../../config/constant');

class DbHelper {
    async connect() {
        if (!this.db) {
            try {
                await mongoose.connect(`${constant.MONGO_DB_URL}`, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                });
                this.db = mongoose.connection;
                console.log('MongoClient Connection successful.');
                return;
            } catch (e) {
                console.error('DbHelper Error while connect mongodb ::: ', e);
                throw Error(e);
            }
        }
    }

    async insertDocument(collection, docObj) {
        try {
            if (
                Object.keys(docObj).length === 0 &&
                docObj.constructor === Object
            ) {
                throw Error(
                    'mongoClient.insertDocumentWithIndex: document is not an object'
                );
            }
            let modelInstance;
            if (collection == COLLECTIONS.USER_COLLECTION_NAME) {
                modelInstance = new UserModel(docObj);
            } 
            else {
                throw Error(messages.error.INVALID_COLLECTION);
            }
            await this.connect();
            return await modelInstance.save();
        } catch (e) {
            console.error(
                'DbHelper mongoClient.insertDocumentWithIndex: Error caught,',
                e
            );
            throw Error(e);
        }
    }

    async countDocument(collection, query) {
        try {
            let Model;
            if (collection == COLLECTIONS.USER_COLLECTION_NAME) {
                Model = UserModel;
            }
            
            
            else {
                throw Error(messages.error.INVALID_COLLECTION);
            }
            await this.connect();

             if (query.id) query.id = mongoose.Types.ObjectId(query.id)

            return await Model.countDocuments(query);
        } catch (e) {
            console.error('DbHelper Error while updateDocument ::: ', e);
            throw e;
        }
    }

    async updateDocument(collection, _id, data) {
        try {
            let Model;
            if (collection == COLLECTIONS.USER_COLLECTION_NAME) {
                Model = UserModel;
            }
         
            else {
                throw Error(messages.error.INVALID_COLLECTION);
            }
            await this.connect();
            return await Model.findOneAndUpdate(
                { _id:new  mongoose.Types.ObjectId(_id) },
                data,
                { new: true, returnNewDocument: true, omitUndefined: true }
            );
        } catch (e) {
            console.error('DbHelper Error while updateDocument ::: ', e);
            throw e;
        }
    }

    async getUserById(_id) {
        try {
            await this.connect();
            let userData = await UserModel.findOne({
                _id: mongoose.Types.ObjectId(_id),
            });
            return userData;
        } catch (e) {
            console.error('DbHelper Error while getUserById ::: ', e);
            throw e;
        }
    }

    async getUserByEmail(email) {
        try {
            await this.connect();
            let userData = await UserModel.findOne({ email });
            return userData;
        } catch (e) {
            console.error('DbHelper Error while getUserByEmail ::: ', e);
            throw e;
        }
    }


    async close() {
        return await this.db.close();
    }
}

module.exports = {
    DbHelper,
};
