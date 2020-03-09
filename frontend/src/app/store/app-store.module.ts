import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './reducers';
import { ProductsEffects } from './effects/products.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('entityCache', reducers),
    EffectsModule.forFeature([ProductsEffects])
  ],
  exports: [
    StoreModule
  ]
})
export class AppStoreModule { }
