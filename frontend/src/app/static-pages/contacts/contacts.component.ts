import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { EntityState } from '../../store/reducers';
import { ResetPageSubtitle, SetPageSubtitle } from '../../store/actions';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent implements OnInit, OnDestroy {

  constructor(private store: Store<EntityState>) { }

  ngOnInit() {
    this.store.dispatch(new SetPageSubtitle('Contact Us'));
  }

  ngOnDestroy(): void {
    this.store.dispatch(new ResetPageSubtitle());
  }

}
