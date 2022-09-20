import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  testimonail: Array<any>;

  constructor() {
    this.testimonail = [
      {
        des: ' Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper. ',
        name: 'Saul Goodman',
        occp: 'Ceo & Founder',
        icon: './assets/testimonials/testimonials_1.jpg'
      },
      {
        des: ' Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa. ',
        name: 'Sara Wilsson',
        occp: 'Designer',
        icon: './assets/testimonials/testimonials_2.jpg'
      },
      {
        des: ' Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim. ',
        name: 'Jena Karlis',
        occp: 'Store Owner',
        icon: './assets/testimonials/testimonials_3.jpg'
      },
      {
        des: ' Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid. ',
        name: 'John Larson',
        occp: 'Entrepreneur',
        icon: './assets/testimonials/testimonials_4.jpg'
      }
    ]
  }

}
