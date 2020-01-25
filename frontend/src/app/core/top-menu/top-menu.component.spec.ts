import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { filter, map } from 'rxjs/operators';
import { from, Observable } from 'rxjs';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

import { TopMenuComponent } from './top-menu.component';

describe('TopMenuComponent', () => {
  let component: TopMenuComponent;
  let fixture: ComponentFixture<TopMenuComponent>;

  const matchObj = [ // initially all are false
    { matchStr: '(min-width: 1024px)', result: false },
    { matchStr: '(min-width: 1366px)', result: false },
    { matchStr: '(max-width: 1366px)', result: false },
    { matchStr: '(max-width: 750px)', result: false }
  ];
  const fakeObserve = (s: string[]): Observable<BreakpointState> => from(matchObj).pipe(
    filter(match => match.matchStr === s[0]),
    map(match => <BreakpointState> { matches: match.result, breakpoints: {} })
  );
  const bpSpy = jasmine.createSpyObj('BreakpointObserver', ['observe']);
  bpSpy.observe.and.callFake(fakeObserve);

  function resize(width: number): void {
    matchObj[0].result = (width >= 1024);
    matchObj[1].result = (width >= 1366);
    matchObj[2].result = (width <= 1366);
    matchObj[3].result = (width <= 750);
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CommonModule,
        SharedModule,
      ],
      declarations: [ TopMenuComponent ],
      providers: [
        { provide: BreakpointObserver, useValue: bpSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    resize(700);
    fixture = TestBed.createComponent(TopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have menu opening button on mobile', () => {
    const compiled = fixture.debugElement.nativeElement;
    const menuButton = compiled.querySelector('#mobile-menu-button');

    expect(menuButton).toBeTruthy();
  });

  it('should handle clicks on hamburger menu', () => {
    const compiled = fixture.debugElement.nativeElement;
    const menuButton = compiled.querySelector('#mobile-menu-button');

    expect(component.isHamburgerMenuOpened).toBe(false);
    menuButton.click();
    expect(component.isHamburgerMenuOpened).toBe(true);
  });
});
