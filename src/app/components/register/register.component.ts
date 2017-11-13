import { Component, OnInit } from '@angular/core';
import { fadeBottom } from "../../animations/fadeBottom";
import { ActivatedRoute, Router, Params } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [fadeBottom]
})
export class RegisterComponent implements OnInit {
  public title: string;
  public user: User;

  constructor( private _route: ActivatedRoute, private _router: Router ) { 
    this.title = "Registro de usuario";
    this.user = new User('', '', '', '', 'ROLE_USER', '');
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log( this.user );
  }

}
