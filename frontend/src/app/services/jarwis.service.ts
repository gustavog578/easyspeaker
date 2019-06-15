import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class JarwisService {

  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  signup(data){
    console.log(data);
    return this.http.post(`${this.baseUrl}/signup`,data);
  }

  login(data){
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  me(){
    return this.http.get(`${this.baseUrl}/me`);
  }

  sendPasswordResetLink(data){
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, data);
  }

  changePassword(data) {
    return this.http.post(`${this.baseUrl}/resetPassword`, data);
  }
  

}
