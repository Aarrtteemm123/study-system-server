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
exports.adminRouter = express_1.Router();
let storage = new localStorage_1.Storage();
exports.adminRouter.get('/admin', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let admins = storage.getAll('admins_waiting');
        storage.delete(admins[0], 'admins_waiting');
        let allData = {
            requestStud: storage.getAll('students_requests'),
            allStud: storage.getAll('students'),
            requestTeachers: storage.getAll('teachers_requests'),
            allTeachers: storage.getAll('teachers'),
            requestAdmins: storage.getAll('admins_requests'),
            allAdmins: storage.getAll('admins'),
            admin: admins[0]
        };
        res.send(allData);
    });
});
exports.adminRouter.post('/admin/confirm', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let obj = req.body.data;
        console.log(obj.user.typeUser);
        let allData = storage.getAll(obj.user.typeUser + 's');
        let isExistObj = allData.find(el => el.user.login === obj.user.login &&
            el.user.password === obj.user.password);
        if (typeof isExistObj === 'undefined') {
            storage.add(obj, obj.user.typeUser + 's');
            storage.delete(obj, obj.user.typeUser + 's_requests');
            res.send(true);
        }
        else
            res.send(false);
    });
});
exports.adminRouter.post('/admin/delete', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let obj = req.body.data;
        console.log(obj);
        storage.delete(obj, obj.user.typeUser + 's');
        storage.delete(obj, obj.user.typeUser + 's_requests');
        res.send(true);
    });
});
exports.adminRouter.post('/admin/deleteAll', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let filename = req.body.data;
        storage.deleteAll(filename);
    });
});
exports.adminRouter.post('/admin/update', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let obj = req.body.data;
        console.log(obj);
        storage.update(obj, obj.user.typeUser + 's');
        res.send(true);
    });
});
