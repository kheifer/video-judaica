import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { ROUTING } from './app.routing';
import { TitleListComponent } from './title-list/title-list.component';
import { FooterComponent } from './footer/footer.component';
// import { MembershipComponent } from './membership/membership.component';
import { RentalComponent } from './rental/rental.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    TitleListComponent,
    FooterComponent,
    // MembershipComponent,
    RentalComponent,

  ],
  imports: [
    BrowserModule, ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
