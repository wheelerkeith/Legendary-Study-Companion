import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// https://angular.io/guide/http#adding-headers
export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'auth-key'         // we need to flesh this out
  })
};

export interface Profile {
  fullName: string;
  userName: string;
  email: string;
  password: string;
  role: any;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }


  // GET - get request for user information
  getUserInfo() {
    let tokenArray = sessionStorage.token.split(':',2);
    httpOptions.headers = httpOptions.headers.set('Authorization', `${sessionStorage.token}`);
    let userGETInfoUrl = `http://localhost:8080/LegendaryStudyCompanionBackend/user/${tokenArray[0]}`;
    return this.http.get<Profile>(userGETInfoUrl, httpOptions);
  }

  // PUT - put for updating user info
  putProfileInfo (profile: Profile): Observable<Profile> {
    let tokenArray = sessionStorage.token.split(':',2);
    let userPUTInfoUrl = `http://localhost:8080/LegendaryStudyCompanionBackend/user/${tokenArray[0]}`;
    httpOptions.headers = httpOptions.headers.set('Authorization', `${sessionStorage.token}`);
    return this.http.put<Profile>(userPUTInfoUrl, profile, httpOptions);
  }

}
