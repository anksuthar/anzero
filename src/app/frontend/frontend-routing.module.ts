import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontendComponent } from './frontend.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './user/signup/signup.component';
import { SigninComponent } from './user/signin/signin.component';

const routes: Routes = [
  { path: '', component: FrontendComponent },
  { path: 'home', component: HomeComponent },
  { 
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignupComponent }]
  },
  { 
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SigninComponent }]
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }
