import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontendModule } from './frontend/frontend.module';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,    
    FrontendModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
