import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public form = {
    email : null,
    name : null,
    lastname : null,
    password : null,
    password_confirmation: null,
    genre : null
  };

  public errors = [];

  constructor(private http: HttpClient) { }

  onSubmit() {
    return this.http.post('http://localhost:8000/api/signup', this.form).subscribe(
      data => console.log(data),
      error => this.handleError(error)

    );
  }

  handleError(error) {
    this.errors = error.error.errors;
  }
  ngOnInit() {
  }

}
