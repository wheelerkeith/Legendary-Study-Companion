import { Injectable } from '@angular/core';
import { Profile } from '../profile/profile.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpConfigService } from 'src/app/http-config.service';

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

  constructor(private http: HttpClient, private config: HttpConfigService) { }

  // POST - create a new user
  postNewUser(profile: Profile): Observable<Profile> {
    let newUserPOSTUrl = `${this.config.endpoint}user`;
    return this.http.post<Profile>(newUserPOSTUrl, profile, httpOptions);
  }
}
