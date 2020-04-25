import { Component, OnInit } from '@angular/core';
import { Configuration } from '../util/config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showModal: boolean;
  firstNm: string;
  constructor() {
    this.firstNm = Configuration.getFirstName();
  }

  ngOnInit() {
  }

  show() {
    this.showModal = true;
  }

  hide() {
    this.showModal = false;
  }
}