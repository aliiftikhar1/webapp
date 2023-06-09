
const sendEmail = require("../helper/emailHelper");
const authMiddleware = require('../utils/authMiddleware');
const message = require('../config/messages');
const Roles = require('../utils/roles');
const { DbHelper } = require('../helper/DB/dbHelper');
const { DbHelperUser } = require('../helper/DB/dbHelperUser');
const { COLLECTIONS,PROJECT_NAME } = require('../config/constant');

//create instance of
const dbInstance = new DbHelper();
const dbInstanceUser = new DbHelperUser();



const register = async (userDoc) => {
    try {
    //   verify role
        if(userDoc.role==='A'){
            userDoc.role=Roles.Roles.Admin;
        }
        else if(userDoc.role=='U'){
            userDoc.role=Roles.Roles.User;
        }
        else if(userDoc.role=='V'){
            userDoc.role=Roles.Roles.Vendor;
        }        
        else{
            throw message.error.INVALID_ROLE;
        }
          //check if user exist with same email
        let userExists = await dbInstanceUser.getUserByEmailAndRole(userDoc.email,userDoc.role);
        if (userExists) {
            throw message.error.EMAIL_WITH_SAME_ROLE_ALREADY_EXIST;
        }
        let code=require('crypto').randomBytes(3).toString('hex');
        const message1 = `${PROJECT_NAME} user verification code : ${code}`;
        await sendEmail(userDoc.email, "Verify Email", message1);
        await Promise.all([sendEmail])
        console.log('authProvider -> register ::: verification mail sent');
        userDoc.verificationCode=code;
        //  Create the user
        let createdUser = await dbInstance.insertDocument(
            COLLECTIONS.USER_COLLECTION_NAME,
            userDoc
        );
        console.log('authProvider -> register ::: New user created');
        return createdUser;
    } catch (e) {
        throw Error(e);
    }
};

const emailVerification = async (userDoc) => {
    try {

        //check if user exist with same email
        let user = await dbInstanceUser.getUserById(userDoc.userID);
        if(user.active==true){
            throw message.error.EMAIL_ALREADY_VERIFIED;
        }
        if(user.verificationCode!=userDoc.verificationCode)
        {
            throw message.error.WRONG_VERIFICATION_CODE;

        }

       let updatedUser= await dbInstance.updateDocument(
            COLLECTIONS.USER_COLLECTION_NAME,
            user._id,
            { 
                active:true 
            }
        );
        console.log('authProvider -> emailVerification ::: User Verified');
        return updatedUser;
    } catch (e) {
        throw Error(e);
    }
};



const login = async (userDoc) => {
    try {
        if(userDoc.role==='A'){
            userDoc.role=Roles.Roles.Admin;
        }
        else if(userDoc.role=='U'){
            userDoc.role=Roles.Roles.User;
        }
        else if(userDoc.role=='V'){
            userDoc.role=Roles.Roles.Vendor;
        }
        let { email,password,role} = userDoc;

        let user = await dbInstanceUser.getUserByEmailAndRole(email,role);
        if (!user||user.password!=password) {
            throw message.error.INVALID_CREDENTIALS;
        }
        if (user.active==false) {
            throw message.error.EMAIL_NOT_VERIFIED;
        }

        let token = await authMiddleware.generateJWT({
            email: user.email,
            _id: user._id,
        });
        let refreshToken = await authMiddleware.generateRefreshToken({
            email: user.email,
            _id: user._id,
        });

        await dbInstance.updateDocument(
            COLLECTIONS.USER_COLLECTION_NAME,
            user._id,
            { refreshToken: refreshToken,token:token }
        );
        return {
            token: token,
            refreshToken: refreshToken,
            userData: {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
            },
        };
    } catch (e) {
        throw Error(e);
    }
};

const forgetPassword = async (userDoc) => {
    try {
         //   verify role
        if(userDoc.role==='A'){
            userDoc.role=Roles.Roles.Admin;
        }
        else if(userDoc.role=='U'){
            userDoc.role=Roles.Roles.User;
        }
        else if(userDoc.role=='V'){
            userDoc.role=Roles.Roles.Vendor;
        }
        else{
            throw message.error.INVALID_ROLE;
        }
          //check if user exist
        let userExists = await dbInstanceUser.getUserByEmailAndRole(userDoc.email,userDoc.role);
        if (!userExists) {
            throw message.error.INVALID_EMAIL_FOR_FORGET_PASSWORD;
        }
        if (userExists.active==false) {
            throw message.error.EMAIL_NOT_VERIFIED;
        }
        const password = `${PROJECT_NAME} Your password is : ${userExists.password}`;
        await sendEmail(userDoc.email, "Forget Password Email", password);
        await Promise.all([sendEmail])
        return {
            message:message.success.FORGET_PASSWORD_SUCCESS,
        };
    } catch (e) {
        throw Error(e);
    }
};


const logout = async (userDoc) => {
    try {
        let user = await dbInstanceUser.getUserById(userDoc.userID);
        if(!user)
        {
            throw message.error.WRONG_VERIFICATION_CODE;

        }
       let updatedUser= await dbInstance.updateDocument(
            COLLECTIONS.USER_COLLECTION_NAME,
            user._id,
            { 
                token: null,
                refreshToken:null 
            }
        );
        console.log('authProvider -> emailVerification ::: Logout');
        return {
            logout: true,
            userData:updatedUser
        };
    } catch (e) {
        throw Error(e);
    }
};


module.exports = {
    register,
    emailVerification,
    login,
    forgetPassword,
    logout
};
