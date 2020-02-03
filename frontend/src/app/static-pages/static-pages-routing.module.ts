import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ConfirmGuard } from '../shared/confirm.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'about', component: AboutComponent, canActivate: [ConfirmGuard] },
  { path: 'contacts', component: ContactsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticPagesRoutingModule { }
