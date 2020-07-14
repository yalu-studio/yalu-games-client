import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
import { AuthService } from '../shared/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
              private route: ActivatedRoute,
              private snackBar: MatSnackBar) { }

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
        console.log(res)
        // if(!res.success){
        //   this.openSnackBar(res.message)
        // }
        this.authService.setSession(res)
      },
      err => {
        console.log(err)
      },
      () => {
        this.router.navigateByUrl(this.returnUrl);
      })
    }
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'CLOSE', {
      duration: 2000,
    })
  }

}
