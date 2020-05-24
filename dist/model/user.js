"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(firstName, lastName, email, login, password, typeUser) {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.login = '';
        this.password = '';
        this.typeUser = '';
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.login = login;
        this.password = password;
        this.typeUser = typeUser;
    }
}
exports.User = User;
