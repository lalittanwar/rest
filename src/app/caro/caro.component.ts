import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { trigger, state, style, animate, transition } from '@angular/animations';
import * as AOS from 'aos';

@Component({
  selector: 'app-caro',
  templateUrl: './caro.component.html',
  styleUrls: ['./caro.component.css'],
  providers:[NgbCarouselConfig],
  animations:[
    trigger('fadeInOut', [
    state('void', style({
      opacity: 0
    })),
    transition('void <=> *', animate(2000)),
  ]),]
})
export class CaroComponent implements OnInit {

 constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(){
    AOS.init();
  }
}
