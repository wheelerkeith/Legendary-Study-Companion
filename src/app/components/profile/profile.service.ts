import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// https://angular.io/guide/http#adding-headers
const httpOptions = {
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

  userGETInfoUrl = `http://localhost:8080/LegendaryStudyCompanionBackend/user/1`;
  userPUTInfoUrl = `http://localhost:8080/LegendaryStudyCompanionBackend/user/1`;


  // GET - get request for user information
  getUserInfo() {
    return this.http.get<Profile>(this.userGETInfoUrl);
  }

  // PUT - put for updating user info
  putProfileInfo (profile: Profile): Observable<Profile> {
    return this.http.put<Profile>(this.userPUTInfoUrl, profile, httpOptions);
  }

}
