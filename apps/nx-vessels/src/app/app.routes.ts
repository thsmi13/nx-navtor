import { Route } from '@angular/router';
import { Vessels } from '@nx-navtor/vessels';
import { Emissions } from '@nx-navtor/emissions';

export const appRoutes: Route[] = [
  { path: 'vessels', component: Vessels },
  { path: 'emissions', component: Emissions },
  { path: '', redirectTo: 'vessels', pathMatch: 'full' },
];
