import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterComponent } from './register/register.component';
import { LoginMainComponent } from './login-main/login-main.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LoginMainComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    LoginMainComponent,
  ]
})
export class LoginModule { }
