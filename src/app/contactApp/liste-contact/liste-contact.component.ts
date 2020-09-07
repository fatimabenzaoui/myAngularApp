import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from './../../Model/Personne';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-contact',
  templateUrl: './liste-contact.component.html',
  styleUrls: ['./liste-contact.component.css']
})
export class ListeContactComponent implements OnInit {
  @Input() personnes: Personne[];
  @Output() detailContact = new EventEmitter();
  constructor(
    private router: Router
  ) {}
  ngOnInit(): void {}
  moreDetails(detailContact) {
    this.detailContact.emit(detailContact);
  }
  goToAddContact() {
    const link = ['contactapp/add'];
    this.router.navigate(link);
  }
}
