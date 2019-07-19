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
  constructor(private searchService: SearchService, private filterService: FilterService) { }

  ngOnInit() {}

  // filterTechnicalSkill() : User[] {
  // 	for(i = 0; i < dataFromSearch.length; i++) {
  // 		for(j = 0; j < data.length; j++) {
  // 			for(k = 0; k < data[j].technicalSkills.length; k++) {
  // 				console.log("dataFromSearch: " + dataFromSearch[i]);
  // 				console.log("user: " + data[j]);
  // 				console.log("skill: " + data[j].technicalSkills[k]);
  // 				if (dataFromSearch[i] === data[j].technicalSkills[k]) {
  // 					filterService.setFilteredUser(filterService.getFilteredUser().push(data[j]));
  // 					console.log(filterService.getFilteredUser());
  // 				}
  // 			}
  			
  // 		}
  // 	}
  // }
}
