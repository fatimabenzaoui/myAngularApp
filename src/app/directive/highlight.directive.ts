import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor') bg = '#1E1E1E';
  constructor() { }
  @HostListener('mouseenter') mouseenter() {
    this.bg = '#4EC9B0';
  }
  @HostListener('mouseleave') mouseleave() {
    this.bg = '#1E1E1E';
  }
}
