import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   angForm: FormGroup;
   constructor(private fb: FormBuilder) {
    this.createForm();
  }
   createForm() {
    this.angForm = this.fb.group({
       email: ['', Validators.required ],
       mdp: ['', Validators.required ]
    });
  }
  

  

  ngOnInit() {
  }

  

}
