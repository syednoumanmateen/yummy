import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  events: Array<any>;

  constructor() {
    this.events = [
      {
        icon: './assets/events/events_2.jpg',
        title: 'Private Parties',
        price: '$289',
        des: ' In delectus sint qui et enim. Et ab repudiandae inventore quaerat doloribus. Facere nemo vero est ut dolores ea assumenda et. Delectus saepe accusamus aspernatur.'
      },
      {
        icon: './assets/events/events_1.jpg',
        title: 'Custom Parties',
        price: '$99',
        des: ' Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere. Enim facilis veritatis id est rem repudiandae nulla expedita quas.'
      },
      {
        icon: './assets/events/events_3.jpg',
        title: 'Birthday Parties',
        price: '$499',
        des: ' Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.'
      }
    ]
  }

  ngOnInit() {
  }

}
