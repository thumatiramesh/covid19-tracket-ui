import { Component, OnInit } from '@angular/core';
import { PasswordResetRequest, UserService } from '../user.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {

  passwordResetRequest : PasswordResetRequest = new PasswordResetRequest("", "", "");

  confirmPassword! : string;
  
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.passwordResetRequest.userName = sessionStorage.getItem("username");
  }

  processResetPassword(){
      this.userService
      .resetPassword(this.passwordResetRequest)
      .subscribe(response => {
        alert(response.message);
      },(error) =>{
        alert(error.error.message);
      });
    }
}
