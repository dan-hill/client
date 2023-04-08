import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ItemsComponent} from "./items/items.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
