import { Component, OnInit,Input } from '@angular/core';
import {LoginService} from  '../login.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  @Input() p;
showFood = false;
showpayment=false;
food;
food1:Array<{id:number,name:string,price:number}>=[];
fd;
c=0;
  constructor(private logins:LoginService,private spinner: NgxSpinnerService) { }

  ngOnInit() { 
    this.food=this.logins.getFood();
      this.spinner.show();
      setTimeout(() => {
          this.spinner.hide();
      }, 1000);
  }

  add(f){
    this.showFood=true;
    this.fd=JSON.stringify(f);
    console.log(f.id);
    //console.log(this.fd);
    console.log(this.food[f.id-1]);
    //var fl=this.food.length;
    //console.log(fl);
   //this.food1.splice(f.id,fl-1);
    //var i=f.id-1;
   this.food1.push(
    {
     "id":f.id,
     "name":f.name,
     "price":f.price
    });
    console.log(this.food1[f.id-1]);
   // this.c=f.price;
    this.c=this.c+f.price;
    console.log(this.c);
  }


  onCheckout(){
    this.showpayment=true;
    
  }
}
