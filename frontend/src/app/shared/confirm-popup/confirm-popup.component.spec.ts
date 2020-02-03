import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmPopupComponent } from './confirm-popup.component';
import { MatDialogModule } from '@angular/material/dialog';

describe('ConfirmPopupComponent', () => {
  let component: ConfirmPopupComponent;
  let fixture: ComponentFixture<ConfirmPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatDialogModule ],
      declarations: [ ConfirmPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
