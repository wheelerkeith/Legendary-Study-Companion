import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile/profile.service';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  profile: Profile;

  constructor(private signupService: SignupService) { }

  ngOnInit(): void {
    this.profile = {
      fullName: "",
      userName: "",
      email: "",
      password: "",
      role: 0
    };
  }

  newUser() {
    console.log("inside newUser method");
    this.signupService.postNewUser(this.profile).subscribe();
  }

}
