"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var http_1 = require("http");
var api_router_1 = require("./routes/api_router");
var user_router_1 = require("./routes/user_router");
var mongoose_1 = require("mongoose");
var env_1 = require("./config/env");
var ServerExpress = /** @class */ (function () {
    function ServerExpress() {
        var _this = this;
        this.config = function () {
            _this.app.use(bodyParser.json());
            _this.app.use(bodyParser.urlencoded({ extended: false }));
        };
        this.mongoSetup = function () {
            mongoose_1.connect("mongodb+srv://" + env_1.config.database.userName + ":" + env_1.config.database.password + "@" + env_1.config.database.databaseName +
                ("-5ll7n.mongodb.net/" + env_1.config.database.clusterName + "?retryWrites=true"), { useNewUrlParser: true });
            mongoose_1.set('useFindAndModify', false);
            mongoose_1.set('useCreateIndex', true);
        };
        this.routes = function () {
            _this.app.use('/', api_router_1.ApiRoutes.router);
            _this.app.use('/user', user_router_1.UserRoutes.router);
        };
        this.mongoSetup();
        this.app = express();
        this.config();
        this.routes();
        this.server = http_1.createServer(this.app);
    }
    ServerExpress.bootstrap = function () {
        return new ServerExpress();
    };
    return ServerExpress;
}());
exports.default = ServerExpress;
