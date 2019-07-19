import { Component, OnInit } from '@angular/core';
import { Bubble } from '../bubble';
import { ParentBubble } from '../parentBubble';
import { BUBBLES } from '../mock-bubbles';
import { SearchService } from '../search.service';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  parentBubbles = BUBBLES;
  childBubbles = [];
  
  constructor(private searchService : SearchService, private filterService : FilterService) { }

  ngOnInit() {
  }

  isChecked(parent: ParentBubble): boolean {
    return parent.checked;
  }
  
  onClickParentBubble(parent:ParentBubble): void {
  	parent.checked = !parent.checked;
  	this.childBubbles = parent.children;
  }

  onClickChild(child:Bubble): void {
  	child.checked = !child.checked;
    this.saveToArray(child);
  }

  clear(): void {
  	var emptyArray = [];
	this.searchService.setSearchArray(emptyArray);
  	
  }

  saveToArray(item:Bubble): void {
  	this.searchService.getSearchArray().push(item.name);
  }

  clickFilter() : User[] {
  	return this.filterService.filterTechnicalSkill();
  }
}
