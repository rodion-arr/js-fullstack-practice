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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    YouTubePlayerModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    YouTubePlayerModule,
    ResponsiveVideoBlockComponent,
    ReverseStringPipe,
    BorderStyleDirective,
  ],
  declarations: [
    ResponsiveVideoBlockComponent,
    ReverseStringPipe,
    BorderStyleDirective,
  ]
})
export class SharedModule {}
