import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {
  @Input() colorngstyle = 'purple';
  @Input() bgngstyle = 'orange';
  size = '20px';
  constructor() { }
  ngOnInit(): void {
  }
  changeSize(size) {
    this.size = size + 'px';
  }
}
