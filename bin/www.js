"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("../app");
exports.express = app_1.default.bootstrap();
var server = exports.express.server;
server.listen(process.env.PORT || 8080, function () {
    // tslint:disable-next-line:max-line-length
    console.log("Server Listen in port " + (process.env.PORT || 8080));
});
