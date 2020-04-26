import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { LoaderService } from './services/loader.service';
import { Router } from '@angular/router';
import { ActivityMonitorService } from './services/activity-monitor.service';
import { Configuration } from './util/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'music';

  constructor(
    private authService: AuthenticationService,
    private loaderService: LoaderService) {
  }

  ngOnInit() {
    this.loaderService.mask('Authenticating...');
    this.authService.checkSessionToken();
  }

  onContinueSessionClick() {
    this.authService.continueSession();
  }

  onLogoutSessionClick() {
    this.authService.invalidateSession();
  }
}