const trimRequest = require('trim-request');

class Routes {
    constructor(app) {
        this.app = app;
    }

    /* creating app Routes starts */
    appRoutes() {
        this.app.use('/auth', trimRequest.all, require("./auth"));
    }
    

    routesConfig() {
        this.appRoutes();
    }
}

module.exports = Routes;

