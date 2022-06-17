import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadStart, Router } from '@angular/router';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { UserRegistrationRequest, UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: UserRegistrationRequest = new UserRegistrationRequest("", "", "", "", "");

  confirmPassword! : string;

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit(): void {
  }

  processUserRegistration(): void {
    console.debug(this.user);
    if(this.confirmPassword === this.user.password){
      this.userService.registerUser(this.user).subscribe(data => {
        alert("User created successfully.");
      }, (error) => {
        alert(error.error.message);
      });
    }else{
      alert("Password and confirm password should match");
    }
    
  }

}
