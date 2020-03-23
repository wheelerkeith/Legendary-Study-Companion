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

  constructor(private http:HttpClient) { }

  studySetPOSTUrl = ``;
  studySetPUTUrl = ``;
  studySetDELETE = ``;

  // GET - get all content for user
  getMyContent() {
    let tokenArray = sessionStorage.token.split(':',2);
    httpOptions.headers = httpOptions.headers.set('Authorization', `${sessionStorage.token}`);
    let getMyContentUrl = `http://ec2-3-21-237-82.us-east-2.compute.amazonaws.com:8090/LegendaryStudyCompanionBackend-0.0.1-SNAPSHOT/user/${tokenArray[0]}`;
    return this.http.get<MyContent>(getMyContentUrl, httpOptions);
  }
}
