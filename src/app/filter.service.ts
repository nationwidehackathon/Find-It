import { Injectable } from '@angular/core';
import { User } from './user'
import { USERS } from './mock-user';
import { SearchService } from './search.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  data=USERS;
  filteredUser:User[] = [];


  constructor(private searchService: SearchService) { }

  getFilteredUser(): User[] {
  	return this.filteredUser;
  }

  setFilteredUser(newArr: User[]): void {
  	this.filteredUser = newArr;
  }

  filterTechnicalSkill() : User[] {
  	for(let i in this.searchService.getSearchArray()) {
  		for(let j in this.data) {
  			for(let k in this.data[j].technicalSkills) {
  				if (this.searchService.getSearchArray()[i] === this.data[j].technicalSkills[k].skillName) {
  					this.getFilteredUser().push(this.data[j]);
  				}
  			}
  			
  		}
  	}
  	return this.filteredUser;
  }

  getShortName(user: User) {
  	return user.shortName;
  }
}
