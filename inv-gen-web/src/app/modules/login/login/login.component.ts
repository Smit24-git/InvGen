import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from '../login.model';
import { UserAuthenticationService } from '../user-authentication.service';
import { ToastMessageService } from 'src/app/components/toast-message/toast-message.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage/local-storage.service';
import { Token } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  form!:FormGroup;
  
  @Output() onRegister = new EventEmitter<void>();

  fb:FormBuilder = inject(FormBuilder);
  userAuthService = inject(UserAuthenticationService);
  toastMsgService = inject(ToastMessageService);
  localStorageService = inject(LocalStorageService);
  router = inject(Router);
  constructor(){

  }

  ngOnInit(): void {
    this.buildForm();
    
    // check is logged in.
    if(this.userAuthService.checkIsLoggedIn()){
      this.userAuthService.testAuthentication().subscribe(()=>{
        this.router.navigate(['/business-settings']);
      });
    }
  }
  
  buildForm(){
    this.form = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required],
    });
  }

  authenticateUser() {
    if(this.form.invalid) return;
    let formData = this.form.getRawValue();
    this.userAuthService.loginUser(formData).subscribe({
      next: ({token})=>this.storeTokenLocally({token}),
      complete: ()=>{
        this.toastMsgService.showSuccess("Login","Logged in successfully."); 
        this.userAuthService.testAuthentication().subscribe((res)=>{
          // route to business - settings.
          this.router.navigate(['business-settings']);
          
        });
      },
    });
  }

  register(){
    this.onRegister.emit();  
  }

  private storeTokenLocally({ token }: { token: string }): void {
    this.localStorageService.setItem({key: "token", value: token});
  }
}
