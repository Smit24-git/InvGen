import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './modules/login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomComponents } from './components/custom-components.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ManageSystemModule } from './modules/manage-system/manage-system.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CustomComponents,
    LoginModule,
    SharedModule,
    FontAwesomeModule,
    ManageSystemModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
