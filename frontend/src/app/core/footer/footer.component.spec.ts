import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
      ],
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have copyright', () => {
    const compiled = fixture.debugElement.nativeElement;
    const copyright = compiled.querySelector('#copyright');
    expect(copyright.textContent).toContain('©TeamZinzinoUA');
  });

  it('should have logo', () => {
    const compiled = fixture.debugElement.nativeElement;
    const logo = compiled.querySelector('.logo');
    expect(logo).toBeTruthy();
  });

  it('should have 2 menu columns', () => {
    const compiled = fixture.debugElement.nativeElement;
    const menu1 = compiled.querySelector('.footer-menu.primary');
    const menu2 = compiled.querySelector('.footer-menu.secondary');

    expect(menu1).toBeTruthy();
    expect(menu2).toBeTruthy();
  });
});
