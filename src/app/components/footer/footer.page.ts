import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
})
export class FooterPage implements OnInit {

  footer: Array<any>;
  logo: Array<any>

  constructor() {
    this.footer = [
      {
        title: 'Address',
        des1txt: 'A108 Adam Street',
        des2txt: 'New York, NY 535022 - US',
        icon: 'location-outline'
      },
      {
        title: 'Reservations',
        des1: 'Phone:',
        des2: 'Email: ',
        des1txt: '+1 5589 55488 55',
        des2txt: 'info@example.com',
        icon: 'call-outline'
      },
      {
        title: 'Opening Hours',
        des1: 'Mon-Sat:',
        des2: 'Sunday:',
        des1txt: '11AM - 23PM',
        des2txt: 'Closed',
        icon: 'time-outline'
      }
    ];
    this.logo = ['logo-twitter', 'logo-facebook', 'logo-instagram', 'logo-linkedin']
  }

  ngOnInit() {
  }

}
