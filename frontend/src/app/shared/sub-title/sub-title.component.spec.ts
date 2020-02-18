import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTitleComponent } from './sub-title.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('SubTitleComponent', () => {
  let component: SubTitleComponent;
  let fixture: ComponentFixture<SubTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTitleComponent ],
      providers: [
        provideMockStore()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
