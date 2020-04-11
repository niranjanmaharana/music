import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
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
  bnnrVsbltyItms = ['/home'];
  bbnVsblty = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.bbnVsblty = window.location.href.indexOf(this.bnnrVsbltyItms[0]) < 0;
      }
    });
  }

  ngOnInit() {
  }
}
