const trimRequest = require("trim-request");

class Routes {
  constructor(app) {
    this.app = app;
  }

  /* creating app Routes starts */
  appRoutes() {
    this.app.use("/auth", trimRequest.all, require("./auth"));
    this.app.use("/dashboard", trimRequest.all, require("./dashboard"));
    this.app.use("/store", trimRequest.all, require("./store"));
  }

  routesConfig() {
    this.appRoutes();
  }
}

module.exports = Routes;
