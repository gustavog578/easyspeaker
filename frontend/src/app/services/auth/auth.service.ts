import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject  } from "rxjs/BehaviorSubject";
import { TokenService } from '../token.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {



  private loggedIn = new BehaviorSubject<boolean>(this.Token.loggedIn());
  public userUpdated = new BehaviorSubject<string>(this.Token.getUser());
  //@Output() userLogged = new BehaviorSubject <string>("");

  //userUpdated: EventEmitter<string> = new EventEmitter();
  //user = this.userLogged.asObservable();
  
  authStatus = this.loggedIn.asObservable();
  userLogged = this.userUpdated.asObservable();

  changeAuthStatus(value : boolean){
    this.loggedIn.next(value);
  }  

 /* getCurrentUser(): Observable<string> {
    return this.userLogged.asObservable();
  }
*/
  showUser(username : string, lastname : string){
    let fullname = username + ' ' +lastname;
    this.userUpdated.next(fullname);
   // console.log("name ", fullname);
    //this.userUpdated.emit(fullname);

  }

  saveUser(name: string, lastname:string){
    let fullname = name + ' ' + lastname;
    this.Token.setUser(fullname);

  }

  constructor(private Token : TokenService) {
    
   }


}
