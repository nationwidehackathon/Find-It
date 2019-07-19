// routerConfig.ts

import { Routes } from '@angular/router';
import { ResultComponent } from './result/result.component';
import { AppComponent } from './app.component';
export const appRoutes: Routes = [
  { path: 'home',component: AppComponent},
  { path: 'result',component: ResultComponent},
  { path: '', redirectTo: '/home', pathMatch:'full'}
];
