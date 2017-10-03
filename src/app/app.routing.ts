import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent} from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import {TitleListComponent} from './title-list/title-list.component';
import {FooterComponent} from './footer/footer.component';
import {MemorabiliaShopComponent} from './memorabilia-shop/memorabilia-shop.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path:'title-list',
    component: TitleListComponent
  },
  {
    path: 'memorabilia-shop',
    component: MemorabiliaShopComponent
  }
]

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
