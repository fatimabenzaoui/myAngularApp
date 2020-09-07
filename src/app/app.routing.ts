import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BasesComponent } from './bases/bases.component';
import { ExemplesComponent } from './exemples/exemples.component';
import { ContactComponent } from './contactApp/contact/contact.component';
import { AddContactComponent } from './contactApp/add-contact/add-contact.component';
import { SelectContactComponent } from './contactApp/select-contact/select-contact.component';
import { UpdateContactComponent } from './contactApp/update-contact/update-contact.component';
import { LoginComponent } from './login/login.component';
import { LogoutGuard } from './guard/logout.guard';
import { LoginGuard } from './guard/login.guard';
import { ErrorComponent } from './error/error.component';

const APP_ROUTING: Routes = [
  { path: 'contactapp', canActivate: [LoginGuard], children: [
    { path: '', component: ContactComponent },
    { path: 'add', component: AddContactComponent, canActivate: [LoginGuard] },
    { path: 'update/:id', component: UpdateContactComponent },
    { path: ':id', component: SelectContactComponent }
  ] },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'bases', component: BasesComponent },
  { path: 'exemples', component: ExemplesComponent },
  { path: 'login', component: LoginComponent, canActivate: [LogoutGuard] },
  { path: '**', component: ErrorComponent },
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);