import { Component, OnInit } from '@angular/core';
import { Personne } from './../../Model/Personne';
import { ContactService } from './../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  personnes: Personne[];
  detailContact: Personne;
  personne: Personne;
  constructor(
    private contactService: ContactService
  ) {}
  ngOnInit(): void {
    // (function () {
      this.contactService.getPersonnes().subscribe(
        (personnes) => {
          this.personnes = personnes;
        },
        (error) => {
          alert('Problème d\'accès à l\'api. Les données affichées sont des fausses personnes');
          console.log(error);
          this.personnes = this.contactService.getFakePersonnes();
        }
      );
    // });  
  }
  moreDetails(personne) {
    this.detailContact = personne;
  }
}

// OLD VERSION (FRONT)
// ngOnInit(): void {
//   this.personnes = this.contactService.getPersonnes();
// }
