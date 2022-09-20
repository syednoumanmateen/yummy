import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AboutPage } from './about/about.page';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingPage } from './booking/booking.page';
import { ChefsPage } from './chefs/chefs.page';
import { ComponentsModule } from './components/components.module';
import { ContactPage } from './contact/contact.page';
import { EventsPage } from './events/events.page';
import { GalleryPage } from './gallery/gallery.page';
import { HomePage } from './home/home.page';
import { MenuPage } from './menu/menu.page';

@NgModule({
  declarations: [AppComponent, HomePage, AboutPage, ChefsPage, EventsPage, BookingPage, ContactPage, GalleryPage, MenuPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ComponentsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
