import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  private hostUrl: string = "http://127.0.0.1:8000/api/host"
  
  constructor(
    private http: HttpClient
  ) { }

  public getHost(): Observable<any[]>{
    return this.http.get<any>(this.hostUrl);
  }
  public createHost(host: User): Observable<any>{
    return this.http.post(this.hostUrl, host);
  }
}
