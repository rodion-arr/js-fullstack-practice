import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmPopupComponent } from './confirm-popup/confirm-popup.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmGuard implements CanActivate {
  constructor(public dialog: MatDialog) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const dialogRef = this.dialog.open(ConfirmPopupComponent, {
      width: '250px',
      data: {}
    });

    return dialogRef.afterClosed();
  }
}
