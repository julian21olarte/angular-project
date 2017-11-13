import { Component, OnInit } from '@angular/core';
import { fadeLateral } from "../../animations/fadeLateral";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [fadeLateral]
})

export class AboutComponent implements OnInit {
  title = 'About';
  constructor() { }

  ngOnInit() { }
}