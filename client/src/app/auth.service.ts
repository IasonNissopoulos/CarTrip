import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';

class Credentials {
  constructor(public username: string, public password: string) {

  }
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  username: string = null;
  isLoggedIn: boolean = false;

  constructor(private http: HttpClient) { }

  login(username, password) : Observable<boolean> {
    const authUrl = `api/token/`;
    var credentials = new Credentials(username, password);
    return this.http
    .post(authUrl, credentials, httpOptions).pipe(
      map(results => {
        if (results['access']) {
          localStorage.setItem('cartripfrontend-jwt-access-token',
          results['access']);
          this.isLoggedIn = true;
          username = username;
          this.username = username;
          if (results['refresh']) {
            localStorage.setItem('cartripfrontend-jwt-refresh-token',
            results['refresh']);
          }
          return true;
        } else {
          return false;
        }
      }),
      catchError(error => {
        console.log(`Login service: ${error}`);
        return of(false);
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('cartripfrontend-jwt-access-token');
    localStorage.removeItem('cartripfrontend-jwt-refresh-token');
  }

  getDecodedAccessToken(token: string): any {
    try{
      return jwt_decode(token);
    }
    catch(Error){
      return null;
    }
  }

  getUserId() : number {
    let tokenInfo = this.getDecodedAccessToken(localStorage.getItem("cartripfrontend-jwt-access-token")); // decode token
    let user_id = tokenInfo.user_id; // get token expiration dateTime
    return user_id;
    console.log(user_id); // show decoded token object in console

  }

}
