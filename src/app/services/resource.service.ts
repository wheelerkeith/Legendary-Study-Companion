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

export interface Resource {
  title: String,
  url: String,
  likeCount: Number,
  source: String
}

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private http: HttpClient) { }

  getSearchedResources(query: String) {
    httpOptions.headers = httpOptions.headers.set('Authorization', `${sessionStorage.token}`);
    let resourceQueryUrl = `http://localhost:8080/LegendaryStudyCompanionBackend/resource/?q=${query}`;
    return this.http.get<Resource[]>(resourceQueryUrl, httpOptions);
  }

  postSavedResources(query: String) {
    let tokenArray = sessionStorage.token.split(':',2);
    httpOptions.headers = httpOptions.headers.set('Authorization', `${sessionStorage.token}`);
    let resourceQueryUrl = `http://localhost:8080/LegendaryStudyCompanionBackend/user/id/resources`;
    return this.http.post<any>(resourceQueryUrl, httpOptions);
  }

}
