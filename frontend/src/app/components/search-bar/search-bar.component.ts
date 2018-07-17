import { Component, OnInit } from '@angular/core';

// Declaramos las variables para jQuery
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  title = "Panel de busqueda";
  constructor() { }

  ngOnInit() {
  }


 

}
