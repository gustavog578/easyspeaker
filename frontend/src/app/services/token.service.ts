import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

  private iss = {
    login  : 'http://localhost:3000/api/login',
    signup : 'http://localhost:3000/api/signup'
  };

  constructor() { }

  handle(token){
    console.log("en service", token);
    this.set(token);
    console.log(this.isValid());
  }

  set(token){
    localStorage.setItem('token', token);
  }

  get(){
    console.log("GETTING TOKEN", localStorage.getItem('token'));
    return localStorage.getItem('token');
  }
  
  getUser(){
    return localStorage.getItem('username');
  }
  
  setUser(fullname){
    localStorage.setItem('username', fullname);
  }

  remove(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }  

  isValid(){
    const token = this.get();
    console.log("TOKEN", token)
    if(token){
      const payload = this.payload(token);
      console.log(payload);
      if(payload){
        return true;
        /*let obj = Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false; 
        console.log("OBJ PAYLOAD", obj);
        return obj;*/
      }
    }
    return false;
  }


  payload(token){
    
    const payload = token.split('.')[1];
    
    console.log(this.decode(payload));
    
    return this.decode(payload);
  }

  decode(payload){
    return JSON.parse(atob(payload));
  }

  loggedIn(){
    console.log(this.isValid());
    return this.isValid();
  }

}

