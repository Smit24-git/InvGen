import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RegisterUserResponse } from './login.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

  private readonly registerURL = environment.url + '/users/register'

  private http = inject(HttpClient);

  constructor() { }

  public registerUser(registerRequst: {userName:string, password:string}):Observable<{id:string, userName:string}>{
    return this.http.post<RegisterUserResponse>(this.registerURL,registerRequst).pipe(
      map((res:RegisterUserResponse)=>{
        return res.userDetails;
      }));
  }
}
