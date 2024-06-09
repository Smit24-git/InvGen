import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginMainComponent } from './modules/login/login-main/login-main.component';
import { ManageSystemComponent } from './modules/manage-system/manage-system.component';

const routes: Routes = [
  {
    path:'',
    component: LoginMainComponent
  },
  {
    path: 'business-settings',
    component: ManageSystemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
