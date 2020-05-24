"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(user, group, specialty, subjectLst) {
        this.id = 0;
        this.group = 0;
        this.specialty = '';
        this.subjectLst = [];
        Student.counter += 1;
        this.id = Student.counter;
        this.user = user;
        this.group = group;
        this.specialty = specialty;
        this.subjectLst = subjectLst;
    }
}
Student.counter = 0;
exports.Student = Student;
