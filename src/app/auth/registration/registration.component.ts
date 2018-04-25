import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  auth : any = {};

  constructor(private _authService : AuthService) { }

  ngOnInit() {
  }
  registerWithEmail(){
    this._authService.registerWithEmail(this.auth);
    console.log(this.auth);

  }

}
