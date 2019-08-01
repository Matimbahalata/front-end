import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { NothandoComponent } from './nothando/nothando.component';
import { MatimbaComponent } from './matimba/matimba.component';
=======
import { HomeComponent } from './home/home.component';
>>>>>>> 71976bc48b6c78342e4137630cb166642e707231
=======
import { RASTAComponent } from './rasta/rasta.component';
>>>>>>> 544248523d97ef02c3b3fcc50fdae55cbe653f98

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    NothandoComponent,
MatimbaComponent
=======
    HomeComponent
>>>>>>> 71976bc48b6c78342e4137630cb166642e707231
=======
    RASTAComponent
>>>>>>> 544248523d97ef02c3b3fcc50fdae55cbe653f98
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
