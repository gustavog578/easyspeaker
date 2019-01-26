import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

  private iss = {
    login  : 'http://localhost:8000/api/login',
    signup : 'http://localhost:8000/api/signup'
  };

  constructor() { }

  handle(token){
    this.set(token);
    console.log(this.isValid());
  }

  set(token){
    localStorage.setItem('token', token);
  }

  get(){
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
    if(token){
      const payload = this.payload(token);
      if(payload){
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false; 
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
    return this.isValid();
  }

}

