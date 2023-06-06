const { Validator } = require('node-input-validator');
const message = require('../../config/messages');

module.exports = {
    validateRegisterObj: async function (dataObj) {
        let { firstName,lastName,email,password,role,verificationCode} = dataObj;
        const v = new Validator(dataObj, {
            firstName: 'string|required',
            lastName: 'string|required',
            email: 'string|required',
            password: 'string|required',
            role: 'string|required',
        });
        let matched = await v.check();
        if (!matched) {
            throw v.errors;
        }
        return {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            role: role,
            verificationCode:null

        };
    },
    validateForgetPasswordObj: async function (dataObj) {
        let { email,role,} = dataObj;
        const v = new Validator(dataObj, {

            email: 'string|required',
            role: 'string|required',
        });
        let matched = await v.check();
        if (!matched) {
            throw v.errors;
        }
        return {
            email: email,
            role: role,

        };
    },

    validateEmailVerificationObj: async function (dataObj) {
        let { userID,verificationCode} = dataObj;
        const v = new Validator(dataObj, {
            userID: 'string|required',
            verificationCode: 'string|required',

        });
        let matched = await v.check();
        if (!matched) {
            throw v.errors;
        }
        return {
            userID: userID,
            verificationCode:verificationCode,
        

        };
    },

    validateLoginObj: async function (dataObj) {
        let { email, password,role } = dataObj;
        const v = new Validator(dataObj, {
            email: 'string|required',
            password:'string|required',
            role:'string|required',
        });
        let matched = await v.check();
        if (!matched) {
            throw v.errors;
        }
        return {
            email: email,
            password:password,
            role:role
        };
    },
    validateLogoutObj: async function (dataObj) {
        let { userID } = dataObj;
        const v = new Validator(dataObj, {
            userID: 'string|required',
        });
        let matched = await v.check();
        if (!matched) {
            throw v.errors;
        }
        return {
            userID: userID,
        };
    },

    
    validateGoogleObj: async function (dataObj) {
        let { idToken } = dataObj;
        const v = new Validator(dataObj, {
            idToken: 'string|required',
        });
        let matched = await v.check();
        if (!matched) {
            throw v.errors;
        }
        return {
            idToken: idToken,
        };
    },

    validateAppleObj: async function (dataObj) {
        let { idToken, firstName, lastName } = dataObj;
        const v = new Validator(dataObj, {
            idToken: 'string|required',
            firstName: 'string',
            lastName: 'string',
        });
        let matched = await v.check();
        if (!matched) {
            throw v.errors;
        }
        return {
            idToken: idToken,
            firstName: firstName,
            lastName: lastName,
        };
    },

    validateRefreshToken: async function (dataObj) {
        let { refreshToken } = dataObj;
        const v = new Validator(dataObj, {
            refreshToken: 'string|required',
        });
        let matched = await v.check();
        if (!matched) {
            throw v.errors;
        }
        return {
            refreshToken: refreshToken,
        };
    },

   
 

    validateObjectIdObj: async function (dataObj) {
        const v = new Validator(dataObj, {
            name: 'required',
        });
        let matched = await v.check();
        if (!matched) {
            throw v.errors;
        }
        return true;
    },

    validateUpdateUserObj: async function (dataObj) {
        console.log(body);
        let { body, files } = dataObj;

        console.log(files, "profileIMG");
        const v = new Validator(body, {
            firstName: 'string',
            lastName: 'string',
            type: 'number'
        });
        let matched = await v.check();
        if (!matched) {
            throw v.errors;
        }

        if (files.profileImg) {
            const { mimeType } = files.profileImg;
            if (!['png', 'jpg', 'jpeg'].includes(mimeType)) {
                throw 'invalid mime type';
            }
        }
        return {
            firstName: body.firstName,
            lastName: body.lastName,
            type: body.type,
            profileImg: {
                filePath: profileImg.filePath.Location,
                mimeType: profileImg.mimeType,
                name: profileImg.name,
            },
        };
    },

    validateResetPassObj: async function (dataObj) {
        let { token, password, confirmPassword } = dataObj;
        if (!token) {
            throw message.error.TOKEN_NOT_FOUND;
        } else if (!password) {
            throw message.error.PASSWORD_NOT_FOUND;
        } else if (password.length < 8) {
            throw message.error.PASSWORD_LENGTH_ERROR;
        }
        return true;
    },

    validateResetPinObj: async function (dataObj) {
        let { token, pin } = dataObj;
        if (!token) {
            throw message.error.TOKEN_NOT_FOUND;
        } else if (!pin) {
            throw message.error.PIN_NOT_FOUND;
        } else if (pin.length != 6) {
            throw message.error.PIN_LENGTH_ERROR;
        }
        return {
            token: token,
            pin: pin
        };
    },

    validatePinObj: async function (dataObj) {
        let { pin, _id } = dataObj;

        const v = new Validator(dataObj, {
            pin: 'string|required',
            _id: 'string|required',
        });
        let matched = await v.check();
        if (!matched) {
            throw v.errors;
        }
        return {
            pin: pin,
            _id: _id,
        };
    },

    validateRequestPinObj: async function (dataObj) {
        let { email } = dataObj;

        const v = new Validator(dataObj, {
            email: 'required|email',
        });
        let matched = await v.check();
        if (!matched) {
            throw v.errors;
        }
        return {
            email: email,
        };
    },

    validateUserTransactionsObj: async function (dataObj) {
        let { pageNo, pageSize, type, startDate, endDate } = dataObj;
        const v = new Validator(dataObj, {
            pageNo: 'numeric',
            pageSize: 'numeric',
            startDate: 'date',
            endDate: 'date',
            type: 'string',
        });
        let matched = await v.check();
        if (!matched) {
            throw v.errors;
        }
        return {
            pageNo: parseInt(pageNo),
            pageSize: parseInt(pageSize),
            type: type,
            startDate: startDate,
            endDate: endDate,
        };
    },

    validateChangePinObj: async function (dataObj) {
        let { oldPin, newPin } = dataObj;

        //  TODO: Write validator for length
        const v = new Validator(dataObj, {
            oldPin: 'string|required',
            newPin: 'string|required',
            // newPin: 'string|required|length:6',
        });
        let matched = await v.check();
        if (!matched) {
            throw v.errors;
        }
        return {
            oldPin: oldPin,
            newPin: newPin,
        };
    },

    validateUpdateProfileObj: async function (dataObj, files) {
        let { firstName, lastName, type } = dataObj;
        let profileImg;

        if (files.profileImg)
            profileImg = files.profileImg[0];

        const v = new Validator(dataObj, {
            firstName: 'string',
            lastName: 'string',
            type: 'string'
        });
        let matched = await v.check();
        if (!matched) {
            throw (v.errors)
        }

        if (profileImg) {
            const { mimetype } = profileImg;
            if (!['png', 'jpg', 'jpeg', 'image/png', 'image/jpg', 'image/jpeg', 'application/octet-stream'].includes(mimetype)) {
                throw ("invalid MIME type")
            }
        }


        return {
            firstName: firstName,
            lastName: lastName,
            type: type,
            profileImg: profileImg,
        };
    },
};
