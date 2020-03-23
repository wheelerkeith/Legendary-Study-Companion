import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Resource, Subject } from '../mycontent/mycontent.service';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'auth-key'         // we need to flesh this out
  })
};

export interface CompKey {
  resource: any;
  subject: any;
}

export interface BlacklistEntry {

}

export interface Blacklist {
  compKey: CompKey;
  resource: Resource;
  subject: Subject;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlacklistService {

  constructor(private http:HttpClient) { }

  getAllBlacklistsUrl = `http://ec2-3-21-237-82.us-east-2.compute.amazonaws.com:8090/LegendaryStudyCompanionBackend-0.0.1-SNAPSHOT/blacklist`;
  putUpdateStatusUrl = `http://ec2-3-21-237-82.us-east-2.compute.amazonaws.com:8090/LegendaryStudyCompanionBackend-0.0.1-SNAPSHOT/blacklist/`;


  // GET - get all blacklists
  getAllBlacklists (): Observable<Blacklist[]> {
    httpOptions.headers = httpOptions.headers.set('Authorization', `${sessionStorage.token}`);
    return this.http.get<Blacklist[]>(this.getAllBlacklistsUrl, httpOptions);
  }

  // PUT - update the status of the blacklist
  putUpdateStatus (urlSuffix: any): Observable<Blacklist> {
    httpOptions.headers = httpOptions.headers.set('Authorization', `${sessionStorage.token}`);
    return this.http.put<Blacklist>(this.putUpdateStatusUrl+urlSuffix, httpOptions);
  }
}
