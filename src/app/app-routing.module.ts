import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import {AuthguardGuard} from './authguard.guard';
import { HomeComponent } from './home/home.component';
import { FoodComponent } from './food/food.component';
import  {CheckComponent} from './check/check.component';
import { CaroComponent } from './caro/caro.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DescComponent } from './desc/desc.component';
import { OverviewComponent } from './overview/overview.component';
import { RestComponent } from './rest/rest.component';

const routes: Routes = [
  {path:'',component:CaroComponent,pathMatch: 'full'},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  // {path:'home',component:HomeComponent,canActivate: [AuthguardGuard]},
  {path:'home',component:HomeComponent},
  {path:'food',component:FoodComponent},
  {path:'check',component:CheckComponent},
  {path:'rest',component:RestComponent},
  {path:'desc/:id',component:DescComponent},
  {path:'**',component:PagenotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


