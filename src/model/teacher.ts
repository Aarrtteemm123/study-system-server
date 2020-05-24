import {User} from './user';

export class Teacher {
  user:User;
  id = 0;
  workExperience = 0;
  groups = [];
  skillsLst = [];

  constructor(id: number,user: User, workExperience: number, groups: number[], skillsLst: string[]) {
    this.id = id;
    this.user = user;
    this.workExperience = workExperience;
    this.groups = groups;
    this.skillsLst = skillsLst;
  }
}
