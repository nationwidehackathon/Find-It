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

}
