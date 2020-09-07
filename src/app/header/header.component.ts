import { AuthentificationService } from './../authentification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  visibility = false;
  constructor(
    public authentificationService: AuthentificationService
  ) {}
  ngOnInit(): void {}
  show() {
    this.visibility = !this.visibility;
  }
  logout() {
    this.authentificationService.logout();
  }
}
