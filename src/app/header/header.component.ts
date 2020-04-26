import { Component, OnInit } from '@angular/core';
import { Configuration } from '../util/config';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showModal: boolean;
  firstNm: string;
  user: User = null;
  loggedIn: boolean = false;
  constructor(private authService: AuthenticationService) { }

  ngOnInit() { }

  show() {
    this.showModal = true;
  }

  hide() {
    this.showModal = false;
  }
}