import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { homeComponent} from './home/home.Component';
import { RASTAComponent} from './RASTA/rasta.component';

const routes: Routes = [ {path:'home',component:homeComponent},{path:'RASTA',component:RASTAComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
