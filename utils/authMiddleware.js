const JWT = require("jsonwebtoken");
// const console = require('../logger')
const message = require('../config/messages')
const { DbHelper } = require("../helper/DB/dbHelper");
const dbInstance = new DbHelper();
const constant = require("../config/constant")

//JWT TOKEN
async function generateJWT(payloadDataObj) {
    try {
        return JWT.sign({ data: payloadDataObj }, constant.JWT_PRIVATE_KEY);
    } catch (e) {
        console.log("Erroe while generateJWT ::: ", e)
        throw new Error(e)
    }
}

async function generateRefreshToken(payloadDataObj) {
    try {
        return JWT.sign({ data: payloadDataObj }, constant.JWT_REFRESH_KEY);
    } catch (e) {
        console.log("Erroe while generateJWT ::: ", e)
        throw new Error(e)
    }
}

async function generateTokenJWT(payloadDataObj) {
    try {
        return JWT.sign({ payloadDataObj }, constant.JWT_PRIVATE_KEY)
    } catch (e) {
        console.log("Error while generateTokenJWT ::: ", e)
        throw new Error(e)
    }
}

async function verifyTokenJWT(token) {
    try {
        const decoded = JWT.verify(token, constant.JWT_PRIVATE_KEY);
        return decoded;
    } catch (e) {
        console.log("Error while verifyTokenJWT ::: ", e)
        throw new Error(message.error.TOKEN_EXPIRED)
    }
}

//VERIFY JWT TOKEN
async function verifyJWT(req, res, next) {
    try {
        if (req && req.headers && req.headers.authorization) {
            let path = req.route.path.trim();
            path = path.slice(1, path.length);
            path = path.toLowerCase();
            JWT.verify(req.headers.authorization, constant.JWT_PRIVATE_KEY, async (err, decoded) => {
                try {
                    if (err) {
                        throw (err)
                    }
                    let currentTimestamp = Math.floor(Date.now() / 1000) + (60 * 60)

                    if (currentTimestamp > decoded.exp) {
                        return _handleResponse(req, res, "JWT expired, Please login again")
                    }
                    // let authorised = await isAuthorised(decoded, path)

                    // if (!authorised) {
                    //     throw Error("Permission Denied, User not authorised to perform this operation")
                    // }
                    req.data = decoded.data;
                    req._id = decoded.data._id;
                    if (req.body) {
                        req.body._id = decoded.data._id;
                    }
                    console.log("TRUE");
                    next();
                } catch (e) {
                    return _handleResponse(req, res, e)
                }
            });
        } else {
            return _handleResponse(req, res, "JWT not availaible")
        }
    } catch (e) {
        console.log("ERROR :verifyJWT :::::", e)
        return _handleResponse(req, res, e)
    }
}

async function verifyDashboardJWT(req, res, next) {
    try {
        if (req && req.headers && req.headers.authorization) {
            let path = req.route.path.trim();
            path = path.slice(1, path.length);
            path = path.toLowerCase();
            JWT.verify(req.headers.authorization, constant.JWT_PRIVATE_KEY, async (err, decoded) => {
                try {
                    if (err) {
                        throw (err)
                    }
                    let currentTimestamp = Math.floor(Date.now() / 1000) + (60 * 60)

                    if (currentTimestamp > decoded.exp) {
                        return _handleResponse(req, res, "JWT expired, Please login again")
                    }
                    // let authorised = await isAuthorised(decoded, path)

                    // if (!authorised) {
                    //     throw Error("Permission Denied, User not authorised to perform this operation")
                    // }
                    req.data = decoded.data;
                    req._id = decoded.data._id;
                    if (req.body) {
                        req.body._id = decoded.data._id;
                    }
                    next();
                } catch (e) {
                    if (e == 'JsonWebTokenError: invalid signature' || e == 'TokenExpiredError: jwt expired'){
                        return _handleResponse(req, res, "JWT expired or incorrect. Please login again")
                    }
                    next();
                }
            });
        } else {
            next();
        }
    } catch (e) {
        console.log("ERROR :verifyJWT :::::", e)
        next();
    }
}

async function decodeJWT() {
    try {
        return JWT.decode({ exp: Math.floor(Date.now() / 1000) + 24 * (60 * 60), data: payloadDataObj }, constant.JWT_PRIVATE_KEY);
    } catch (e) {
        console.log("Erroe while decodeJWT ::: ", e)
        throw new Error(e)
    }
}

// async function isAuthorised(decodedJWT, path, imageid) {
//     const { role } = decodedJWT.data;
//     if (role === ROLE_ADMIN) {
//         return ADMIN_ROUTES.includes(path)
//     } else if (role == ROLE_INVESTOR) {
//         return INVESTOR_ROUTES.includes(path)
//     } else if (role === ROLE_PROPERTY_OWNER) {
//         return ROLE_PROPERTY_OWNER_ROUTES.includes(path)
//     } else {
//         return false
//     }
// }

module.exports = {
    generateJWT,
    generateTokenJWT,
    decodeJWT,
    verifyTokenJWT,
    verifyJWT,
    generateRefreshToken,
    verifyDashboardJWT
}