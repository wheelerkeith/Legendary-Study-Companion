import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../profile/profile.service';
import { SignupService } from './signup.service';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  profile: Profile;
  loginComponenet: LoginComponent;
  @Input() loginComponent: LoginComponent;

  constructor(private signupService: SignupService, private loginService: LoginService) { }

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
    let hiddenButton = document.getElementById("hide-me");
    hiddenButton.hidden = false;
  }

  login() {
    this.loginComponenet.attemptLogin(this.profile.userName, this.profile.password);
  }

}
