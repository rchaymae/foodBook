import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.html',
  styleUrl: './roles.css'
})
export class Roles {

  userId: number = 12309;
  userName: string = "chaymae";
  userEmail: string = "chaymae95aws@gmail.com";
  userPassword: string = " chaymae01"
  //userProfilePic: object = ; TODO
  language: string="";


  sendRequest(){
    alert("request sent succesfuly");
  }
}
