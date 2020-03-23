import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Resource, Subject } from '../mycontent/mycontent.service';
import { Observable } from 'rxjs';
import { HttpConfigService } from 'src/app/http-config.service';

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

  constructor(private http:HttpClient, private config: HttpConfigService) { }

  getAllBlacklistsUrl = this.config.endpoint + `blacklist`;
  putUpdateStatusUrl = this.config.endpoint + `blacklist/`;


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
