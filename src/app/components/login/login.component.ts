import { Component, OnInit } from '@angular/core';
import { Login, LoginService, UserToken } from './login.service';
import { HttpResponse } from '@angular/common/http';
import { HttpConfigService } from 'src/app/http-config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  login: Login;
  token: UserToken;
  resp: HttpResponse<any>;
  headers: string[];

  constructor(private loginService: LoginService, private config: HttpConfigService) { }

  ngOnInit(): void {
  }

  attemptLogin(username: string, password: string) {
    
    this.login = {
      userName: username,
      email: username,
      password: password
    };

    // console.log("inside attempt login");
    this.loginService.postLoginInfo(this.login).subscribe(resp => {
      console.log(resp.headers.get('Authorization'));
      sessionStorage.setItem("token", resp.headers.get('Authorization'));
      window.location.href = this.config.endpoint + "app/search";
    });
  }
}
