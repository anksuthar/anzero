import { NgModule } from '@angular/core';

import { FrontendComponent } from './frontend.component';
import { HomeComponent } from './home/home.component';
import { FrontendRoutingModule } from './frontend-routing.module';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';


@NgModule({
  declarations: [
    FrontendComponent,
    HomeComponent,
    UserComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    FrontendRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class FrontendModule { }
