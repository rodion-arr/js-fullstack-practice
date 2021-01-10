import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContactsComponent } from './contacts.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;

  @Component({selector: 'app-contact-form', template: 'app-contact-form'})
  class ContactFormComponent {}

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        MatInputModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
      ],
      declarations: [ ContactsComponent, ContactFormComponent ],
      providers: [
        provideMockStore()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
