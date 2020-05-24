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
exports.teacherRouter = express_1.Router();
let storage = new localStorage_1.Storage();
exports.teacherRouter.get('/teacher', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let teacher = storage.getAll('teachers_waiting');
        res.send(teacher[0]);
        storage.delete(teacher[0], 'teachers_waiting');
    });
});
exports.teacherRouter.post('/teacher', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let descriptionWords = req.body.info.split(' ');
        let allStudents = storage.getAll('students');
        if (descriptionWords.length === 1) {
            let stud = allStudents.find(el => el.user.firstName === descriptionWords[0]);
            res.send(stud);
        }
        if (descriptionWords.length === 2) {
            let stud = allStudents.find(el => el.user.firstName === descriptionWords[0]
                && el.user.lastName === descriptionWords[1]);
            res.send(stud);
        }
        if (descriptionWords.length === 3) {
            let stud = allStudents.find(el => el.user.firstName === descriptionWords[0]
                && el.user.lastName === descriptionWords[1]
                && el.group === Number(descriptionWords[2]));
            res.send(stud);
        }
    });
});
exports.teacherRouter.post('/teacher/updateMarks', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let student = req.body.data;
        console.log(student);
        storage.update(student, student.user.typeUser + 's');
        res.send(true);
    });
});
