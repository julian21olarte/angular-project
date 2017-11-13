import { Component, OnInit } from '@angular/core';
import { fadeLateral } from "../../animations/fadeLateral";

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: [ 'home.component.css' ],
  animations: [fadeLateral]
})

export class HomeComponent implements OnInit {
  title = 'Titulo de Home Angular 4';
  constructor() { }

  ngOnInit() { }
}