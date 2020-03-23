import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpConfigService {

  awsEndpoint: String = 'http://ec2-18-222-27-219.us-east-2.compute.amazonaws.com:8090/LegendaryStudyCompanionBackend-0.0.1-SNAPSHOT/';
  endpoint: String = 'http://localhost:8080/LegendaryStudyCompanionBackend/';


  constructor() { }
}
