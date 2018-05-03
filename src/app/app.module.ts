import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { OfferComponent } from './components/offer/offer.component';
import { ContactCtaComponent } from './components/contact-cta/contact-cta.component';
import { WorkTypesComponent } from './components/work-types/work-types.component';
import { ContactComponent } from './components/contact/contact.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    OfferComponent,
    ContactCtaComponent,
    WorkTypesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
