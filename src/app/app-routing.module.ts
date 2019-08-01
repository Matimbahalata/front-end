import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import {HomeComponent} from './home/home.component';
<<<<<<< HEAD
import {AlicompComponent} from './alicomp/alicomp.component'
const routes: Routes = [
  {path : 'home', component: HomeComponent},
  {path : 'alicomp', component: AlicompComponent},

=======
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [
  {path : 'home', component: HomeComponent},
  { path : 'contactus', component: ContactusComponent}
>>>>>>> a7d5472abf69e7916e75bc5d670d914afc270285
];
=======
import { homeComponent} from './home/home.Component';
import { RASTAComponent} from './RASTA/rasta.component';

const routes: Routes = [ {path:'home',component:homeComponent},{path:'RASTA',component:RASTAComponent}];
>>>>>>> 544248523d97ef02c3b3fcc50fdae55cbe653f98

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
