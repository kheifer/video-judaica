import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {FormControl, FormGroup } from '@angular/forms';
import { masterFirebaseConfig } from  './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { ROUTING } from './app.routing';
import { TitleListComponent } from './title-list/title-list.component';
import { FooterComponent } from './footer/footer.component';
import { MemorabiliaShopComponent } from './memorabilia-shop/memorabilia-shop.component';
import { AdminComponent } from './admin/admin.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { MembershipComponent } from './membership/membership.component';
import { RentalComponent } from './rental/rental.component';
import { TitleDetailComponent } from './title-detail/title-detail.component';
import { LetterPipe } from './letter.pipe';
import { MemorabiliaListComponent } from './memorabilia-list/memorabilia-list.component';
import { MemorabiliaDetailComponent } from './memorabilia-detail/memorabilia-detail.component';


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
    MemorabiliaShopComponent,
    AdminComponent,
    EditMovieComponent,
    MembershipComponent,
    RentalComponent,
    TitleDetailComponent,
    LetterPipe,
    MemorabiliaListComponent,
    MemorabiliaDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ROUTING,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
