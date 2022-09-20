import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.page.html',
  styleUrls: ['./chefs.page.scss'],
})
export class ChefsPage implements OnInit {

  chefs: Array<any>;

  constructor() {
    this.chefs = [
      {
        icon: './assets/chefs/chefs_1.jpg',
        shade:'./assets/chefs/team-shape.svg',
        name: 'Walter White',
        occp: 'Master Chef',
        des: 'Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.'
      },
      {
        icon: './assets/chefs/chefs_2.jpg',
        shade:'./assets/chefs/team-shape.svg',
        name: 'Sarah Jhonson',
        occp: 'Patissier',
        des: 'Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.'
      },
      {
        icon: './assets/chefs/chefs_3.jpg',
        shade:'./assets/chefs/team-shape.svg',
        name: 'William Anderson',
        occp: 'Cook',
        des: 'Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.'
      }
    ]
  }

  ngOnInit() {
  }

}
