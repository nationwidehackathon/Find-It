import { Component, OnInit } from '@angular/core';
import { USERS } from '../mock-user';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users = USERS;
  leadershipSkills = this.users[0].leadershipSkills;
  user = this.profileService.getUserFromShortName();
  contactInfo = this.profileService.getContactInfo();
  techSkills = this.profileService.getTechSkills();

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
  }
}
