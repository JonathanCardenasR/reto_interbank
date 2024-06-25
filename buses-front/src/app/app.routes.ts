import { Routes } from '@angular/router';
import { LoginComponent } from './ui/login/login.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent,
    },{
        path: 'dashboard',
        loadComponent: () => import('./ui/dashboard/dashboard.component').then(m => m.DashboardComponent),
    }
];
