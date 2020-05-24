"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Admin {
    constructor(user) {
        this.id = 0;
        Admin.counter += 1;
        this.id = Admin.counter;
        this.user = user;
    }
}
Admin.counter = 0;
exports.Admin = Admin;
