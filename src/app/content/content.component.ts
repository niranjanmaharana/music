import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  slides = [{
    'src': '../../assets/images/movie/albums/bollywood/3-Idiots.jpg',
    'title': '3 Idiots',
    'releaseDate': 'Mar 2009',
    'description': 'Three Idiots'
  }, {
    'src': '../../assets/images/movie/albums/bollywood/dil-toh-baccha-hai-ji.jpg',
    'title': 'Dil toh baccha hai ji',
    'releaseDate': 'Dec 2012',
    'description': 'Dil toh baccha hai ji'
  }, {
    'src': '../../assets/images/movie/albums/bollywood/force.jpg',
    'title': 'Force',
    'releaseDate': 'Jan 2011',
    'description': 'Force'
  }, {
    'src': '../../assets/images/movie/albums/bollywood/prince.jpg',
    'title': 'Prince',
    'releaseDate': 'Mar 2006',
    'description': 'Prince'
  }, {
    'src': '../../assets/images/movie/albums/bollywood/ra-one.png',
    'title': 'Ra-One',
    'releaseDate': 'Apr 2010',
    'description': 'Ra-One'
  }, {
    'src': '../../assets/images/movie/albums/bollywood/rocky-handsome.jpg',
    'title': 'Rocky Handsome',
    'releaseDate': 'June 2013',
    'description': 'Rocky Handsome'
  }];
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onImageClick(title: string) {
    this.router.navigate(["lyric", { id: title }]);
  }
}
