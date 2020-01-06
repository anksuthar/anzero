import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontendComponent } from './frontend/frontend.component';
import { UserComponent } from './frontend/user/user.component';
import { SignupComponent } from './frontend/user/signup/signup.component';
import { SigninComponent } from './frontend/user/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontendComponent,
    UserComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
