import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NothandoComponent } from './nothando/nothando.component';
import { MatimbaComponent } from './matimba/matimba.component';
=======
import { HomeComponent } from './home/home.component';
>>>>>>> 71976bc48b6c78342e4137630cb166642e707231

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    NothandoComponent,
MatimbaComponent
=======
    HomeComponent
>>>>>>> 71976bc48b6c78342e4137630cb166642e707231
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
