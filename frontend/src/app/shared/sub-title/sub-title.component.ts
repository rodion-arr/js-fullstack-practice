import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AppSelectors } from '../../store';

@Component({
  selector: 'app-sub-title',
  templateUrl: './sub-title.component.html',
  styleUrls: ['./sub-title.component.sass']
})
export class SubTitleComponent implements OnInit {

  subtitle: Observable<string>;
  subtitleValue = '';

  constructor(private appSelectors: AppSelectors) {
    this.subtitle = this.appSelectors.pageSubtitle$;
  }

  ngOnInit(): void {
    this.subtitle.subscribe((updatedSubtitle) => {
      this.subtitleValue = updatedSubtitle;
    });
  }

}
