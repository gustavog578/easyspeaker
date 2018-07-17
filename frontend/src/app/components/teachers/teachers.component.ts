import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../../services/teachers/teachers.service';
import { Route } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

/*   public teachers = {
    id: null,
    email: null,
    name: null,
    lastname: null,
    genre: null
  }; */

  public teachers = null;

  constructor(private TeacherService: TeachersService ) 
              { }

  ngOnInit() {

    this.TeacherService.getAll().subscribe(
      data => this.handleResponse(data),
      error => console.log(error)
    )

  }
  handleResponse(data){
    this.teachers = data['data'];
 } 

}
