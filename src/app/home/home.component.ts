import { Component, OnInit, Input } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginService } from '../login.service';
import {User} from '../user';
import {Router}  from  '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FoodComponent } from '../food/food.component';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public usery=[];
  public userob=new User();
  show=false;
  fd;
  c=0;
  x=0;
  up=true;
  

   keys=Object.keys(localStorage);
  constructor(private logins:LoginService,private router:Router,private spinner: NgxSpinnerService,
    config: NgbModalConfig, private modalService: NgbModal) { 
    config.backdrop = 'static';
    config.keyboard = false; }

  ngOnInit() {
    this.up=true;
    for (var i = 0; i<localStorage.length; i++) {
   console.log(JSON.parse(localStorage.getItem(this.keys[i])));
     this.usery.push(JSON.parse(localStorage.getItem(this.keys[i])));
    }


    this.spinner.show();
    setTimeout(() => {
        this.spinner.hide();
    }, 1000);
  }

 
  open(content,u) {
    this.modalService.open(content); 
    this.fd=JSON.stringify(u);
    this.x=u.id-1;
     console.log(this.x);
     console.log(this.usery[u.id-1]); 
     console.log(this.fd);
     //const modalRef = this.modalService.open();
     //modalRef.componentInstance.p = 'World';
     
   }
    
  
  onclear(u){
    console.log(u.id);
    window.localStorage.removeItem(u.id);
    window.location.reload();
    }
    editing(u){ 
    this.show=true;
    this.userob.setId(u.id);
    this.userob.setfirstname(u.firstname);
    this.userob.setemail(u.email);
    this.userob.setpassword(u.password);
    this.userob.setphone(u.phone);
    this.userob.setdob(u.dob);
    }
    onSubmit1(myForm1){
    localStorage.setItem(myForm1.id,JSON.stringify(myForm1));
    this.up=false;
    //window.location.reload();
    }

    desc(u){
      this.router.navigate(['/desc',u.id]);
    }
 
  }
  
 /*
  console.log(id);
  var nid=id-1;
  let fn=user[nid].firstname;
  let result = prompt("Edit Task Title", fn);
  if (result !== null && result !== ""){
    user[nid].firstname=result;
    console.log(user[nid].firstname);
    localStorage.setItem(user[nid].id,JSON.stringify(user[nid]));
  
*/
    /*
     console.log((JSON.stringify(user[1])));
  let fn=user[1].firstname;
  let result = prompt("Edit Task Title", fn);
  if (result !== null && result !== ""){
    user[1].firstname=result;
    console.log(user[1].firstname);
    localStorage.setItem(user[1].id,JSON.stringify(user[1]));
    */