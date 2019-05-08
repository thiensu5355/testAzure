"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var statusCode = require("http-status-codes");
var BaseRouter = /** @class */ (function () {
    function BaseRouter(URI) {
        this.URI = URI;
        this.router = express_1.Router();
    }
    BaseRouter.prototype.replay = function (response, handle) {
        try {
            if (handle instanceof Error) {
                response.status(statusCode.BAD_REQUEST).json(handle);
            }
            else if (handle instanceof Object) {
                response.status(statusCode.OK).json(handle);
            }
        }
        catch (error) {
            response.status(statusCode.INSUFFICIENT_STORAGE).json(handle);
        }
    };
    return BaseRouter;
}());
exports.default = BaseRouter;
