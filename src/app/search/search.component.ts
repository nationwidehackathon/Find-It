import { Component, OnInit } from '@angular/core';
import { Bubble } from '../bubble';
import { ParentBubble } from '../parentBubble';
import { BUBBLES } from '../mock-bubbles';
import { searchArray } from '../search-array';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  parentBubbles = BUBBLES;
  childBubbles = [];
  public checkModel: any = { left: true, middle: false, right: false };
  public radioModel: string = 'Left';

  constructor() { }

  ngOnInit() {
  }

  isChecked(parent: ParentBubble): boolean {
    return parent.checked;
  }

  onClickParentBubble(parent:ParentBubble): void {
  	parent.checked = !parent.checked;
  	this.childBubbles = parent.children;
  }

  clear(searchArray: string[]): void {
  	searchArray = [];
  }

  saveToArray(item:Bubble): void {
  	searchArray.push(item.name);
  }
}
