import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { Component } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  @Component({selector: 'app-home-main-banner', template: 'app-home-main-banner'})
  class FakeBannerComponent {}

  @Component({selector: 'app-home-video-block', template: 'app-home-video-block'})
  class FakeVideoComponent {}

  @Component({selector: 'app-home-plates', template: 'app-home-plates'})
  class FakePlatesComponent {}

  @Component({selector: 'app-home-contact-us', template: 'app-home-contact-us'})
  class FakeContactUsComponent {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeBannerComponent, FakeVideoComponent, FakePlatesComponent, FakeContactUsComponent, HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call correct components', () => {
    const compiled = fixture.debugElement.nativeElement;
    const componentsForSearch = [
      'app-home-main-banner',
      'app-home-video-block',
      'app-home-plates',
      'app-home-contact-us',
    ];

    componentsForSearch.forEach((element) => {
      expect(compiled.querySelector(element)).toBeTruthy();
    });
  });
});
