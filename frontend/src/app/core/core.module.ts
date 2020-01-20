import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { throwIfAlreadyLoaded } from './module-import-check';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  declarations: [TopMenuComponent, FooterComponent],
  exports: [TopMenuComponent, FooterComponent],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
