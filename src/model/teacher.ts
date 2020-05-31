import {User} from './user';

export class Teacher {
    user: User;
    static counter = 0;
    id = 0;
    workExperience = 0;
    groups = [];
    skillsLst = [];


    constructor(user: User, workExperience: number, groups: number[], skillsLst: string[]) {
        Teacher.counter += 1;
        this.id = Teacher.counter;
        this.user = user;
        this.workExperience = workExperience;
        this.groups = groups;
        this.skillsLst = skillsLst;
    }
}
