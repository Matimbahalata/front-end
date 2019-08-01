import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {davidComponent} from './david/david.component'

const routes: Routes = [
  {path : 'home', component: HomeComponent},
  {path : 'david', component: davidComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
