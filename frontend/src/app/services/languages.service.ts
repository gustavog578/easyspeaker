import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class LanguagesService {


  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }


  getLanguages() {
    return this.http.get(`${this.baseUrl}/languages`);
  }

  

}
