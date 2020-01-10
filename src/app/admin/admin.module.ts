import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent
  ],
  imports: [
      AdminRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AdminModule { }
