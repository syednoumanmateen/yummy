import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  menuCategory: Array<any>;
  active: string;

  constructor() {
    this.menuCategory = [
      {
        title: 'Starters',
        key: 'starters'
      },
      {
        title: 'Breakfast',
        key: 'breakfast'
      },
      {
        title: 'Lunch',
        key: 'lunch'
      },
      {
        title: 'Dinner',
        key: 'dinner'
      }
    ];
    this.active = this.menuCategory[0].key;
  }

  ngOnInit() {
  }

  onclick(ev: any) {
    this.active = ev
  }
}
