import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders ({
        'Content-Type': 'application/json',
        'Authorization': 'auth-key'
    })
};

export interface Login {
    username: string;
    password: string;
}

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) {}

    // Set the login info
    setLoginInfo(login: Login) {
        getLoginInfoUrl = `http://localhost:8080/LegendaryStudyCompanionBackend/user/${login.username}`;
        return this.http.get<Login>(this.getLoginInfoUrl);
    }


}