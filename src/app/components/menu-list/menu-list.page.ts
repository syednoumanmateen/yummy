import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.page.html',
  styleUrls: ['./menu-list.page.scss'],
})
export class MenuListPage implements OnInit {

  @Input() title: any;

  menu: Array<any>

  constructor() {
    this.menu = [
      {
        icon: './assets/menu/menu_item_1.png',
        title: 'Magnam Tiste',
        des: 'Lorem, deren, trataro, filede, nerada',
        price: '$5.95'
      },
      {
        icon: './assets/menu/menu_item_2.png',
        title: 'Aut Luia',
        des: 'Lorem, deren, trataro, filede, nerada',
        price: '$14.95'
      },
      {
        icon: './assets/menu/menu_item_3.png',
        title: 'Est Eligendi',
        des: 'Lorem, deren, trataro, filede, nerada',
        price: '$8.95'
      },
      {
        icon: './assets/menu/menu_item_4.png',
        title: 'Eos Luibusdam',
        des: 'Lorem, deren, trataro, filede, nerada',
        price: '$12.95'
      },
      {
        icon: './assets/menu/menu_item_5.png',
        title: 'Eos Luibusdam',
        des: 'Lorem, deren, trataro, filede, nerada',
        price: '$12.95'
      },
      {
        icon: './assets/menu/menu_item_6.png',
        title: 'Laboriosam Direva',
        des: '',
        price: '$9.95'
      }
    ]
  }

  ngOnInit() {
  }

}
