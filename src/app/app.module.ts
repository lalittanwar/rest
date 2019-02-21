import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}  from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule,Routes} from '@angular/router';
import {LoginService} from  './login.service';
import {AuthguardGuard} from './authguard.guard';
import { FoodComponent } from './food/food.component';
import { NgxUiLoaderModule,NgxUiLoaderRouterModule,NgxUiLoaderConfig,SPINNER } from  'ngx-ui-loader';
import { NgxSpinnerModule } from 'ngx-spinner';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CheckComponent } from './check/check.component';
import { CaroComponent } from './caro/caro.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DescComponent } from './desc/desc.component';
import { OverviewComponent } from './overview/overview.component';
import { RestComponent } from './rest/rest.component';



const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: 'red',
 // bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  bgsType: SPINNER.rectangleBounce,
  //pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  //pbThickness: 5, // progress bar thickness
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    FoodComponent,
    CheckComponent,
    CaroComponent,
    PagenotfoundComponent,
    DescComponent,
    OverviewComponent,
    RestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    NgxSpinnerModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule.forRoot()
    
  ],
  providers: [LoginService,AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
