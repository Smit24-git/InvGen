import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from 'src/app/shared/validators/password-match.validator';
import { UserAuthenticationService } from '../user-authentication.service';
import { ToastMessageService } from 'src/app/components/toast-message/toast-message.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  form!:FormGroup;
  
  @Output() onLogin = new EventEmitter<void>();

  fb:FormBuilder = inject(FormBuilder);

  userAuthService = inject(UserAuthenticationService);
  toastMsgService = inject(ToastMessageService);

  constructor(){

  }

  ngOnInit(): void {
    this.buildForm();
  }
  
  buildForm(){
    this.form = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required],
      rPassword: ['',Validators.required],
    },{
      validators: [passwordMatchValidator],
    });
  }

  registerUser() {
    if(this.form.invalid) return;

    const formValue = this.form.getRawValue();

    this.userAuthService.registerUser({
      userName: formValue.username,
      password: formValue.password  
    }).subscribe(userDetails=>{
      this.toastMsgService.showSuccess('Congratulations!', 'You have been registered successfully!');
      this.login();
    });
  }

  login(){
    this.onLogin.emit();  
  }
}
