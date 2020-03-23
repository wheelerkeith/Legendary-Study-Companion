import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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

    constructor(private http: HttpClient) {}

    postLoginUrl = `http://ec2-3-21-237-82.us-east-2.compute.amazonaws.com:8090/LegendaryStudyCompanionBackend-0.0.1-SNAPSHOT/login`;

    // Set the login info
    postLoginInfo(login: Login): Observable<HttpResponse<any>> {
        return this.http.post<any>(this.postLoginUrl, login, { headers: httpOptions.headers, observe: 'response'});
    }
}