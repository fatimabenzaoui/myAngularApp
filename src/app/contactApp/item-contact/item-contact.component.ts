import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from './../../Model/Personne';
import { Router, ActivatedRoute } from '@angular/router';
import { DefaultImagePipe } from './../default-image.pipe';
import { ContactService } from './../contact.service';

@Component({
  selector: 'app-item-contact',
  templateUrl: './item-contact.component.html',
  styleUrls: ['./item-contact.component.css'],
})
export class ItemContactComponent implements OnInit {
  @Input() personne: Personne;
  @Output() detailContact = new EventEmitter();
  defaultImage: DefaultImagePipe;
  show = false;
  constructor(
    private router: Router, 
    private contactService: ContactService,    
    // Essai methode delete sur la même page
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    // Essai methode delete sur la même page
    this.activatedRoute.params.subscribe((params) => {
      this.contactService.getPersonneById(params.id).subscribe((personne) => {
        this.personne = personne;
      });
    });
  }
  moreDetails() {
    this.detailContact.emit(this.personne);
  }
  selectContact() {
    const link = ['contactapp', this.personne.id];
    this.router.navigate(link);
  }
  // Essai du update sur la même page
  updateContact() {
    const link = ['contactapp/update', this.personne.id];
    this.router.navigate(link);
  }
  // Essai methode delete sur la même page
  deleteContact() {
    this.contactService.deleteContact(this.personne.id).subscribe(
      (response) => {
        this.show = !this.show;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}