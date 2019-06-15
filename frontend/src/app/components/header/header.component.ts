import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

// Declaramos las variables para jQuery
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges{

  public loggedIn: boolean;
  public user:string;
  
  constructor( private auth: AuthService,
               private router: Router,
               private token: TokenService ) { }

  ngOnInit() {
    this.auth.authStatus.subscribe(value => this.loggedIn = value);
    this.auth.userUpdated.subscribe(user => this.user = user);
    //this.user = this.token.getUser();
    //console.log(this.user);
    this.otra();
    console.log(this.loggedIn);
    }
    ngOnChanges(){
      this.user = this.token.getUser();
      console.log(this.user);
    }

    public initComponents(){

      $('.overlay').show();
      $('nav').toggleClass("open");
      $('.overlay').on('click', function () {
        if ($('nav').hasClass('open')) {
          $('nav').removeClass('open');
        }
        $(this).hide();
      });
    
    }
    public dropdown(){
        var self = $('.dropdown-toggle');
        if (self.is('.disabled, :disabled')) {
          return false;
        }
        self.parent().toggleClass("open");  
    }  
    public otra()
    { 
     $(document).on('click', function (e) {
      if ($('.dropdown').hasClass('open')) {
        $('.dropdown').removeClass('open');
      }
    });

    $('.nav-btn.nav-slider').on('click', function () {
      $('.overlay').show();
      $('nav').toggleClass("open");
    });

    $('.overlay').on('click', function () {
      if ($('nav').hasClass('open')) {
        $('nav').removeClass('open');
      }
      $(this).hide();
    });
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.token.remove();
    this.auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
    $(".sidebar").hide();
  }

  public showPanel() {
    $('#sidebar').toggleClass('active');
  }



}
