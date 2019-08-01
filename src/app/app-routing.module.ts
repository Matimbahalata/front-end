import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AlicompComponent} from './alicomp/alicomp.component'
const routes: Routes = [
  {path : 'home', component: HomeComponent},
  {path : 'alicomp', component: AlicompComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
