import { Router } from '@angular/router';
import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
  errorMessage = '';
  constructor(
    private contactService: ContactService,
    private router: Router
  ) {}
  ngOnInit(): void {}
  addContact(addForm: NgForm) {
    this.contactService.addContact(addForm.value).subscribe(
      (response) => {
        const link = ['contactapp'];
        this.router.navigate(link);
      },
      (error) => {
        this.errorMessage = `Problème de connexion au serveur`;
        console.log(error);
      }
    );
  }
  goToContactApp() {
    const link = ['contactapp'];
    this.router.navigate(link);
  }
}

// OLD VERSION (FRONT) 
  // addContact(addForm: NgForm) {
  //   console.log(addForm);
  //   const link = ['contactapp'];
  //   this.contactService.addContact(addForm.value);
  //   this.router.navigate(link);
  // }
