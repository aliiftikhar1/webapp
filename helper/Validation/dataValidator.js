const { Validator } = require('node-input-validator');
const message = require('../../config/messages');

module.exports = {
  validateRegisterObj: async function (dataObj) {
    let { firstName, lastName, email, password, role, verificationCode } =
      dataObj;
    const v = new Validator(dataObj, {
      firstName: "string|required",
      lastName: "string|required",
      email: "string|required",
      password: "string|required",
      role: "string|required",
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
      verificationCode: null,
    };
  },

  validateForgetPasswordObj: async function (dataObj) {
    let { email, role } = dataObj;
    const v = new Validator(dataObj, {
      email: "string|required",
      role: "string|required",
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
    let { userID, verificationCode } = dataObj;
    const v = new Validator(dataObj, {
      userID: "string|required",
      verificationCode: "string|required",
    });
    let matched = await v.check();
    if (!matched) {
      throw v.errors;
    }
    return {
      userID: userID,
      verificationCode: verificationCode,
    };
  },

  validateLoginObj: async function (dataObj) {
    let { email, password, role } = dataObj;
    const v = new Validator(dataObj, {
      email: "string|required",
      password: "string|required",
      role: "string|required",
    });
    let matched = await v.check();
    if (!matched) {
      throw v.errors;
    }
    return {
      email: email,
      password: password,
      role: role,
    };
  },
  validateLogoutObj: async function (dataObj) {
    let { userID } = dataObj;
    const v = new Validator(dataObj, {
      userID: "string|required",
    });
    let matched = await v.check();
    if (!matched) {
      throw v.errors;
    }
    return {
      userID: userID,
    };
  },

  validateStoreObj: async function (dataObj) {
    let { storeName, vendorId, cityName, address, phoneNo } = dataObj;
    const v = new Validator(dataObj, {
      storeName: "string|required",
      vendorId: "string|required",
      cityName: "string|required",
      address: "string|required",
      phoneNo: "string|required",
    });
    let matched = await v.check();
    if (!matched) {
      throw v.errors;
    }
    return {
      storeName: storeName,
      vendorId: vendorId,
      cityName: cityName,
      address: address,
      phoneNo: phoneNo,
    };
  },

  validateStoreVerificationObj: async function (dataObj) {
    let { storeID, verificationCode, vendorId } = dataObj;
    const v = new Validator(dataObj, {
      storeID: "string|required",
      verificationCode: "string|required",
      vendorId: "string|required",
    });
    let matched = await v.check();
    if (!matched) {
      throw v.errors;
    }
    return {
      storeID: storeID,
      verificationCode: verificationCode,
      vendorId: vendorId,
    };
  },

  validateUpdateStoreObj: async function (dataObj) {
    let { storeID, storeName, cityName } = dataObj;
    const v = new Validator(dataObj, {
      storeID: "string|required",
      storeName: "string|required",
      cityName: "string|required",
    });
    let matched = await v.check();
    if (!matched) {
      throw v.errors;
    }
    return {
      storeID: storeID,
      storeName: storeName,
      cityName: cityName,
    };
  },

  validateAllStoreObj: async function (dataObj) {
    let { vendorId } = dataObj;
    const v = new Validator(dataObj, {
      vendorId: "string|required",

    });
    let matched = await v.check();
    if (!matched) {
      throw v.errors;
    }
    return {
      vendorId: vendorId,
    };
  },
};
