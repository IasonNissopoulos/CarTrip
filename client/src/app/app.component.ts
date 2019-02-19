import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Your Car Trip';
  username = 'null';

  constructor(private auth: AuthService) {
    this.username = auth.username;

  }
}
