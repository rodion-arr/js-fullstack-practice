import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VideoBlockComponent } from './video-block.component';
import { Component } from '@angular/core';

describe('VideoBlockComponent', () => {
  let component: VideoBlockComponent;
  let fixture: ComponentFixture<VideoBlockComponent>;

  @Component({selector: 'app-responsive-video-block', template: 'app-responsive-video-block'})
  class FakeVideoComponentComponent {}

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoBlockComponent, FakeVideoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use video component with videoId ', () => {
    const compiled = fixture.debugElement.nativeElement;
    const videoBlock = compiled.querySelector('app-responsive-video-block');

    expect(videoBlock).toBeTruthy();
    expect(videoBlock.getAttribute('videoid')).toBeDefined();
  });
});
