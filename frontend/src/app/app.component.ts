import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

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
