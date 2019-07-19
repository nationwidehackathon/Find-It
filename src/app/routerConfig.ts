// routerConfig.ts

import { Routes } from '@angular/router';
import { ResultComponent } from './result/result.component';
import { HomeComponent } from './home/home.component';
export const appRoutes: Routes = [
  { path: 'home',component: HomeComponent},
  { path: 'result',component: ResultComponent},
  { path: '', redirectTo: '/home', pathMatch:'full'}
];
