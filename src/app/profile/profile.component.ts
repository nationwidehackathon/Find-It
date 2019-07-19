import { Component, OnInit } from '@angular/core';
import { USERS } from '../mock-user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users = USERS;
  constructor() { }

  contactinfo = this.users[0].contacts;
  techskills = this.users[0].technicalSkills;
  leadershipskills = this.users[0].leadershipSkills;

  ngOnInit() {
  }

}

