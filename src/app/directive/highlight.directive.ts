import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor') bg = '#485E74';
  @HostBinding('style.color') color = '#EEE';
  constructor() { }
  @HostListener('mouseenter') mouseenter(): void {
    this.bg = '#007BFF';
    this.color = '#FFF';
  }
  @HostListener('mouseleave') mouseleave(): void {
    this.bg = '#485E74';
    this.color = '#EEE';
  }
}
