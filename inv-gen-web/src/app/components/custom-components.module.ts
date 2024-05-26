import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './topbar/top-bar.component';
import { ToastMessageComponent } from './toast-message/toast-message.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TopBarComponent,
    ToastMessageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    TopBarComponent,
    ToastMessageComponent,
  ]
})
export class CustomComponents { }
