import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private logins:LoginService,private router:Router){}
  canActivate():boolean {
   if(this.logins.getUserLoggedin()){
    return true;
   }
   else{
     this.router.navigate(['/login'])
     return false;
   } 
  }
}
