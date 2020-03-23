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
  likeCount: number,
  source: String,
  saved: Boolean
}

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  private awsUrlEndpoint: String = "http://ec2-3-21-237-82.us-east-2.compute.amazonaws.com:8090/LegendaryStudyCompanionBackend-0.0.1-SNAPSHOT/";
  private urlEndpoint: String = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getSearchedResources(query: String) {
    httpOptions.headers = httpOptions.headers.set('Authorization', `${sessionStorage.token}`);
    let resourceQueryUrl = this.urlEndpoint + `resource/?q=${query}`;
    return this.http.get<Resource[]>(resourceQueryUrl, httpOptions);
  }

  postSavedResource(resource: Resource): Observable<Resource> {
    let tokenArray = sessionStorage.token.split(':',2);
    httpOptions.headers = httpOptions.headers.set('Authorization', `${sessionStorage.token}`);
    let resourceQueryUrl = this.urlEndpoint + `user/${tokenArray[0]}/resources`;
    return this.http.post<any>(resourceQueryUrl, resource, httpOptions);
  }

  postFlaggedResource(resource: Resource) {
    // TODO: Create implementation
  }

}
