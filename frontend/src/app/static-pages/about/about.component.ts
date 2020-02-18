import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ResetPageSubtitle, SetPageSubtitle } from '../../store/actions';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit, OnDestroy {

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new SetPageSubtitle('About'));
  }

  ngOnDestroy(): void {
    this.store.dispatch(new ResetPageSubtitle());
  }

}
