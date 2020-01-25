import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveVideoBlockComponent } from './responsive-video-block.component';
import { Component, Input } from '@angular/core';

describe('ResponsiveVideoBlockComponent', () => {
  let component: ResponsiveVideoBlockComponent;
  let fixture: ComponentFixture<ResponsiveVideoBlockComponent>;

  // tslint:disable-next-line:component-selector
  @Component({selector: 'youtube-player', template: 'youtube-player'})
  class FakeYoutubePlayer {
    @Input() videoId: string;
    @Input() width: string;
    @Input() height: string;
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeYoutubePlayer, ResponsiveVideoBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveVideoBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should skip install of YouTube API for second time', () => {
    (window as any).YT = true;
    expect(component.ngOnInit()).toBe(false);
  });

  it('should have correct ngOnDestroy()', () => {
    expect(component.ngOnDestroy()).toBeUndefined();
  });
});
