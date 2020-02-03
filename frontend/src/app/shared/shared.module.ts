import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ResponsiveVideoBlockComponent } from './responsive-video-block/responsive-video-block.component';
import { ReverseStringPipe } from './reverse-string.pipe';
import { BorderStyleDirective } from './border-style.directive';
import { ConfirmPopupComponent } from './confirm-popup/confirm-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    A11yModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    FlexLayoutModule,
    YouTubePlayerModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    A11yModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    FlexLayoutModule,
    YouTubePlayerModule,
    ResponsiveVideoBlockComponent,
    ReverseStringPipe,
    BorderStyleDirective,
    ConfirmPopupComponent,
  ],
  declarations: [
    ResponsiveVideoBlockComponent,
    ReverseStringPipe,
    BorderStyleDirective,
    ConfirmPopupComponent,
  ],
  entryComponents: [ConfirmPopupComponent]
})
export class SharedModule {}
