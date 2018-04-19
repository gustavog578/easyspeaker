import { Component, OnInit } from '@angular/core';
import { Login } from "../../models/login";
import { FormsModule } from "@angular/forms";
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from "../../services/login.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    isLoginError : boolean = false;
    constructor() { }
    //private userService : UserService,private router : Router
    ngOnInit() {
    }
  
    onSubmit(form){
      console.log(form.Email);
      console.log(form.Password);
      
       /*this.userService.userAuthentication(userName,password).subscribe((data : any)=>{
        localStorage.setItem('userToken',data.access_token);
        this.router.navigate(['/home']);
      },
      (err : HttpErrorResponse)=>{
        this.isLoginError = true;
      });*/
    }
  
  }
