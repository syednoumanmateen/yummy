import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HeaderPage } from './header/header.page';
import { SwiperPage } from './swiper/swiper.page';
import { FooterPage } from './footer/footer.page';
import { MenuListPage } from './menu-list/menu-list.page';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppRoutingModule
  ],
  exports: [HeaderPage, SwiperPage, FooterPage, MenuListPage],
  declarations: [HeaderPage, SwiperPage, FooterPage, MenuListPage]
})
export class ComponentsModule { }
