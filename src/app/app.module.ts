import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrezisComponent } from './prezis/prezis.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import {DemoMaterialModule} from './material.module';


const appRoutes: Routes = [
{
  path : 'prezis',
  component : PrezisComponent
 } , 
 { path: '', redirectTo: '/prezis', pathMatch: 'full' }
 ]

@NgModule({
  declarations: [
    AppComponent,
    PrezisComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    DemoMaterialModule , 
    RouterModule.forRoot(appRoutes),
    HttpClientModule , 
    FormsModule , ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
