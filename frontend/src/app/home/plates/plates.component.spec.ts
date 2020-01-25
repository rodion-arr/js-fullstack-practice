import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { Component } from '@angular/core';

import { PlatesComponent } from './plates.component';

describe('PlatesComponent', () => {
  let component: PlatesComponent;
  let fixture: ComponentFixture<PlatesComponent>;

  @Component({selector: 'app-footer', template: 'app-footer'})
  class FooterComponent {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
      ],
      declarations: [ PlatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct header', () => {
    const compiled = fixture.debugElement.nativeElement;
    const header = compiled.querySelector('h2');
    expect(header).toBeTruthy();
    expect(header.textContent).toBe('Our advantages');
  });

  it('should have correct number of plates', () => {
    const compiled = fixture.debugElement.nativeElement;
    const plates = compiled.querySelectorAll('.well');
    expect(plates.length).toBe(5);
  });
});
