import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { TeachersService } from '../../services/teachers/teachers.service';
import { AuthService } from '../../services/auth/auth.service';
import { LanguagesService } from '../../services/languages.service';

// Declaramos las variables para jQuery
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-list-teachers-info',
  templateUrl: './list-teachers-info.component.html',
  styleUrls: ['./list-teachers-info.component.css']
})
export class ListTeachersInfoComponent implements OnInit {

  public teachers = [];
  public allTeachers = []; 
  public languages = [];
  selectedTeacher: null;
  selectedLanguage: String;

  //public loggedIn: boolean;

  constructor(private TeacherService: TeachersService,
    private auth: AuthService, private languageService : LanguagesService) { }

  ngOnInit() {
    
   // this.auth.authStatus.subscribe(value => this.loggedIn = value);
    this.TeacherService.getAll().subscribe(
      data => this.handleResponse(data),
      error => console.log(error)
    )

    this.languageService.getLanguages().subscribe(
      data => this.handleLanguages(data),
      error => console.log(error)
    )

  }

  handleResponse(data) {
    console.log("teachers", data);
    this.allTeachers = data;
    this.teachers = data;
  }

  handleLanguages(data) {
    console.log("languages",data);
    this.languages = data;
  }

  onSelect(teacher): void {
    this.selectedTeacher = teacher;
  }

  searchByLanguages(selectedLanguage){
    console.log("lang is ", selectedLanguage);
    this.TeacherService.getAll().subscribe(
      data => this.filterBy('language', selectedLanguage ,data),
      error => console.log(error)
    )
  }



  filterBy(opt, language, data){
    let arr = [];
    data.forEach(element => {
      if (element.native_language == language){
          arr.push(element);
        }
    });
    this.teachers = arr;
    return arr;
  }

  reset(){
    this.selectedLanguage = "";
    this.teachers = this.allTeachers;
  }

}