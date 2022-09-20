import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutPage } from './about/about.page';
import { BookingPage } from './booking/booking.page';
import { ChefsPage } from './chefs/chefs.page';
import { ContactPage } from './contact/contact.page';
import { EventsPage } from './events/events.page';
import { GalleryPage } from './gallery/gallery.page';
import { HomePage } from './home/home.page';
import { MenuPage } from './menu/menu.page';

const routes: Routes = [
  {
    path: 'home', component: HomePage
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about', component: AboutPage
  },
  {
    path: 'chefs', component: ChefsPage
  },
  {
    path: 'events', component: EventsPage
  },
  {
    path: 'gallery', component: GalleryPage
  },
  {
    path: 'contact', component: ContactPage
  },
  {
    path: 'booking', component: BookingPage
  },
  {
    path: 'menu', component: MenuPage
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
