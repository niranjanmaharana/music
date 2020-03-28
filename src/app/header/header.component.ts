import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  slides = [{
    'src': 'assets/images/banners/chicago.jpg',
    'heading': 'First Image',
    'description': 'FirstDescription'
  }, {
    'src': 'assets/images/banners/la.jpg',
    'heading': 'Second Image',
    'description': 'Second Description'
  }, {
    'src': 'assets/images/banners/ny.jpg',
    'heading': 'Third Image',
    'description': 'Third Description'
  }];
  constructor() { }

  ngOnInit() {
  }

}
