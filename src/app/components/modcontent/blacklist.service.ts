import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Resource, Subject } from '../mycontent/mycontent.service';
import { Observable } from 'rxjs';

const httOprtions = {
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

  getAllBlacklistsUrl = `http://localhost:8080/LegendaryStudyCompanionBackend/blacklist`;
  putUpdateStatusUrl = `http://localhost:8080/LegendaryStudyCompanionBackend/blacklist/`;


  // GET - get all blacklists
  getAllBlacklists (): Observable<Blacklist[]> {
    return this.http.get<Blacklist[]>(this.getAllBlacklistsUrl);
  }

  // PUT - update the status of the blacklist
  putUpdateStatus (urlSuffix: any): Observable<Blacklist> {
    return this.http.put<Blacklist>(this.putUpdateStatusUrl+urlSuffix, httOprtions);
  }
}
