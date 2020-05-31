import {User} from './user';

export class Admin {
    user: User;
    static counter = 0;
    id = 0;

    constructor(user: User) {
        Admin.counter += 1;
        this.id = Admin.counter;
        this.user = user;
    }
}
