import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontendComponent } from './frontend/frontend.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { 
    path: '', component: FrontendComponent
  },
  { 
    path: 'admin', children: [{ path: '', component: AdminComponent }]
  },
  { path: '**', redirectTo:"", pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
