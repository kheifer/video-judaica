import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent} from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import {TitleListComponent} from './title-list/title-list.component';
import {FooterComponent} from './footer/footer.component';

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
  }
]

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
