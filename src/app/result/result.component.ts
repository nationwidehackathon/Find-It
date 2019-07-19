import { Component, OnInit , Input} from '@angular/core';
import { USERS } from '../mock-user';
import { SearchService } from '../search.service';
import { User } from '../user'
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  data=USERS;
  dataFromSearch = this.searchService.getSearchArray();
  filteredUser = this.filterService.getFilteredUser();
  userGroup = [];

  constructor(private searchService: SearchService, 
  	private filterService: FilterService) { }

  ngOnInit() {}

  onChange() : User[] {
  	this.userGroup = this.filterService.filterTechnicalSkill(this.filterService.getCheckedFilter());
  	this.filterService.setFilteredUser(this.filterService.getCheckedFilter());
  	return this.userGroup;
  }

  timedRefresh(timeoutPeriod) {
	setTimeout("location.reload(true);",timeoutPeriod);
  }
  
}