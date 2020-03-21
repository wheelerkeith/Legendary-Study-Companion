import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

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

  constructor(private http:HttpClient) { }

  studySetPOSTUrl = ``;
  studySetPUTUrl = ``;
  studySetDELETE = ``;

  // GET - get all user content
  getMyContent() {
    let tokenArray = sessionStorage.token.split(':',2);
    httpOptions.headers = httpOptions.headers.set('Authorization', `${sessionStorage.token}`);
    let getMyContentUrl = `http://localhost:8080/LegendaryStudyCompanionBackend/user/${tokenArray[0]}`;
    return this.http.get<MyContent>(getMyContentUrl, httpOptions);
  }
}
