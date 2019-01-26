import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../../services/teachers/teachers.service';
import { AuthService } from '../../services/auth/auth.service';

import { Teacher } from '../../models/teacher';

// Declaramos las variables para jQuery
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-list-teachers-info',
  templateUrl: './list-teachers-info.component.html',
  styleUrls: ['./list-teachers-info.component.css']
})
export class ListTeachersInfoComponent implements OnInit {

  public teachers = null;

  selectedTeacher: null;

  public loggedIn: boolean;

  constructor(private TeacherService: TeachersService,
    private auth: AuthService) { }

  ngOnInit() {

    this.auth.authStatus.subscribe(value => this.loggedIn = value);
    this.TeacherService.getAll().subscribe(
      data => this.handleResponse(data),
      error => console.log(error)
    )

  }

  handleResponse(data) {
    console.log(data);
    this.teachers = data['data'];
  }

  onSelect(teacher): void {
    this.selectedTeacher = teacher;
  }

}
