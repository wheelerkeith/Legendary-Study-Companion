import { Component, OnInit, Injectable } from '@angular/core';
import { Login } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  login: Login;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.getLoginInfo();
  }

  getLoginInfo() {
    this.loginService.setLoginInfo().subscribe((data: Login) => this.login = {
      username: data['username'],
      password: data['password']
    });
  }

}
