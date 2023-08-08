module.exports = {
  error: {
    EMAIL_ALREADY_EXIST: "Email already exist, Please login!",
    EMAIL_WITH_SAME_ROLE_ALREADY_EXIST: "User already exist, Please login!",
    INVALID_ROLE: "Invalid Role",
    WRONG_VERIFICATION_CODE:
      "Email could not be verified, Please enter correct verification code!",
    INVALID_EMAIL_FOR_FORGET_PASSWORD:
      "User does not exist,Please signup first",
    EMAIL_ALREADY_VERIFIED: "User already verified, Please login!",
    INVALID_CREDENTIALS: "Invalid credentials",
    EMAIL_NOT_VERIFIED: "Email not verified",
    INVALID_VENDOR_ID: "Vendor id not exist",
    STORE_WITH_NAME_ALREADY_EXIST: "Store already exist",
    STORE_ALREADY_VERIFIED: "Store already verified",
    CATEGORY_ALREADY_EXIST: "Category already exist",
    TYPE_ALREADY_EXIST: "type already exist",

    BadRequest: {
      status: 400,
      code: "BadRequest",
      message: "The request body contains bad syntax or is incomplete.",
    },

    ValidationError: {
      status: 400,
      code: "ValidationError",
      message:
        "Validation error(s) present. See embedded errors list for more details. (See below)",
    },

    InvalidCredentials: {
      status: 401,
      code: "InvalidCredentials",
      message: "Missing or invalid Authorization header",
    },

    InvalidAccessToken: {
      status: 401,
      code: "InvalidAccessToken",
      message: "Invalid access token",
    },

    ExpiredAccessToken: {
      status: 401,
      code: "ExpiredAccessToken",
      message: "Generate a new access token using your client credentials",
    },

    InvalidAccountStatus: {
      status: 401,
      code: "InvalidAccountStatus",
      message: "Invalid access token account status.",
    },

    InvalidApplicationStatus: {
      status: 401,
      code: "InvalidApplicationStatus",
      message: "Invalid application status",
    },

    InvalidScopes: {
      status: 401,
      code: "InvalidScopes",
      message: "Missing or invalid scopes for requested endpoint.",
    },

    ServerError: {
      status: 500,
      code: "ServerError",
      message: "The request timed out",
    },
  },

  success: {
    FORGET_PASSWORD_SUCCESS: "Mail is sent successfully",
  },
};
