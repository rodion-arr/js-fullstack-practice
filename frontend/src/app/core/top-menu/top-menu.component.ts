import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.sass']
})
export class TopMenuComponent {

  isSmallScreen$: Observable<boolean> = this.breakpointObserver.observe([
    '(max-width: 750px)'
  ])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  isHamburgerMenuOpened = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  triggerHamburgerMenu(): void {
    this.isHamburgerMenuOpened = !this.isHamburgerMenuOpened;
  }

}
