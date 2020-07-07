import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GameLib';
  isLoggedIn: Boolean;

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.authService.loginStatusChange.subscribe(status => this.isLoggedIn = status)
  }

  logout(){
    this.authService.logout()
  }

}
