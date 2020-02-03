import { TestBed, async, inject } from '@angular/core/testing';

import { ConfirmGuard } from './confirm.guard';
import { Component, NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { ConfirmPopupComponent } from './confirm-popup/confirm-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



describe('ConfirmGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ MatDialogModule, BrowserAnimationsModule ],
      declarations: [ ConfirmPopupComponent ],
      providers: [ConfirmGuard],
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [ ConfirmPopupComponent ],
      }
    });
  });

  it('should create instance', inject([ConfirmGuard], (guard: ConfirmGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should call dialog to confirm redirect', inject([ConfirmGuard], (guard: ConfirmGuard) => {
    expect(guard.canActivate(new ActivatedRouteSnapshot(), {url: 'testUrl'} as RouterStateSnapshot)).toBeDefined();
  }));
});
