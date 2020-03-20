import { Component, OnInit } from '@angular/core';
import { Profile, ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: Profile;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.populateUserInfo();
  }

  populateUserInfo() {
    console.log("inside populate info");
    this.profileService.getUserInfo().subscribe((data: Profile) => this.profile = {
      fullName: data['fullName'],
      userName: data['userName'],
      email: data['email'],
      password: data['password'],
      role: data['role']
    });
  }

  updateProfileInfo() {
    console.log("inside update info");
      this.profileService.putProfileInfo(this.profile).subscribe();
  }

}
