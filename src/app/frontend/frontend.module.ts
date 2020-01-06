import { NgModule } from '@angular/core';
import { FrontendRoutingModule } from './frontend-routing.module';
import { FrontendComponent } from './frontend.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './user/signup/signup.component';
import { SigninComponent } from './user/signin/signin.component';

@NgModule({
  declarations: [
    FrontendComponent,
    HomeComponent,
    UserComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    FrontendRoutingModule
  ],
  providers: [],
  bootstrap: [FrontendComponent]
})
export class FrontendModule { }
