import { Component, OnInit } from '@angular/core';
import { USERS } from "../../mock-user";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  techskills = USERS[0].technicalSkills;
  leadershipskills = USERS[0].leadershipSkills;

  constructor() { }

  ngOnInit() {
  }

}
