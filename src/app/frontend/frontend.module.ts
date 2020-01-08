import { NgModule } from '@angular/core';

import { FrontendComponent } from './frontend.component';
import { HomeComponent } from './home/home.component';
import { FrontendRoutingModule } from './frontend-routing.module';

@NgModule({
  declarations: [
    FrontendComponent,
    HomeComponent
  ],
  imports: [
    FrontendRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class FrontendModule { }
