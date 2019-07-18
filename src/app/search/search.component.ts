import { Component, OnInit } from '@angular/core';
import { Bubble } from '../bubble';
import { ParentBubble } from '../parentBubble';
import { BUBBLES } from '../mock-bubbles'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  parentBubbles = BUBBLES;

  constructor() { }

  ngOnInit() {
  }

  isChecked(parent:ParentBubble): boolean {
  	return parent.checked;
  }

  onClickParentBubble(parent:ParentBubble): void {
  	console.log("Before: " + parent.checked);
  	parent.checked = !parent.checked;
  	console.log("After: " + parent.checked);
  }
}
