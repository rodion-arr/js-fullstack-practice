import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveVideoBlockComponent } from './responsive-video-block.component';

describe('ResponsiveVideoBlockComponent', () => {
  let component: ResponsiveVideoBlockComponent;
  let fixture: ComponentFixture<ResponsiveVideoBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveVideoBlockComponent ]
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
});
