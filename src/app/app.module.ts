import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllComponent } from './view-all/view-all.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SearchComponent } from './search/search.component'
const myroute:Routes=[
  {
    path:'',
    component:AddPatientComponent
  },{
    path:'view',
    component:ViewAllComponent
  },{
    path:'search',
    component:SearchComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    AddPatientComponent,
    ViewAllComponent,
    NavbarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
