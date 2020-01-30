import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsComponent } from './contact-us.component';
import { MatIconModule } from '@angular/material/icon';
import { ReverseStringPipe } from '../../shared/reverse-string.pipe';

describe('ContactUsComponent', () => {
  let component: ContactUsComponent;
  let fixture: ComponentFixture<ContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
      ],
      declarations: [ ContactUsComponent, ReverseStringPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show contact us button', () => {
    const compiled = fixture.debugElement.nativeElement;
    const header = compiled.querySelector('button[mat-raised-button]');
    expect(header).toBeTruthy();
    expect(header.textContent).toBe('email Join us');
  });
});
