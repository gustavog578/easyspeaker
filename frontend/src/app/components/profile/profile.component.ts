import { Component, OnInit } from '@angular/core';

// Declaramos las variables para jQuery
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public username = 'Tavo Gonzalez';  

  constructor() {
    
   }

  ngOnInit() {
  }

  public showPanel() {
     $('#sidebar').toggleClass('active');
  }

}
