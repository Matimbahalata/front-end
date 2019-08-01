import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import {HomeComponent} from './home/home.component';
import { SandileComponent }
 from './sandile/sandile.component'

const routes: Routes = [
  {path : 'home', component: HomeComponent},
  {path : 'Sandile', component: SandileComponent}
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
