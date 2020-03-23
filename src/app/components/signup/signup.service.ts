import { Injectable } from '@angular/core';
import { Profile } from '../profile/profile.service';
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

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  // POST - create a new user
  postNewUser(profile: Profile): Observable<Profile> {
    let newUserPOSTUrl = `http://ec2-3-21-237-82.us-east-2.compute.amazonaws.com:8090/LegendaryStudyCompanionBackend-0.0.1-SNAPSHOT/user`;
    return this.http.post<Profile>(newUserPOSTUrl, profile, httpOptions);
  }
}
