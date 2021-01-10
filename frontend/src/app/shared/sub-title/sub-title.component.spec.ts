import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SubTitleComponent } from './sub-title.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';

describe('SubTitleComponent', () => {
  let component: SubTitleComponent;
  let fixture: ComponentFixture<SubTitleComponent>;
  let store: MockStore<any>;
  const initialState = {
    entityCache: {
      app: {
        pageSubtitle: ''
      }
    }
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTitleComponent ],
      providers: [
        provideMockStore({ initialState })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get<Store>(Store);
    fixture = TestBed.createComponent(SubTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    store.setState(initialState);
    expect(component).toBeTruthy();
  });
});
