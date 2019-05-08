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
var mongoose_1 = require("mongoose");
var userModel_1 = require("../model/userModel");
var base_router_1 = require("../common/base_router");
var mongoose = require("mongoose");
var User = mongoose_1.model('User', userModel_1.UserSchema);
/**
 * / route
 *
 * @class User
 */
var UserRoutes = /** @class */ (function (_super) {
    __extends(UserRoutes, _super);
    /**
     * @class UserRoutes
     * @constructor
     */
    function UserRoutes() {
        var _this = _super.call(this, '') || this;
        _this.init();
        return _this;
    }
    Object.defineProperty(UserRoutes, "router", {
        /**
         * @class UserRoutes
         * @method getRouter
         * @returns {Router}
         */
        get: function () {
            if (!this.instance) {
                this.instance = new UserRoutes();
            }
            return this.instance.router;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @class UserRoutes
     * @method init
     */
    UserRoutes.prototype.init = function () {
        var _this = this;
        this.router.post('/', function (req, res, next) {
            var newUser = new User({
                _id: new mongoose.Types.ObjectId(),
                email: req.body.email,
                password: req.body.password
            });
            newUser.save().then(function (result) {
                _this.replay(res, result);
            }).catch(function (err) {
                _this.replay(res, err);
            });
        });
        this.router.get('/', function (req, res, next) {
            User.find({})
                .exec()
                .then(function (result) {
                _this.replay(res, result);
            })
                .catch(function (err) {
                _this.replay(res, err);
            });
        });
        this.router.get('/:id', function (req, res, next) {
            User.findById({ _id: req.params.id })
                .exec()
                .then(function (result) {
                _this.replay(res, result);
            })
                .catch(function (err) {
                _this.replay(res, err);
            });
        });
        this.router.put('/:id', function (req, res, next) {
            User.findByIdAndUpdate({ _id: req.params.id }, { $set: { email: req.body.email, password: req.body.password } }).exec().then(function (result) {
                User.findById({ _id: result.id })
                    .exec()
                    .then(function (result) {
                    _this.replay(res, result);
                })
                    .catch(function (err) {
                    _this.replay(res, err);
                });
            }).catch(function (err) {
                _this.replay(res, err);
            });
        });
        this.router.delete('/:id', function (req, res, next) {
            User.deleteOne({ _id: req.params.id })
                .exec()
                .then(function () {
                _this.replay(res, {
                    message: "User deleted"
                });
            })
                .catch(function (err) {
                _this.replay(res, err);
            });
        });
    };
    UserRoutes.path = '/api/user';
    return UserRoutes;
}(base_router_1.default));
exports.UserRoutes = UserRoutes;
