import { NgModule } from '@angular/core';

import { FrontendComponent } from './frontend.component';
import { HomeComponent } from './home/home.component';
import { FrontendRoutingModule } from './frontend-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    FrontendComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    FrontendRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class FrontendModule { }
