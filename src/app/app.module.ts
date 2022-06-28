import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowHourComponent } from './show-hour/show-hour.component';
import { ParentComponent } from './parent/parent.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowHourComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
