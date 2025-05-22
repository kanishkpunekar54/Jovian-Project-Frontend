import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { WelcomeComponent } from './features/welcome/welcome.component';

export const routes: Routes = [
    {path:'',component: WelcomeComponent},
    { path: 'login', component: LoginComponent }
];
