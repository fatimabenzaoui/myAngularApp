import { ContactService } from './../contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from './../../Model/Personne';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {
  personne: Personne;
  constructor(
    private activatedRoute: ActivatedRoute,
    private contactService: ContactService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.contactService.getPersonneById(params.id).subscribe((personne) => {
        this.personne = personne;
      });
    });
  }
  updateContact() {
    this.contactService.updateContact(this.personne).subscribe(
      (response) => {
        const link = ['contactapp'];
        this.router.navigate(link);
      }
    );
  }
  goToContactApp() {
    const link = ['contactapp'];
    this.router.navigate(link);
  }
}
