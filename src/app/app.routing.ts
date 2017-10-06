import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent} from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { TitleListComponent } from './title-list/title-list.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { MembershipComponent } from './membership/membership.component';
import { RentalComponent } from './rental/rental.component';
import { TitleDetailComponent } from './title-detail/title-detail.component';
import { MemorabiliaShopComponent } from './memorabilia-shop/memorabilia-shop.component';

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
    path: 'title-list',
    component: TitleListComponent
  },
  {
    path: 'memorabilia-shop',
    component: MemorabiliaShopComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'register',
    component: MembershipComponent
  },
  {
    path: 'movie/:id',
    component: TitleDetailComponent
  },
  {
    path:'rental',
    component: RentalComponent
  }
]

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
