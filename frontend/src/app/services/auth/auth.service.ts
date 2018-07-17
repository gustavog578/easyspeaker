import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject  } from "rxjs/BehaviorSubject";
import { TokenService } from '../token.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {



  private loggedIn = new BehaviorSubject <boolean>(this.Token.loggedIn());

  //@Output() userLogged = new BehaviorSubject <string>("");

  userUpdated: EventEmitter<string> = new EventEmitter();

  
  //user = this.userLogged.asObservable();
  
  authStatus = this.loggedIn.asObservable();

  changeAuthStatus(value : boolean){
    this.loggedIn.next(value);
  }  

 /* getCurrentUser(): Observable<string> {
    return this.userLogged.asObservable();
  }
*/
  showUser(name : string, lastname : string){
    let fullname = name + ' ' +lastname;
   // this.userLogged.next(fullname);
    this.userUpdated.emit(fullname);

  }

  constructor(private Token : TokenService) {
    
   }


}
