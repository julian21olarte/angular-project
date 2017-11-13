import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class UserService {
  public url: string;

  constructor( private _http: Http ) { 
    this.url = GLOBAL.url;
  }

  register( userRegister ) {
    //toma de los parametros para la solicitud http (url, params, headers)
    //retorna objeto y lo parseamos a json con .map()
    let params = JSON.stringify( userRegister );
    let headers = new Headers({ 'Content-Type': 'application/json' });

    return this._http.post( (this.url + 'users/register'), params, {headers} )
      .map( res => res.json() );
  }
}