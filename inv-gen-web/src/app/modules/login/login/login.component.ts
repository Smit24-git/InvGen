import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from '../login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  form!:FormGroup;
  
  @Output() onRegister = new EventEmitter<void>();

  fb:FormBuilder = inject(FormBuilder);

  constructor(){

  }

  ngOnInit(): void {
    this.buildForm();
  }
  
  buildForm(){
    this.form = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required],
    });
  }

  authenticateUser() {

  }

  register(){
    this.onRegister.emit();  
  }
}
