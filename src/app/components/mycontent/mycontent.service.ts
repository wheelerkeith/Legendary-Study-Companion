import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Profile } from '../profile/profile.service';

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


  getMyContentUrl = `http://localhost:8080/LegendaryStudyCompanionBackend/user/2`;
  studySetPOSTUrl = ``;
  studySetPUTUrl = ``;
  studySetDELETE = ``;

  // GET - get all user content
  getMyContent() {
    return this.http.get<MyContent>(this.getMyContentUrl);
  }
}
