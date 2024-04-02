import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SignotpComponent } from './signotp/signotp.component';

export const routes: Routes = [
    {
        path: 'signup',
        component: SignupComponent,
        title: 'Onebitsoft - Signup'
    },
    {
        path: 'signotp',
        component: SignotpComponent,
        title: 'Onebitsoft - OTP verification'
    }
];
