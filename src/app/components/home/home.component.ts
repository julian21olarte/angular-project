import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
  title = 'Titulo de Home Angular 4';
  constructor() { }

  ngOnInit() { }
}