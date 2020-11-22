import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor') bg = '#000';
  @HostBinding('style.color') color = '#555';
  constructor() { }
  @HostListener('mouseenter') mouseenter(): void {
    this.bg = '#007BFF';
    this.color = '#FFF';
  }
  @HostListener('mouseleave') mouseleave(): void {
    this.bg = '#000';
    this.color = '#555';
  }
}
