import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';

describe('AppComponent', () => {
  @Component({selector: 'app-top-menu', template: 'app-top-menu'})
  class TopMenuComponent {}

  @Component({selector: 'app-footer', template: 'app-footer'})
  class FooterComponent {}

  @Component({selector: 'app-sub-title', template: 'app-sub-title'})
  class SubTitleComponent {}

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        TopMenuComponent,
        FooterComponent,
        SubTitleComponent,
        AppComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have top menu', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-top-menu')).toBeTruthy();
  });

  it('should have router outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });

  it('should have footer', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-footer')).toBeTruthy();
  });
});
