import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpConfigService } from 'src/app/http-config.service';

// https://angular.io/guide/http#adding-headers
export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'auth-key'         // we need to flesh this out
  }),
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

  resources: Resource[];

  constructor(private http: HttpClient, private config: HttpConfigService) { }

  getSearchedResources(query: String, filters: String) {
    httpOptions.headers = httpOptions.headers.set('Authorization', `${sessionStorage.token}`);
    let resourceQueryUrl = this.config.endpoint + `resource/?q=${query}&filters=${filters}`;
    return this.http.get<Resource[]>(resourceQueryUrl, httpOptions);
  }

  postSavedResource(resource: Resource): Observable<Resource> {
    let tokenArray = sessionStorage.token.split(':',2);
    httpOptions.headers = httpOptions.headers.set('Authorization', `${sessionStorage.token}`);
    let resourceQueryUrl = this.config.endpoint + `user/${tokenArray[0]}/resources`;
    return this.http.post<any>(resourceQueryUrl, resource, httpOptions);
  }

  deleteSavedResource(resource: Resource): Observable<Resource> {
    let tokenArray = sessionStorage.token.split(':',2);
    httpOptions.headers = httpOptions.headers.set('Authorization', `${sessionStorage.token}`);
    let resourceQueryUrl = this.config.endpoint + `user/${tokenArray[0]}/resources`;
    return this.http.request<any>('DELETE', resourceQueryUrl, { 
      headers: httpOptions.headers, 
      body: resource
    });
  }

  postFlaggedResource(resource: Resource) {
    // TODO: Create implementation
  }

}
