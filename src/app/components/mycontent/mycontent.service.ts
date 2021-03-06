import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpConfigService } from 'src/app/http-config.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'auth-key'         // we need to flesh this out
  })
};

export interface Subject {
  id: any;
  name: string;
}

export interface Resource {
  resourceId: any;
  url: string;
  subject: Subject;
  title: string;
  source: string;

}

export interface StudySet {
  id: any;
  name: string;
  resourceList: Resource[];
}

export interface MyContent {
  userId: any;
  studySets: StudySet[];
  likedResources: Resource[];
}

@Injectable({
  providedIn: 'root'
})
export class MycontentService {

  constructor(private http:HttpClient, private config: HttpConfigService) { }

  studySetPOSTUrl = ``;
  studySetPUTUrl = ``;
  studySetDELETE = ``;

  // GET - get all content for user
  getMyContent() {
    let tokenArray = sessionStorage.token.split(':',2);
    httpOptions.headers = httpOptions.headers.set('Authorization', `${sessionStorage.token}`);
    let getMyContentUrl = this.config.endpoint + `user/${tokenArray[0]}`;
    return this.http.get<MyContent>(getMyContentUrl, httpOptions);
  }
}
