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
	window.onload = timedRefresh(5000);
  }

  getCheckedFilter(): string[] {
  	return this.checkedFilter;
  }

  setCheckedFilter(newArr: string[]): void {
  	this.filteredUser = newArr;
  }

  timedRefresh(timeoutPeriod) {
	setTimeout("location.reload(true);",timeoutPeriod);
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
