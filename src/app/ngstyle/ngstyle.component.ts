import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {

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
