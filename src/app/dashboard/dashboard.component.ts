import { Component, OnInit,Input } from '@angular/core';
import {FormsModule}  from '@angular/forms';
import{User} from '../user';
import {LoginService} from  '../login.service';
import {Observable} from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  submitted=false;
  show=false;
  public user=[];
  d:any=[];
  public uname_get:string;
  public ll;
  
  constructor(private logins:LoginService,private spinner: NgxSpinnerService) { 
    this.uname_get=this.logins.getData();
    
  //this.logins.getData().subscribe(Data => this.uname_get=Data);
    console.log(this.uname_get);
  }

  ngOnInit() {
    const keys=Object.keys(localStorage);
    for (var i = 0; i<localStorage.length; i++) {
   //console.log(JSON.parse(localStorage.getItem(keys[i])));
     this.user.push(JSON.parse(localStorage.getItem(keys[i])));
     this.ll= localStorage.length+1;
     console.log(this.ll);

     this.spinner.show();
     setTimeout(() => {
         this.spinner.hide();
     }, 1000);
}
}
  
  onSubmit(myForm){
    this.submitted=true;
    this.show=true;
    localStorage.setItem(myForm.id,JSON.stringify(myForm));
  }

  
}


