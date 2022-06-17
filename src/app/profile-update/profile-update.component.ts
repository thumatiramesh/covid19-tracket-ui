import { Component, OnInit } from '@angular/core';
import { UserRegistrationRequest, UserService } from '../user.service';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.scss']
})
export class ProfileUpdateComponent implements OnInit {

  user: UserRegistrationRequest = new UserRegistrationRequest("", "", "", "", "");
  
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService
      .getUser(sessionStorage.getItem("username"))
      .subscribe(response => this.handleSuccessfulResponse(response));
  }

  handleSuccessfulResponse(response : any) {
    this.user = response.user;
  }

  processUserProfileUpdate(){
    this.userService
      .updateUser(this.user)
      .subscribe(response => {
        this.handleSuccessfulResponse(response)
        alert("User data updated successfully");
      },(error) => {
        alert(error.error.message);
      });
    
      
  }
}
