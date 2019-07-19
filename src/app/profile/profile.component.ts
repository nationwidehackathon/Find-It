import { Component, OnInit } from '@angular/core';
import { USERS } from '../mock-user';
import { ProfileService } from '../profile.service';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users = USERS;
  constructor(private profileService:ProfileService) { }

  ngOnInit() {
  }

  leadershipskills = this.users[0].leadershipSkills;

  user = this.profileService.getUserFromShortName();
  contactinfo = this.profileService.getContactInfo();
  techskills = this.profileService.getTechSkills();
}
