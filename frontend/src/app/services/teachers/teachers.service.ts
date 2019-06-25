import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';
import { Teacher } from '../../models/teacher'

export interface ListTeachers {
  username : string;
  lastname : string;
  native_language: string;
  id: string,
  other_language: [],
  currency : string
}

@Injectable()
export class TeachersService {
  
  private baseUrl = 'http://localhost:3000/api';
  private marker = new BehaviorSubject(new Array);
  public markersUpdated = this.marker.asObservable();
  

  constructor(private http: HttpClient) { }

  get(id) {
    return this.http.get(`${this.baseUrl}/teacher`, id);
  }

  getAll(){
    return this.http.get(`${this.baseUrl}/teachers`);
  }
  
  
  updateMarkers(markers){

    console.log("actualixados", markers);
    this.marker.next(markers);
    
    
  }  


}
