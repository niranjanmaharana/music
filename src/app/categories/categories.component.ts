import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  isCollapsed:boolean;

  constructor() {
    this.isCollapsed = true;
  }

  ngOnInit() {
  }

}
