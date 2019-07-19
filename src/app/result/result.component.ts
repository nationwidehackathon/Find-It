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
}