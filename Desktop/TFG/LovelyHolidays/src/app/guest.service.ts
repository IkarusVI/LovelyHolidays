import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  private hostUrl: string = "http://127.0.0.1:8000/api/guest"
  
  constructor(private http: HttpClient) { }

  public getGuest(): Observable<any[]>{
    return this.http.get<any>(this.hostUrl);
  }
  public createGuest(host: User): Observable<any>{
    return this.http.post(this.hostUrl, host);
  }
}
