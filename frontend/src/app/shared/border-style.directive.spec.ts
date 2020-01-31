import { BorderStyleDirective } from './border-style.directive';
import { Component, DebugElement, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('BorderStyleDirective', () => {
  @Component({selector: 'app-fake', template: '<p appBorderStyle borderSize="5px" borderPosition="Bottom"></p>'})
  class FakeComponent {}

  let component: FakeComponent;
  let fixture: ComponentFixture<FakeComponent>;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FakeComponent, BorderStyleDirective]
    });
    fixture = TestBed.createComponent(FakeComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.query(By.css('p'));
  });

  it('should add correct border to element', () => {
    fixture.detectChanges();
    expect(el.nativeElement.style.borderBottomWidth).toBe('5px');
    expect(el.nativeElement.style.borderBottomStyle).toBe('solid');
  });
});
