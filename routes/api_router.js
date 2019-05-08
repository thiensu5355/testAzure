"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_router_1 = require("../common/base_router");
/**
 * / route
 *
 * @class Api
 */
var ApiRoutes = /** @class */ (function (_super) {
    __extends(ApiRoutes, _super);
    /**
     * @class ApiRoutes
     * @constructor
     */
    function ApiRoutes() {
        var _this = _super.call(this, '') || this;
        _this.init();
        return _this;
    }
    Object.defineProperty(ApiRoutes, "router", {
        /**
         * @class ApiRoute
         * @method getRouter
         * @returns {Router}
         */
        get: function () {
            if (!this.instance) {
                this.instance = new ApiRoutes();
            }
            return this.instance.router;
        },
        enumerable: true,
        configurable: true
    });
    /**
   * @class ApiRoute
   * @method init
   */
    ApiRoutes.prototype.init = function () {
        this.router.get('/', function (req, res) {
            res.status(200).json({
                message: 'khoa sieu dep trai'
            });
        });
    };
    ApiRoutes.path = '/api';
    return ApiRoutes;
}(base_router_1.default));
exports.ApiRoutes = ApiRoutes;
