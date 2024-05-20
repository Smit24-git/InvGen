import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  form!:FormGroup;
  
  @Output() onLogin = new EventEmitter<void>();

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
      rPassword: ['',Validators.required],
    });
  }

  registerUser() {

  }

  login(){
    this.onLogin.emit();  
  }
}
