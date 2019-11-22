import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginEmail: string;
  loginPassword: string;
  loginValid = true;
  loginForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

  public onSubmit() {
    console.log(this.loginEmail);
  }

}
