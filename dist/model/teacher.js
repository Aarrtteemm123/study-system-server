"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Teacher {
    constructor(user, workExperience, groups, skillsLst) {
        this.id = 0;
        this.workExperience = 0;
        this.groups = [];
        this.skillsLst = [];
        Teacher.counter += 1;
        this.id = Teacher.counter;
        this.user = user;
        this.workExperience = workExperience;
        this.groups = groups;
        this.skillsLst = skillsLst;
    }
}
Teacher.counter = 0;
exports.Teacher = Teacher;
