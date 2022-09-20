import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  aboutList: Array<any>;
  aboutFeaturw: Array<any>;

  constructor() {
    this.aboutList = [
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur."
    ];

    this.aboutFeaturw = [
      {
        icon: 'clipboard-outline',
        title: 'Corporis voluptates officia eiusmod',
        des: 'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip'
      },
      {
        icon: 'diamond-outline',
        title: 'Ullamco laboris ladore pan',
        des: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt'
      },
      {
        icon: 'file-tray-stacked-outline',
        title: 'Labore consequatur incidid dolore',
        des: 'Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere'
      }
    ]
  }

  ngOnInit() {
  }

}
