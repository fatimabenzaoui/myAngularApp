import { Component, OnInit, Input } from '@angular/core';
import { Personne } from './../../Model/Personne';

@Component({
  selector: 'app-detail-contact',
  templateUrl: './detail-contact.component.html',
  styleUrls: ['./detail-contact.component.css']
})
export class DetailContactComponent implements OnInit {
  @Input() personne: Personne;
  constructor() {}
  ngOnInit(): void {}
}
