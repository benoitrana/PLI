import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnonceComponent }      from './annonce.component';
import { FooterComponent }  from './footer.component';
import { HeaderComponent }  from './header.component';
import { SliderComponent }  from './slider.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/header',
    pathMatch: 'full'
  },
  {
    path: 'header',
    component: HeaderComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);