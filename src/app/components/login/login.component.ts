import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { fadeBottom } from '../../animations/fadeBottom';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [fadeBottom]
})
export class LoginComponent implements OnInit {
  public title: string;

  constructor() { 
    this.title = "Identificate";
  }

  ngOnInit() {
  }

}
