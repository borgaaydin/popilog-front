import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/index';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':cat_name', component: HomeComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
