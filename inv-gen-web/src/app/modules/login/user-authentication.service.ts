import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginUserResponse, RegisterUserResponse } from './login.model';
import { Observable, map } from 'rxjs';
import { LocalStorageService } from 'src/app/shared/services/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

  private readonly registerURL = environment.url + '/users/register';
  private readonly loginURL = environment.url + '/users/login';
  private readonly authTestURL = environment.url + '/auth/test';

  private http = inject(HttpClient);
  private localStorageService = inject(LocalStorageService);

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

  public checkIsLoggedIn(){
    if(this.localStorageService.getItem(this.localStorageService.tokenKey))
      return true;
    return false;
  }
  public testAuthentication():Observable<string> {
    return this.http.get<string>(this.authTestURL);
  }
}
