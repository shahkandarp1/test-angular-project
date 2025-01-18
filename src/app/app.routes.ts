import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ApiCallComponent } from './api-call/api-call.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'api', component: ApiCallComponent },

];
