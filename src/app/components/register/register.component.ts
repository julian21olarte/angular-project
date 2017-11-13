import { Component, OnInit } from '@angular/core';
import { fadeBottom } from "../../animations/fadeBottom";
import { ActivatedRoute, Router, Params } from '@angular/router';
import { User } from '../../models/user';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [fadeBottom],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  public title: string;
  public user: User;
  public response: { 
    status: boolean,
    message: string
  };

  constructor( 
    private _route: ActivatedRoute, 
    private _router: Router,
    private _userService: UserService
  ) { 
    this.title = "Registro de usuario";
    this.user = new User('', '', '', '', 'ROLE_USER', '');
  }

  ngOnInit() {
  }

  onSubmit() {
    this._userService.register( this.user )
      .subscribe( 
        response => {
          if( response.user && response.user._id ) {
            this.response = {status: true, message: 'El usuario fue agregado correctamente'};
            this.user = new User('', '', '', '', 'ROLE_USER', '');
          }
          else {
            this.response = {status: false, message: 'El usuario no pudo ser agregado'};
          }
        },
        err => {
          console.log( err );
        }
      )
  }

}
