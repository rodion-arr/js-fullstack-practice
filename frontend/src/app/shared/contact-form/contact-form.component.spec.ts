import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContactFormComponent } from './contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;
  let snackSpy: any;

  beforeEach(waitForAsync(() => {
    snackSpy = jasmine.createSpyObj('MatSnackBar', ['open']);

    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
      declarations: [ ContactFormComponent ],
      providers: [
        { provide: MatSnackBar, useValue: snackSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show snack after form submit', () => {
    component.contactForm.patchValue({
      name: 'Fake name',
      email: 'fake@email.local',
      message: 'Fake message',
    });

    component.sendContactForm();

    expect(snackSpy.open).toHaveBeenCalledTimes(1);
  });

  it('should not call snack on invalid form', () => {
    component.contactForm.patchValue({
      name: 'Fake name',
      email: 'this_is_not_valid_mail',
      message: 'Fake message',
    });

    component.sendContactForm();

    expect(snackSpy.open).toHaveBeenCalledTimes(0);
  });
});
