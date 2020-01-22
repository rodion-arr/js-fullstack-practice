import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef, Input,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-responsive-video-block',
  templateUrl: './responsive-video-block.component.html',
  styleUrls: ['./responsive-video-block.component.sass']
})
export class ResponsiveVideoBlockComponent implements AfterViewInit, OnDestroy, OnInit {

  @ViewChild('youTubePlayerWrapper', {static: false}) youTubePlayerWrapper: ElementRef<HTMLDivElement>;

  @Input() videoId: string;
  videoWidth: number | undefined;
  videoHeight: number | undefined;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    if (window.YT) {
      return;
    }

    // This code loads the IFrame Player API code asynchronously, according to the instructions at
    // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  ngAfterViewInit(): void {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }

  onResize = (): void => {
    // Automatically expand the video to fit the page up to 1200px x 720px
    this.videoWidth = Math.min(this.youTubePlayerWrapper.nativeElement.clientWidth, 1200);
    this.videoHeight = this.videoWidth * 0.6;
    this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
  }

}
