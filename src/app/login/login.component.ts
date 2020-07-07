import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide: Boolean = true;
  loginForm: FormGroup;
  returnUrl: string;

  constructor(public fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  submitLoginForm(){
    if(this.loginForm.valid) {
      this.authService.login({
        email: this.loginForm.controls['email'].value,
        password: this.loginForm.controls['password'].value
      }).subscribe(res => {
        this.authService.setSession(res)
        this.router.navigateByUrl(this.returnUrl);
      })
    }
  }

}
