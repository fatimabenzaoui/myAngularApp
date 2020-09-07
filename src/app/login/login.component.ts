import { Router } from '@angular/router';
import { AuthentificationService } from './../authentification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  message = '';
  constructor(
    private authentificationService: AuthentificationService,
    private router: Router
  ){}
  ngOnInit(): void {}
  login(credentials) {
      this.authentificationService.login(credentials).subscribe(
        (response: any) => {        
          const token = response.id;
          const link = ['contactapp'];
          localStorage.setItem('token', token);
          this.router.navigate(link);
        },
        (error) => {
          console.log('Erreur' + error);
        }
      );
  }
}
