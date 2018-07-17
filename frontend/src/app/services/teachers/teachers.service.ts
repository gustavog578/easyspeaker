import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class TeachersService {

  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  get(id) {
    return this.http.get(`${this.baseUrl}/teacher`, id);
  }

  getAll(){
    return this.http.get(`${this.baseUrl}/teachers`);
  }

}
