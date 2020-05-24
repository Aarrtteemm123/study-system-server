"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Subject {
    constructor(name, mark) {
        this.id = 0;
        this.name = '';
        this.mark = 0;
        Subject.counter += 1;
        this.id = Subject.counter;
        this.name = name;
        this.mark = mark;
    }
}
Subject.counter = 0;
exports.Subject = Subject;
