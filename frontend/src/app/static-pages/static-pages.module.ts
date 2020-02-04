import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticPagesRoutingModule } from './static-pages-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AboutComponent, ContactsComponent],
  imports: [
    CommonModule,
    SharedModule,
    StaticPagesRoutingModule
  ]
})
export class StaticPagesModule { }
