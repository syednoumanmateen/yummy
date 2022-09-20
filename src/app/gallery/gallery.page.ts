import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  gallery: Array<any>;
  constructor() {
    this.gallery = [
      { icon: './assets/gallery/gallery_1.jpg' },
      { icon: './assets/gallery/gallery_2.jpg' },
      { icon: './assets/gallery/gallery_3.jpg' },
      { icon: './assets/gallery/gallery_4.jpg' },
      { icon: './assets/gallery/gallery_5.jpg' },
      { icon: './assets/gallery/gallery_6.jpg' },
      { icon: './assets/gallery/gallery_7.jpg' },
      { icon: './assets/gallery/gallery_8.jpg' }
    ]
  }

  ngOnInit() {
  }

}
