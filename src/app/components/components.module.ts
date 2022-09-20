import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HeaderPage } from './header/header.page';
import { SwiperPage } from './swiper/swiper.page';
import { FooterPage } from './footer/footer.page';
import { MenuListPage } from './menu-list/menu-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [HeaderPage, SwiperPage, FooterPage, MenuListPage],
  declarations: [HeaderPage, SwiperPage, FooterPage, MenuListPage]
})
export class ComponentsModule { }
