import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MainBannerComponent } from './main-banner/main-banner.component';

@NgModule({
  declarations: [HomeComponent, MainBannerComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
