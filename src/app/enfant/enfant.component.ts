import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit {
  @Input() enfantProperty;
  @Output() sendRequestToData = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(
      'Contenu variable de mon parent : ', 
      this.enfantProperty
    );
  }

  sendEvent() {
    this.sendRequestToData.emit(
      ` message du composant enfant `
    );
  }

}
