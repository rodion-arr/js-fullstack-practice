import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBorderStyle]'
})
export class BorderStyleDirective implements OnInit {

  @Input() borderSize: string;
  @Input() borderPosition: string;

  /**
   * Directive adds border style to assigned element according to inputs
   * This directive was created just for practice purpose
   */
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.style[`border${this.borderPosition}Width`] = this.borderSize;
    this.el.nativeElement.style[`border${this.borderPosition}Style`] = 'solid';
  }

}
