const { Validator } = require("node-input-validator");
const message = require("../../config/messages");

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
    let { storeID } = dataObj;
    const v = new Validator(dataObj, {
      storeID: "string|required",
    });
    let matched = await v.check();
    if (!matched) {
      throw v.errors;
    }
    return {
      storeID: storeID,
    };
  },

  validateUpdateStoreObj: async function (dataObj) {
    let { storeID, storeName, cityName, address, phoneNo } = dataObj;
    const v = new Validator(dataObj, {
      storeID: "string|required",
      storeName: "string|required",
      cityName: "string|required",
      address: "string|required",
      phoneNo: "string|required",
    });
    let matched = await v.check();
    if (!matched) {
      throw v.errors;
    }
    return {
      storeID: storeID,
      storeName: storeName,
      cityName: cityName,
      address: address,
      phoneNo: phoneNo,
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

  // Category
  validateCategoryObj: async function (dataObj) {
    let { categoryName } = dataObj;
    const v = new Validator(dataObj, {
      categoryName: "string|required",
    });
    let matched = await v.check();
    if (!matched) {
      throw v.errors;
    }
    return {
      categoryName: categoryName,
      categoryCode: null,
    };
  },

  validateCategoryUpdateObj: async function (dataObj) {
    let { categoryId, categoryName } = dataObj;
    const v = new Validator(dataObj, {
      categoryId: "string|required",
      categoryName: "string|required",
    });
    let matched = await v.check();
    if (!matched) {
      throw v.errors;
    }
    return {
      categoryId: categoryId,
      categoryName: categoryName,
    };
  },

  // Type
  validateTypeObj: async function (dataObj) {
    let { typeName } = dataObj;
    const v = new Validator(dataObj, {
      typeName: "string|required",
    });
    let matched = await v.check();
    if (!matched) {
      throw v.errors;
    }
    return {
      typeName: typeName,
      typeCode: null,
    };
  },

  validateTypeUpdateObj: async function (dataObj) {
    let { typeId, typeName } = dataObj;
    const v = new Validator(dataObj, {
      typeId: "string|required",
      typeName: "string|required",
    });
    let matched = await v.check();
    if (!matched) {
      throw v.errors;
    }
    return {
      typeId: typeId,
      typeName: typeName,
    };
  },

  // Medicine
  validateMedicineObj: async function (dataObj) {
    let {
      medicineName,
      companyName,
      storeId,
      categoryID,
      typeID,
      quantity,
      price,
      discount,
    } = dataObj;
    const v = new Validator(dataObj, {
      medicineName: "string|required",
      companyName: "string|required",
      storeId: "string|required",
      categoryID: "string|required",
      typeID: "string|required",
      quantity: "string|required",
      price: "string|required",
    });
    let matched = await v.check();
    if (!matched) {
      throw v.errors;
    }
    return {
      medicineName: medicineName,
      companyName: companyName,
      storeId: storeId,
      categoryID: categoryID,
      typeID: typeID,
      quantity: quantity,
      price: price,
      storeId: storeId,
      discount: discount,
    };
  },

  validateUpdateMedicineObj: async function (dataObj) {
    let {
      medicineId,
      medicineName,
      companyName,
      storeId,
      categoryID,
      typeID,
      quantity,
      price,
      discount,
    } = dataObj;
    const v = new Validator(dataObj, {
      medicineId: "string|required",
      medicineName: "string|required",
      companyName: "string|required",
      storeId: "string|required",
      categoryID: "string|required",
      typeID: "string|required",
      quantity: "string|required",
      price: "string|required",
    });
    let matched = await v.check();
    if (!matched) {
      throw v.errors;
    }
    return {
      medicineId: medicineId,
      medicineName: medicineName,
      companyName: companyName,
      storeId: storeId,
      categoryID: categoryID,
      typeID: typeID,
      quantity: quantity,
      price: price,
      storeId: storeId,
      discount: discount,
    };
  },

  validateGetMedicineByStoreObj: async function (dataObj) {
    let { storeId } = dataObj;
    const v = new Validator(dataObj, {
      storeId: "string|required",
    });
    let matched = await v.check();
    if (!matched) {
      throw v.errors;
    }
    return {
      storeId: storeId,
    };
  },

  validateGetMedicineByCategoryObj: async function (dataObj) {
    let { categoryID } = dataObj;
    const v = new Validator(dataObj, {
      categoryID: "string|required",
    });
    let matched = await v.check();
    if (!matched) {
      throw v.errors;
    }
    return {
      categoryID: categoryID,
    };
  },

  validateGetMedicineByTypeObj: async function (dataObj) {
    let { typeID } = dataObj;
    const v = new Validator(dataObj, {
      typeID: "string|required",
    });
    let matched = await v.check();
    if (!matched) {
      throw v.errors;
    }
    return {
      typeID: typeID,
    };
  },
};
