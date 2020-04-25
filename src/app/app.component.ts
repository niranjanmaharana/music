import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'music';
  constructor(private authService: AuthenticationService, private loaderService: LoaderService) { }
  ngOnInit() {
    debugger;
    this.loaderService.mask('Authenticating...');
    this.authService.checkSessionToken();
  }
}