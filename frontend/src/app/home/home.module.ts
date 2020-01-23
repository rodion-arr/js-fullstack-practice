import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { VideoBlockComponent } from './video-block/video-block.component';
import { PlatesComponent } from './plates/plates.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [HomeComponent, MainBannerComponent, VideoBlockComponent, PlatesComponent, ContactUsComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
