import { Component, OnInit , Input} from '@angular/core';
import { USERS } from '../mock-user';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  data=USERS;
  constructor() { }

  ngOnInit() {}
}
