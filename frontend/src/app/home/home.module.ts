import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { VideoBlockComponent } from './video-block/video-block.component';

@NgModule({
  declarations: [HomeComponent, MainBannerComponent, VideoBlockComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
