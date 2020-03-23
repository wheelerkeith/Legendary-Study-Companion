import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpConfigService } from 'src/app/http-config.service';

const httpOptions = {
    headers: new HttpHeaders ({
        'Content-Type': 'application/json',
        'Authorization': 'auth-key'
    })
};

export interface Login {
    userName: string;
    email: string;
    password: string;
}

export interface UserToken {
    userId: any;
    role: any;
}

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient, private config: HttpConfigService) {}

    postLoginUrl = this.config.endpoint + `login`;

    // Set the login info
    postLoginInfo(login: Login): Observable<HttpResponse<any>> {
        return this.http.post<any>(this.postLoginUrl, login, { headers: httpOptions.headers, observe: 'response'});
    }
}