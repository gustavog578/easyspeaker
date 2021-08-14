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
  teachersCount : number;

  //public loggedIn: boolean;

  constructor(private TeacherService: TeachersService,
              private auth: AuthService,
              private languageService : LanguagesService) { }

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
    this.teachersCount = this.teachers.length;
    this.TeacherService.updateMarkers(this.teachers);
  }

  handleLanguages(data) {
    
    let lang = [];
    data.forEach(element => {
      let item: any = element;
      for (const key in item) {
        let obj = {
            "key" : key,
            "name" : item[key].name            
        };
        lang.push(obj);         
        /*if (Object.prototype.hasOwnProperty.call(obj, key)) {                    
          const elem = obj[key];                    
        }*/
      }
    });
    lang.shift();  
    this.languages = lang;
  }

  onSelect(teacher): void {
    this.selectedTeacher = teacher;
  }

  searchByLanguages(selectedLanguage){
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
    this.teachersCount = this.teachers.length;
    this.TeacherService.updateMarkers(this.teachers);
    return arr;
  }

  getReviewByTeacher(id){
      let reviews  = [];
      this.teachers.forEach(element => {
        if (element._id == id){
            reviews = element.reviews;
            return reviews;
        }
      });
      return reviews;
  }

  reset(){
    console.log("limpiando filtros");
    this.selectedLanguage = "";
    this.teachers = this.allTeachers;
    this.teachersCount = this.teachers.length;
    this.TeacherService.updateMarkers(this.teachers);
  }

}
