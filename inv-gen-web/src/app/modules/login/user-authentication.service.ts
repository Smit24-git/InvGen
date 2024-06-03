import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginUserResponse, RegisterUserResponse } from './login.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

  private readonly registerURL = environment.url + '/users/register';
  private readonly loginURL = environment.url + '/users/login';
  private readonly authTestURL = environment.url + '/auth/test';

  private http = inject(HttpClient);

  constructor() { }

  public registerUser(registerRequst: {userName:string, password:string}):Observable<{id:string, userName:string}>{
    return this.http.post<RegisterUserResponse>(this.registerURL,registerRequst).pipe(
      map((res:RegisterUserResponse)=>{
        return res.userDetails;
      }));
  }
  public loginUser(loginRequest: {userName:string, password:string}):Observable<{token:string, username:string}> {
    return this.http.post<LoginUserResponse>(this.loginURL, loginRequest)
    .pipe(map((res:LoginUserResponse)=>{
      return { token: res.token, username: res.userName };
    }));
  }

  public testAuthentication():Observable<string> {
    return this.http.get<string>(this.authTestURL);
  }
}
