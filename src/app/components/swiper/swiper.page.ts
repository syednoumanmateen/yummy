import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.page.html',
  styleUrls: ['./swiper.page.scss'],
})
export class SwiperPage implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true
  };

  constructor() { }

  ngOnInit() {
  }

}
