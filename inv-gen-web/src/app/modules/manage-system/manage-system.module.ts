import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ManageSystemComponent } from './manage-system.component';



@NgModule({
  declarations: [
    ManageSystemComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ManageSystemComponent,
  ],
  providers: [

  ]
})
export class ManageSystemModule { }
