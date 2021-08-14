import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IvyCarouselModule } from 'angular-responsive-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OverleyComponent } from './overley/overley.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Carousel2Component } from './carousel2/carousel2.component';
import { Carousel3Component } from './carousel3/carousel3.component';
import { SuccessComponent } from './success/success.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { PartnersComponent } from './partners/partners.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OverleyComponent,
    CarouselComponent,
    Carousel2Component,
    Carousel3Component,
    SuccessComponent,
    TestimonialComponent,
    PartnersComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
