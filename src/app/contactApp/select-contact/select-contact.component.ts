import { Component, OnInit } from '@angular/core';
import { Personne } from './../../Model/Personne';
import { ContactService } from './../contact.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-select-contact',
  templateUrl: './select-contact.component.html',
  styleUrls: ['./select-contact.component.css'],
})
export class SelectContactComponent implements OnInit {
  personne: Personne;
  constructor(
    private contactService: ContactService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  // Ancienne version
  // ngOnInit(): void {
  //   this.activatedRoute.params.subscribe((params) => {
  //       this.personne = this.contactService.getPersonneById(params.id);
  //     }
  //   );
  // }

  ///////////////////////////////////////////////////////New version
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.contactService.getPersonneById(params.id).subscribe((personne) => {
        this.personne = personne;
      });
    });
  }
  ///////////////////////////////////////////////////////////////////
  goToContactApp() {
    const link = ['contactapp'];
    this.router.navigate(link);
  }

  deleteContact() {
    this.contactService.deleteContact(this.personne.id).subscribe(
      (response) => {
        const link = ['contactapp'];
        this.router.navigate(link);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateContact(id: number) {
    const link = ['contactapp/update', id];
    this.router.navigate(link);
  }
}