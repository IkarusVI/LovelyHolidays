import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private loginUrl: string = "http://127.0.0.1:8000/api/login"

  public login(credentials: User): Observable<any>{
    return this.http.post(this.loginUrl, credentials);
  }



}
