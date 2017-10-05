import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import { masterFirebaseConfig } from  './api-kays';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { ROUTING } from './app.routing';
import { TitleListComponent } from './title-list/title-list.component';
import { FooterComponent } from './footer/footer.component';
import { MembershipComponent } from './membership/membership.component';
import { RentalComponent } from './rental/rental.component';
<<<<<<< HEAD
import { TitleDetailComponent } from './title-detail/title-detail.component';
=======
import { LetterPipe } from './letter.pipe';
>>>>>>> 75ecdbaba400857da94bb89cdd8102c2e1a8ac0f



export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    TitleListComponent,
    FooterComponent,
    MembershipComponent,
    RentalComponent,
<<<<<<< HEAD
    TitleDetailComponent
=======
    LetterPipe
>>>>>>> 75ecdbaba400857da94bb89cdd8102c2e1a8ac0f
  ],
  imports: [
    BrowserModule,
    ROUTING,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
