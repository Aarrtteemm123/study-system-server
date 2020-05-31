import {User} from "./user";

export class Student {
    user: User;
    static counter = 0;
    id = 0;
    group = 0;
    specialty = '';
    subjectLst = [];


    constructor(user: User, group: number, specialty: string, subjectLst: any[]) {
        Student.counter += 1;
        this.id = Student.counter;
        this.user = user;
        this.group = group;
        this.specialty = specialty;
        this.subjectLst = subjectLst;
    }
}
