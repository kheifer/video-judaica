import { Component } from '@angular/core';
import { AuthenticationService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})
export class AppComponent {
  title = 'Video Judaica';

  user;


  constructor(public authService: AuthenticationService) {
    this.authService.user.subscribe(user =>  {
      console.log(user);
    });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

}
