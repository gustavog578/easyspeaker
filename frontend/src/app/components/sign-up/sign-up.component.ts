import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JarwisService } from '../../services/jarwis.service';

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

  constructor(private Jarwis:JarwisService) { }

  onSubmit() {
    console.log(this.form);
    return this.Jarwis.signup(this.form).subscribe(
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
