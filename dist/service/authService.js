"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const localStorage_1 = require("../localStorage");
exports.titleRouter = express_1.Router();
let storage = new localStorage_1.Storage();
exports.titleRouter.post('/title', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let login = req.body.login;
        let password = req.body.password;
        let typeUser = req.body.typeUser;
        let allData = storage.getAll(typeUser + 's');
        let loginObj = allData.find(el => el.user.login === login &&
            el.user.password === password);
        if (typeof loginObj === 'undefined')
            res.send(false);
        else {
            storage.add(loginObj, typeUser + 's_waiting');
            res.send(true);
        }
    });
});
exports.titleRouter.post('/register', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let obj = req.body;
        let allData = storage.getAll(obj.user.typeUser + 's');
        let isExistObj = allData.find(el => el.user.login === obj.user.login &&
            el.user.password === obj.user.password);
        if (typeof isExistObj === 'undefined') {
            storage.add(obj, obj.user.typeUser + 's_requests');
            res.send(true);
        }
        else
            res.send(false);
    });
});
