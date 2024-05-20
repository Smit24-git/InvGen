import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrl: './login-main.component.scss'
})
export class LoginMainComponent implements OnInit {
  
  isLogin = true;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
