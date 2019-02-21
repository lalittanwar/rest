import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Observable} from 'rxjs';
import { NgxUiLoaderConfig, NgxUiLoaderService } from 'ngx-ui-loader';
import {HttpClient} from '@angular/common/http';
import {User} from './user';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //private uname = Subject<string>;
  //private uname=new Subject<string>();
uname:string;
  private Loggedin;
  private username;

  private url :string="https://jsonplaceholder.typicode.com/users";
  //private url :string="https://reqres.in/api/login";
  
  constructor(private http:HttpClient ) {
    //this.config = this.ngxService.getDefaultConfig(); 
    this.Loggedin=false;
    }

    public getUser():Observable<User[]>{
      return  this.http.get<User[]>(this.url);
    }
    public getData(){
      return this.uname;
    }

    public setData(newName:string):void{
      //this.uname.next(newName);
      this.uname=newName;
    }
 
  setUserLoggedin(){
    this.Loggedin=true;
  }
  getUserLoggedin(){
    return this.Loggedin;
  }
  getFood(){
  return[
    {"id":1,"name":"Dosa","price":40,"src":"assets/10.jpg"},
    {"id":2,"name":"Vada-Pav","price":20,"src":"assets/11.jpg"},
    {"id":3,"name":"Pav-Bhaji","price":30,"src":"assets/pavbhaji.jpg"},
    {"id":4,"name":"Idly","price":25,"src":"assets/idly.jpg"},
    {"id":5,"name":"PaniPuri","price":10,"src":"assets/12.jpg"}
  ];
}
}
