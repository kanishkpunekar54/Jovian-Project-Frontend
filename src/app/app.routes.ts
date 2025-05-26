import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { HomeComponent } from './features/home/home.component';
import { ReportsComponent } from './features/reports/reports.component';
import { ProfileComponent } from './features/profile/profile.component';
import { SettingsComponent } from './features/settings/settings.component';
import { ShellComponent } from './layout/shell.component';
import { DASTComponent } from './features/dast/dast.component';
import { SCAComponent } from './features/sca/sca.component';
import { ThreatModlingComponent } from './features/threat-modling/threat-modling.component';
import { SASTComponent } from './features/sast/sast.component';

export const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'login', component: LoginComponent },
    {
        path: '',
        component: ShellComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'settings', component: SettingsComponent },
            { path: 'profile', component: ProfileComponent },
            { path: ':id/report', component: ReportsComponent },
            { path: ':id/DAST', component: DASTComponent },
            { path: ':id/SAST', component: SASTComponent },
            { path: ':id/threat-modling', component: ThreatModlingComponent },
            { path: ':id/SCA', component: SCAComponent },
        ]
    }
];
