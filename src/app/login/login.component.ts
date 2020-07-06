import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide: Boolean = true;

  loginForm: FormGroup

  constructor(public fb: FormBuilder,
              private authApi: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  submitLoginForm(){
    if(this.loginForm.valid) {
      this.authApi.login({
        email: this.loginForm.controls['email'].value,
        password: this.loginForm.controls['password'].value
      }).subscribe(res => console.log(res))
    }
  }

}
