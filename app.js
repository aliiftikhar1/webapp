const express = require('express');
const http = require('http');
const cors = require('cors');

const AppConfig = require('./config/app-config');
const Routes = require('./routes');  // Ensure this path is correct

class Server {
  constructor() {
    this.app = express();
    this.app.use(cors({
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
    }));
    this.app.use(express.json({ limit: '50mb' }));
    this.app.use(express.urlencoded({ extended: true, limit: '50mb' }));
    this.http = http.Server(this.app);
  }

  appConfig() {
    new AppConfig(this.app).includeConfig();
  }

  includeRoutes() {
    const routes = new Routes(this.app);  // Instantiate the Routes class with 'new'
    routes.routesConfig();
  }

  startTheServer() {
    this.appConfig();
    this.includeRoutes();

    const port = process.env.NODE_SERVER_PORT || 3000;
    const host = process.env.NODE_SERVER_HOST || '0.0.0.0';

    this.http.listen(port, host, () => {
      console.log(`Listening on http://${host}:${port}`);
    });
  }
}

module.exports = new Server();
