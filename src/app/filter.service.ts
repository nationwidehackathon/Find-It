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
  checkedFilter:string[] = [];

  constructor(private searchService: SearchService) { }

  getFilteredUser(): User[] {
  	return this.filteredUser;
  }

  setFilteredUser(newArr: User[]): void {
  	this.filteredUser = newArr;
  }

  getCheckedFilter(): any[] {
  	return this.filteredUser;
  }

  setCheckedFilter(newArr: any[]): void {
  	this.filteredUser = newArr;
  }

  filterTechnicalSkill(arr: string[]) : User[] {
  	for(let i in arr) {
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
