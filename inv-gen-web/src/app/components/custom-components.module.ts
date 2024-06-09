import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './topbar/top-bar.component';
import { ToastMessageComponent } from './toast-message/toast-message.component';
import { SharedModule } from '../shared/shared.module';
import { TopbarMenuComponent } from './topbar-menu/topbar-menu.component';



@NgModule({
  declarations: [
    TopBarComponent,
    ToastMessageComponent,
    TopbarMenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    TopBarComponent,
    ToastMessageComponent,
    TopbarMenuComponent,
  ]
})
export class CustomComponents { }
