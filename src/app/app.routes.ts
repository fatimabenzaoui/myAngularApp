import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BasesComponent } from './bases/bases.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'bases', component: BasesComponent },
  { path: '**', component: ErrorComponent },
];

export const AppRoutes = RouterModule.forRoot(routes);
