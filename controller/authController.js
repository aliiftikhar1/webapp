
const dataValidator = require('../helper/Validation/dataValidator');
const { authProvider } = require('../provider');
const userRegister = async (req, res) => {
    try {
        let userDoc = await dataValidator.validateRegisterObj(req.body);
        const response = await authProvider.register(userDoc);
        return _handleResponse(req, res, null, response);
    } catch (e) {
        return _handleResponse(req, res, e);
    }
};

const verifyEmail = async (req, res) => {
    try {
        let userDoc = await dataValidator.validateEmailVerificationObj(req.query);
        const response = await authProvider.emailVerification(userDoc);
        return _handleResponse(req, res, null, response);
    } catch (e) {
        return _handleResponse(req, res, e);
    }
};

const login = async (req, res) => {
    try {
        let userDoc = await dataValidator.validateLoginObj(req.body);
        const response = await authProvider.login(userDoc);
        return _handleResponse(req, res, null, response);
    } catch (e) {
        return _handleResponse(req, res, e);
    }
};

const logout = async (req, res) => {
    try {
        let userDoc = await dataValidator.validateLogoutObj(req.query);
        const response = await authProvider.logout(userDoc);
        return _handleResponse(req, res, null, response);
    } catch (e) {
        return _handleResponse(req, res, e);
    }
};

const forgetPassword = async (req, res) => {
    try {
        let userDoc = await dataValidator.validateForgetPasswordObj(req.body);
        const response = await authProvider.forgetPassword(userDoc);
        return _handleResponse(req, res, null, response);
    } catch (e) {
        return _handleResponse(req, res, e);
    }
};



module.exports = {
    userRegister,
    verifyEmail,
    login,
    forgetPassword,
    logout

};
