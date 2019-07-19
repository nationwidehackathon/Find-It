import { Injectable } from '@angular/core';
import { USERS } from './mock-user'
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  users = USERS;
  user = null;
  shortName = "";
  constructor() { }

  getShortName() : string {
    return this.shortName;
  }

  setShortName(newName : string) {
    this.shortName = newName;
  }

  getUserFromShortName() : User {
  	for(let user of this.users) {
      console.log(user);
      if(user.shortName === this.getShortName()) {
        this.user = user;
        return this.user;
      }
  	}
  }
}
