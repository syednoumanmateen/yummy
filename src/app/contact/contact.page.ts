import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  contact: Array<any>

  constructor() {
    this.contact = [
      {
        title: 'Our Address',
        icon: 'map-outline',
        des: 'A108 Adam Street, New York, NY 535022'
      },
      {
        title: 'Email Us',
        icon: 'mail-outline',
        des: 'contact@example.com'
      },
      {
        title: 'Call Us',
        icon: 'call-outline',
        des: '+1 5589 55488 55'
      },
      {
        title: 'Opening Hours',
        icon: 'share-social-outline',
        desh: 'Mon-Sat:',
        des: '11AM - 23PM',
        des2h: 'Sunday:',
        des2: 'Closed'
      }
    ]
  }

  ngOnInit() {
  }

}
