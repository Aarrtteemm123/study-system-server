import {User} from './user';

export class Admin {
  user:User;
  id = 0;

  constructor(id: number, user: User) {
    this.id = id;
    this.user = user;
  }
}
